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

## Aba Trends — fontes e método (a partir de 03/09)

Foco da aba: **o que está viralizando DIRETAMENTE ligado ao evento**. Estrutura do campo `trends` da edição:
`{ viral:[{t,s,u,src,metric}], sources:[{id,icon,name,status:"ok"|"partial"|"off",statusLabel,items:[{t,s,u}],note}], note }`
O bloco `viral` é o topo da aba (o foco); `sources` são as colunas com selo de status. Edições antigas usam o schema legado (x/tiktok/instagram/sounds) e continuam renderizando.

Fontes, na ordem de coleta diária:

1. **Google Trends Brasil — FUNCIONA.** `WebFetch https://trends.google.com/trending/rss?geo=BR` devolve o ranking do dia com volume de buscas e manchetes. Verificar se algum termo do festival/artista/"Cidade do Rock" entrou no ranking — a entrada (ou ausência) é o próprio insight. Não usar a UI do trends.google.com (JS).
2. **TikTok — páginas públicas de hashtag.** `WebFetch https://www.tiktok.com/tag/rockinrio` (funciona; 5,7 mi views em 03/09 = linha de base). Registrar o volume a cada dia para mostrar a curva. Atenção: algumas variações (`/tag/rockinrio2026`) e páginas `/discover/` são bloqueadas por robots.txt — tentar e seguir sem elas se falhar. **NÃO usar o TikTok Creative Center** como fonte (decisão do cliente em 03/09).

**Fontes descontinuadas (não reintroduzir):** trends24.in / Trending Topics do X e a coluna de Instagram — removidas a pedido do cliente em 03/09.

Regras: nenhum número estimado; se uma fonte falhar, publicar a coluna com `status:"off"` e a explicação — o dashboard mostra o selo, e isso é informação útil, não erro. O que viralizar e tocar a marca (brinde, fila, KMV, AmPm) deve virar item no bloco `viral` E alimentar os direcionais.

## Edição duplicada (guarda)

Antes de inserir a nova edição, se `editions[0].dateISO` já for a data de hoje (ex.: edição feita manualmente mais cedo), SUBSTITUIR essa edição pela nova (mesclando o que a manual tiver de melhor — em especial o bloco `youscan`) em vez de criar duplicata do mesmo dia.

## Calendário

- Até 3/set: fase pré-evento (esquenta, logística, expectativa).
- 4–13/set: fase festival (repercussão da véspera é o item mais importante do dia; 8–10/set são dias "entre semanas", com repercussão acumulada e prévia da semana 2).
- Após 13/set: edições de balanço. Em ~15/set, fazer a edição final (balanço geral + aprendizados p/ Ipiranga) e desativar a tarefa agendada (`list_triggers` → `update_trigger enabled:false` na task "Radar Rock in Rio — atualização diária 9h").

## Abas do radar (estado em 03/09/2026)

`Notícias` · `Shows & Horários` · `Trends` · `Embaixadores` · `Direcionais Ipiranga`.

- As abas **Listening YouScan** e **Listening @Ipiranga** foram REMOVIDAS a pedido do cliente em 03/09. Não recriar; não coletar exports do YouScan nem comentários dos canais próprios para o radar.
- A aba **Influência** foi renomeada para **Embaixadores** (campo `influencia` na edição segue com o mesmo nome interno).

## Aba "Embaixadores" — creators do planejamento 2026

Perfis acompanhados: @jeffmattias · @divasuburbana · @cassialourencogomes · @camilatrianda · @vittorfernando.
Janela: publicações sobre Rock in Rio a partir de 01/09. Campo `influencia` da edição:
`{window, updatedFrom, headline, creators:[{handle,nome,status,posts,citouIpiranga,resumo}], posts:[{date,handle,tipo,tema,likes,coments,shares,marcas[],collab,url}], alerts:[{tone,t,s}], note}`

Coleta via Claude para Chrome (os perfis bloqueiam fetch automatizado): `list_connected_browsers` → **perguntar ao usuário qual navegador** → `select_browser`. Truque eficiente: `find` no grid do perfil pedindo "grid post images with their full alt-text description including date and caption" — o alt do Instagram traz legenda + data + perfis marcados numa só chamada. Cada post traz `marcas` = perfis marcados na legenda + marcas nomeadas no texto; `collab` quando o href do grid aponta para outro perfil.
