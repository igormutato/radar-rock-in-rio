# Radar Rock in Rio 2026 · Ipiranga

Dashboard de monitoramento diário do Rock in Rio Brasil 2026 (4–7 e 11–13/set, Cidade do Rock/RJ) para a equipe que atende a Ipiranga, patrocinadora do festival. Uso interno de agência.

**Site:** https://izamutato.github.io/radar-rock-in-rio/

## Abas

1. **Notícias** — pulso do dia, principais matérias e seção dedicada a Ipiranga & marcas patrocinadoras
2. **Shows & Horários** — repercussão dia a dia dos shows + grade completa de horários por palco
3. **Trends** — leitura diária de X/Twitter, TikTok, Instagram e sons em alta
4. **Direcionais Ipiranga** — leitura estratégica, direcionais e acionáveis do dia, com histórico completo das edições anteriores

## Estrutura

- `index.html` — template e renderização (não muda no dia a dia)
- `data.js` — todos os dados (`window.RADAR`); é o único arquivo alterado na atualização diária
- `RUNBOOK.md` — instruções completas da rotina de atualização

Atualizado automaticamente todos os dias por volta das 9h (BRT).
