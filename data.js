/* =====================================================================
   RADAR ROCK IN RIO 2026 · IPIRANGA — DADOS
   ---------------------------------------------------------------------
   Este arquivo é o ÚNICO que muda na atualização diária.
   Estrutura:
     RADAR.meta      → versão, timestamps
     RADAR.schedule  → grade de horários (estática, corrigir se a org mudar)
     RADAR.editions  → uma entrada POR DIA (a mais recente primeiro).
                       A edição [0] alimenta as abas; as demais viram histórico.
   Regras para o update diário:
     - NUNCA apagar edições antigas: apenas adicionar a nova no início.
     - Todo item de notícia/trend precisa de fonte + link + data.
     - Repercussão de shows: preencher shows.reperc do dia anterior.
   ===================================================================== */
window.RADAR = {
  meta: {
    version: 2,
    updatedAt: "28/08/2026, 16h45 (BRT)",
    updatedISO: "2026-08-28",
    nextUpdate: "diária, ~9h (BRT)",
    festivalStart: "2026-09-04",
    festivalDays: ["2026-09-04","2026-09-05","2026-09-06","2026-09-07","2026-09-11","2026-09-12","2026-09-13"]
  },

  /* ---------------- GRADE DE HORÁRIOS (Rolling Stone Brasil) ---------------- */
  schedule: [
    {
      id: "d1", date: "sex · 4/set", title: "Dia 1 — Noite do rock alternativo", soldOut: false,
      headliner: "Foo Fighters",
      stages: {
        "Palco Mundo": [["16h40","Nova Twins"],["19h00","The Hives"],["21h20","Rise Against"],["00h05","Foo Fighters"]],
        "Palco Sunset": [["15h30","Di Ferrero"],["17h50","Detonautas + Biquini"],["20h10","Hot Milk"],["22h45","Capital Inicial + Dado Villa-Lobos"]],
        "New Dance Order": [["21h05","Cat Dealers"],["22h30","ATKÖ"],["00h00","GIU x Carola"],["01h30","Steve Angello"]],
        "Espaço Favela": [["15h00","GBZ7N"],["16h50","Hitmaker"],["19h10","Rodrigo do CN"]],
        "Supernova": [["14h30","Chady"],["16h00","Rock in Gil + Larissa Luz"],["18h00","Venere Vai Venus"],["20h10","Diogo Defante"]],
        "Global Village": [["15h00","Giovana Moraes"],["16h50","Leela"],["19h10","Paulinho Moska"]]
      }
    },
    {
      id: "d2", date: "sáb · 5/set", title: "Dia 2 — Noite do metal", soldOut: false,
      headliner: "Avenged Sevenfold",
      stages: {
        "Palco Mundo": [["16h40","Sepultura"],["19h00","MGK"],["21h20","Bring Me The Horizon"],["00h05","Avenged Sevenfold"]],
        "Palco Sunset": [["15h30","Malvada + Day Limns"],["17h50","Black Pantera + Nervosa"],["20h10","Poppy"],["22h50","Bad Omens"]],
        "New Dance Order": [["21h05","Victor Lou"],["22h30","Camila Jun x Eli Iwasa"],["00h00","Volkoder"],["01h30","James Hype"]],
        "Espaço Favela": [["15h00","Quantum"],["16h50","Canto Cego"],["19h10","Major RD"]],
        "Supernova": [["14h30","ZeRO"],["16h00","MC Taya"],["18h00","Lvcas"],["20h10","Supercombo"]],
        "Global Village": [["15h00","Rhegia"],["16h50","Noturnall + Russell Allen"],["19h10","Korzus"]]
      }
    },
    {
      id: "d3", date: "dom · 6/set", title: "Dia 3 — Pop & hits", soldOut: true,
      headliner: "Calvin Harris",
      stages: {
        "Palco Mundo": [["16h40","Barão Vermelho (formação original) + Fernando Magalhães"],["19h00","Nelly"],["21h20","Black Eyed Peas"],["00h05","Calvin Harris"]],
        "Palco Sunset": [["15h30","Calema"],["17h50","BaianaSystem"],["20h10","Jota Quest canta Tim Maia"],["22h45","Ne-Yo"]],
        "New Dance Order": [["21h05","Sofi Tukker"],["22h30","Liu"],["00h00","Casa Bonita (Brisotti & Viot)"],["01h40","MEDUZA"]],
        "Espaço Favela": [["15h00","Budah"],["16h50","Rael"],["19h10","Xamã"]],
        "Supernova": [["14h30","O Escritório"],["16h00","Bayside Kings"],["18h00","Matanza Ritual"],["20h10","João Gordo & Asteroides Trio"]],
        "Global Village": [["15h00","Bento Gil + Flor Gil"],["16h50","Mãeana"],["19h10","Mohamed Ramadan"]]
      }
    },
    {
      id: "d4", date: "seg · 7/set (feriado)", title: "Dia 4 — Despedida de Elton John · 89 anos da Ipiranga", soldOut: false,
      headliner: "Elton John",
      ipiranga: true,
      stages: {
        "Palco Mundo": [["16h40","Luísa Sonza + Roberto Menescal"],["19h00","Jon Batiste"],["21h20","Gilberto Gil"],["00h05","Elton John"]],
        "Palco Sunset": [["15h30","Vanessa da Mata + Rubel"],["17h50","Roupa Nova + Guilherme Arantes"],["20h10","Péricles canta Motown"],["22h45","Laufey"]],
        "New Dance Order": [["21h05","Max Styler"],["22h30","Leo Janeiro & Simo Not Simon"],["00h00","Aline Rocha"],["01h30","Fatboy Slim"]],
        "Espaço Favela": [["15h00","Tiee"],["16h50","Mart'nália"],["19h10","Belo"]],
        "Supernova": [["14h30","Maui"],["16h00","Melly"],["18h00","Zeca Veloso"],["20h10","Alee"]],
        "Global Village": [["15h00","Wanda Sá"],["16h50","Joyce Moreno, Leila Pinheiro e Fernanda Takai"],["19h10","João Bosco"]]
      }
    },
    {
      id: "d5", date: "sex · 11/set", title: "Dia 5 — K-pop day (maior encontro da América Latina)", soldOut: true,
      headliner: "Stray Kids",
      stages: {
        "Palco Mundo": [["16h40","NEXZ"],["19h00","HWASA"],["21h20","Alok (Keep Art Human)"],["00h05","Stray Kids"]],
        "Palco Sunset": [["15h30","Jota.pê + Luedji Luna + Zaynara"],["17h50","Os Garotin + Duquesa"],["20h10","PJ Morton"],["22h45","Jamiroquai"]],
        "New Dance Order": [["21h05","ANNA"],["22h00","DEPARTAMENTO"],["00h00","Omiki"],["01h00","Neelix & Vegas"]],
        "Espaço Favela": [["15h00","Caio Luccas"],["16h50","Puterrier & MC Carol"],["19h10","MC Cabelinho + TZ da Coronel"]],
        "Supernova": [["14h30","Muse Maya"],["16h00","Isa Buzzi"],["18h00","Ananda"],["20h10","NandaTsunami"]],
        "Global Village": [["15h00","Lambateria + Félix Robatto"],["16h50","Rio Bronx"],["19h10","Soulidified"]]
      }
    },
    {
      id: "d6", date: "sáb · 12/set", title: "Dia 6 — Pop global & Brasil", soldOut: true,
      headliner: "Maroon 5",
      stages: {
        "Palco Mundo": [["16h40","Pedro Sampaio"],["19h00","J Balvin"],["21h20","Demi Lovato"],["00h05","Maroon 5"]],
        "Palco Sunset": [["15h30","Criolo + Amaro Freitas + Dino D'Santiago"],["17h50","Gilsons + Daniela Mercury + Olodum"],["20h10","João Gomes + Orquestra Brasileira"],["22h45","Mumford & Sons"]],
        "New Dance Order": [["21h05","Bhaskar"],["22h00","Adam Sellouk"],["23h00","Gabe"],["00h00","Alok & Family (Ekanta & Swarup)"],["01h30","Alok (Rave The World)"]],
        "Espaço Favela": [["15h00","Soul de Brasileiro"],["16h50","Priscila Senna"],["19h10","Timbalada"]],
        "Supernova": [["14h30","Celo Dut"],["16h00","Yago Oproprio"],["18h00","Milo J"],["20h10","Delacruz"]],
        "Global Village": [["15h00","Badi Assad"],["16h50","Hamilton de Holanda"],["19h10","Mestrinho"]]
      }
    },
    {
      id: "d7", date: "dom · 13/set", title: "Dia 7 — Encerramento", soldOut: false,
      headliner: "Twenty One Pilots",
      stages: {
        "Palco Mundo": [["17h00","Ivete Sangalo"],["19h10","Lola Young"],["21h35","Halsey"],["00h05","Twenty One Pilots"]],
        "Palco Sunset": [["15h50","Carol Biazin + Joyce Alane"],["18h05","Joelma + Viviane Batidão"],["20h20","Marina Sena + Céu"],["22h55","Zara Larsson"]],
        "New Dance Order": [["21h05","Dawn Patrol (Maz, Antdot, Riascode, Bakka)"],["22h30","Illusionize"],["00h00","Roddy Lima"],["01h30","John Summit"]],
        "Espaço Favela": [["15h00","Marvvila"],["16h50","Suel"],["19h10","DENNIS"]],
        "Supernova": [["14h30","AR Baby"],["16h00","Bruna Black"],["18h00","Sant"],["20h10","Lourena"]],
        "Global Village": [["15h00","Kynnie"],["16h50","Lucy Alves"],["19h10","Haley Smalls"]]
      }
    }
  ],

  /* ---------------- EDIÇÕES DIÁRIAS (mais recente primeiro) ---------------- */
  editions: [
    {
      date: "28/08/2026", dateISO: "2026-08-28", weekday: "sexta-feira", edition: 2,
      phase: "pré-evento",

      pulse: [
        "⏳ <b>Faltam 7 dias</b>: a Cidade do Rock abre na próxima sexta (4/set), com Foo Fighters puxando a noite do rock alternativo.",
        "🎟️ <b>Alerta de ingresso</b>: 6, 11 e 12/set esgotados e a organização sinaliza \"últimos ingressos\" para 7/set — justamente o dia da despedida de Elton John e dos 89 anos da Ipiranga. 4, 5 e 13/set seguem à venda (R$ 870 / meia R$ 435).",
        "📲 <b>A pauta virou operação</b>: ingresso 100% digital no app Quentro (print não passa na catraca), metrô 24h no Jardim Oceânico e BRT Expresso a R$ 29 — a semana T-7 é dominada por conteúdo de utilidade."
      ],

      news: [
        { t: "\"Últimos ingressos\" para 7/set — o dia de Elton John (e da Ipiranga) é o próximo a esgotar", src: "Igor Miranda", when: "28/ago",
          s: "Levantamento desta sexta aponta o 7/set na reta final de vendas (R$ 870 inteira / R$ 435 meia, máx. 4 por comprador, Ticketmaster). Depois da venda extraordinária de 6/ago, os dias voltaram a esgotar um a um — o feriado com Elton + Gil deve ser o próximo \"sold out\".",
          u: "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/" },
        { t: "Balanço de ingressos: 6, 11 e 12/set esgotados; quatro dias seguiam à venda", src: "O Reporter", when: "21/ago",
          s: "Calvin Harris (6), Stray Kids (11) e Maroon 5 (12) já não têm entradas. Restavam 4/set (Foo Fighters), 5/set (Avenged Sevenfold), 7/set (Elton John) e 13/set (Twenty One Pilots). A grade da aba Shows reflete o status atualizado.",
          u: "https://oreporter.com/rock-in-rio/rock-in-rio-2026-ingressos-dias-disponiveis" },
        { t: "Guia oficial da reta final: ingresso só no app Quentro, lockers com USB e The Flight com 756 fogos", src: "Assessoria RiR / Visite Brasília", when: "20/ago",
          s: "Ingresso é 100% digital via app Quentro (captura de tela e impresso não passam na catraca). Pode entrar: água até 500 ml, protetor até 100 ml, carregador portátil, até 5 itens de alimento. Novidades: lockers com recarga USB, compra antecipada de bebidas, ECCO by LightWire imersivo e The Flight com 756 disparos de fogos diurnos.",
          u: "https://visitebrasilia.com.br/noticias/faltam-15-dias-rock-in-rio-entra-na-reta-final-e-reune-tudo-o-que-o-publico-precisa-saber-para-viver-o-festival-ao-maximo" },
        { t: "Esquema de mobilidade: metrô 24h e BRT Expresso a R$ 29", src: "Semana Pop", when: "21/ago",
          s: "Estação Jardim Oceânico funciona 24h nos dias de evento (tarifa R$ 7,90); BRT Expresso Rock in Rio a R$ 29 por trecho via app Jaé (combo ida e volta metrô+BRT: R$ 44,80). Serviço Primeira Classe tem ônibus executivos com 20+ pontos de embarque na cidade.",
          u: "https://www.semanapop.com.br/rock-in-rio-2026-entra-na-reta-final-no-rio/" },
        { t: "90+ marcas, 100+ ativações e ~1 milhão de brindes na Cidade do Rock", src: "propmark", when: "18/ago",
          s: "Edição 2026 terá mais de 90 marcas, 100+ ativações, cerca de 400 produtos licenciados e 8 mil horas de experiências. Projeção de ~1 milhão de brindes distribuídos nos 7 dias — o maior 'shopping de marcas' da história do festival.",
          u: "https://propmark.com.br/mercado/rock-in-rio-2026-tera-mais-de-90-marcas-e-100-ativacoes/" },
        { t: "Estudo Kantar: o que o público quer das marcas em festival", src: "Mundo do Marketing", when: "18/ago",
          s: "Music Festival Brand Evaluator: 46% valorizam \"momentos divertidos e memoráveis\", 40% benefícios úteis e 39% experiências exclusivas. Das ativações desta edição, 36% apostam em brindes, 33% em benefícios exclusivos e 32% em experiências memoráveis.",
          u: "https://mundodomarketing.com.br/rock-in-rio-2026-amplia-disputa-das-marcas-por-atencao-e-experiencias-na-cidade-do-rock" }
      ],

      ipiranga: [
        { t: "Imprensa detalha o Espaço Ipiranga renovado", src: "Terra", when: "21/ago",
          s: "Matéria de ativações confirma: espaço \"completamente renovado, com ativações abertas ao público e uma área exclusiva para convidados\", brindes de pochete e leque e experiência fotográfica com Glambot. É a descrição pública mais recente do que o visitante vai encontrar.",
          u: "https://www.terra.com.br/diversao/musica/meu-sonora/rock/ativacoes-do-rock-in-rio-2026-confira-que-cada-patrocinador-prepara-para-a-edicao,6339eb8ee0dcb937a8aec29a1bb062c3yjw477g5.html" },
        { t: "Atenção: C&A anuncia \"primeira Glambot da Cidade do Rock\"", src: "Terra", when: "21/ago",
          s: "Na mesma matéria, a C&A (50 anos) reivindica a \"primeira Glambot na Cidade do Rock\" — sobreposição direta com a experiência fotográfica do nosso espaço. Itaú leva pavilhão de 3 andares com Listening Club e roda-gigante; Heineken estreia a linha Ultimate com tirolesa; Philco monta estande-caixa de som com game.",
          u: "https://www.terra.com.br/diversao/musica/meu-sonora/rock/ativacoes-do-rock-in-rio-2026-confira-que-cada-patrocinador-prepara-para-a-edicao,6339eb8ee0dcb937a8aec29a1bb062c3yjw477g5.html" },
        { t: "7/set caminha para esgotar de novo — e é o dia dos 89 anos", src: "Igor Miranda", when: "28/ago",
          s: "O alerta de \"últimos ingressos\" transforma o dia do aniversário no mais disputado do momento. Quando o esgotamento for anunciado, a pauta espontânea (\"dia mais desejado do festival\") se conecta direto à celebração da marca.",
          u: "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/" },
        { t: "Dado que valida a tese da jornada: benefício útil move 40% do público", src: "Mundo do Marketing (Kantar)", when: "18/ago",
          s: "O 2º maior driver de lembrança de marca em festival é oferecer benefício útil (40%) — exatamente o território da \"parada completa\" (rota, abastecimento, AmPm, apoio ao fã). Argumento pronto para sustentar a estratégia junto ao cliente.",
          u: "https://mundodomarketing.com.br/rock-in-rio-2026-amplia-disputa-das-marcas-por-atencao-e-experiencias-na-cidade-do-rock" }
      ],

      shows: {
        status: "A primeira noite é em 4/set — sexta que vem. A partir da manhã seguinte, a repercussão de cada noite (melhores shows, momentos virais, críticas da imprensa) entra aqui, dia a dia.",
        reperc: []
      },

      trends: {
        x: [
          { t: "\"Últimos ingressos\" para o dia Elton John", s: "O alerta da organização para 7/set reacende a corrida por ingresso e o FOMO da despedida — assunto dominante da conversa de festival nesta sexta.", u: "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/" },
          { t: "Modo checklist (T-7)", s: "Perfis de fã e imprensa viram guia de sobrevivência: app Quentro, o que pode levar, BRT vs carro. Logística superou line-up como pauta do pré-evento.", u: "https://visitebrasilia.com.br/noticias/faltam-15-dias-rock-in-rio-entra-na-reta-final-e-reune-tudo-o-que-o-publico-precisa-saber-para-viver-o-festival-ao-maximo" },
          { t: "STAY em mobilização pelo 11/set esgotado", s: "Caravanas e projetos de fã seguem ativos para o K-pop day — primeiro da história do festival com lightstick liberado; ingresso esgotado só aumenta a ansiedade do fandom.", u: "https://rollingstone.com.br/musica/rock-in-rio-2026-tera-o-maior-encontro-de-k-pop-da-america-latina-em-11-de-setembro/" }
        ],
        tiktok: [
          { t: "Looks segmentados por dia e artista", s: "A trend de outfit evoluiu: páginas de descoberta já separam \"outfit Calvin\", \"outfits Laufey\" e looks masculinos por data — o público está planejando visual show a show.", u: "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026" },
          { t: "Hacks de logística e \"o que levar\"", s: "Vídeos de como chegar, ingresso no app e itens permitidos ganham tração na semana da reta final — utilidade é o formato que mais cresce agora.", u: "https://www.tiktok.com/discover/rock-in-rio" },
          { t: "Esquenta dos fandoms", s: "Edits de Foo Fighters (abertura), do metal do dia 5 e fancams pré-álbum de Stray Kids alimentam a contagem regressiva.", u: "https://www.tiktok.com/discover/rock-in-rio-2026-outfits-masculino" }
        ],
        instagram: [
          { t: "Perfil oficial em modo serviço", s: "Posts de mobilidade, ingresso digital e mapa da Cidade do Rock dividem espaço com expectativa dos headliners; comentários concentram dúvidas de logística — território aberto para marcas úteis.", u: "https://www.instagram.com/rockinrio/" },
          { t: "Artistas em preparação", s: "Ensaios e teasers dos shows brasileiros (Ivete, Gil, Capital Inicial) e posts da despedida de Elton John puxam o UGC de expectativa.", u: "https://www.instagram.com/rockinrio/" }
        ],
        sounds: [
          { t: "Stray Kids — esquenta do álbum (17 faixas)", s: "Fancams e edits pré-lançamento seguem dominando o recorte K-pop rumo ao 11/set." },
          { t: "Clássicos de Elton John", s: "\"Rocket Man\", \"Your Song\" e \"Tiny Dancer\" em trilhas de vídeo de expectativa — tendência de alta até 7/set." },
          { t: "Foo Fighters e o esquenta da abertura", s: "\"Everlong\" e \"The Pretender\" aparecem em edits de contagem regressiva para a primeira noite (4/set)." }
        ],
        note: "Fase pré-evento: leitura editorial a partir de imprensa e páginas públicas das plataformas — sem dado quantitativo de plataforma disponível nesta data. Durante o festival, esta aba passa a trazer os trending topics e vídeos mais vistos de cada noite."
      },

      direcionais: {
        leitura: "A uma semana da abertura, a conversa migrou de line-up para operação (ingresso digital, mobilidade, o que levar) — e o alerta de \"últimos ingressos\" para 7/set coloca o dia da Ipiranga no centro do noticiário. O estudo Kantar dá o número que sustenta a tese da marca: benefício útil é o 2º maior driver de lembrança em festival (40%).",
        dirs: [
          { t: "Surfar o \"últimos ingressos\" de 7/set sem vender ingresso", s: "O dia do aniversário caminha para esgotar de novo. Quando o esgotamento oficial sair, a marca entra com celebração — 89 anos no dia mais disputado do festival — nunca com call de compra: quem vende é a organização; a Ipiranga capitaliza o símbolo." },
          { t: "Dominar a pauta de utilidade da semana T-7", s: "App Quentro, BRT/metrô 24h, checklist do que levar: são as dúvidas reais do público agora, e utilidade é o território validado pela Kantar (40%). Conteúdo de serviço com selo Ipiranga/AmPm nesta janela rende mais que teaser de espaço." },
          { t: "Diferenciar a Glambot antes que a C&A tome a narrativa", s: "A C&A reivindica a \"primeira Glambot da Cidade do Rock\". Amarrar a nossa experiência fotográfica ao ritual dos 89 anos (moldura/motion exclusivo do aniversário) e comunicar antes — a disputa é por quem define a referência." },
          { t: "Brinde não é diferencial, é aposta da maioria", s: "36% das 100+ ativações apostam em brinde e o festival projeta ~1 milhão de itens. Pochete e leque precisam carregar uma história — kit de jornada do fã — para não virarem commodity de sacola." },
          { t: "Tratar a semana 1 como ensaio geral do dia-pilar", s: "A abertura (4/set) é o teste de fluxo do war room antes de 7/set: monitoramento, cortes e aprovação rodando desde a primeira noite, com ajuste fino aplicado no dia do aniversário." }
        ],
        acion: [
          "Deixar pronto (texto + arte + press) o disparo de celebração para o momento em que a organização anunciar o esgotamento de 7/set — monitorar Ticketmaster e canais oficiais diariamente.",
          "Publicar até 1/set o guia Ipiranga de chegada: rota de carro, estacionamento, postos e AmPm no caminho do Parque Olímpico, integrado ao esquema oficial (metrô 24h, BRT R$ 29, app Jaé).",
          "Briefar a Glambot do espaço com assinatura visual dos 89 anos e antecipar o anúncio antes da comunicação da C&A.",
          "Transformar pochete + leque em \"kit de sobrevivência da Cidade do Rock\" no seeding com creators convidados (roteiro de uso real: fila, sol, pertences).",
          "Rodar dry run do war room na noite de 4/set com relatório-relâmpago na manhã de 5/set, calibrando o fluxo para o dia 7."
        ]
      },

      sources: [
        ["Igor Miranda — próximo dia a esgotar (28/08)", "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/"],
        ["O Reporter — status de ingressos por dia", "https://oreporter.com/rock-in-rio/rock-in-rio-2026-ingressos-dias-disponiveis"],
        ["Visite Brasília — guia oficial da reta final", "https://visitebrasilia.com.br/noticias/faltam-15-dias-rock-in-rio-entra-na-reta-final-e-reune-tudo-o-que-o-publico-precisa-saber-para-viver-o-festival-ao-maximo"],
        ["Semana Pop — mobilidade e ingresso digital", "https://www.semanapop.com.br/rock-in-rio-2026-entra-na-reta-final-no-rio/"],
        ["propmark — 90+ marcas e 100+ ativações", "https://propmark.com.br/mercado/rock-in-rio-2026-tera-mais-de-90-marcas-e-100-ativacoes/"],
        ["Mundo do Marketing — estudo Kantar", "https://mundodomarketing.com.br/rock-in-rio-2026-amplia-disputa-das-marcas-por-atencao-e-experiencias-na-cidade-do-rock"],
        ["Terra — ativações dos patrocinadores (Ipiranga, C&A, Itaú...)", "https://www.terra.com.br/diversao/musica/meu-sonora/rock/ativacoes-do-rock-in-rio-2026-confira-que-cada-patrocinador-prepara-para-a-edicao,6339eb8ee0dcb937a8aec29a1bb062c3yjw477g5.html"],
        ["Estado de Minas — venda extraordinária (contexto)", "https://www.em.com.br/cultura/2026/08/7472038-rock-in-rio-disponibiliza-novos-ingressos-para-a-edicao-de-2026.html"],
        ["Kiss FM — montagem da Cidade do Rock", "https://kissfm.com.br/rock-in-rio-2026-entra-na-reta-final-com-cidade-do-rock-em-montagem-acelerada-e-line-up-completo-confirmado/"],
        ["TikTok — looks para o Rock in Rio 2026", "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026"]
      ]
    },
    {
      date: "24/08/2026", dateISO: "2026-08-24", weekday: "segunda-feira", edition: 1,
      phase: "pré-evento",

      pulse: [
        "⏳ <b>Faltam 11 dias</b> para a Cidade do Rock abrir: 4/set começa a 1ª semana (Foo Fighters, Avenged Sevenfold, Calvin Harris e Elton John).",
        "🎟️ <b>Três dias já esgotados</b> — 6/set (Calvin Harris), 7/set (despedida de Elton John) e 12/set (Maroon 5). Venda extraordinária dos demais segue na Ticketmaster.",
        "⛽ <b>Ipiranga chega à edição com espaço repaginado</b> e faz 89 anos em 7/set, no dia mais simbólico do festival."
      ],

      news: [
        { t: "Horários de todos os shows são divulgados", src: "Rolling Stone Brasil", when: "ago/26",
          s: "Grade completa dos 7 dias já está pública: Palco Mundo abre ~16h40 e headliners sobem à 00h05. Tabelas completas na aba Shows.",
          u: "https://rollingstone.com.br/guia-show/horarios-rock-in-rio-2026/" },
        { t: "Venda extraordinária de ingressos abre a um mês do festival", src: "Billboard Brasil", when: "05/ago",
          s: "Remanescentes de todos os dias voltaram à venda em 6/ago ao meio-dia na Ticketmaster. Gramado a R$ 870 e novidade Comfort Zone a R$ 1.950 (acesso lateral ao Palco Mundo, bares e banheiros exclusivos).",
          u: "https://billboard.com.br/rock-in-rio-venda-extraordinaria-ingressos/" },
        { t: "Bastidores gigantes: 88 camarins, 260 contêineres e 10 mil pessoas no backstage", src: "Terra", when: "05/ago",
          s: "Cidade do Rock de 385 mil m² (54 Maracanãs): Palco Mundo com 2.400 m² de LED, New Dance Order com 56,5 m de boca, Global Village com 6 mil m² de cenografia e Espaço Favela com 60 casinhas.",
          u: "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-2026-bastidores-gigantes-e-vendas-extras-de-ingressos,b41fbcf480ed2e2fe46fff2f8b78178a5f1qszq5.html" },
        { t: "Despedida de Elton John no Brasil esgota o dia 7/set", src: "Jornal DR1 / Portal Lineup", when: "jul/26",
          s: "Será o último show do artista no país. Em entrevista, Elton prometeu \"compensar os fãs com um show fantástico\". Dia também tem Gilberto Gil, Jon Batiste e Fatboy Slim.",
          u: "https://jornaldr1.com.br/show-de-despedida-de-elton-john-no-rock-in-rio-tem-ingressos-esgotados-e-confirma-expectativa-historica/" },
        { t: "11/set será o maior encontro de K-pop da América Latina", src: "Rolling Stone Brasil", when: "11/jun",
          s: "Stray Kids, HWASA e NEXZ estreiam no Brasil em shows únicos. Pela 1ª vez na história do festival, lightsticks estão liberados (até 24 cm / 400 g). Fãs organizam caravanas de todo o país.",
          u: "https://rollingstone.com.br/musica/rock-in-rio-2026-tera-o-maior-encontro-de-k-pop-da-america-latina-em-11-de-setembro/" },
        { t: "O que esperar dos sete dias de festival", src: "Site da Baixada", when: "20/ago",
          s: "Balanço de véspera destaca 7 dias temáticos: rock alternativo, metal, pop/hits, MPB+Elton, K-pop, pop global e encerramento com Twenty One Pilots e Ivete Sangalo.",
          u: "https://sitedabaixada.com.br/cultura/2026/08/20/faltam-15-dias-para-o-rock-in-rio-2026-veja-o-que-esperar-dos-sete-dias-de-festival" },
        { t: "Geração Z lidera line-up com funk e K-pop", src: "SpaceMoney", when: "ago/26",
          s: "Leitura de mercado: curadoria 2026 aposta no público jovem (Pedro Sampaio no Mundo, trap no Favela, K-pop day), reacendendo o eterno debate \"isso é rock?\" nas redes.",
          u: "https://www.spacemoney.com.br/cultura-e-entretenimento/geracao-z-rock-in-rio-2026/" }
      ],

      ipiranga: [
        { t: "Ipiranga renova patrocínio e prepara Espaço Ipiranga repaginado", src: "Marcas pelo Mundo", when: "04/jun",
          s: "Parceria de 10+ edições. Na edição passada, o espaço recebeu 10 mil visitantes e distribuiu ~30 mil brindes; em 2026 vem \"completamente renovado\", com ativações abertas ao público, recepção de convidados, brindes (pouches, leques) e Glambot.",
          u: "https://marcaspelomundo.com.br/anunciantes/ipiranga-confirma-presenca-no-rock-in-rio-brasil-2026-e-prepara-acoes-para-o-publico-do-festival/" },
        { t: "89 anos da marca no meio do festival (7/set)", src: "Mundo do Marketing", when: "10/jun",
          s: "Aniversário cai no feriado e no dia mais simbólico da edição: despedida de Elton John + Gilberto Gil no Mundo. Julio Sattamini (VP de Marketing) posiciona a jornada \"a caminho das grandes experiências\" com Ipiranga, AmPm, Jet Oil e KMV.",
          u: "https://mundodomarketing.com.br/ipiranga-celebra-aniversario-de-89-anos-com-acoes-especiais-no-rock-in-rio" },
        { t: "Promoção \"Parada Completa\" encerrou em 17/ago com R$ 1 mi em prêmios", src: "Live MKT News", when: "jun–ago",
          s: "600 ingressos de gramado, picape Triton, moto 0 km, pacotes Azul Viagens, R$ 50 mil e R$ 350 mil em vale-combustível. Número da sorte a cada R$ 10 em postos, AmPm e Jet Oil; bônus para usuários KMV. Filme adaptado de \"Lá, a parada é completa\" (AlmapBBDO).",
          u: "https://livemarketing.com.br/ipiranga-renova-patrocinio-ao-rock-in-rio-e-lanca-promocao-com-ingressos-para-o-festival" },
        { t: "Cenário competitivo: 90+ marcas e 8 mil horas de experiência", src: "Promoview", when: "19/ago",
          s: "Itaú (pavilhão de 3 andares + roda-gigante), Heineken (tirolesa), Coca-Cola (palco próprio), KitKat (prédio com vista pro Mundo), Natura, TIM, iFood (montanha-russa) e estreias de Piracanjuba, Tic Tac, Philco, Venancio, Seara e Vale (ECCO). Disputa por atenção será intensa — referência para calibrar a divulgação do Espaço Ipiranga.",
          u: "https://www.promoview.com.br/ativacoes-marcas-rock-in-rio-2026/" }
      ],

      shows: {
        status: "A primeira noite é em 4/set. A partir daí, a repercussão de cada dia (melhores shows, momentos virais, críticas da imprensa) entra aqui na manhã seguinte, dia a dia.",
        reperc: []
        /* Formato durante o festival:
           reperc: [{ day:"d1", date:"4/set", headline:"...", artists:[{name:"Foo Fighters", verdict:"...", links:[...]}] }] */
      },

      trends: {
        x: [
          { t: "Despedida de Elton John", s: "Esgotamento do dia 7/set e entrevistas do artista (\"vou compensar com um show fantástico\") mantêm o assunto recorrente nos trending topics de música.", u: "https://portallineup.com.br/entrevistas/decepcionei-fas-no-brasil-e-vou-compensar-com-show-fantastico-diz-elton-john-sobre-rock-in-rio/" },
          { t: "STAY em mobilização (Stray Kids)", s: "Fandom organiza caravanas e projetos de fãs para 11/set; anúncio de álbum novo com 17 faixas às vésperas do festival turbina as menções.", u: "https://www.terra.com.br/diversao/musica/rock-in-rio/stray-kids-anuncia-album-com-17-musicas-antes-do-rock-in-rio-2026,a6d4ae94396c2934da478db5b87e6485s1i5arcn.html" },
          { t: "Debate \"cadê o rock?\"", s: "Curadoria com funk, trap e K-pop reacende a discussão geracional sobre o line-up — pauta de alto engajamento (e alto risco para marcas que opinam).", u: "https://www.spacemoney.com.br/cultura-e-entretenimento/geracao-z-rock-in-rio-2026/" }
        ],
        tiktok: [
          { t: "\"Look para o Rock in Rio\"", s: "Maior trend pré-evento: vídeos de inspiração de looks e provas de outfit para cada dia do festival dominam as páginas de descoberta.", u: "https://www.tiktok.com/discover/look-para-o-rock-in-rio-2026" },
          { t: "#RockInRio2026 · humor de véspera", s: "\"Lista vazada\", \"suspeitas\" e zoeiras sobre preço de ingresso/logística seguem como formato recorrente de meme.", u: "https://www.tiktok.com/discover/rock-in-rio" },
          { t: "\"Dia do trap\" no Espaço Favela", s: "Recorte do line-up (Major RD, MC Cabelinho, TZ da Coronel) circula como \"dia do trap\", ampliando o alcance do festival no público de hip-hop.", u: "https://www.tiktok.com/discover/rock-in-rio-2026-dia-do-trap" }
        ],
        instagram: [
          { t: "Perfil oficial em modo contagem regressiva", s: "Anúncios de line-up e bastidores da montagem movimentam os comentários; posts de novidades são os de maior tração no momento.", u: "https://www.instagram.com/rockinrio/" },
          { t: "Artistas alimentam o esquenta", s: "Teasers de Stray Kids (álbum pré-RiR), posts de despedida de Elton John e ensaios de brasileiros (Ivete, Gil) puxam o UGC de expectativa.", u: "https://www.instagram.com/rockinrio/" }
        ],
        sounds: [
          { t: "Stray Kids — álbum novo (17 faixas)", s: "Lançamento às vésperas do festival deve dominar os sons de fancam e edit no TikTok na semana do K-pop day." },
          { t: "Clássicos de Elton John", s: "\"Rocket Man\", \"Your Song\" e \"Tiny Dancer\" tendem a crescer em streaming e trilhas de vídeo rumo à despedida de 7/set." },
          { t: "Esquenta do metal", s: "Sepultura (turnê de despedida) e Avenged Sevenfold puxam edits do dia 5/set na comunidade de metal." }
        ],
        note: "Fase pré-evento: leitura editorial a partir de imprensa e páginas públicas das plataformas. Com o festival em andamento, esta aba passa a trazer os trending topics do X, vídeos mais vistos e hashtags do TikTok/Instagram de cada dia."
      },

      direcionais: {
        leitura: "A 11 dias da abertura, a conversa é dominada por logística, looks e expectativa de setlist — e três datas concentram o maior potencial simbólico para a Ipiranga: 7/set (89 anos + Elton John), 11/set (K-pop day) e a abertura em 4/set.",
        dirs: [
          { t: "Ocupar a janela de esquenta (24/ago–3/set)", s: "O público está planejando a ida ao festival AGORA. Posicionar a marca na jornada: conteúdo de utilidade sobre chegar de carro ao Parque Olímpico, abastecimento na rota, paradas AmPm — \"a parada completa antes da Cidade do Rock\"." },
          { t: "Tratar 7/set como o dia-pilar da marca", s: "Aniversário de 89 anos + despedida de Elton John + Gilberto Gil + feriado. É a maior chance de pauta espontânea da quinzena: preparar conteúdo real-time, press kit do aniversário e um momento no Espaço Ipiranga que amarre as duas histórias." },
          { t: "K-pop day (11/set) como teste de relevância cultural", s: "Fandoms chegam em caravanas de todo o país — utilidade real (postos na rota, AmPm 24h, pontos de encontro) vale mais que apropriação de linguagem. Primeira edição com lightstick liberado: oportunidade de brinde/ativação luminosa no espaço." },
          { t: "Ficar fora do debate \"isso é rock?\"", s: "A polêmica de curadoria rende engajamento, mas é armadilha para marcas. A Ipiranga fala de experiência e jornada, nunca de mérito musical do line-up." },
          { t: "Garantir o Espaço Ipiranga nos roteiros de creators", s: "Itaú, Heineken e KitKat entram com ativações de altíssimo impacto visual. O espaço repaginado precisa de um momento 'instagramável' assinatura, divulgado ANTES do festival, para entrar nos vídeos de \"o que fazer na Cidade do Rock\"." }
        ],
        acion: [
          "Briefar social para surfar a trend \"look para o Rock in Rio\" com ângulo leve de marca (brindes do espaço: pouches, leques, adesivos).",
          "Mapear creators de \"roteiro Cidade do Rock\" e negociar a inclusão do Espaço Ipiranga até 1/set.",
          "Publicar guia de utilidade: como chegar de carro, estacionamentos, postos Ipiranga e AmPm na rota do Parque Olímpico.",
          "Fechar até 2/set a bateria de conteúdo dos 89 anos (7/set), incluindo plano de real-time para a noite Elton John + Gil.",
          "Definir a escala de war room para as noites de festival (quem monitora, horários de corte, fluxo de aprovação de resposta rápida)."
        ]
      },

      sources: [
        ["Rolling Stone Brasil — horários", "https://rollingstone.com.br/guia-show/horarios-rock-in-rio-2026/"],
        ["Rolling Stone Brasil — line-up por dia", "https://rollingstone.com.br/musica/rock-in-rio-2026-line-up-completo-por-dia/"],
        ["Billboard Brasil — venda extraordinária", "https://billboard.com.br/rock-in-rio-venda-extraordinaria-ingressos/"],
        ["Terra — bastidores e estrutura", "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-2026-bastidores-gigantes-e-vendas-extras-de-ingressos,b41fbcf480ed2e2fe46fff2f8b78178a5f1qszq5.html"],
        ["Promoview — ativações das marcas", "https://www.promoview.com.br/ativacoes-marcas-rock-in-rio-2026/"],
        ["Marcas pelo Mundo — Ipiranga no RiR", "https://marcaspelomundo.com.br/anunciantes/ipiranga-confirma-presenca-no-rock-in-rio-brasil-2026-e-prepara-acoes-para-o-publico-do-festival/"],
        ["Mundo do Marketing — 89 anos Ipiranga", "https://mundodomarketing.com.br/ipiranga-celebra-aniversario-de-89-anos-com-acoes-especiais-no-rock-in-rio"],
        ["Live MKT — promoção Parada Completa", "https://livemarketing.com.br/ipiranga-renova-patrocinio-ao-rock-in-rio-e-lanca-promocao-com-ingressos-para-o-festival"],
        ["Rolling Stone — K-pop day", "https://rollingstone.com.br/musica/rock-in-rio-2026-tera-o-maior-encontro-de-k-pop-da-america-latina-em-11-de-setembro/"],
        ["Jornal DR1 — Elton John esgotado", "https://jornaldr1.com.br/show-de-despedida-de-elton-john-no-rock-in-rio-tem-ingressos-esgotados-e-confirma-expectativa-historica/"]
      ]
    }
  ]
};
