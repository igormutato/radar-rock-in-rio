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

## Listening YouScan (sem API — via export no repo)

O plano do YouScan da agência NÃO tem acesso à API. O dado entra por arquivo de export depositado no repositório:

- Convenção: arquivo `youscan.xlsx` ou `youscan.csv` (ou `youscan-*.xlsx`) na RAIZ do branch `gh-pages` (export de menções do YouScan feito pela interface).
- Na atualização diária: listar a raiz (`GET .../contents/?ref=gh-pages`) e checar a data do último commit do arquivo (`GET .../commits?path=youscan.xlsx&sha=gh-pages&per_page=1`). Se foi atualizado nas últimas ~48h: baixar (base64), parsear (openpyxl/csv) e agregar — volume de menções, % de sentimento, principais fontes/hashtags e top posts por engajamento.
- Usar esses números na aba Trends e, se relevante, no pulso — sempre citando a fonte como "YouScan (export de DD/MM)". Sem arquivo recente, seguir sem listening quantitativo; NUNCA inventar números.
- Como o time alimenta (qualquer uma das vias): (1) upload direto em github.com/igormutato/radar-rock-in-rio (branch gh-pages → Add file → Upload files); (2) mandar o arquivo no chat do Claude, que ele commita; (3) salvar na pasta conectada "Radar Rock In Rio" e pedir ao Claude para subir.

## Calendário

- Até 3/set: fase pré-evento (esquenta, logística, expectativa).
- 4–13/set: fase festival (repercussão da véspera é o item mais importante do dia; 8–10/set são dias "entre semanas", com repercussão acumulada e prévia da semana 2).
- Após 13/set: edições de balanço. Em ~15/set, fazer a edição final (balanço geral + aprendizados p/ Ipiranga) e desativar a tarefa agendada (`list_triggers` → `update_trigger enabled:false` na task "Radar Rock in Rio — atualização diária 9h").
