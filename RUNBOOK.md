# RUNBOOK — Atualização diária do Radar Rock in Rio 2026

Rotina executada todo dia ~9h BRT por uma sessão agendada do Claude. Este arquivo é a referência canônica do processo (sem segredos — o token de escrita vive na configuração da tarefa agendada).

## Princípios

- **Só o `data.js` muda.** `index.html` não é tocado, a menos que esteja quebrado.
- **Histórico é sagrado:** a nova edição entra no INÍCIO de `RADAR.editions[]`; nunca apagar nem reescrever edições antigas (a aba 4 monta o histórico a partir delas).
- **Nada de número inventado:** todo dado tem fonte + link + data. Trends sem dado quantitativo confiável = leitura editorial, com a nota `trends.note` dizendo isso.
- **Tom:** PT-BR, direto, tático (uso interno de agência). Direcionais falam de experiência/jornada da marca, nunca de mérito musical do line-up.

## Passos

1. **Baixar o `data.js` atual** (traz também o `sha` p/ o update). O branch publicado pelo GitHub Pages é **`gh-pages`** — todo o fluxo diário acontece nele:
   `GET https://api.github.com/repos/igormutato/radar-rock-in-rio/contents/data.js?ref=gh-pages` (Authorization: Bearer TOKEN; campo `content` em base64). No sandbox do Claude, usar `curl --noproxy '*'` — o proxy da sessão bloqueia chamadas a repos não vinculados.
2. **Pesquisar o dia** (WebSearch/WebFetch):
   - Notícias das últimas 24h sobre o festival (imprensa musical + trade de marketing) e sobre Ipiranga/patrocinadores no RiR.
   - **Durante o festival (4–7 e 11–13/set):** repercussão da noite anterior — melhores shows, momentos virais, críticas (g1, Rolling Stone, Terra, Billboard, Splash/UOL, Popline) → preencher `shows.reperc`.
   - Trends: trending topics do X, hashtags/vídeos TikTok e Instagram, sons em alta (buscas + páginas públicas de discover; só citar números com fonte).
3. **Montar a nova edição** copiando o formato da edição anterior (`pulse`, `news`, `ipiranga`, `shows`, `trends`, `direcionais`, `sources`). Direcionais: 3–5 direcionais + 3–5 acionáveis derivados das outras abas, sempre novos (não repetir o dia anterior sem motivo).
4. **Atualizar `meta`:** `version` +1, `updatedAt`, `updatedISO`.
5. **Corrigir `schedule`** apenas se a organização anunciou mudança de grade (com fonte).
6. **Publicar:**
   `PUT https://api.github.com/repos/igormutato/radar-rock-in-rio/contents/data.js` com `{message, content(base64), sha, "branch":"gh-pages"}`.
7. **Verificar** https://igormutato.github.io/radar-rock-in-rio/ após ~1–2 min (build do Pages) — conferir data/versão (github.io não responde ao curl do sandbox; usar WebFetch).

## Listening YouScan (sem API — via exports no repo)

O plano do YouScan da agência NÃO tem acesso à API. O dado entra por DOIS exports depositados na raiz do branch `gh-pages`:

- **`youscan-noticias.xlsx`** — menções de IMPRENSA com a busca "Rock in Rio" (leitura do que está acontecendo: volume/dia, sentimento, veículos, temas).
- **`youscan-marca.xlsx`** — menções SOCIAIS da Ipiranga no contexto RiR (busca: Ipiranga + "Rock in Rio"/rockinrio/pochete/leque/RIR, "stand/Estande Ipiranga", "Bar AmPm", "Recarga KMV", "Espaço Ipiranga"). Colunas de etiquetas (App KMV, Parada Completa, AmPm etc.) são as chaves de tema; "Noivado" = engajamento; "Alcance potencial" = reach.
- Na atualização diária: checar a data do último commit de cada arquivo (`GET .../commits?path=<arquivo>&sha=gh-pages&per_page=1`). Se atualizado nas últimas ~48h: baixar, parsear (pandas/openpyxl) e agregar. Preencher o bloco `youscan` da edição (schema: ver edição de 03/09 no data.js — period, updatedFrom, news{label,total,peak,sentiment,outlets,bullets[]}, brand{label,total,engTop,sources,themes,bullets[]}, topPosts[{d,src,eng,t,s}], alerts[{t,s}], note) — a aba "Listening YouScan" do site renderiza esse bloco. A varredura de imprensa (aba Notícias) fica SEPARADA do listening.
- ATENÇÃO ao dado: em 03/09 a coluna Sentimento da base de marca veio 100% "Negativo" (configuração quebrada no YouScan) — validar sempre; se estiver assim, ler o tom manualmente pelo conteúdo e sinalizar em alerts. Sem arquivo recente, deixar o bloco `youscan` de fora (a aba mostra estado vazio); NUNCA inventar números.
- Tudo do listening deve alimentar a análise de impacto para a marca nos DIRECIONAIS (aprendizados e insights acionáveis).
- Como o time alimenta (qualquer via): (1) upload direto em github.com/igormutato/radar-rock-in-rio (branch gh-pages → Add file → Upload files) com os nomes acima; (2) mandar os arquivos no chat do Claude, que ele commita; (3) salvar na pasta conectada "Radar Rock In Rio" e pedir ao Claude para subir.

## Aba Trends — fontes e método (a partir de 03/09)

Foco da aba: **o que está viralizando DIRETAMENTE ligado ao evento**. Estrutura do campo `trends` da edição:
`{ viral:[{t,s,u,src,metric}], sources:[{id,icon,name,status:"ok"|"partial"|"off",statusLabel,items:[{t,s,u}],note}], note }`
O bloco `viral` é o topo da aba (o foco); `sources` são as colunas com selo de status. Edições antigas usam o schema legado (x/tiktok/instagram/sounds) e continuam renderizando.

Fontes, na ordem de coleta diária:

1. **Google Trends Brasil — FUNCIONA.** `WebFetch https://trends.google.com/trending/rss?geo=BR` devolve o ranking do dia com volume de buscas e manchetes. Verificar se algum termo do festival/artista/"Cidade do Rock" entrou no ranking — a entrada (ou ausência) é o próprio insight. Não usar a UI do trends.google.com (JS).
2. **X / Trending Topics — INSTÁVEL.** `trends24.in/brazil` devolveu snapshot defasado de 2024 na coleta automática (#Paris2024, #OpeningCeremony) em 03/09. NÃO publicar o que vier de lá sem conferir se as datas batem com hoje; se vier defasado, marcar a fonte com `status:"off"` e usar a base X do YouScan (x.com é ~50% das menções da base de marca) como substituto. Se um dia vier fresco, marcar `ok` e listar os TTs relacionados ao evento.
3. **TikTok — PARCIAL.** O Creative Center (`ads.tiktok.com/creative/...trends/hashtag`) exige login: tanto a página quanto a API `creative_radar_api` respondem "no permission". Usar as páginas públicas de hashtag como proxy de volume: `WebFetch https://www.tiktok.com/tag/rockinrio` (funciona; 5,7 mi views em 03/09 = linha de base) — atenção: algumas variações (`/tag/rockinrio2026`) e páginas `/discover/` são bloqueadas por robots.txt, então tentar e seguir sem elas se falhar. Registrar o volume da hashtag a cada dia para mostrar a curva.
4. **Instagram / conversa da marca — via YouScan** (aba Listening), não por scraping.

Regras: nenhum número estimado; se uma fonte falhar, publicar a coluna com `status:"off"` e a explicação — o dashboard mostra o selo, e isso é informação útil, não erro. O que viralizar e tocar a marca (brinde, fila, KMV, AmPm) deve virar item no bloco `viral` E alimentar os direcionais.

**Inoreader:** não está conectado a esta sessão do Claude (o conector não aparece na lista). Se for conectado no futuro, ele serve para agregar FEEDS RSS (Google Trends RSS, portais de notícia) — não resolve trends24 nem TikTok Creative Center, que não têm RSS.

## Aba "Listening @Ipiranga" — canais proprietários (a partir de 03/09)

Analisa os posts sobre Rock in Rio publicados em **instagram.com/ipiranga** e **tiktok.com/@ipiranga** (janela: 31/08 em diante) e os comentários que eles recebem. Campo `owned` da edição:
`{window, updatedFrom, ims_formula, ims_geral, pol:{POSITIVO,NEUTRO,NEGATIVO}, tags:[[tag,count]], posts:[{pid,date,rede,tipo,tema,collab,likes,coments,url,amostra,pos,neu,neg,ims,topTags[]}], alerts:[{tone:"pos"|"neg",t,s}], note}`

### Coleta (exige o Claude para Chrome — os dois perfis bloqueiam fetch automatizado por robots.txt)
1. `list_connected_browsers` → **PERGUNTAR ao usuário qual navegador** (obrigatório pelo contrato da ferramenta) → `select_browser`.
2. Instagram: abrir `instagram.com/ipiranga/`, usar `find` para pegar os hrefs `/p/` e `/reel/` do grid. Posts com href de OUTRO perfil (`/becca.orenstein/reel/...`) são **collabs** — registrar o parceiro em `collab`.
3. Abrir cada post e `get_page_text`: a legenda, o horário relativo e, no rodapé do texto, a sequência de números = **likes, comentários, compartilhamentos**. Parar quando a data sair da janela.
4. TikTok: `tiktok.com/@ipiranga` — em 03/09 a navegação foi **recusada pela extensão** ("Navigation to this domain is not allowed"); é preciso liberar o domínio nas permissões do Claude para Chrome. Enquanto não liberar, registrar no `note` que o TikTok está pendente.

### Comentários (ExportComments — o conector não está habilitado; via navegador)
5. Para cada post novo/atualizado, rodar o export em exportcomments.com pelo navegador do usuário e baixar o `.xlsx`. Os arquivos caem na pasta de Downloads da máquina — para trazê-los, é preciso `device_request_folder_access` nessa pasta (ou o usuário move para a pasta conectada "Radar Rock In Rio").
6. **Incremental:** baixar `owned-comentarios-classificado.xlsx` da raiz do gh-pages (base acumulada). Deduplicar por (`link do post` + `Username` + `Comment`) e processar **só os comentários novos**, anexando à base.
7. Pipeline (skill `exportcomments-unifica`):
   `python scripts/unifica.py <novos.xlsx> --out /tmp/base.xlsx --schema base-listening`
   `python scripts/classifica.py /tmp/base.xlsx --out /tmp/classificado.xlsx`
   Depois **revisar os casos de fronteira**: o classificador por regras gera falsos NEGATIVO em frases que contêm "não" mas são elogios ("Foi demais! ... não tem jeito", "não tenho talento mas levei o ingresso") — em 03/09, 4 dos 6 negativos eram falsos. Também reclassificar cobranças de resultado de promoção como `Dúvidas` + `Sobre a Promoção` (o classificador manda para `Conversas/Sem contexto`).
8. Republicar a base acumulada em `owned-comentarios-classificado.xlsx` (gh-pages) e recalcular os agregados do bloco `owned`.

### Métricas
- **Saudabilidade (IMS)** = (POSITIVO + NEUTRO) ÷ total classificado. Semáforo: verde ≥ 90%, âmbar 75–90%, vermelho < 75%. ⚠️ Fórmula a confirmar com o cliente.
- Tagueamento sempre na **taxonomia Ipiranga** (28 tags, ver `references/arvore-de-tags.md` da skill), contextualizado ao tema do post e à existência de collab.
- Cores de polaridade (validadas para daltonismo): POSITIVO `#2E9E5B` · NEUTRO `#C77E00` · NEGATIVO `#D93025`.

## Edição duplicada (guarda)

Antes de inserir a nova edição, se `editions[0].dateISO` já for a data de hoje (ex.: edição feita manualmente mais cedo), SUBSTITUIR essa edição pela nova (mesclando o que a manual tiver de melhor — em especial o bloco `youscan`) em vez de criar duplicata do mesmo dia.

## Calendário

- Até 3/set: fase pré-evento (esquenta, logística, expectativa).
- 4–13/set: fase festival (repercussão da véspera é o item mais importante do dia; 8–10/set são dias "entre semanas", com repercussão acumulada e prévia da semana 2).
- Após 13/set: edições de balanço. Em ~15/set, fazer a edição final (balanço geral + aprendizados p/ Ipiranga) e desativar a tarefa agendada (`list_triggers` → `update_trigger enabled:false` na task "Radar Rock in Rio — atualização diária 9h").
