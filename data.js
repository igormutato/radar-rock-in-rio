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
  "meta": {
    "version": 16,
    "updatedAt": "03/09/2026, 20h14 (BRT)",
    "updatedISO": "2026-09-03",
    "nextUpdate": "diária, ~9h (BRT)",
    "festivalStart": "2026-09-04",
    "festivalDays": [
      "2026-09-04",
      "2026-09-05",
      "2026-09-06",
      "2026-09-07",
      "2026-09-11",
      "2026-09-12",
      "2026-09-13"
    ]
  },
  "schedule": [
    {
      "id": "d1",
      "date": "sex · 4/set",
      "title": "Dia 1 — Noite do rock alternativo",
      "soldOut": false,
      "headliner": "Foo Fighters",
      "stages": {
        "Palco Mundo": [
          [
            "16h40",
            "Nova Twins"
          ],
          [
            "19h00",
            "The Hives"
          ],
          [
            "21h20",
            "Rise Against"
          ],
          [
            "00h05",
            "Foo Fighters"
          ]
        ],
        "Palco Sunset": [
          [
            "15h30",
            "Di Ferrero"
          ],
          [
            "17h50",
            "Detonautas + Biquini"
          ],
          [
            "20h10",
            "Hot Milk"
          ],
          [
            "22h45",
            "Capital Inicial + Dado Villa-Lobos"
          ]
        ],
        "New Dance Order": [
          [
            "21h05",
            "Cat Dealers"
          ],
          [
            "22h30",
            "ATKÖ"
          ],
          [
            "00h00",
            "GIU x Carola"
          ],
          [
            "01h30",
            "Steve Angello"
          ]
        ],
        "Espaço Favela": [
          [
            "15h00",
            "GBZ7N"
          ],
          [
            "16h50",
            "Hitmaker"
          ],
          [
            "19h10",
            "Rodrigo do CN"
          ]
        ],
        "Supernova": [
          [
            "14h30",
            "Chady"
          ],
          [
            "16h00",
            "Rock in Gil + Larissa Luz"
          ],
          [
            "18h00",
            "Venere Vai Venus"
          ],
          [
            "20h10",
            "Diogo Defante"
          ]
        ],
        "Global Village": [
          [
            "15h00",
            "Giovana Moraes"
          ],
          [
            "16h50",
            "Leela"
          ],
          [
            "19h10",
            "Paulinho Moska"
          ]
        ]
      }
    },
    {
      "id": "d2",
      "date": "sáb · 5/set",
      "title": "Dia 2 — Noite do metal",
      "soldOut": false,
      "headliner": "Avenged Sevenfold",
      "stages": {
        "Palco Mundo": [
          [
            "16h40",
            "Sepultura"
          ],
          [
            "19h00",
            "MGK"
          ],
          [
            "21h20",
            "Bring Me The Horizon"
          ],
          [
            "00h05",
            "Avenged Sevenfold"
          ]
        ],
        "Palco Sunset": [
          [
            "15h30",
            "Malvada + Day Limns"
          ],
          [
            "17h50",
            "Black Pantera + Nervosa"
          ],
          [
            "20h10",
            "Poppy"
          ],
          [
            "22h50",
            "Bad Omens"
          ]
        ],
        "New Dance Order": [
          [
            "21h05",
            "Victor Lou"
          ],
          [
            "22h30",
            "Camila Jun x Eli Iwasa"
          ],
          [
            "00h00",
            "Volkoder"
          ],
          [
            "01h30",
            "James Hype"
          ]
        ],
        "Espaço Favela": [
          [
            "15h00",
            "Quantum"
          ],
          [
            "16h50",
            "Canto Cego"
          ],
          [
            "19h10",
            "Major RD"
          ]
        ],
        "Supernova": [
          [
            "14h30",
            "ZeRO"
          ],
          [
            "16h00",
            "MC Taya"
          ],
          [
            "18h00",
            "Lvcas"
          ],
          [
            "20h10",
            "Supercombo"
          ]
        ],
        "Global Village": [
          [
            "15h00",
            "Rhegia"
          ],
          [
            "16h50",
            "Noturnall + Russell Allen"
          ],
          [
            "19h10",
            "Korzus"
          ]
        ]
      }
    },
    {
      "id": "d3",
      "date": "dom · 6/set",
      "title": "Dia 3 — Pop & hits",
      "soldOut": true,
      "headliner": "Calvin Harris",
      "stages": {
        "Palco Mundo": [
          [
            "16h40",
            "Barão Vermelho (formação original) + Fernando Magalhães"
          ],
          [
            "19h00",
            "Nelly"
          ],
          [
            "21h20",
            "Black Eyed Peas"
          ],
          [
            "00h05",
            "Calvin Harris"
          ]
        ],
        "Palco Sunset": [
          [
            "15h30",
            "Calema"
          ],
          [
            "17h50",
            "BaianaSystem"
          ],
          [
            "20h10",
            "Jota Quest canta Tim Maia"
          ],
          [
            "22h45",
            "Ne-Yo"
          ]
        ],
        "New Dance Order": [
          [
            "21h05",
            "Sofi Tukker"
          ],
          [
            "22h30",
            "Liu"
          ],
          [
            "00h00",
            "Casa Bonita (Brisotti & Viot)"
          ],
          [
            "01h40",
            "MEDUZA"
          ]
        ],
        "Espaço Favela": [
          [
            "15h00",
            "Budah"
          ],
          [
            "16h50",
            "Rael"
          ],
          [
            "19h10",
            "Xamã"
          ]
        ],
        "Supernova": [
          [
            "14h30",
            "O Escritório"
          ],
          [
            "16h00",
            "Bayside Kings"
          ],
          [
            "18h00",
            "Matanza Ritual"
          ],
          [
            "20h10",
            "João Gordo & Asteroides Trio"
          ]
        ],
        "Global Village": [
          [
            "15h00",
            "Bento Gil + Flor Gil"
          ],
          [
            "16h50",
            "Mãeana"
          ],
          [
            "19h10",
            "Mohamed Ramadan"
          ]
        ]
      }
    },
    {
      "id": "d4",
      "date": "seg · 7/set (feriado)",
      "title": "Dia 4 — Despedida de Elton John · 89 anos da Ipiranga",
      "soldOut": false,
      "headliner": "Elton John",
      "ipiranga": true,
      "stages": {
        "Palco Mundo": [
          [
            "16h40",
            "Luísa Sonza + Roberto Menescal"
          ],
          [
            "19h00",
            "Jon Batiste"
          ],
          [
            "21h20",
            "Gilberto Gil"
          ],
          [
            "00h05",
            "Elton John"
          ]
        ],
        "Palco Sunset": [
          [
            "15h30",
            "Vanessa da Mata + Rubel"
          ],
          [
            "17h50",
            "Roupa Nova + Guilherme Arantes"
          ],
          [
            "20h10",
            "Péricles canta Motown"
          ],
          [
            "22h45",
            "Laufey"
          ]
        ],
        "New Dance Order": [
          [
            "21h05",
            "Max Styler"
          ],
          [
            "22h30",
            "Leo Janeiro & Simo Not Simon"
          ],
          [
            "00h00",
            "Aline Rocha"
          ],
          [
            "01h30",
            "Fatboy Slim"
          ]
        ],
        "Espaço Favela": [
          [
            "15h00",
            "Tiee"
          ],
          [
            "16h50",
            "Mart'nália"
          ],
          [
            "19h10",
            "Belo"
          ]
        ],
        "Supernova": [
          [
            "14h30",
            "Maui"
          ],
          [
            "16h00",
            "Melly"
          ],
          [
            "18h00",
            "Zeca Veloso"
          ],
          [
            "20h10",
            "Alee"
          ]
        ],
        "Global Village": [
          [
            "15h00",
            "Wanda Sá"
          ],
          [
            "16h50",
            "Joyce Moreno, Leila Pinheiro e Fernanda Takai"
          ],
          [
            "19h10",
            "João Bosco"
          ]
        ]
      }
    },
    {
      "id": "d5",
      "date": "sex · 11/set",
      "title": "Dia 5 — K-pop day (maior encontro da América Latina)",
      "soldOut": true,
      "headliner": "Stray Kids",
      "stages": {
        "Palco Mundo": [
          [
            "16h40",
            "NEXZ"
          ],
          [
            "19h00",
            "HWASA"
          ],
          [
            "21h20",
            "Alok (Keep Art Human)"
          ],
          [
            "00h05",
            "Stray Kids"
          ]
        ],
        "Palco Sunset": [
          [
            "15h30",
            "Jota.pê + Luedji Luna + Zaynara"
          ],
          [
            "17h50",
            "Os Garotin + Duquesa"
          ],
          [
            "20h10",
            "PJ Morton"
          ],
          [
            "22h45",
            "Jamiroquai"
          ]
        ],
        "New Dance Order": [
          [
            "21h05",
            "ANNA"
          ],
          [
            "22h00",
            "DEPARTAMENTO"
          ],
          [
            "00h00",
            "Omiki"
          ],
          [
            "01h00",
            "Neelix & Vegas"
          ]
        ],
        "Espaço Favela": [
          [
            "15h00",
            "Caio Luccas"
          ],
          [
            "16h50",
            "Puterrier & MC Carol"
          ],
          [
            "19h10",
            "MC Cabelinho + TZ da Coronel"
          ]
        ],
        "Supernova": [
          [
            "14h30",
            "Muse Maya"
          ],
          [
            "16h00",
            "Isa Buzzi"
          ],
          [
            "18h00",
            "Ananda"
          ],
          [
            "20h10",
            "NandaTsunami"
          ]
        ],
        "Global Village": [
          [
            "15h00",
            "Lambateria + Félix Robatto"
          ],
          [
            "16h50",
            "Rio Bronx"
          ],
          [
            "19h10",
            "Soulidified"
          ]
        ]
      }
    },
    {
      "id": "d6",
      "date": "sáb · 12/set",
      "title": "Dia 6 — Pop global & Brasil",
      "soldOut": true,
      "headliner": "Maroon 5",
      "stages": {
        "Palco Mundo": [
          [
            "16h40",
            "Pedro Sampaio"
          ],
          [
            "19h00",
            "J Balvin"
          ],
          [
            "21h20",
            "Demi Lovato"
          ],
          [
            "00h05",
            "Maroon 5"
          ]
        ],
        "Palco Sunset": [
          [
            "15h30",
            "Criolo + Amaro Freitas + Dino D'Santiago"
          ],
          [
            "17h50",
            "Gilsons + Daniela Mercury + Olodum"
          ],
          [
            "20h10",
            "João Gomes + Orquestra Brasileira"
          ],
          [
            "22h45",
            "Mumford & Sons"
          ]
        ],
        "New Dance Order": [
          [
            "21h05",
            "Bhaskar"
          ],
          [
            "22h00",
            "Adam Sellouk"
          ],
          [
            "23h00",
            "Gabe"
          ],
          [
            "00h00",
            "Alok & Family (Ekanta & Swarup)"
          ],
          [
            "01h30",
            "Alok (Rave The World)"
          ]
        ],
        "Espaço Favela": [
          [
            "15h00",
            "Soul de Brasileiro"
          ],
          [
            "16h50",
            "Priscila Senna"
          ],
          [
            "19h10",
            "Timbalada"
          ]
        ],
        "Supernova": [
          [
            "14h30",
            "Celo Dut"
          ],
          [
            "16h00",
            "Yago Oproprio"
          ],
          [
            "18h00",
            "Milo J"
          ],
          [
            "20h10",
            "Delacruz"
          ]
        ],
        "Global Village": [
          [
            "15h00",
            "Badi Assad"
          ],
          [
            "16h50",
            "Hamilton de Holanda"
          ],
          [
            "19h10",
            "Mestrinho"
          ]
        ]
      }
    },
    {
      "id": "d7",
      "date": "dom · 13/set",
      "title": "Dia 7 — Encerramento",
      "soldOut": false,
      "headliner": "Twenty One Pilots",
      "stages": {
        "Palco Mundo": [
          [
            "17h00",
            "Ivete Sangalo"
          ],
          [
            "19h10",
            "Lola Young"
          ],
          [
            "21h35",
            "Halsey"
          ],
          [
            "00h05",
            "Twenty One Pilots"
          ]
        ],
        "Palco Sunset": [
          [
            "15h50",
            "Carol Biazin + Joyce Alane"
          ],
          [
            "18h05",
            "Joelma + Viviane Batidão"
          ],
          [
            "20h20",
            "Marina Sena + Céu"
          ],
          [
            "22h55",
            "Zara Larsson"
          ]
        ],
        "New Dance Order": [
          [
            "21h05",
            "Dawn Patrol (Maz, Antdot, Riascode, Bakka)"
          ],
          [
            "22h30",
            "Illusionize"
          ],
          [
            "00h00",
            "Roddy Lima"
          ],
          [
            "01h30",
            "John Summit"
          ]
        ],
        "Espaço Favela": [
          [
            "15h00",
            "Marvvila"
          ],
          [
            "16h50",
            "Suel"
          ],
          [
            "19h10",
            "DENNIS"
          ]
        ],
        "Supernova": [
          [
            "14h30",
            "AR Baby"
          ],
          [
            "16h00",
            "Bruna Black"
          ],
          [
            "18h00",
            "Sant"
          ],
          [
            "20h10",
            "Lourena"
          ]
        ],
        "Global Village": [
          [
            "15h00",
            "Kynnie"
          ],
          [
            "16h50",
            "Lucy Alves"
          ],
          [
            "19h10",
            "Haley Smalls"
          ]
        ]
      }
    }
  ],
  "editions": [
    {
      "date": "03/09/2026",
      "dateISO": "2026-09-03",
      "weekday": "quinta-feira",
      "edition": 11,
      "phase": "véspera da abertura",
      "pulse": [
        "🎪 <b>É amanhã!</b> A Cidade do Rock abre em 4/set — Foo Fighters fecha o Palco Mundo à 00h05, programação vara a madrugada e as vias do entorno ficam bloqueadas das 14h às 5h. O evento teste de 2/set aprovou a operação (LED, The Flight, drones em 6 dos 7 dias).",
        "📲 <b>Fricção da véspera: app Quentro.</b> Só entra quem ativar o ingresso no app — e o Reclame Aqui concentra relatos de ingressos que não aparecem após compra/resgate. Ponto de atenção direto para quem resgatou pelo KMV.",
        "⭐ <b>Alerta de influência:</b> nenhum dos 5 creators do plano citou a Ipiranga em post sobre o festival — e 3 deles não publicaram nada sobre o RiR. O TikTok da marca também está parado desde 25/08.",
        "📊 <b>Listening YouScan:</b> imprensa em ritmo recorde (145 matérias em 2/set) e conversa social da Ipiranga dominada por KMV e brindes — com alerta de fila no evento teste (detalhes na aba Listening)."
      ],
      "news": [
        {
          "t": "Só entra com ingresso ativado no app Quentro — e a véspera acumula relatos de ingresso 'sumido'",
          "src": "Aurora Cultural / Reclame AQUI",
          "when": "véspera",
          "s": "Print e ingresso impresso não passam na catraca: a entrada exige ativação no app Quentro (vínculo na Ticketmaster + login + validação). No Reclame Aqui, série de reclamações recentes de ingressos que não aparecem no app após compra ou resgate — fricção clássica de véspera, que respinga em quem resgatou via KMV.",
          "u": "https://auroracultural.com/noticias/musica/rock-in-rio-2026-so-entra-quem-ativar-o-ingresso-no-app-quentro/"
        },
        {
          "t": "Esquema de trânsito: bloqueios das 14h às 5h, BRT expresso por R$ 29 e metrô 24h",
          "src": "Tempo Real RJ / Diário do Grande ABC",
          "when": "27/ago–01/set",
          "s": "Prefeitura fecha o entorno do Parque Olímpico das 14h às 5h com 210 operadores e OCR para moradores. BRT Expresso Rock in Rio: R$ 29 ida e volta só pelo app Jaé (3 linhas, 11h–4h); estação Jardim Oceânico com embarque 24h (R$ 7,90).",
          "u": "https://temporealrj.com/rock-in-rio-esquema-transito-transportes-evento/"
        },
        {
          "t": "Trade detalha as 100+ ativações — e a régua de experiência está alta",
          "src": "Meio & Mensagem",
          "when": "01/set",
          "s": "Itaú com pavilhão de 1.000 m² e roda-gigante; Heineken com 700 mil litros e pulseira social 'The Clinker'; Coca-Cola com FILA DIGITAL para acesso ao espaço; iFood estreia com montanha-russa; Seara com palco próprio. Benchmark direto para a operação do Espaço Ipiranga (corredor instagramável + Glambot).",
          "u": "https://www.meioemensagem.com.br/marketing/rock-in-rio-2026-ativacoes-marcas"
        },
        {
          "t": "Horários da 1ª noite confirmados: Foo Fighters à 00h05",
          "src": "Experiência Musical / Whiplash",
          "when": "18/ago",
          "s": "Palco Mundo: Nova Twins 16h40, The Hives 19h, Rise Against 21h20, Foo Fighters 00h05. Sunset: Capital Inicial convida Dado Villa-Lobos às 22h45. Show principal na madrugada + bloqueio viário até 5h = a volta para casa vira a pauta prática do dia 1.",
          "u": "https://www.experienciamusical.com.br/post/rock-in-rio-2026-veja-os-hor%C3%A1rios-de-todos-os-shows-em-todos-os-palcos"
        },
        {
          "t": "Evento teste aprova a Cidade do Rock e anuncia drones em 6 dias de festival",
          "src": "Sopa Cultural",
          "when": "02/set",
          "s": "Convidados e imprensa testaram a operação: novo Palco Mundo com 2.400 m² de LED, The Flight, ECCO e pirotecnia com 7 balsas sincronizadas. Shows de drones confirmados para 5, 6, 7, 11, 12 e 13/set (incl. Dia da Amazônia em 5/set).",
          "u": "https://sopacultural.com/rock-in-rio-2026-evento-teste-cidade-do-rock/"
        },
        {
          "t": "Primeiro fim de semana terá frio e chuva; abertura ainda no calor",
          "src": "CNN Brasil",
          "when": "02/set",
          "s": "Previsão: sexta (4/set) quente, virada com chuva e queda de temperatura no sábado/domingo/feriado. Capa de chuva pode; guarda-chuva não entra na Cidade do Rock.",
          "u": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/primeiro-fim-de-semana-do-rock-in-rio-deve-ter-frio-e-chuva-veja-previsao/"
        }
      ],
      "ipiranga": [
        {
          "t": "Espaço Ipiranga em detalhes: 272 m², 3 andares e serviço de jornada completa",
          "src": "Todo Dia um Rock",
          "when": "02/set",
          "s": "Estrutura reformulada junto ao Palco Mundo com 'i' iluminado, ~70 mil leques e pochetes personalizáveis (até 8 pins colecionáveis), Bar AmPm (chopp, água, refrigerante), 7 ônibus exclusivos resgatáveis por 150 pontos KMV e pontos de recarga de celular. No comparativo do trade (M&M), corredor instagramável + Glambot completam o pacote.",
          "u": "https://tododiaumrock.com.br/rock-in-rio-2026-ipiranga-prepara-ativacoes-e-brindes-para-o-publico/rock-in-rio/"
        },
        {
          "t": "89 anos no dia 7/set: aniversário dentro do festival",
          "src": "Mundo do Marketing",
          "when": "jun/26",
          "s": "A marca celebra 89 anos no feriado, dia de Elton John e Gilberto Gil no Mundo — data-âncora para ações especiais do espaço e gancho de pauta (aniversário + 'Lá, a parada é completa', da AlmapBBDO).",
          "u": "https://mundodomarketing.com.br/ipiranga-celebra-aniversario-de-89-anos-com-acoes-especiais-no-rock-in-rio"
        },
        {
          "t": "Promoção relâmpago: R$ 200 em compras podem valer ingresso",
          "src": "Tribuna do Sertão",
          "when": "31/ago",
          "s": "Reta final da mecânica em postos, AmPm e Jet Oil com bônus para usuários KMV — imprensa regional repercutiu bem, esticando o alcance da promoção para fora do eixo RJ-SP.",
          "u": "https://www.tribunadosertao.com.br/financas/2026/08/31/970446-clientes-da-ipiranga-que-gastarem-r-200-podem-ganhar-ingresso-para-o-rock-in-rio"
        },
        {
          "t": "KMV libera resgate de ingressos a partir de 400 pontos",
          "src": "Pontos pra Voar",
          "when": "ago/26",
          "s": "Sites de milhas e pontos viraram canal espontâneo da oferta — resgate de gramado via app KMV com pontos + dinheiro e vale-combustível de R$ 100. É o motor nº 1 da conversa social da marca (ver aba Listening) — e quem resgatou precisa ativar o ingresso no Quentro.",
          "u": "https://pontospravoar.com/urgkmv-libera-resgate-ingressos-rock-rio-2026-partir-400-pontos/"
        },
        {
          "t": "Página oficial da campanha concentra as mecânicas",
          "src": "Ipiranga",
          "when": "atual",
          "s": "Hub com promoção, resgates KMV e presença no festival — referência para direcionar dúvidas do público na semana de abertura.",
          "u": "https://www.ipiranga.com.br/wps/portal/en/ipiranga/a-ipiranga/campanhas-e-acoes/promocoes-e-ofertas/rock-in-rio"
        }
      ],
      "shows": {
        "status": "A primeira noite é AMANHÃ (4/set): Foo Fighters fecha o Palco Mundo à 00h05, com The Hives (19h) e Rise Against (21h20); no Sunset, Capital Inicial convida Dado Villa-Lobos (22h45). Palcos menores abrem a partir das 14h30. A repercussão de cada noite entra aqui na manhã seguinte, dia a dia.",
        "reperc": []
      },
      "trends": {
        "viral": [
          {
            "t": "Caça aos brindes é o assunto nº 1 do festival nas redes",
            "src": "TikTok + Instagram",
            "metric": "51,9 mil eng.",
            "s": "Os roundups \"Brindes do Rock in Rio 2026\" viraram formato próprio — o maior post da base YouScan é uma lista de brindes, e o TikTok tem página de descoberta dedicada (\"Rock in Rio Brindes\"). A pochete e o leque da Ipiranga aparecem nessas listas: é a maior porta de entrada orgânica do Espaço Ipiranga.",
            "u": "https://www.tiktok.com/discover/rock-in-rio-brindes"
          },
          {
            "t": "\"Fiquei 1h30 na fila da Ipiranga pra pochete acabar antes\"",
            "src": "X · pós evento-teste",
            "metric": "alerta",
            "s": "Primeiro UGC negativo operacional da marca, publicado após o evento teste de 2/set. Volume ainda baixo, mas é exatamente o tema que viraliza rápido no dia 1 — fila + ruptura no brinde mais desejado.",
            "u": ""
          },
          {
            "t": "#rockinrio acumula 5,7 mi de visualizações no TikTok",
            "src": "TikTok · página da hashtag",
            "metric": "5,7 M views",
            "s": "Volume medido na véspera da abertura — servirá de linha de base para medir o salto a partir de 4/set. Temas que puxam a hashtag: brindes, looks por dia, \"dia do trap\" no Espaço Favela e cupons de foto (Fotop).",
            "u": "https://www.tiktok.com/tag/rockinrio"
          },
          {
            "t": "\"Vai chover no Rock in Rio?\" domina a dúvida da véspera",
            "src": "Busca + X",
            "metric": "pauta do dia",
            "s": "Previsão de frio e chuva no 1º fim de semana (com guarda-chuva proibido) transformou clima em conteúdo de utilidade — janela imediata para a pochete ser comunicada como item funcional de chuva.",
            "u": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/primeiro-fim-de-semana-do-rock-in-rio-deve-ter-frio-e-chuva-veja-previsao/"
          }
        ],
        "sources": [
          {
            "id": "google",
            "icon": "🔍",
            "name": "Google Trends · Brasil",
            "status": "ok",
            "statusLabel": "RSS oficial · hoje",
            "items": [
              {
                "t": "Rock in Rio ainda FORA do top de buscas nacionais",
                "s": "Na véspera, nenhum termo do festival figura entre as buscas em alta do Brasil. O topo é \"apagão\" (5 mil+, queda global de IAs), \"nubank\", \"navio\" e futebol. Leitura: a explosão de busca do festival acontece com a abertura — o pico começa amanhã.",
                "u": "https://trends.google.com/trending?geo=BR"
              },
              {
                "t": "Linha de base para medir o salto de 4/set",
                "s": "Com o festival ausente hoje, qualquer entrada de \"Rock in Rio\", nome de artista ou \"Cidade do Rock\" no ranking a partir de amanhã é sinal limpo de virada de atenção nacional — inclusive para calibrar o momento de publicar conteúdo de marca."
              }
            ],
            "note": "Coletado do feed RSS oficial do Google Trends (geo=BR) na manhã de 03/09."
          },
          {
            "id": "tiktok",
            "icon": "🎵",
            "name": "TikTok · hashtags",
            "status": "ok",
            "statusLabel": "páginas de hashtag",
            "items": [
              {
                "t": "#rockinrio · 5,7 mi de visualizações",
                "s": "Página pública da hashtag acessível — é a métrica de volume que o radar vai acompanhar diariamente durante o festival.",
                "u": "https://www.tiktok.com/tag/rockinrio"
              },
              {
                "t": "Temas que puxam a hashtag hoje",
                "s": "\"Brindes do Rock in Rio\", \"look para o Rock in Rio\", \"dia do trap\" (Espaço Favela) e cupons de foto para o dia 11 — todos formatos de serviço/utilidade, não de crítica musical.",
                "u": "https://www.tiktok.com/discover/rock-in-rio"
              }
            ],
            "note": "Volume medido nas páginas públicas de hashtag do TikTok, acompanhado dia a dia durante o festival."
          }
        ],
        "note": "Metodologia de trends: Google Trends via RSS oficial do Brasil e TikTok via páginas públicas de hashtag. Nenhum número é estimado — fonte sempre indicada."
      },
      "youscan": {
        "period": "01/08 a 02/09/2026",
        "updatedFrom": "exports enviados em 03/09 (base de notícias: busca \"Rock in Rio\" · base de marca: Ipiranga no contexto RiR)",
        "news": {
          "label": "Notícias \"Rock in Rio\" — 1.868 menções",
          "total": "1.868",
          "peak": "145/dia (2/set)",
          "sentiment": "81% neutro · 19% positivo · apenas 1 negativa em 1.868 — cobertura extremamente favorável ao festival.",
          "outlets": "Terra (208) · Gshow (90) · g1 (62) · Sopa Cultural (37) · CNN Brasil (30) · Exame (28) · Meio & Mensagem (27) · Veja Rio (25). UOL e R7 quase ausentes da base (1 e 7) — vale conferir a cobertura desses portais por fora.",
          "bullets": [
            [
              "Volume em aceleração",
              "Média de ~50 matérias/dia em meados de agosto → 105 (31/8), 141 (1º/9) e 145 (2/9). A curva deve explodir com a abertura."
            ],
            [
              "Temas dominantes na semana",
              "Transporte/como chegar, o que levar, segurança (Lei Seca com drones), evento teste, estreias (Diogo Defante, Ananda) e recordes (Ivete)."
            ]
          ]
        },
        "brand": {
          "label": "Ipiranga × Rock in Rio — 204 menções sociais",
          "total": "204",
          "engTop": "51,9 mil",
          "sources": "X/Twitter (97) e Instagram (73) concentram o volume, mas o Instagram concentra quase todo o engajamento. Facebook (13), TikTok (7) e outros completam.",
          "themes": "App KMV (117 · 57%) · Campanha Parada Completa (90) · Ipimax (69) · AmPm (61) · Jet Oil (61) — a mecânica de pontos/resgate é o motor absoluto da conversa da marca.",
          "bullets": [
            [
              "Picos de conversa",
              "18/8 e 27–28/8 (listas de brindes + liberação de resgate KMV) e 1º/9 (leilão de pontos no Rio + concurso do perfil Posto Ipiranga)."
            ],
            [
              "Earned media de verdade",
              "Criadora mostrando o resgate real do ingresso pelo KMV rendeu 11,3 mil engajamentos — o melhor argumento da mecânica é o público provando que funciona."
            ]
          ]
        },
        "topPosts": [
          {
            "d": "18/08",
            "src": "Instagram",
            "eng": "51,9 mil eng.",
            "t": "\"Brindes do Rock in Rio 2026\" — compilado de marcas",
            "s": "Lista as entregas de C&A, Itaú, TIM etc. — e a pochete/leque da Ipiranga junto. O formato 'lista de brindes' é o maior veículo de visibilidade orgânica do espaço antes dos portões abrirem."
          },
          {
            "d": "31/08",
            "src": "Instagram",
            "eng": "11,3 mil eng.",
            "t": "\"Resgatei meu ingresso no Km de Vantagens\"",
            "s": "Criadora celebra o resgate 'graças à Ipiranga, patrocinadora oficial' — social proof espontâneo da mecânica KMV na semana decisiva."
          },
          {
            "d": "01/09",
            "src": "Instagram",
            "eng": "10,4 mil eng.",
            "t": "Concurso do perfil Posto Ipiranga",
            "s": "\"Sua criatividade pode te levar para o Rock in Rio acompanhado\" — última ação de recrutamento antes do festival, com forte participação nos comentários."
          },
          {
            "d": "01/09",
            "src": "Instagram",
            "eng": "7,3 mil eng.",
            "t": "Roundup oficial de patrocinadores cita o Bar AmPm",
            "s": "Post do ecossistema do festival lista as experiências das marcas — Bar AmPm e Espaço Ipiranga aparecem no radar do público geral."
          }
        ],
        "alerts": [
          {
            "t": "⚠️ Fila e ruptura de brinde no evento teste (2/set)",
            "s": "Relato no X: \"fiquei 1h30 na fila da Ipiranga pra pochete acabar antes\". Amostra pequena, mas é o primeiro sinal de UGC negativo operacional — com a pochete aparecendo nas listas de brindes mais desejados, fila + ruptura no dia 1 pode virar a narrativa do espaço. Reforçar estoque, fluxo e comunicação de disponibilidade."
          },
          {
            "t": "🔧 Coluna de sentimento da base de marca veio 100% \"Negativo\"",
            "s": "As 204 menções chegaram marcadas como negativas no export — claramente um problema de configuração do tópico no YouScan (o conteúdo é majoritariamente positivo/neutro: promoções, brindes, resgates). Corrigir antes do festival para o monitoramento em tempo real não voar cego. A leitura de sentimento desta edição foi feita manualmente pelo conteúdo."
          }
        ],
        "note": "Bases: YouScan_MentionsWithFullText — \"Ipiranga | Rock In Rio 2026 | Notícias\" (1.868 menções de imprensa, busca 'Rock in Rio') e \"MTT | IPIRANGA\" (204 menções sociais, busca Ipiranga + termos do contexto RiR: pochete, leque, RIR, stand/Espaço Ipiranga, Bar AmPm, Recarga KMV). Engajamento = métrica 'engagement' do YouScan por publicação."
      },
      "direcionais": {
        "leitura": "A 24h da abertura, a narrativa do Espaço Ipiranga será definida pela operação, não pela comunicação. O listening mostra a marca chegando com ativos fortes (KMV = 57% da conversa, pochete nas listas de brindes mais desejados) e dois pontos de fricção mapeados: fila/ruptura do brinde no evento teste e a ativação do ingresso no app Quentro — que atinge em cheio quem resgatou pelo KMV. Do outro lado, a régua subiu: Coca-Cola opera fila digital e o Itaú tem roda-gigante. O dia é de blindar operação e assumir a jornada (ida, chuva e volta na madrugada) como território da marca.",
        "dirs": [
          {
            "t": "Blindar a operação do brinde no dia 1 — com plano anti-fila",
            "s": "A pochete entrou nas listas de 'brindes mais desejados' (posts de até 51,9 mil eng.) e o teste registrou 1h30 de fila com ruptura. Coca-Cola vai operar FILA DIGITAL no espaço dela — se a Ipiranga não organizar a distribuição (janelas, estoque por dia, aviso de disponibilidade), o contraste operacional vira pauta. O 1º UGC do espaço pode ser fila ou pode ser pochete no corpo."
          },
          {
            "t": "Assumir o suporte da ativação Quentro para o público KMV",
            "s": "Quem resgatou ingresso pelo KMV e não vê o ingresso no app não culpa a Ticketmaster — culpa a Ipiranga. Com o Reclame Aqui já acumulando casos na véspera, a marca precisa se antecipar com passo-a-passo de ativação e rota de suporte antes dos portões abrirem."
          },
          {
            "t": "Ser dona da volta para casa",
            "s": "Foo Fighters à 00h05 + vias bloqueadas até 5h = a volta é o problema prático da 1ª noite. A marca tem o ativo perfeito (7 ônibus KMV por 150 pontos) e pode empacotar a utilidade completa (BRT Jaé R$ 29, metrô 24h) — 'parada completa' aplicada à jornada do festival, sem falar de line-up."
          },
          {
            "t": "Transformar o KMV em história, não em oferta",
            "s": "57% da conversa da marca é KMV, e o post mais forte é uma criadora provando o resgate. Repostar/amplificar histórias reais de quem resgatou ingresso (com autorização) vale mais que nova peça de oferta na semana de abertura."
          },
          {
            "t": "Corrigir o tópico do YouScan antes da 1ª noite",
            "s": "Sentimento 100% negativo na base de marca = configuração quebrada. Sem isso ajustado, o war room não distingue crise real de ruído durante os shows. Pedir ao admin do YouScan revisão das regras de sentimento/etiquetas hoje."
          }
        ],
        "acion": [
          "Publicar hoje, nos canais da marca e por e-mail/push à base de resgatadores KMV, o passo-a-passo de ativação do ingresso no app Quentro (conferir aba 'Próximos') com rota de suporte para quem não vê o ingresso.",
          "Fechar com o time do Espaço Ipiranga o plano anti-fila da pochete para 4/set: janelas de distribuição ao longo do dia, estoque reservado por dia e aviso de disponibilidade no local/social — avaliar senha/fila digital (benchmark Coca-Cola).",
          "Briefar e publicar até amanhã 14h o conteúdo 'a volta faz parte da parada': ônibus KMV (150 pontos), BRT Jaé R$ 29 ida e volta, metrô 24h e bloqueio viário 14h–5h.",
          "Publicar ainda hoje o conteúdo 'kit chuva + pochete' aproveitando a dúvida nº 1 da véspera (vai chover?) — pochete como item funcional para o 1º fim de semana.",
          "Abrir/cobrar o chamado de correção do sentimento no tópico MTT | IPIRANGA do YouScan e validar com um export novo amanhã cedo, antes do war room da 1ª noite."
        ]
      },
      "sources": [
        [
          "YouScan — base Notícias 'Rock in Rio' (export 03/09)",
          "https://youscan.io"
        ],
        [
          "YouScan — base MTT | Ipiranga × RiR (export 03/09)",
          "https://youscan.io"
        ],
        [
          "Aurora Cultural — ativação obrigatória no app Quentro",
          "https://auroracultural.com/noticias/musica/rock-in-rio-2026-so-entra-quem-ativar-o-ingresso-no-app-quentro/"
        ],
        [
          "Reclame AQUI — Rock in Rio (relatos de ingresso no Quentro)",
          "https://www.reclameaqui.com.br/empresa/rock-in-rio/"
        ],
        [
          "Tempo Real RJ — esquema de trânsito e transporte",
          "https://temporealrj.com/rock-in-rio-esquema-transito-transportes-evento/"
        ],
        [
          "Diário do Grande ABC — segurança e transporte",
          "https://www.dgabc.com.br/Noticia/4344494/rock-in-rio-2026-como-sera-o-esquema-de-seguranca-e-transporte-para-os-dias-de-festival"
        ],
        [
          "Meio & Mensagem — ativações das marcas",
          "https://www.meioemensagem.com.br/marketing/rock-in-rio-2026-ativacoes-marcas"
        ],
        [
          "Todo Dia um Rock — Espaço Ipiranga em detalhes",
          "https://tododiaumrock.com.br/rock-in-rio-2026-ipiranga-prepara-ativacoes-e-brindes-para-o-publico/rock-in-rio/"
        ],
        [
          "Mundo do Marketing — 89 anos da Ipiranga no RiR",
          "https://mundodomarketing.com.br/ipiranga-celebra-aniversario-de-89-anos-com-acoes-especiais-no-rock-in-rio"
        ],
        [
          "Experiência Musical — horários de todos os shows",
          "https://www.experienciamusical.com.br/post/rock-in-rio-2026-veja-os-hor%C3%A1rios-de-todos-os-shows-em-todos-os-palcos"
        ],
        [
          "Whiplash — Foo Fighters e Avenged de madrugada",
          "https://whiplash.net/materias/news_668/382002-foofighters.html"
        ],
        [
          "Billboard Brasil — playlist oficial do RiR 2026",
          "https://billboard.com.br/billboard-brasil-playlist-rock-in-rio-2026/"
        ],
        [
          "Sopa Cultural — evento teste",
          "https://sopacultural.com/rock-in-rio-2026-evento-teste-cidade-do-rock/"
        ],
        [
          "CNN Brasil — previsão do 1º fim de semana",
          "https://www.cnnbrasil.com.br/nacional/sudeste/rj/primeiro-fim-de-semana-do-rock-in-rio-deve-ter-frio-e-chuva-veja-previsao/"
        ],
        [
          "Tribuna do Sertão — promoção R$ 200",
          "https://www.tribunadosertao.com.br/financas/2026/08/31/970446-clientes-da-ipiranga-que-gastarem-r-200-podem-ganhar-ingresso-para-o-rock-in-rio"
        ],
        [
          "Pontos pra Voar — resgate KMV 400 pontos",
          "https://pontospravoar.com/urgkmv-libera-resgate-ingressos-rock-rio-2026-partir-400-pontos/"
        ],
        [
          "Ipiranga — página oficial da campanha",
          "https://www.ipiranga.com.br/wps/portal/en/ipiranga/a-ipiranga/campanhas-e-acoes/promocoes-e-ofertas/rock-in-rio"
        ]
      ],
      "owned": {
        "window": "Posts de 31/08 a 03/09/2026 · Instagram e TikTok",
        "updatedFrom": "coleta de 03/09 via perfis logados (Claude para Chrome) + classificação na taxonomia Ipiranga",
        "ims_formula": "IMS = (POSITIVO + 0,5 × NEUTRO − NEGATIVO) ÷ total × 100",
        "ims_geral": 81,
        "pol": {
          "POSITIVO": 47,
          "NEUTRO": 23,
          "NEGATIVO": 1
        },
        "tags": [
          [
            "Sobre a Promoção",
            34
          ],
          [
            "Dúvidas",
            15
          ],
          [
            "Intenção de compra/uso",
            13
          ],
          [
            "Sobre o Conteúdo",
            7
          ],
          [
            "Conversas/Sem contexto",
            6
          ],
          [
            "Percepção Marca - Ipiranga",
            4
          ],
          [
            "Emojis/Figuras/Gifs",
            3
          ],
          [
            "Resposta da Marca/SAC",
            3
          ],
          [
            "Sobre o Produto",
            3
          ],
          [
            "Elogio à Campanha",
            2
          ]
        ],
        "posts": [
          {
            "pid": "Dc0_x6Tzdyl",
            "date": "03/09",
            "rede": "Instagram",
            "tipo": "Reel",
            "tema": "Contagem regressiva / Parada Completa",
            "collab": "",
            "likes": 189,
            "coments": 11,
            "url": "https://www.instagram.com/p/Dc0_x6Tzdyl/",
            "amostra": 11,
            "pos": 1,
            "neu": 10,
            "neg": 0,
            "ims": 54.5,
            "topTags": [
              "Dúvidas",
              "Percepção Marca - Ipiranga"
            ]
          },
          {
            "pid": "Dcy8ApGMxuM",
            "date": "02/09",
            "rede": "Instagram",
            "tipo": "Reel",
            "tema": "Abastece e vai pro RiR (publi)",
            "collab": "@becca.orenstein",
            "likes": 485,
            "coments": 45,
            "url": "https://www.instagram.com/p/Dcy8ApGMxuM/",
            "amostra": 15,
            "pos": 12,
            "neu": 3,
            "neg": 0,
            "ims": 90,
            "topTags": [
              "Sobre o Conteúdo",
              "Conversas/Sem contexto"
            ]
          },
          {
            "pid": "DcwVrJxNVNu",
            "date": "01/09",
            "rede": "Instagram",
            "tipo": "Reel",
            "tema": "Blitz 300 ingressos — cobertura",
            "collab": "@billboardbr",
            "likes": 82,
            "coments": 14,
            "url": "https://www.instagram.com/p/DcwVrJxNVNu/",
            "amostra": 15,
            "pos": 13,
            "neu": 2,
            "neg": 0,
            "ims": 93.3,
            "topTags": [
              "Intenção de compra/uso",
              "Sobre o Conteúdo"
            ]
          },
          {
            "pid": "Dcv1-E7xpNt",
            "date": "01/09",
            "rede": "Instagram",
            "tipo": "Feed",
            "tema": "Concurso de frases criativas",
            "collab": "",
            "likes": 1400,
            "coments": 9200,
            "url": "https://www.instagram.com/p/Dcv1-E7xpNt/",
            "amostra": 15,
            "pos": 10,
            "neu": 5,
            "neg": 0,
            "ims": 83.3,
            "topTags": [
              "Sobre a Promoção",
              "Dúvidas"
            ]
          },
          {
            "pid": "DctoVb9TzDh",
            "date": "31/08",
            "rede": "Instagram",
            "tipo": "Feed",
            "tema": "Blitz Rádio Mix — R$200 + KMV",
            "collab": "",
            "likes": 668,
            "coments": 230,
            "url": "https://www.instagram.com/p/DctoVb9TzDh/",
            "amostra": 15,
            "pos": 11,
            "neu": 3,
            "neg": 1,
            "ims": 76.7,
            "topTags": [
              "Sobre a Promoção",
              "Intenção de compra/uso"
            ]
          }
        ],
        "alerts": [
          {
            "tone": "neg",
            "t": "🚨 TikTok da marca está parado desde 25/08",
            "s": "Varredura do @ipiranga no TikTok (115,7 mil seguidores, 1,7 mi de curtidas): <b>nenhuma publicação desde 25/08</b> — zero posts sobre Rock in Rio na semana de abertura. O canal que mais cresce e onde a caça aos brindes viraliza está silencioso justamente na janela de maior atenção ao festival."
          },
          {
            "tone": "neg",
            "t": "⚠️ Ansiedade pelo resultado do concurso domina os comentários de hoje",
            "s": "O post de contagem regressiva (03/09) virou canal de cobrança: <b>10 dos 11 comentários</b> perguntam pelo resultado do concurso de frases (\"Cadê o resultado?\", \"E quem ganhou?\", \"Quase tendo uma parada cardíaca esperando\"). O post do concurso somou <b>9,2 mil comentários</b> e a promessa de divulgação foi feita pelo próprio perfil em 02/09. Cada hora sem resultado converte expectativa em frustração às vésperas do festival."
          },
          {
            "tone": "neg",
            "t": "⚠️ Falha de operação na blitz do dia 01/09 (Barra da Tijuca)",
            "s": "Único comentário genuinamente negativo da amostra, com 10 curtidas: <i>\"uma falta de organização que eu nunca vi. cheguei cedo à toa... a própria moça da organização mandou eu sair tacando o carro\"</i>. Outro participante relata <b>2h30 de fila</b> (ainda assim positivo). É o mesmo padrão do alerta da pochete no evento teste: a operação de fila é o ponto fraco recorrente das ativações."
          },
          {
            "tone": "pos",
            "t": "✅ O concurso de frases produziu criativo de marca de graça",
            "s": "Os comentários do concurso são peças publicitárias escritas pelo público — \"encher o tanque do foguete do Rocketman com Ipimax\", \"de Gasoline vocês dois entendem\" (Halsey), \"tanque de esperança\". <b>Sobre a Promoção</b> é a tag nº 1 (34 ocorrências) e <b>Intenção de compra/uso</b> aparece 13 vezes: a mecânica não só engaja, ela puxa intenção declarada de abastecer."
          },
          {
            "tone": "pos",
            "t": "✅ Collabs performaram acima da média orgânica",
            "s": "O reel com <b>@becca.orenstein</b> (485 likes, 45 comentários) superou o post orgânico do mesmo período e concentrou elogio a conteúdo/influenciador, sem ruído de marca. Já o de <b>@billboardbr</b> (82 likes) rendeu menos alcance, mas trouxe relatos de quem participou da blitz — prova social qualificada."
          }
        ],
        "note": "Coleta de 03/09 via perfis logados (Claude para Chrome). <b>Instagram:</b> 5 posts sobre RiR no período. <b>TikTok:</b> perfil varrido — último post é de 25/08, nenhum na janela. Amostra classificada: 71 comentários (os visíveis nos posts) pelo classificador da skill Ipiranga + revisão humana de 20 casos de fronteira. A classificação completa dos 9,2 mil comentários do concurso depende da extração via ExportComments. IMS = (POSITIVO + 0,5 × NEUTRO − NEGATIVO) ÷ total × 100."
      },
      "influencia": {
        "window": "Publicações sobre Rock in Rio a partir de 01/09/2026",
        "updatedFrom": "coleta de 03/09 via perfis logados (Claude para Chrome) — 5 creators do planejamento 2026",
        "headline": "Nenhum dos 5 creators citou a Ipiranga em publicação sobre o Rock in Rio até agora.",
        "creators": [
          {
            "handle": "@divasuburbana",
            "nome": "Desirré Andrade",
            "status": "ativo",
            "posts": 7,
            "citouIpiranga": false,
            "resumo": "Única creator com cobertura contínua do festival. Publica guias de serviço (comida, Comfort Zone, New Dance Order) — formato de alta utilidade, exatamente o território que a marca quer ocupar."
          },
          {
            "handle": "@jeffmattias",
            "nome": "Jeff Mattias",
            "status": "1 post",
            "posts": 1,
            "citouIpiranga": false,
            "resumo": "Publicou a chegada ao festival, sem marca citada. Também publicou conteúdo do Lollapalooza/Globo no mesmo período."
          },
          {
            "handle": "@cassialourencogomes",
            "nome": "Cássia Lourenço",
            "status": "silencioso",
            "posts": 0,
            "citouIpiranga": false,
            "resumo": "Nenhuma publicação sobre RiR. No período, citou @bidayaparfums.br, Red Bull e @dominickjoias."
          },
          {
            "handle": "@camilatrianda",
            "nome": "Camila Trianda",
            "status": "silencioso",
            "posts": 0,
            "citouIpiranga": false,
            "resumo": "Nenhuma publicação sobre RiR. No período, citou @fokka e @vestidapelabia."
          },
          {
            "handle": "@vittorfernando",
            "nome": "Vittor Fernando",
            "status": "silencioso",
            "posts": 0,
            "citouIpiranga": false,
            "resumo": "Nenhuma publicação sobre RiR. No período, citou @balenciaga, @ferragamo, @louisvuitton e @piet_org."
          }
        ],
        "posts": [
          {
            "date": "03/09",
            "handle": "@divasuburbana",
            "tipo": "Feed",
            "tema": "Guia de comidas da Cidade do Rock",
            "likes": 1700,
            "coments": null,
            "shares": null,
            "marcas": [],
            "collab": "",
            "url": "https://www.instagram.com/p/Dc1El1YoCNN/"
          },
          {
            "date": "03/09",
            "handle": "@divasuburbana",
            "tipo": "Reel",
            "tema": "New Dance Order — dica de fluxo/saída",
            "likes": null,
            "coments": null,
            "shares": null,
            "marcas": [],
            "collab": "",
            "url": "https://www.instagram.com/reel/Dc05rD8MesR/"
          },
          {
            "date": "02/09",
            "handle": "@divasuburbana",
            "tipo": "Reel",
            "tema": "COMEÇOU ♥️ — chegada ao festival",
            "likes": 5800,
            "coments": null,
            "shares": 268,
            "marcas": [
              "@rockinrio"
            ],
            "collab": "",
            "url": "https://www.instagram.com/p/DczYZZbstIh/"
          },
          {
            "date": "02/09",
            "handle": "@divasuburbana",
            "tipo": "Reel",
            "tema": "Comfort Zone: como e onde é",
            "likes": null,
            "coments": null,
            "shares": null,
            "marcas": [],
            "collab": "@erijakson",
            "url": "https://www.instagram.com/reel/DczA1jYK2OM/"
          },
          {
            "date": "02/09",
            "handle": "@divasuburbana",
            "tipo": "Reel",
            "tema": "O Rock in Rio está pronto!",
            "likes": null,
            "coments": null,
            "shares": null,
            "marcas": [],
            "collab": "",
            "url": "https://www.instagram.com/reel/Dcy6cmMM7Tt/"
          },
          {
            "date": "02/09",
            "handle": "@divasuburbana",
            "tipo": "Reel",
            "tema": "Adorei essa ideia!!!",
            "likes": null,
            "coments": null,
            "shares": null,
            "marcas": [],
            "collab": "",
            "url": "https://www.instagram.com/reel/DczhYN6Mjt0/"
          },
          {
            "date": "02/09",
            "handle": "@jeffmattias",
            "tipo": "Reel",
            "tema": "Rock in Rio 2026 vai começar, agora é oficial",
            "likes": 2642,
            "coments": 49,
            "shares": 36,
            "marcas": [],
            "collab": "4 perfis",
            "url": "https://www.instagram.com/p/DczZkUqJa27/"
          },
          {
            "date": "01/09",
            "handle": "@divasuburbana",
            "tipo": "Reel",
            "tema": "Beats Pink Lemonade confirmada — looks",
            "likes": 1800,
            "coments": null,
            "shares": null,
            "marcas": [
              "Beats"
            ],
            "collab": "",
            "url": "https://www.instagram.com/p/DcxMpKpNTv6/"
          }
        ],
        "alerts": [
          {
            "tone": "neg",
            "t": "🚨 Zero menções à Ipiranga nos creators, na véspera do festival",
            "s": "Das 8 publicações sobre Rock in Rio mapeadas nos 5 perfis desde 01/09, <b>nenhuma cita ou marca a Ipiranga</b>. As marcas que aparecem nesses posts são <b>@rockinrio</b> e <b>Beats</b>. Se há entregáveis contratados, eles ainda não saíram — e a janela de esquenta acabou."
          },
          {
            "tone": "neg",
            "t": "🚨 3 dos 5 creators não publicaram nada sobre o festival",
            "s": "@cassialourencogomes, @camilatrianda e @vittorfernando seguem postando conteúdo de outras marcas (@bidayaparfums.br, Red Bull, @fokka, @balenciaga, @ferragamo, @louisvuitton) sem nenhuma menção ao Rock in Rio. Vale checar hoje se o contrato prevê publicação só durante o evento."
          },
          {
            "tone": "pos",
            "t": "✅ @divasuburbana é o ativo mais forte — e está no território certo",
            "s": "7 publicações de cobertura contínua, com o reel de chegada em <b>5,8 mil curtidas e 268 compartilhamentos</b>. O conteúdo dela é guia de serviço (comida, Comfort Zone, fluxo de saída) — o mesmo território de utilidade que a Ipiranga quer ocupar. É a parceira natural para levar o Espaço Ipiranga para dentro de um roteiro de 'o que fazer na Cidade do Rock'."
          },
          {
            "tone": "neg",
            "t": "⚠️ Concorrente já apareceu na conversa dos creators",
            "s": "Nos comentários do post de @jeffmattias, uma seguidora relata: <i>\"Acabei de sair de lá, fui pela C&A convidada!\"</i> — a C&A já está convertendo convidados em prova social espontânea enquanto a Ipiranga não aparece nos perfis contratados."
          }
        ],
        "note": "Coleta manual pelos perfis logados em 03/09. Métricas em branco são posts cujo contador não estava exposto na leitura do grid — serão preenchidos na próxima rodada. A tag de marcas considera perfis marcados na legenda e marcas nomeadas no texto. Os 5 perfis são os creators do planejamento 2026 informados pelo time."
      }
    },
    {
      "date": "02/09/2026",
      "dateISO": "2026-09-02",
      "weekday": "quarta-feira",
      "edition": 10,
      "phase": "pré-evento",
      "pulse": [
        "🟡 <b>D-2 — e o concurso da Ipiranga fecha hoje às 17h.</b> Os 100 pares de gramado por comentário com 'Ipiranga' e 'Parada Completa' encerram a janela de participação nesta quarta; a apuração e o anúncio dos ganhadores até amanhã são a última entrega da marca antes dos portões abrirem. Da ação de ontem no posto da Barra (300 ingressos, 9h–12h), nenhuma cobertura de resultado foi localizada na imprensa até o fechamento — o recap oficial é da marca, e ainda está em aberto.",
        "🌦️ <b>A previsão consolidou — e o domingo virou o pior dia.</b> Sexta segue seca e quente (30–34°C conforme a fonte, chuva só de madrugada); sábado tem 85% de chance de chuva rápida (20–23°C); o domingo 6 despencou para 16–19°C com 16,8 mm e rajadas de 50 km/h; e o 7/set — dia dos 89 anos, esgotado com Elton John e Gilberto Gil — tem 80% de chance de chuva, mas volume baixo (2,7 mm) e tendência de tempo firme à noite, justamente na hora do Palco Mundo.",
        "🚨 <b>Rio divulga a operação de segurança: mais de 7 mil profissionais e 800 câmeras.</b> Esquema publicado ontem prevê 4.500 PMs, 725 policiais civis na Cidade do Rock, 16 pontos de bloqueio, centro de controle de drones e guarda municipal em operação de 18 dias, para ~100 mil pessoas/dia. Com bloqueios a partir das 14h, 'chegue cedo' vira mensagem de serviço — e a tese da parada no posto ganha contexto de utilidade real."
      ],
      "news": [
        {
          "t": "Esquema de segurança divulgado: mais de 7 mil profissionais, 800 câmeras e 16 bloqueios",
          "src": "Jovem Pan / Rádio Itatiaia",
          "when": "1/set",
          "s": "A operação para os 7 dias prevê 4.500 policiais militares, 725 policiais civis dentro da Cidade do Rock, 6 pontos de atendimento para registro de ocorrências, centro de controle aéreo para drones não autorizados, 800 câmeras sobre vias, bloqueios e pontos de embarque, e 4.708 guardas municipais em operação de 18 dias. Público estimado em ~100 mil pessoas/dia; BRT dimensionado para 35–40 mil/dia (R$ 29 pelo Jaé), metrô 24h a R$ 7,90 e VLT a R$ 5.",
          "u": "https://jovempan.com.br/entretenimento/rock-in-rio-2026-saiba-como-sera-o-esquema-de-seguranca-e-transporte-para-os-dias-de-festival/"
        },
        {
          "t": "Previsão consolidada: sexta seca e quente, domingo agora é o dia mais frio e chuvoso, 7/set melhora à noite",
          "src": "Super Rádio Tupi / InfoMoney (Climatempo)",
          "when": "1/set",
          "s": "Sexta 4: sem chuva no horário de shows, máxima entre 30°C (Tupi) e 34°C (InfoMoney/Alerta Rio), chuva só no fim da madrugada. Sábado 5: 85% de chance, 7,2 mm, 20–23°C, rajadas fortes. Domingo 6: o pior dia — 16–19°C, 16,8 mm (84% de chance), rajadas de até 50 km/h e risco de lama. Segunda 7/set: 80% de chance mas volume menor (2,7 mm), 15–19°C e tendência de tempo firme à noite. Guarda-chuva segue proibido; capa de chuva, protetor solar até 100 ml e garrafa plástica de até 500 ml estão liberados.",
          "u": "https://www.tupi.fm/rio/vai-ao-rock-in-rio-confira-a-previsao-do-tempo-para-o-primeiro-fim-de-semana/"
        },
        {
          "t": "Propmark consolida a corrida dos brindes: ~1 milhão de itens, e a Ipiranga entre os maiores volumes",
          "src": "propmark",
          "when": "28/ago",
          "s": "O trade estima ~1 milhão de brindes nos 7 dias, com 90+ marcas e 14 patrocinadores oficiais. Ipiranga aparece com ~30 mil leques amarelos e pochetes customizáveis com pins; Itaú com 100 mil copos colecionáveis; C&A com minicâmeras, leques e bolsas; Doritos, KitKat, Natura e TIM disputam o mesmo território de pochetes, pins e charms. O leque e a pochete da Ipiranga concorrem em categoria disputada — o diferencial é o gatilho KMV (cliente cadastrado).",
          "u": "https://propmark.com.br/anunciantes/rock-in-rio-quais-sao-os-brindes-distribuidos-pelos-patrocinadores/"
        },
        {
          "t": "Cidade do Rock em ajustes finais: Palco Mundo com 107 m de largura, 2.400 m² de LED e 3,2 milhões de watts",
          "src": "Jornal Expresso Carioca",
          "when": "28/ago",
          "s": "Reta final de montagem com testes de iluminação e LED. A nova cenografia do Palco Mundo soma 16,85 toneladas, boca de cena de 24 m e 200 amplificadores. Voltam roda-gigante, tirolesa, montanha-russa e o espetáculo aéreo The Flight (756 disparos de fogos diurnos). O app oficial ganhou compartilhamento de programação no Instagram e compra antecipada de A&B — mais um concorrente pela atenção do público na fila.",
          "u": "https://www.expressocarioca.com.br/rock-in-rio-2026-entra-na-reta-final-e-cidade-do-rock-ganha-os-ultimos-ajustes-antes-da-abertura/"
        },
        {
          "t": "7 de setembro esgotado: Elton John, Gilberto Gil e Jon Batiste no dia dos 89 anos da Ipiranga",
          "src": "Rock on Board",
          "when": "ago/26",
          "s": "O dia 7/set foi o quarto a esgotar, puxado pela única apresentação de Elton John no país em 2026 e por Gilberto Gil no Palco Mundo. Para a Ipiranga, é o cenário de aniversário com casa cheia garantida — e, pela previsão atual, com chuva fraca de dia e tempo firme à noite, o que favorece concentrar o momento de celebração no período noturno.",
          "u": "https://www.rockonboard.com.br/2026/08/rock-in-rio-7-setembro-esgotado-elton-john.html"
        }
      ],
      "ipiranga": [
        {
          "t": "Concurso do Instagram encerra hoje às 17h — a apuração é a entrega do dia",
          "src": "Aurora Cultural",
          "when": "31/ago–2/set",
          "s": "Fecha às 17h a janela de comentários com 'Ipiranga' e 'Parada Completa' valendo 100 pares de gramado. O pico de menções vira passivo se a apuração demorar: o padrão do formato é enxurrada de 'como sei se ganhei?' e acusação de favorecimento. Anúncio rápido (idealmente até amanhã, véspera), critério explicado no post de resultado e resposta padrão para não contemplados convertem o volume em prova social — e os melhores comentários viram conteúdo de esquenta gratuito.",
          "u": "https://auroracultural.com/noticias/musica/abastecimento-garante-ingressos-para-o-rock-in-rio-em-acao-especial/"
        },
        {
          "t": "Ação do posto da Barra: sem cobertura de resultado na imprensa — o recap é da marca",
          "src": "Agência O Globo (via Tribuna do Sertão); verificação desta edição",
          "when": "31/ago–2/set",
          "s": "Até o fechamento desta edição, nenhum veículo publicou resultado da ação de ontem (300 ingressos, 9h–12h, Av. das Américas 10.495): sem registro de fila, hora de esgotamento ou reação dos ganhadores. A leitura é dupla: não houve crise que virasse pauta — e também não houve pauta espontânea. O recap oficial (números próprios, fotos da fila, ganhadores) é a única forma de a ação existir publicamente antes da sexta, e é a marca quem controla essa narrativa. Sem recap, a ação evapora.",
          "u": "https://www.tribunadosertao.com.br/financas/2026/08/31/970446-clientes-da-ipiranga-que-gastarem-r-200-podem-ganhar-ingresso-para-o-rock-in-rio"
        },
        {
          "t": "Na corrida dos brindes, o leque é commodity — o gatilho KMV é o que diferencia",
          "src": "propmark / GKPB",
          "when": "28–31/ago",
          "s": "O consolidado do trade coloca a Ipiranga entre os maiores volumes físicos (~30 mil leques e pochetes com pins), mas C&A também distribui leque, e Doritos, Natura, TIM e KitKat disputam pochetes, pins e charms. O que nenhum concorrente tem: retirada condicionada ao cadastro KMV — cada brinde é um lead. A sinalização no espaço e o roteiro de creators devem tratar o cadastro como parte da experiência ('baixou, pegou'), não como pedágio, para a fila não virar reclamação.",
          "u": "https://propmark.com.br/anunciantes/rock-in-rio-quais-sao-os-brindes-distribuidos-pelos-patrocinadores/"
        },
        {
          "t": "GKPB descreve o espaço como hub do ecossistema: AmPm, Jet Oil e KMV na mesma narrativa",
          "src": "GKPB — Geek Publicitário",
          "when": "31/ago",
          "s": "A cobertura reforça o posicionamento: Espaço Ipiranga 'completamente renovado' como principal ponto de contato, conectando a experiência do festival aos serviços do ecossistema (AmPm, Jet Oil, KMV) sob o conceito 'a parada é completa'. É a moldura certa para a semana: a marca não disputa palco, disputa jornada — posto na ida, espaço como parada climatizada, KMV como fio condutor de brinde, recarga e transfer.",
          "u": "https://gkpb.com.br/197580/rock-in-rio-2026-conheca-os-estandes-e-as-experiencias-oferecidas-pelas-marcas-durante-o-festival/"
        },
        {
          "t": "89 anos no 7/set: casa cheia (esgotado), chuva fraca de dia e tempo firme à noite — o momento é noturno",
          "src": "Rock on Board / Super Rádio Tupi",
          "when": "1/set",
          "s": "O aniversário cai no dia esgotado de Elton John e Gilberto Gil, com previsão de 80% de chance de chuva porém volume baixo (2,7 mm) e melhora à noite. Tradução operacional: programação de celebração diurna precisa de plano coberto (o espaço com fila climatizada é o abrigo natural), e o momento-assinatura dos 89 anos — bolo, telão, Glambot temática — rende mais entre o fim de tarde e a entrada de Elton John, quando o tempo tende a firmar e a Cidade do Rock estará lotada.",
          "u": "https://www.rockonboard.com.br/2026/08/rock-in-rio-7-setembro-esgotado-elton-john.html"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set — nesta sexta. A partir da manhã de sábado (5/set), a repercussão de cada noite (melhores shows, momentos virais, críticas da imprensa) entra aqui, dia a dia.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "D-2: contagem regressiva e a pergunta 'que horas abrem os portões?'",
            "s": "A conversa de véspera é operacional — horários dos palcos (Foo Fighters à 00h05 gera o 'show de sexta que termina sábado'), bloqueios a partir das 14h e o esquema de 7 mil agentes divulgado ontem; pauta de serviço domina sobre pauta musical.",
            "u": "https://jovempan.com.br/entretenimento/rock-in-rio-2026-saiba-como-sera-o-esquema-de-seguranca-e-transporte-para-os-dias-de-festival/"
          },
          {
            "t": "'Domingo vai ser o pior dia': a previsão reorganiza a conversa do clima",
            "s": "Com a atualização de ontem, o medo da chuva migrou do sábado para o domingo (16–19°C, 16,8 mm, rajadas) — quem vai no dia de Calvin Harris fala de frio e lama; quem vai sexta comemora o dia seco; o 7/set esgotado ganha o alívio do 'melhora à noite'.",
            "u": "https://www.tupi.fm/rio/vai-ao-rock-in-rio-confira-a-previsao-do-tempo-para-o-primeiro-fim-de-semana/"
          },
          {
            "t": "Última chamada do concurso da Ipiranga circula como 'ainda dá tempo'",
            "s": "A mecânica 'siga e comente até 17h de hoje' roda como dica de última hora para quem ficou sem ingresso de gramado — a marca concentra as menções da véspera, e a dúvida dominante nos comentários é quando sai o resultado.",
            "u": "https://auroracultural.com/noticias/musica/abastecimento-garante-ingressos-para-o-rock-in-rio-em-acao-especial/"
          }
        ],
        "tiktok": [
          {
            "t": "Checklist final: o vídeo de 'arrumando a mochila' assume o feed",
            "s": "Na véspera, o formato migra de 'o que levar' para 'arrumando a mochila para sexta': capa de chuva, garrafa de até 500 ml, comida lacrada, carregador — com a variação 'mochila para o dia de sol (sexta) vs. dia de lama (domingo)'.",
            "u": "https://www.infomoney.com.br/consumo/rock-in-rio-2026-veja-como-estara-o-tempo-e-saiba-o-que-pode-ou-nao-levar/"
          },
          {
            "t": "Páginas de discover do festival aquecem sem dado público de ranking",
            "s": "As páginas de descoberta do TikTok já agregam conteúdo por dia do festival e por atração ('dia do trap', 'artistas confirmados', tutoriais do Quentro) — sinal de busca ativa na plataforma, ainda sem métrica pública de views por hashtag para citar.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          },
          {
            "t": "Roteiro de brindes ganha versão 'quanto vale': 1 milhão de itens viram caça organizada",
            "s": "Com o consolidado do propmark circulando, os vídeos de 'ordem certa dos estandes' agora citam volume (100 mil copos do Itaú, 30 mil leques da Ipiranga) e criam senso de escassez — 'chega cedo que acaba' beneficia quem tem estoque atrelado a cadastro, não a sorte.",
            "u": "https://propmark.com.br/anunciantes/rock-in-rio-quais-sao-os-brindes-distribuidos-pelos-patrocinadores/"
          }
        ],
        "instagram": [
          {
            "t": "Perfil da Ipiranga vive as últimas horas de pico do concurso",
            "s": "Até as 17h de hoje, o post do concurso segue como o maior volume de interação da marca na semana; o corte natural do dia é a curadoria dos comentários mais criativos — e o anúncio dos 100 pares é o conteúdo mais aguardado do perfil.",
            "u": "https://auroracultural.com/noticias/musica/abastecimento-garante-ingressos-para-o-rock-in-rio-em-acao-especial/"
          },
          {
            "t": "Marcas em modo 'tour pelo espaço': a janela de bastidor fecha amanhã",
            "s": "Itaú, Heineken e C&A dominam os feeds com tour e making of de seus espaços na véspera; o bastidor da montagem do Espaço Ipiranga — corredor instagramável, Glambot, fachada de LED — ainda não apareceu como conteúdo e tem só até amanhã para estrear antes do festival.",
            "u": "https://gkpb.com.br/197580/rock-in-rio-2026-conheca-os-estandes-e-as-experiencias-oferecidas-pelas-marcas-durante-o-festival/"
          }
        ],
        "sounds": [
          {
            "t": "Foo Fighters — a trilha do D-2",
            "s": "\"Everlong\", \"The Pretender\" e \"My Hero\" seguem nos edits de contagem regressiva; o corte da entrevista de Grohl ao Fantástico ('vai ser uma loucura total') continua sendo o áudio de expectativa da abertura."
          },
          {
            "t": "Elton John — o 7/set esgotado como evento histórico",
            "s": "\"Rocket Man\", \"I'm Still Standing\" e \"Your Song\" embalam vídeos de 'vou ver o Elton John' do dia esgotado — agora com o subtexto de noite firme depois de dia chuvoso."
          },
          {
            "t": "Avenged Sevenfold e BMTH — o sábado de rock pesado sob chuva",
            "s": "\"Hail to the King\" e \"Can You Feel My Heart\" seguem nos vídeos de quem vai sábado — dia que ainda tem ingresso e que agora carrega o aviso de chuva rápida e rajadas."
          }
        ],
        "note": "Fase pré-evento: leitura editorial a partir de imprensa, páginas públicas de discover e perfis oficiais — sem dado quantitativo de plataforma (X, TikTok, Instagram) com fonte disponível nesta data. Durante o festival, esta aba passa a trazer os trending topics e vídeos mais vistos de cada noite."
      },
      "direcionais": {
        "leitura": "D-2 com três definições: o concurso do Instagram fecha hoje às 17h (última entrega da marca antes dos portões); a ação de ontem no posto não gerou cobertura espontânea de resultado — o recap oficial é a única narrativa disponível e está em aberto; e a previsão consolidou um mapa por dia (sexta seca e quente, sábado de chuva rápida, domingo frio e chuvoso como pior dia, 7/set com chuva fraca e noite firme). No entorno, a cidade publicou a operação de segurança (7 mil profissionais, bloqueios às 14h) — que transforma 'chegue cedo' em mensagem de serviço legítima para a marca do caminho — e o trade consolidou a corrida de ~1 milhão de brindes, na qual o leque da Ipiranga é commodity e o gatilho KMV é o diferencial. A janela de bastidor do espaço fecha amanhã: depois disso, quem contar a história do Espaço Ipiranga será o público.",
        "dirs": [
          {
            "t": "O resultado do concurso é a última impressão antes da sexta",
            "s": "Entre as 17h de hoje e o anúncio, cada hora sem resposta alimenta 'como sei se ganhei?' e a tese de favorecimento. Apuração ainda hoje, anúncio até amanhã com critério explicado no próprio post e resposta padrão para não contemplados — o pico de menções da semana precisa terminar em prova social, não em Reclame Aqui."
          },
          {
            "t": "Sem recap, a ação do posto não existiu",
            "s": "A imprensa não pautou o resultado dos 300 ingressos — nem bem, nem mal. Isso devolve a narrativa à marca: números próprios (hora de esgotamento, abastecimentos no período), imagens da fila e reação de ganhadores publicados hoje viram o 'case de véspera' que o trade procura para fechar a semana pré-festival. Só não vale inventar métrica: o que não foi medido não entra."
          },
          {
            "t": "O mapa do clima agora é operacional: um kit por dia, e o 7/set é noturno",
            "s": "Sexta seca e quente = leque + hidratação; sábado = capa de chuva na entrada; domingo é o dia de teste máximo do abrigo (16–19°C, lama) = fila climatizada como refúgio anunciado; 7/set = celebração dos 89 anos concentrada do fim de tarde em diante, quando o tempo tende a firmar e a casa esgotada estará cheia. Cada dia com um item-herói e uma mensagem — não um kit genérico."
          },
          {
            "t": "Bloqueios às 14h transformam a parada no posto em utilidade, não em publicidade",
            "s": "Com 16 bloqueios, leitura de placas e estacionamento proibido no entorno, o posto Ipiranga do caminho é a última parada legítima antes do perímetro. Comunicar 'abasteça, use o banheiro, compre água lacrada na AmPm antes do bloqueio' é serviço real que só esta marca pode prestar — e conecta o filme 'a parada é completa' à experiência concreta de sexta."
          },
          {
            "t": "Brinde com cadastro é lead — desde que a fila não vire pauta",
            "s": "Na corrida de 1 milhão de brindes, o volume da Ipiranga é grande mas não exclusivo; o vínculo ao KMV é o único mecanismo que converte brinde em relacionamento. O risco espelhado: se o cadastro travar a fila no domingo frio, a pauta vira 'burocracia para pegar leque'. Fluxo de cadastro pré-fila (QR na fila climatizada, wi-fi no espaço) é o detalhe que decide se o KMV é ativo ou atrito."
          }
        ],
        "acion": [
          "Hoje, até 17h: última chamada do concurso nos stories (2–3 cortes com os comentários mais criativos); às 17h, congelar prints da mecânica e do regulamento; apuração ainda hoje e anúncio dos 100 pares até amanhã com critério explicado e resposta padrão para não contemplados.",
          "Hoje: fechar e publicar o recap oficial da ação do posto da Barra — hora de esgotamento dos 300, imagens de fila e entrega, depoimento de ganhador — e ofertar ao trade (Meio & Mensagem, propmark, Promoview) como case de véspera; sem dado medido, publicar só o registro visual, sem números.",
          "Hoje/amanhã: travar o kit clima por dia (sexta: leque + água; sábado: capa; domingo: capa + operação de abrigo reforçada; 7/set: poncho/capa dos 89 anos conforme go/no-go de ontem) e briefar creators para gravar o conteúdo de chegada na janela seca de sexta à tarde.",
          "Amanhã (véspera): estrear o tour/bastidor do Espaço Ipiranga — corredor, Glambot com fachada de LED, fila climatizada, Bar AmPm — antes da abertura, ocupando a janela que Itaú, Heineken e C&A já usam; headline: 'a única fila com ar-condicionado da Cidade do Rock'.",
          "Sexta, desde 12h: ativar mensagem de serviço 'pare no posto antes do bloqueio das 14h' (abastecimento, banheiro, água lacrada AmPm, transfer por 150 pontos KMV) nos canais da marca e no roteiro dos creators de chegada; war room ligado desde a abertura dos portões com a régua 'tempo de fila × clima' testada."
        ]
      },
      "sources": [
        [
          "Jovem Pan — esquema de segurança e transporte do Rock in Rio 2026 (01/09)",
          "https://jovempan.com.br/entretenimento/rock-in-rio-2026-saiba-como-sera-o-esquema-de-seguranca-e-transporte-para-os-dias-de-festival/"
        ],
        [
          "Rádio Itatiaia — Prefeitura divulga esquema especial de trânsito e transporte (01/09)",
          "https://www.itatiaia.com.br/brasil/sudeste/rj/rock-in-rio-2026-prefeitura-divulga-esquema-especial-de-transito-e-transporte-no-rio/"
        ],
        [
          "Super Rádio Tupi — previsão do tempo para o primeiro fim de semana (01/09)",
          "https://www.tupi.fm/rio/vai-ao-rock-in-rio-confira-a-previsao-do-tempo-para-o-primeiro-fim-de-semana/"
        ],
        [
          "InfoMoney — como estará o tempo e o que pode ou não levar (01/09)",
          "https://www.infomoney.com.br/consumo/rock-in-rio-2026-veja-como-estara-o-tempo-e-saiba-o-que-pode-ou-nao-levar/"
        ],
        [
          "propmark — quais são os brindes distribuídos pelos patrocinadores (28/08)",
          "https://propmark.com.br/anunciantes/rock-in-rio-quais-sao-os-brindes-distribuidos-pelos-patrocinadores/"
        ],
        [
          "Jornal Expresso Carioca — Cidade do Rock ganha os últimos ajustes (28/08)",
          "https://www.expressocarioca.com.br/rock-in-rio-2026-entra-na-reta-final-e-cidade-do-rock-ganha-os-ultimos-ajustes-antes-da-abertura/"
        ],
        [
          "GKPB — estandes e experiências das marcas no festival (31/08)",
          "https://gkpb.com.br/197580/rock-in-rio-2026-conheca-os-estandes-e-as-experiencias-oferecidas-pelas-marcas-durante-o-festival/"
        ],
        [
          "Promoview — 8 mil horas de experiência de marca; o que cada patrocinadora prepara (29/08)",
          "https://www.promoview.com.br/ativacoes-marcas-rock-in-rio-2026/"
        ],
        [
          "Rock on Board — 7/set esgota com Elton John, Gilberto Gil e Jon Batiste (ago/26)",
          "https://www.rockonboard.com.br/2026/08/rock-in-rio-7-setembro-esgotado-elton-john.html"
        ],
        [
          "Aurora Cultural — ação no posto + concurso no Instagram até 17h de 2/9 (31/08)",
          "https://auroracultural.com/noticias/musica/abastecimento-garante-ingressos-para-o-rock-in-rio-em-acao-especial/"
        ],
        [
          "Agência O Globo via Tribuna do Sertão — 300 ingressos no posto da Barra (31/08)",
          "https://www.tribunadosertao.com.br/financas/2026/08/31/970446-clientes-da-ipiranga-que-gastarem-r-200-podem-ganhar-ingresso-para-o-rock-in-rio"
        ],
        [
          "TikTok Discover — páginas públicas de descoberta do Rock in Rio (consulta 02/09)",
          "https://www.tiktok.com/discover/rock-in-rio"
        ]
      ]
    },
    {
      "date": "01/09/2026",
      "dateISO": "2026-09-01",
      "weekday": "terça-feira",
      "edition": 9,
      "phase": "pré-evento",
      "pulse": [
        "🟡 <b>Faltam 3 dias — e a Ipiranga entra em campo hoje.</b> Das 9h às 12h, o posto da Av. das Américas 10.495 (Barra) entrega 300 ingressos de gramado aos primeiros clientes que abastecerem R$ 200 em Ipimax; ao meio-dia começa o concurso no Instagram (100 pares de gramado para frases com 'Ipiranga' e 'Parada Completa', até 17h de amanhã). É o primeiro fato próprio da marca na semana do festival — e o primeiro teste real de fila, pico de menções e war room antes da sexta.",
        "🌧️ <b>A previsão virou: sexta de calor, frente fria no sábado.</b> Alerta Rio projeta 4/set sem chuva e com 34°C; Climatempo coloca chuva rápida e 20–23°C no sábado 5, e a imprensa fala em rajadas de até 60 km/h, lama e chuva intermitente até 7/set. O dia dos 89 anos pode ser dia de capa de chuva (guarda-chuva é proibido) — a decisão do poncho, pendente desde a edição #6, precisa sair hoje.",
        "🏁 <b>O trade publicou o mapa final das ativações — e o Espaço Ipiranga aparece com 'fila em ambiente climatizado'.</b> Meio & Mensagem (hoje) descreve o espaço com corredor instagramável, Glambot cujo vídeo vai para a fachada de LED, Bar AmPm (chope, água, refrigerante) e Recarga KMV; a pergunta de ontem ('qual o modelo de acesso?') tem resposta pública. No entorno, C&A volta como copatrocinadora do Sunset com Glambot própria e a Iguá coloca 100 aguadeiros/vaporizadores das 9h às 17h."
      ],
      "news": [
        {
          "t": "Meio & Mensagem publica o mapa final: o que cada marca leva à Cidade do Rock",
          "src": "Meio & Mensagem",
          "when": "1/set",
          "s": "Roteiro consolidado das 100+ ativações a três dias da abertura: Ipiranga (corredor instagramável, fila em ambiente climatizado, Glambot com exibição na fachada de LED, Bar AmPm, Recarga KMV, ~30 mil leques e pochetes com pins para clientes KMV cadastrados), Itaú (pavilhão de 1.000 m² em 3 andares, 25 anos de parceria, roda-gigante, 100 mil copos, Listening Club), Heineken (15 anos, 700 mil litros de chope, The Clinker), Coca-Cola (fila digital, MiniCD com NFC, copos que dão acesso à área VIP), Natura (estande 'organismo vivo' de Marko Brajovic), TIM (TIM House + estande de 3 andares), iFood (4 espaços + montanha-russa), AXIA (Immersive Grid), KitKat (Breakômetro + agendamento por QR), C&A e Globoplay.",
          "u": "https://www.meioemensagem.com.br/marketing/rock-in-rio-2026-ativacoes-marcas"
        },
        {
          "t": "Frente fria chega no sábado: sexta com 34°C, chuva e vento a partir de 5/set, instabilidade até 7/set",
          "src": "Climatempo / Alerta Rio / Brasil em Folhas",
          "when": "1/set",
          "s": "A previsão estendida do Alerta Rio indica 4/set parcialmente nublado, sem chuva, 16–34°C. A Climatempo projeta para sábado 5 'sol com algumas nuvens, chove rápido durante o dia e à noite', 20–23°C e 7,2 mm. A cobertura de imprensa (citando Climatempo e COR) fala em pancadas fortes à tarde/noite de sábado com rajadas de até 60 km/h, risco de empoçamento e lama, domingo nublado com chuva intermitente (máx. 24°C) e segunda 7/set entre 16 e 25°C com chuva ainda possível e tendência de melhora. Guarda-chuva e sombrinha são proibidos na Cidade do Rock; só capa de chuva.",
          "u": "https://www.brasilemfolhas.com.br/2026/09/chuvas-e-ventos-fortes-marcam-primeiro-fim-de-semana-do-rock-in-rio/"
        },
        {
          "t": "Iguá coloca 100 aguadeiros e vaporizadores circulando das 9h às 17h",
          "src": "Rock on Board",
          "when": "1/set",
          "s": "A concessionária de saneamento do Rio anuncia operação de hidratação em todos os dias do festival: 100 profissionais distribuindo água gelada em garrafas e copos biodegradáveis e borrifando água no público, pontos de hidratação copatrocinados, laboratório móvel de qualidade da água e ~100 colaboradores na operação de abastecimento e esgoto. O serviço cobre o período de sol (9h–17h); à noite, a água volta a ser item de bar e de ativação.",
          "u": "https://www.rockonboard.com.br/2026/09/rock-in-rio-100-aguadeiros-vaporizadores.html"
        },
        {
          "t": "C&A volta como copatrocinadora do Palco Sunset e assume o 'look oficial' da edição",
          "src": "Meio & Mensagem",
          "when": "31/ago",
          "s": "Terceira edição consecutiva da varejista no Sunset (2022, 2024, 2026). Estande com customização de jaquetas, cabine de fotos com Glambot, jogos interativos e brindes (mini câmeras, leques, bolsas, jaquetas jeans, bonés, meias). Coleção oficial com 100+ itens, linha de merchandising e colaboração com estilista ainda não revelado, vendida só no festival — a C&A disputa a mesma foto (Glambot) e o mesmo brinde utilitário (leque) da Ipiranga.",
          "u": "https://www.meioemensagem.com.br/marketing/ca-volta-ao-palco-sunset-como-co-patrocinadora"
        },
        {
          "t": "Dave Grohl no Fantástico: 'no Brasil acontecem nossos maiores shows' — repercussão abre a semana",
          "src": "Rolling Stone Brasil / Fantástico (via Tribuna do Sertão)",
          "when": "30–31/ago",
          "s": "A entrevista exibida no domingo (repórter Carolina Cimenti) rendeu as manchetes de segunda: 'vai ser uma loucura total', a influência da mãe, a filha Violet estreando em disco e a música como resposta às perdas (mãe e Taylor Hawkins). Foo Fighters abre o Palco Mundo em 4/set, dia que ainda tem ingresso, e volta ao Brasil em fevereiro (BH e SP) — o show do Rio segue exclusivo em 2026.",
          "u": "https://rollingstone.com.br/musica/dave-grohl-fala-ao-fantastico-sobre-musica-familia-e-rock-in-rio/"
        },
        {
          "t": "Esquema de mobilidade consolidado: BRT R$ 29 pelo Jaé, metrô 24h no Jardim Oceânico, bloqueios das 14h às 5h",
          "src": "InfoMoney / Rádio Manchete Rio (FGV)",
          "when": "28–30/ago",
          "s": "InfoMoney consolida o plano: bloqueios diários das 14h às 5h com leitura de placas para credenciados, estacionamento proibido no entorno (210 agentes, 17 reboques), BRT Expresso das 11h às 4h (35–40 mil pessoas/dia; SE08 Jardim Oceânico, SE09 Alvorada, SE10 Paulo da Portela), metrô 24h a R$ 7,90 e VLT Linha 1 24h a R$ 5. Rotas alternativas: Av. das Américas, Lúcio Costa e Ayrton Senna. A FGV estima R$ 3,3 bi na economia carioca e 33,9 mil empregos; ~49% do público vem de outros estados.",
          "u": "https://www.infomoney.com.br/consumo/rock-in-rio-veja-os-esquemas-de-brt-metro-vlt-e-transito-para-o-festival/"
        }
      ],
      "ipiranga": [
        {
          "t": "Hoje, 9h–12h: 300 ingressos no posto da Barra — a primeira fila da Ipiranga é antes da Cidade do Rock",
          "src": "Agência O Globo (via Tribuna do Sertão) / Aurora Cultural",
          "when": "31/ago",
          "s": "Ação relâmpago: os 300 primeiros clientes que abastecerem R$ 200 em Ipimax no posto da Av. das Américas 10.495 levam um ingresso de gramado. É a tese da marca (o posto como parada da jornada) em versão ao vivo — e um risco previsível: mais gente do que ingresso, fila de carro em via expressa e frustração de quem chegar depois. O que decide a leitura da imprensa e das redes é a operação: hora exata de esgotamento comunicada, porta-voz no local e conteúdo dos ganhadores publicado no mesmo dia.",
          "u": "https://www.tribunadosertao.com.br/financas/2026/08/31/970446-clientes-da-ipiranga-que-gastarem-r-200-podem-ganhar-ingresso-para-o-rock-in-rio"
        },
        {
          "t": "Concurso no Instagram (12h de hoje → 17h de amanhã): 30 horas de pico de menção à marca",
          "src": "Aurora Cultural / Juventude BM",
          "when": "31/ago",
          "s": "100 pares de gramado para as frases 'mais divertidas' com 'Ipiranga' e 'Parada Completa', para quem segue o perfil. O volume de comentários será o maior da marca na semana — e o critério subjetivo é o ponto de atrito típico desse formato (acusações de favorecimento, perfis fake, comentários repetidos). Regras visíveis, moderação em turnos e divulgação rápida dos ganhadores protegem a ação; a curadoria dos melhores comentários vira conteúdo gratuito de esquenta.",
          "u": "https://auroracultural.com/noticias/musica/abastecimento-garante-ingressos-para-o-rock-in-rio-em-acao-especial/"
        },
        {
          "t": "Fila climatizada, Glambot no telão, Bar AmPm e Recarga KMV: o modelo do espaço agora é público",
          "src": "Meio & Mensagem",
          "when": "1/set",
          "s": "O trade descreve o Espaço Ipiranga com 'fila em ambiente climatizado', corredor instagramável, Glambot cujo vídeo pode ser baixado e exibido na fachada de LED, Bar AmPm com chope, água e refrigerante, pontos de Recarga KMV e pochetes com pins colecionáveis para clientes KMV cadastrados. Isso responde à pergunta de ontem — e cria o argumento: com sexta de 34°C e sábado de chuva e vento, 'espere no ar-condicionado' é vantagem concreta frente a KitKat/Coca (fila virtual) e Itaú/iFood (slot). Falta a marca dizer isso com as próprias palavras.",
          "u": "https://www.meioemensagem.com.br/marketing/rock-in-rio-2026-ativacoes-marcas"
        },
        {
          "t": "Previsão decide o brinde: leque na sexta de 34°C, capa de chuva no sábado — e o 7/set ainda em dúvida",
          "src": "Climatempo / Alerta Rio / Brasil em Folhas",
          "when": "1/set",
          "s": "O leque amarelo é o item certo para a abertura (sol, 34°C, aguadeiros só até 17h). A partir de sábado, com chuva, rajadas e lama, o item-herói é a capa de chuva — e guarda-chuva é proibido. O poncho dos 89 anos está em go/no-go desde a edição #6; a previsão de hoje encerra a discussão: se houver produção viável até 5/set, é o brinde mais fotografado do fim de semana; se não, uma capa transparente com pin/adesivo dos 89 anos no seeding de creators cumpre o papel.",
          "u": "https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/321/riodejaneiro-rj"
        },
        {
          "t": "C&A também tem Glambot e leque — a diferença da Ipiranga é a fachada de LED e o download imediato",
          "src": "Meio & Mensagem",
          "when": "31/ago–1/set",
          "s": "Com a C&A como 'look oficial' e Glambot no Sunset, a corrida pela câmera robótica está dada (a marca de moda tende a dominar a estética do vídeo). O que só a Ipiranga tem, segundo o mapa do trade, é o vídeo exibido na fachada de LED e a mecânica de baixar na hora. O roteiro de creators e a sinalização do espaço precisam vender exatamente isso: 'apareça no telão dos 89 anos' — experiência, não moda.",
          "u": "https://www.meioemensagem.com.br/marketing/ca-volta-ao-palco-sunset-como-co-patrocinadora"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set — nesta sexta. A partir da manhã de sábado (5/set), a repercussão de cada noite (melhores shows, momentos virais, críticas da imprensa) entra aqui, dia a dia.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "Dave Grohl no Fantástico — 'vai ser uma loucura total'",
            "s": "A entrevista de domingo virou a conversa de segunda entre fãs de rock: cortes com 'no Brasil acontecem nossos maiores shows', a filha Violet e a homenagem à mãe e a Taylor Hawkins; o subtexto é 'sexta ainda tem ingresso' para o dia de abertura.",
            "u": "https://rollingstone.com.br/musica/dave-grohl-fala-ao-fantastico-sobre-musica-familia-e-rock-in-rio/"
          },
          {
            "t": "'Vai chover no Rock in Rio?' — a previsão entra no radar do fã",
            "s": "Com a frente fria prevista para sábado, a conversa migra para capa de chuva (guarda-chuva proibido), lama, tênis 'sacrificável' e a memória das edições chuvosas; o 7/set esgotado com chuva possível gera o 'e agora?' de quem já tem ingresso.",
            "u": "https://www.brasilemfolhas.com.br/2026/09/chuvas-e-ventos-fortes-marcam-primeiro-fim-de-semana-do-rock-in-rio/"
          },
          {
            "t": "Ingresso no posto: a ação da Ipiranga vira notícia e alerta de 'chega cedo'",
            "s": "A mecânica dos 300 ingressos por R$ 200 em Ipimax circula como dica de última hora no Rio — com a dúvida clássica ('vale para qualquer dia?') e a piada de 'encher o tanque para ver o Foo'. A janela de 9h às 12h concentra as menções à marca na manhã de hoje.",
            "u": "https://www.tribunadosertao.com.br/financas/2026/08/31/970446-clientes-da-ipiranga-que-gastarem-r-200-podem-ganhar-ingresso-para-o-rock-in-rio"
          }
        ],
        "tiktok": [
          {
            "t": "'O que levar' ganha a capa de chuva no topo da lista",
            "s": "Os vídeos de checklist (garrafa transparente até 500 ml, até 5 itens de comida lacrados, carregador portátil) passam a abrir com capa de chuva e calçado impermeável; o formato 'look para o Rock in Rio' vira 'look para o Rock in Rio na chuva'.",
            "u": "https://exame.com/pop/rock-in-rio-2026-tudo-o-que-precisa-saber-antes-de-ir-a-cidade-do-rock/"
          },
          {
            "t": "Caça aos brindes: o mapa do trade vira roteiro de vídeo",
            "s": "Com o consolidado do Meio & Mensagem, os roteiros de 'ordem certa para pegar tudo' incorporam copos do Itaú, MiniCD da Coca, Clinker da Heineken, jaqueta da C&A e pochete/leque da Ipiranga — a marca aparece como item utilitário, não como troféu.",
            "u": "https://www.meioemensagem.com.br/marketing/rock-in-rio-2026-ativacoes-marcas"
          },
          {
            "t": "Quentro: 'meu ingresso não aparece' segue como dor recorrente",
            "s": "Tutoriais de resgate e transferência no app Quentro convivem com relatos de ingresso comprado que não aparece no aplicativo (reclamações públicas no Reclame Aqui contra Ticketmaster) — pauta de serviço que ninguém das marcas ocupou até agora.",
            "u": "https://www.reclameaqui.com.br/ticketmaster-brasil-ltda/ingresso-do-rock-in-rio-2026-nao-aparece-no-aplicativo-quentro-apos-compra-e-resgate-bem-sucedidos-na-plataforma-ticket_NwIft42PNvhBFqZv/"
          }
        ],
        "instagram": [
          {
            "t": "Perfil da Ipiranga em modo concurso a partir das 12h",
            "s": "A mecânica 'siga e comente com Ipiranga + Parada Completa' concentra no perfil da marca o maior volume de interação da semana até 17h de quarta; comentários repetidos, perfis novos e pedidos de 'como saber se ganhei' são o padrão esperado desse formato.",
            "u": "https://auroracultural.com/noticias/musica/abastecimento-garante-ingressos-para-o-rock-in-rio-em-acao-especial/"
          },
          {
            "t": "Patrocinadores em modo lançamento: C&A, Heineken e Itaú apresentam suas ativações",
            "s": "Coleção oficial e Glambot da C&A, The Clinker e trens adesivados da Heineken e o pavilhão de 25 anos do Itaú dominam os feeds de marca na véspera; o padrão é 'tour pelo espaço antes de abrir' — janela que a Ipiranga ainda pode ocupar com o bastidor da montagem.",
            "u": "https://www.meioemensagem.com.br/marketing/rock-in-rio-2026-ativacoes-marcas"
          }
        ],
        "sounds": [
          {
            "t": "Foo Fighters — trilha da semana de abertura",
            "s": "\"Everlong\", \"The Pretender\" e \"My Hero\" ganham novo impulso nos edits após a entrevista de Grohl ao Fantástico; a contagem regressiva para sexta é o formato dominante."
          },
          {
            "t": "Elton John — do FOMO à chuva",
            "s": "\"Rocket Man\" e \"I'm Still Standing\" seguem como trilha do 7/set esgotado, agora com o subtexto da previsão de chuva no feriado."
          },
          {
            "t": "Avenged Sevenfold e BMTH — o sábado de rock pesado (e de chuva)",
            "s": "\"Hail to the King\" e \"Can You Feel My Heart\" aparecem nos vídeos de 'quem vai no sábado', dia que ainda tem ingresso e que agora tem previsão de chuva e vento."
          }
        ],
        "note": "Fase pré-evento: leitura editorial a partir de imprensa, páginas públicas e perfis oficiais — sem dado quantitativo de plataforma (X, TikTok, Instagram) disponível nesta data; as páginas de tendência das plataformas não puderam ser consultadas nesta rodada. Durante o festival, esta aba passa a trazer os trending topics e vídeos mais vistos de cada noite."
      },
      "direcionais": {
        "leitura": "Dia de fato próprio: a Ipiranga entra na semana do festival com ação ao vivo (300 ingressos no posto da Barra, 9h–12h) e concurso no Instagram (100 pares, até 17h de amanhã) — o primeiro teste real de fila, menção e war room antes da sexta. Duas variáveis externas mudam o plano no mesmo dia: a previsão (sexta com 34°C, frente fria com chuva e vento no sábado, instabilidade até o 7/set) e o mapa final das ativações publicado pelo trade, que já descreve o Espaço Ipiranga com fila climatizada, Glambot na fachada de LED, Bar AmPm e Recarga KMV. O go/no-go herdado (poncho, Promoview, Quentro) precisa sair hoje — e o poncho agora tem a previsão a favor.",
        "dirs": [
          {
            "t": "A ação do posto é o ensaio geral do war room",
            "s": "300 ingressos para quem chegar primeiro produz, por definição, fila, frustração e cobertura orgânica — tudo o que a Cidade do Rock vai produzir em escala a partir de sexta. Tratar a manhã de hoje como dry run: monitoramento de menções desde as 8h, porta-voz no posto, aviso oficial de esgotamento no minuto em que acabar e conteúdo dos ganhadores publicado no mesmo dia. O que a imprensa vai contar é a operação, não a mecânica."
          },
          {
            "t": "Concurso no Instagram: 30 horas de pico de menção — transformar em UGC, não em ruído",
            "s": "Critério subjetivo ('mais divertidas') é o ponto de atrito do formato. Regras visíveis no post, moderação em turnos, curadoria diária dos melhores comentários para stories e divulgação rápida dos 100 ganhadores convertem volume em conteúdo de esquenta e blindam a marca contra a narrativa de favorecimento."
          },
          {
            "t": "A previsão mudou o kit: sol na sexta, chuva no sábado, dúvida no 7/set",
            "s": "Leque amarelo é o item certo para a abertura (34°C, aguadeiros só até 17h); a partir de sábado o item-herói é a capa de chuva, com guarda-chuva proibido. O kit dos 89 anos precisa cobrir 'sol e chuva' — e a fila climatizada vira abrigo, o que é argumento de experiência, não de brinde."
          },
          {
            "t": "Fila climatizada é o argumento — agora que é público, a marca precisa dizê-lo",
            "s": "O trade já contou; falta a Ipiranga assumir: 'sem sol, sem chuva, sem app'. Sinalização de tempo de espera no local, meta interna de ≤15 min e a régua 'tempo de fila por hora × clima' no relatório-relâmpago. Hidratação da Iguá cobre 9h–17h; à noite, a água do Bar AmPm é o ponto de utilidade que continua aberto."
          },
          {
            "t": "Glambot: a diferença está na fachada de LED e no download imediato",
            "s": "C&A tem Glambot e o 'look oficial'; a estética do vídeo de moda é dela. O que só a Ipiranga tem é o vídeo no telão e o arquivo na mão na hora. Roteiro de creators e sinalização devem vender 'apareça no telão dos 89 anos' — experiência e celebração, nunca disputa de estilo."
          }
        ],
        "acion": [
          "Hoje, 8h–13h: war room em modo ao vivo na ação do posto da Barra — monitorar 'Ipiranga' + 'Rock in Rio' + 'ingresso', registrar a hora de esgotamento dos 300, publicar aviso oficial de encerramento em todos os canais assim que acabar e captar fila, entrega e reação dos ganhadores para stories do mesmo dia.",
          "Hoje 12h → amanhã 17h: operar o concurso do Instagram com regras fixadas no post (seguir + comentar com 'Ipiranga' e 'Parada Completa'), moderação em turnos, curadoria diária dos 10 melhores comentários para stories e divulgação dos 100 ganhadores até 3/set com prova social.",
          "Hoje: bater o go/no-go do poncho dos 89 anos com a previsão na mesa (frente fria sábado, chuva possível até 7/set) — se go, travar produção e frete para entrega em 5/set; se no-go, capa transparente + pin/adesivo dos 89 anos no seeding de creators do 1º fim de semana. No mesmo bloco, fechar as pendências Promoview (cobertura oficial) e tutorial Quentro.",
          "Até 3/set: atualizar peças, porta-vozes e sinalização do espaço com o modelo de acesso confirmado ('fila em ambiente climatizado', Bar AmPm com água, Recarga KMV), incluir 'tempo de fila por hora' e 'clima' no relatório-relâmpago e alinhar a operação de água com a janela dos aguadeiros da Iguá (9h–17h).",
          "Até 3/set: fechar o roteiro de creators para a Glambot com foco no telão ('apareça na fachada dos 89 anos') e no download imediato, publicando o bastidor da montagem do espaço antes que o conteúdo da C&A (Glambot + look oficial) estreie na sexta."
        ]
      },
      "sources": [
        [
          "Agência O Globo via Tribuna do Sertão — clientes que gastarem R$ 200 podem ganhar ingresso (31/08)",
          "https://www.tribunadosertao.com.br/financas/2026/08/31/970446-clientes-da-ipiranga-que-gastarem-r-200-podem-ganhar-ingresso-para-o-rock-in-rio"
        ],
        [
          "Aurora Cultural — abastecimento garante ingressos: ação no posto + concurso no Instagram (31/08)",
          "https://auroracultural.com/noticias/musica/abastecimento-garante-ingressos-para-o-rock-in-rio-em-acao-especial/"
        ],
        [
          "Juventude BM — Ipiranga transforma abastecimento e completa com ingresso (31/08)",
          "https://www.juventudebm.com/2026/08/ipiranga-transforma-abastecimento-e.html"
        ],
        [
          "Ipiranga — página oficial Rock in Rio 2026 (resgate KMV, R$ 100 em combustível, transfer por 150 pontos)",
          "https://www.ipiranga.com.br/wps/portal/en/ipiranga/a-ipiranga/campanhas-e-acoes/promocoes-e-ofertas/rock-in-rio"
        ],
        [
          "Meio & Mensagem — Rock in Rio 2026: veja as ativações das marcas no festival (01/09)",
          "https://www.meioemensagem.com.br/marketing/rock-in-rio-2026-ativacoes-marcas"
        ],
        [
          "Meio & Mensagem — C&A volta ao Palco Sunset como copatrocinadora (31/08)",
          "https://www.meioemensagem.com.br/marketing/ca-volta-ao-palco-sunset-como-co-patrocinadora"
        ],
        [
          "Brasil em Folhas — chuvas e ventos fortes marcam o primeiro fim de semana (01/09)",
          "https://www.brasilemfolhas.com.br/2026/09/chuvas-e-ventos-fortes-marcam-primeiro-fim-de-semana-do-rock-in-rio/"
        ],
        [
          "Brasil em Folhas — frente fria traz chuva para a primeira etapa (01/09)",
          "https://www.brasilemfolhas.com.br/2026/09/frente-fria-traz-chuva-para-primeira-etapa-do-rock-in-rio/"
        ],
        [
          "Climatempo — previsão 15 dias, Rio de Janeiro (consulta 01/09)",
          "https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/321/riodejaneiro-rj"
        ],
        [
          "Alerta Rio — previsão estendida 01–04/09 (consulta 01/09)",
          "https://websempre.rio.rj.gov.br/procedimentos/previsao/mural/estendida"
        ],
        [
          "Rock on Board — Iguá: 100 aguadeiros e vaporizadores das 9h às 17h (01/09)",
          "https://www.rockonboard.com.br/2026/09/rock-in-rio-100-aguadeiros-vaporizadores.html"
        ],
        [
          "Rolling Stone Brasil — Dave Grohl fala ao Fantástico (28/08; exibido 30/08)",
          "https://rollingstone.com.br/musica/dave-grohl-fala-ao-fantastico-sobre-musica-familia-e-rock-in-rio/"
        ],
        [
          "Tribuna do Sertão — Grohl: 'vai ser uma loucura total' (31/08)",
          "https://www.tribunadosertao.com.br/variedades/2026/08/31/970308-dave-grohl-esta-animado-para-voltar-ao-brasil-com-foo-fighters-vai-ser-uma-loucura-total"
        ],
        [
          "InfoMoney — esquemas de BRT, metrô, VLT e trânsito (30/08)",
          "https://www.infomoney.com.br/consumo/rock-in-rio-veja-os-esquemas-de-brt-metro-vlt-e-transito-para-o-festival/"
        ],
        [
          "Rádio Manchete Rio — FGV: R$ 3,3 bi e 33,9 mil empregos; operação da Prefeitura (28/08)",
          "https://mancheterio.com.br/rock-in-rio-deve-injetar-r-33-bilhoes-na-economia-do-rio-prefeitura-anuncia-esquema-especial/"
        ],
        [
          "Exame — tudo o que precisa saber antes de ir à Cidade do Rock (20/08)",
          "https://exame.com/pop/rock-in-rio-2026-tudo-o-que-precisa-saber-antes-de-ir-a-cidade-do-rock/"
        ],
        [
          "Reclame Aqui — ingresso não aparece no app Quentro (ago/26)",
          "https://www.reclameaqui.com.br/ticketmaster-brasil-ltda/ingresso-do-rock-in-rio-2026-nao-aparece-no-aplicativo-quentro-apos-compra-e-resgate-bem-sucedidos-na-plataforma-ticket_NwIft42PNvhBFqZv/"
        ]
      ]
    },
    {
      "date": "31/08/2026",
      "dateISO": "2026-08-31",
      "weekday": "segunda-feira",
      "edition": 8,
      "phase": "pré-evento",
      "pulse": [
        "⏳ <b>Faltam 4 dias — começou a semana do festival.</b> Sem fato novo da organização no fim de semana; a pauta é do trade e da TV: Globo confirma 160+ horas de transmissão ao vivo (~120 shows) e Elton John ao vivo na TV aberta às 23h45 de 7/set — o dia dos 89 anos da Ipiranga terá audiência nacional além da Cidade do Rock.",
        "🎁 <b>A disputa de atenção virou logística de brinde e de fila.</b> Propmark publica o placar oficial (Ipiranga: ~30 mil leques amarelos + pochetes com pins; Itaú: 100 mil copos), guias de 'brindes mais disputados' premiam eletrônicos e roupa, e a fila virtual (Dropfila) entra nas ativações de KitKat, TIM, LATAM e Coca-Cola — 15 minutos é o teto de espera antes de a percepção da marca cair.",
        "🚗 <b>Side shows em SP redesenham o fluxo de gente:</b> MGK, Nova Twins, Maroon 5, Laufey e Jamiroquai tocam em São Paulo antes/depois do Rio, mas os 6 headliners são exclusivos da Cidade do Rock — o êxodo rodoviário SP/MG→RJ nas quintas 3 e 10/set segue garantido."
      ],
      "news": [
        {
          "t": "Globo confirma 160+ horas ao vivo e Elton John na TV aberta às 23h45 de 7/set",
          "src": "Tela Viva / O Universo da TV",
          "when": "28/ago",
          "s": "TV Globo, Multishow, Canal Bis e Globoplay transmitem ~120 shows dos 5 palcos: Multishow a partir das 15h15 (Mundo e Sunset), Bis das 15h50 (Favela, New Dance Order e Supernova), Globoplay com sinal aberto alternado a cada 30 min e 4K para assinantes. Na TV Globo, boletins diários com Kenya Sade, especiais após Globo Repórter/Altas Horas e o show de Elton John ao vivo em 7/set. Time Multishow: Laura Vicente, Dedé Teicher, Guilherme Guedes, Gominho e outros.",
          "u": "https://telaviva.com.br/28/08/2026/tv-globo-globoplay-multishow-e-canal-bis-terao-transmissao-multiplataforma-do-rock-in-rio/"
        },
        {
          "t": "Fila virtual chega às ativações: KitKat, TIM, LATAM e Coca-Cola adotam o Dropfila",
          "src": "Promoview",
          "when": "28/ago",
          "s": "Para atacar a maior dor das ativações — a fila —, marcas passam a usar fila virtual (Dropfila/Branch77): o fã escaneia um QR code, recebe o horário pelo WhatsApp e circula livre; o gestor acompanha tempo de espera e capacidade em painel. Coca-Cola já testou o modelo no Lollapalooza 2026. Estudos citados apontam que esperas acima de ~15 min derrubam a percepção da marca. Itaú (roda gigante) e iFood (montanha-russa) usam agendamento pelo app.",
          "u": "https://www.promoview.com.br/fila-virtual-ativacoes-rock-in-rio-2026/"
        },
        {
          "t": "Placar oficial dos brindes: Ipiranga com ~30 mil leques e pochetes; Itaú com 100 mil copos",
          "src": "propmark",
          "when": "28/ago",
          "s": "Levantamento do trade consolida o que cada patrocinadora vai distribuir entre os ~1 milhão de brindes de 50+ empresas: Ipiranga (~30 mil leques amarelos e pochetes customizáveis com pins), Itaú (~100 mil copos colecionáveis + cashback), Heineken (pulseiras/copos 'The Clinker'), Coca-Cola (mini CD), Natura (pouches laranja, gloss-charm, minis), C&A (mini câmeras, leques, jaquetas customizáveis), KitKat (Break Charm Bar), iFood (pins e mini câmeras), TIM (shoulder bags, charms, pulseiras).",
          "u": "https://propmark.com.br/anunciantes/rock-in-rio-quais-sao-os-brindes-distribuidos-pelos-patrocinadores/"
        },
        {
          "t": "Guias de 'brindes mais disputados' elegem eletrônicos e roupa — e avisam: estoque diário acaba cedo",
          "src": "Embarque na Viagem / GKPB",
          "when": "26–28/ago",
          "s": "Os rankings de 'caça aos brindes' destacam ring lights, corta-ventos e mini câmeras (AXIA), caixinhas de som (Philco, Superbet), corta-vento e bucket hat (Tic Tac) e jaquetas jeans customizadas (C&A); Ipiranga aparece de passagem ('leques e pochetes'). Recomendação recorrente ao fã: chegar cedo aos estandes, porque itens com estoque diário limitado somem nas primeiras horas.",
          "u": "https://embarquenaviagem.com/2026/08/26/brindes-rock-in-rio-2026/"
        },
        {
          "t": "Side shows em São Paulo: quem toca fora do Rio e quem é exclusivo da Cidade do Rock",
          "src": "Rock on Board",
          "when": "27/ago",
          "s": "Nova Twins e MGK (6/set), Maroon 5 (8/set), Laufey (9/set), Jamiroquai e PJ Morton (13/set), Milo J (13 e 15/set) e Demi Lovato (15–16/set) fazem shows em SP no entorno do festival. Elton John, Foo Fighters, Avenged Sevenfold, Stray Kids, Calvin Harris e Twenty One Pilots têm contrato de exclusividade com o Rio — o que sustenta o turismo musical em dois fins de semana consecutivos.",
          "u": "https://www.rockonboard.com.br/2026/08/side-shows-2026-as-atracoes-do-rock-in.html"
        },
        {
          "t": "Arquibancada Globoplay: hub de conteúdo da Globo com acesso por slot de horário e Creator Space",
          "src": "Portal TV e Streaming",
          "when": "ago/26",
          "s": "A ativação da Globo estreia em formato arquibancada, com vista privilegiada para o Palco Mundo, túnel imersivo + quiz musical, brinde exclusivo (microfone) para quem cria conteúdo, Multishow Lounge com DJs e um Creator Space para influenciadores (Brino, Doarda, Jenny Prioli, Mizael, Natty Hills, Samantha Alves, TetTrem). Acesso por reserva de horário; assinantes Globoplay Premium têm fast-pass.",
          "u": "https://www.portaltvstreaming.com.br/2026/08/voce-no-melhor-lugar-do-show.html"
        }
      ],
      "ipiranga": [
        {
          "t": "No placar do trade, o brinde da Ipiranga é utilitário — e os rankings premiam eletrônico e roupa",
          "src": "propmark / Embarque na Viagem",
          "when": "26–28/ago",
          "s": "A marca entra na lista oficial com ~30 mil leques amarelos e pochetes com pins, mas os guias de 'mais disputados' falam de ring light, caixinha de som, corta-vento e jaqueta jeans. Leque e pochete resolvem sol e fila (utilidade real, tese da Kantar), porém sem camada de história viram commodity: a assinatura dos 89 anos e uma mecânica de coleção (pins por dia) são o que transforma o item em troféu.",
          "u": "https://propmark.com.br/anunciantes/rock-in-rio-quais-sao-os-brindes-distribuidos-pelos-patrocinadores/"
        },
        {
          "t": "Fila virtual virou padrão de mercado: o Espaço Ipiranga precisa de um modelo de acesso declarado",
          "src": "Promoview",
          "when": "28/ago",
          "s": "KitKat, TIM, LATAM e Coca-Cola usam Dropfila; Itaú, iFood e Globoplay usam agendamento por slot. O fã vai comparar. Se o Espaço Ipiranga opera por fluxo livre, isso precisa ser dito como vantagem ('sem fila, sem app'); se há fila, medir e sinalizar tempo de espera — o teto de ~15 min citado pelo trade vira KPI interno do war room.",
          "u": "https://www.promoview.com.br/fila-virtual-ativacoes-rock-in-rio-2026/"
        },
        {
          "t": "7/set na TV aberta: o dia dos 89 anos ganha uma segunda tela nacional",
          "src": "Tela Viva",
          "when": "28/ago",
          "s": "Elton John ao vivo na TV Globo às 23h45 de 7/set, mais 160 horas no Multishow/Globoplay desde as 15h15: quem não conseguiu ingresso (dia esgotado) vai assistir de casa, de bar e de posto. A marca fora da Cidade do Rock — AmPm, postos, CRM KMV — pode sincronizar conteúdo e ofertas com a grade da transmissão, falando de experiência e jornada (nunca do show em si, cujos direitos são da emissora e do artista).",
          "u": "https://telaviva.com.br/28/08/2026/tv-globo-globoplay-multishow-e-canal-bis-terao-transmissao-multiplataforma-do-rock-in-rio/"
        },
        {
          "t": "Side shows tiram gente de SP do Rio? Não dos headliners — e a estrada segue sendo território exclusivo da Ipiranga",
          "src": "Rock on Board",
          "when": "27/ago",
          "s": "Quem quer MGK, Maroon 5 ou Laufey pode ficar em SP; quem quer Foo Fighters, Elton, Stray Kids ou Twenty One Pilots precisa vir ao Rio. Com 55% dos compradores de fora do estado (dado da organização), o fluxo Dutra/Fernão Dias/BR-040 nas quintas 3 e 10/set é o momento em que só a Ipiranga tem presença física na jornada — AXIA ocupa VLT e playlist, ninguém ocupa a estrada.",
          "u": "https://www.rockonboard.com.br/2026/08/side-shows-2026-as-atracoes-do-rock-in.html"
        },
        {
          "t": "Creator Space da Globo concentra influenciadores no local — atalho para o roteiro de creators da marca",
          "src": "Portal TV e Streaming",
          "when": "ago/26",
          "s": "Brino, Doarda, Jenny Prioli, Mizael, Natty Hills, Samantha Alves e TetTrem estarão na Arquibancada Globoplay produzindo 'In Real Life' para YouTube e redes. Cruzar essa lista com os creators convidados da Ipiranga e com os roteiros de 'tour pela Cidade do Rock' permite garantir que o Espaço Ipiranga apareça já na primeira noite, sem custo adicional de mídia.",
          "u": "https://www.portaltvstreaming.com.br/2026/08/voce-no-melhor-lugar-do-show.html"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set — nesta sexta. A partir da manhã de sábado (5/set), a repercussão de cada noite (melhores shows, momentos virais, críticas da imprensa) entra aqui, dia a dia.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "\"Semana do Rock in Rio\" — a contagem virou rotina",
            "s": "Segunda-feira de T-4: a conversa migra do 'vou/não vou' para a planilha — quem vai a que dia, horário dos headliners (00h05), como voltar de madrugada e o que ainda falta comprar; 4, 5 e 13/set seguem à venda e alimentam o 'última chance' entre fãs de rock.",
            "u": "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-elton-john-esgota-e-so-restam-ingressos-para-os-headliners-de-rock,f55cd65d51bbe64d7f0ad80e24ff07f7uywp9z1n.html"
          },
          {
            "t": "\"Onde assistir\" e Elton na Globo",
            "s": "O anúncio da transmissão (160h, Multishow desde 15h15, Elton ao vivo na TV aberta às 23h45 de 7/set) gera a onda de 'quem ficou de fora assiste de casa' — com humor sobre a madrugada de feriado e pedidos de setlist na TV.",
            "u": "https://telaviva.com.br/28/08/2026/tv-globo-globoplay-multishow-e-canal-bis-terao-transmissao-multiplataforma-do-rock-in-rio/"
          },
          {
            "t": "Rio x SP: o debate dos side shows",
            "s": "A lista de side shows em São Paulo (MGK, Maroon 5, Laufey, Jamiroquai) reacende a provocação 'pra que ir ao Rio?' — respondida com a exclusividade dos 6 headliners e com memes de estrada, Dutra e 'caravana pro Rock in Rio'.",
            "u": "https://www.rockonboard.com.br/2026/08/side-shows-2026-as-atracoes-do-rock-in.html"
          }
        ],
        "tiktok": [
          {
            "t": "Caça aos brindes: rankings e 'como conseguir'",
            "s": "Com o placar oficial publicado, vídeos de 'brindes mais legais do Rock in Rio 2026' e 'ordem certa para pegar tudo' ganham tração — eletrônicos e jaquetas no topo, com o conselho de chegar cedo porque o estoque diário acaba.",
            "u": "https://embarquenaviagem.com/2026/08/26/brindes-rock-in-rio-2026/"
          },
          {
            "t": "Looks por dia e por artista",
            "s": "As páginas de descoberta seguem dominadas por 'look para o Rock in Rio 2026' (incluindo recortes masculinos e 'outfit Laufey'); na semana do evento, o formato vira prova final de look e 'o que NÃO levar' (mochila grande, garrafa de vidro, guarda-chuva).",
            "u": "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026"
          },
          {
            "t": "Palco Mundo pronto vira cenário de edit",
            "s": "Fotos e drones do novo Palco Mundo (107 m, 2.400 m² de LED) já montado circulam como fundo dos edits de contagem regressiva — o 'tour pela obra' segue como formato de esquenta até sexta.",
            "u": "https://www.rockonboard.com.br/2026/08/rock-in-rio-2026-palco-mundo-cidade-do-rock.html"
          }
        ],
        "instagram": [
          {
            "t": "Perfil oficial em modo 'semana do festival'",
            "s": "Depois do pico de FOMO do esgotamento de 7/set, o feed oficial entra em modo serviço + esquenta: horários, regras de entrada, ECCO e bastidores da Cidade do Rock, com comentários dominados por dúvidas de logística e de brinde.",
            "u": "https://www.instagram.com/rockinrio/"
          },
          {
            "t": "Globo/Multishow anunciam time e influenciadores",
            "s": "Os perfis da Globo e do Multishow apresentam apresentadores (Kenya Sade, Laura Vicente, Dedé Teicher, Gominho) e o squad de creators da Arquibancada Globoplay — sinal de que a cobertura de influência do festival terá um polo forte fora das marcas patrocinadoras.",
            "u": "https://www.portaltvstreaming.com.br/2026/08/voce-no-melhor-lugar-do-show.html"
          }
        ],
        "sounds": [
          {
            "t": "Foo Fighters — abertura de sexta",
            "s": "\"Everlong\", \"The Pretender\" e \"Best of You\" seguem como trilha dos edits de contagem regressiva para 4/set, dia que ainda tem ingresso."
          },
          {
            "t": "Elton John — do FOMO à segunda tela",
            "s": "\"Rocket Man\" e \"Your Song\" permanecem em alta após o esgotamento de 7/set, agora com o subtexto 'assisto pela Globo'."
          },
          {
            "t": "Twenty One Pilots e Halsey — o 13/set entra na conversa",
            "s": "Com o último dia ainda à venda, áudios de \"Stressed Out\" e \"Without Me\" aparecem nos vídeos de 'quem vai no encerramento'."
          }
        ],
        "note": "Fase pré-evento: leitura editorial a partir de imprensa, páginas públicas de descoberta e perfis oficiais — sem dado quantitativo de plataforma disponível nesta data. Durante o festival, esta aba passa a trazer os trending topics e vídeos mais vistos de cada noite."
      },
      "direcionais": {
        "leitura": "Semana do festival, sem fato novo da organização no fim de semana: a pauta é do trade e da TV. Três movimentos importam para a Ipiranga hoje: (1) o placar oficial de brindes coloca a marca com item utilitário enquanto os rankings do fã premiam eletrônico e roupa — o leque precisa de história; (2) fila virtual e acesso por slot viraram padrão de mercado, e o fã vai comparar; (3) 7/set terá Elton John ao vivo na TV aberta, o que dá ao dia dos 89 anos uma segunda tela nacional. Side shows em SP não tiram os headliners do Rio — a estrada segue sendo o território que só a Ipiranga ocupa. Amanhã (1/set) segue valendo o go/no-go das pendências herdadas (poncho, Promoview, tutorial Quentro).",
        "dirs": [
          {
            "t": "Brinde utilitário só vira troféu com história",
            "s": "Leque e pochete entregam utilidade (sol, fila, pertences), mas o fã ranqueia brinde por desejo, não por função. A camada que falta é narrativa: assinatura visível dos 89 anos e uma mecânica de coleção (pin diferente por dia) que justifique voltar ao espaço e postar. Não é trocar o brinde — é dar motivo para ele aparecer no vídeo de 'o que peguei'."
          },
          {
            "t": "Fila é a métrica invisível do espaço — declare o modelo",
            "s": "Com KitKat, TIM, LATAM e Coca em fila virtual e Itaú/iFood/Globoplay em slot, 'como entro no Espaço Ipiranga?' vira pergunta. Fluxo livre é vantagem competitiva se comunicada ('sem fila, sem app'); fila física é aceitável até ~15 min e precisa ser medida e sinalizada. Definir agora evita improviso na sexta."
          },
          {
            "t": "7/set tem segunda tela: planejar a festa fora da Cidade do Rock",
            "s": "Dia esgotado + Elton ao vivo na Globo às 23h45 = maior audiência nacional do festival no dia dos 89 anos. AmPm, postos e CRM KMV podem sincronizar com a grade (15h15 Multishow → 23h45 Globo) falando de experiência, jornada e celebração — nunca do show, cuja imagem e direitos não são da marca."
          },
          {
            "t": "A estrada é o único território sem concorrente",
            "s": "Side shows em SP não afetam os 6 headliners exclusivos; com maioria do público vindo de fora do estado, as quintas 3 e 10/set concentram o fluxo Dutra/Fernão Dias/BR-040. AXIA está no VLT e no Spotify; ninguém está no posto da estrada às 6h da manhã — esse conteúdo e essa oferta são da Ipiranga por definição."
          },
          {
            "t": "Creators: usar o mapa da Globo como atalho",
            "s": "O Creator Space da Arquibancada Globoplay concentra influenciadores com agenda pública na Cidade do Rock. Cruzar com a lista de convidados da marca e com os roteiros 'tour pela Cidade do Rock' garante o Espaço Ipiranga na primeira noite sem depender de mídia paga."
          }
        ],
        "acion": [
          "Até 2/set: definir e comunicar o modelo de acesso do Espaço Ipiranga (fluxo livre × slot × fila virtual), com sinalização de tempo de espera no local e meta interna ≤15 min; incluir 'tempo de fila por hora' no relatório-relâmpago do war room a partir de 4/set.",
          "Até 3/set: aprovar a camada de história do brinde — pins dos 89 anos como colecionáveis por dia do festival (um por noite), leque com assinatura visível para aparecer nos vídeos de 'o que peguei', e roteiro de creators mostrando o uso real (sol, fila, pertences).",
          "Até 4/set: fechar a grade de segunda tela de 7/set — posts, stories e CRM KMV/AmPm sincronizados com a transmissão (15h15 Multishow, 23h45 TV Globo), em tom de experiência e celebração dos 89 anos, sem imagem, nome ou trecho de show.",
          "Até 3/set: publicar o conteúdo 'rota para o Rio' — postos Ipiranga e AmPm na Dutra, Fernão Dias e BR-040, com dicas de saída para as quintas 3 e 10/set e o benefício KMV na volta; integrar ao guia de chegada já em produção.",
          "Hoje: cruzar a lista de creators da Arquibancada Globoplay (Brino, Doarda, Jenny Prioli, Mizael, Natty Hills, Samantha Alves, TetTrem) com os creators convidados da marca e com os roteiros de 'tour pela Cidade do Rock'; onde houver sobreposição, garantir passagem pelo Espaço Ipiranga em 4/set."
        ]
      },
      "sources": [
        [
          "Tela Viva — Globo, Multishow, Bis e Globoplay: transmissão multiplataforma (28/08)",
          "https://telaviva.com.br/28/08/2026/tv-globo-globoplay-multishow-e-canal-bis-terao-transmissao-multiplataforma-do-rock-in-rio/"
        ],
        [
          "O Universo da TV — 160+ horas ao vivo; Elton John na Globo às 23h45 (28/08)",
          "https://www.ouniversodatv.com/2026/08/rock-in-rio-tera-mais-de-160-horas-de.html"
        ],
        [
          "Billboard Brasil — detalhes da transmissão ao vivo (26/08)",
          "https://billboard.com.br/rock-in-rio-2026-transmissao-ao-vivo/"
        ],
        [
          "Portal TV e Streaming — Arquibancada Globoplay e Creator Space (ago/26)",
          "https://www.portaltvstreaming.com.br/2026/08/voce-no-melhor-lugar-do-show.html"
        ],
        [
          "Promoview — fila virtual (Dropfila) nas ativações (28/08)",
          "https://www.promoview.com.br/fila-virtual-ativacoes-rock-in-rio-2026/"
        ],
        [
          "propmark — quais são os brindes de cada patrocinadora (28/08)",
          "https://propmark.com.br/anunciantes/rock-in-rio-quais-sao-os-brindes-distribuidos-pelos-patrocinadores/"
        ],
        [
          "Embarque na Viagem — caça aos brindes: os mais disputados (26/08)",
          "https://embarquenaviagem.com/2026/08/26/brindes-rock-in-rio-2026/"
        ],
        [
          "GKPB — brindes das marcas na Cidade do Rock (26/08, atualizado 28/08)",
          "https://gkpb.com.br/197332/rock-in-rio-2026-brindes/"
        ],
        [
          "Rock on Board — side shows 2026 em São Paulo (27/08)",
          "https://www.rockonboard.com.br/2026/08/side-shows-2026-as-atracoes-do-rock-in.html"
        ],
        [
          "Rock on Board — novo Palco Mundo já está de pé (19/08)",
          "https://www.rockonboard.com.br/2026/08/rock-in-rio-2026-palco-mundo-cidade-do-rock.html"
        ],
        [
          "Terra — só restam as noites de rock: 4, 5 e 13/set (29/08)",
          "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-elton-john-esgota-e-so-restam-ingressos-para-os-headliners-de-rock,f55cd65d51bbe64d7f0ad80e24ff07f7uywp9z1n.html"
        ],
        [
          "Promoview — hub de benefícios: 55% dos compradores de fora do RJ (dez/25)",
          "https://www.promoview.com.br/rock-in-rio-hub-beneficios-como-resgatar/"
        ],
        [
          "TikTok — página de descoberta 'looks para o Rock in Rio 2026'",
          "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026"
        ]
      ]
    },
    {
      "date": "30/08/2026",
      "dateISO": "2026-08-30",
      "weekday": "domingo",
      "edition": 7,
      "phase": "pré-evento",
      "pulse": [
        "🚨 <b>7/set ESGOTOU</b>: a organização confirmou no sábado o esgotamento do dia Elton John + Gilberto Gil — o dia dos 89 anos da Ipiranga agora tem lotação máxima garantida. Já são 4 dias esgotados (6, 7, 11 e 12/set); restam só as noites de rock: 4, 5 e 13/set.",
        "⏳ <b>Faltam 5 dias</b>: reta final de montagem vira pauta — novo Palco Mundo de 107 m com 2.400 m² de LED, espetáculo ECCO em 5 sessões diárias e ~1 milhão de brindes prometidos pelas marcas na Cidade do Rock.",
        "🎫 <b>Mercado paralelo esquenta</b>: com 4 dias esgotados, plataformas de revenda ganham manchete e o risco de golpe de ingresso entra no radar da semana — espaço aberto para conteúdo de serviço \"compre certo\"."
      ],
      "news": [
        {
          "t": "Esgotou: 7/set (Elton John + Gil) é o quarto dia com ingressos zerados",
          "src": "Sopa Cultural / CNN Brasil",
          "when": "29/ago",
          "s": "A organização anunciou no sábado o esgotamento do dia 7/set — Elton John em seu único show no Brasil pós-aposentadoria das grandes turnês, com Gilberto Gil, Jon Batiste e Luísa Sonza + Roberto Menescal no feriado da Independência. Com 6, 11 e 12/set já esgotados, restam apenas 4, 5 e 13/set à venda na Ticketmaster.",
          "u": "https://sopacultural.com/rock-in-rio-2026-elton-john-ingressos-esgotados/"
        },
        {
          "t": "Leitura do mercado: só restam as noites de rock — e a Comfort Zone a R$ 1.950",
          "src": "Terra",
          "when": "29/ago",
          "s": "Com o pop esgotado, sobram as noites de headliners de rock: Foo Fighters (4), Avenged Sevenfold (5) e Twenty One Pilots (13, dia que mistura Halsey, Marina Sena e Zara Larsson). Gramado segue a R$ 870 (inteira); a nova Comfort Zone custa R$ 1.950, e clientes Itaú têm 15% de desconto.",
          "u": "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-elton-john-esgota-e-so-restam-ingressos-para-os-headliners-de-rock,f55cd65d51bbe64d7f0ad80e24ff07f7uywp9z1n.html"
        },
        {
          "t": "Reta final na Cidade do Rock: ECCO, Gourmet Square e Babilônia 30 anos",
          "src": "Semana Pop",
          "when": "29/ago",
          "s": "Balanço da reta final destaca o espetáculo ECCO (parceria com a LightWire: luz, dança, holografia e projeções), a Gourmet Square com curadoria do chef Pedro Siqueira, a Babilônia Feira Hype celebrando 30 anos e a promessa de 100+ ativações e ~1 milhão de brindes distribuídos pelas marcas.",
          "u": "https://www.semanapop.com.br/rock-in-rio-entra-na-reta-final-para-edicao-2026/"
        },
        {
          "t": "Novo Palco Mundo em números: 107 m de largura e 3,2 milhões de watts",
          "src": "Jornal Expresso Carioca",
          "when": "28/ago",
          "s": "A estrutura mais fotografada do festival chega com 107 m de largura, 31,5 m de altura, painel de LED de 2.400 m², 3,2 milhões de watts de potência sonora e 200 amplificadores — além de pirotecnia sincronizada no fim de cada noite e apresentações aéreas do The Flight.",
          "u": "https://www.expressocarioca.com.br/rock-in-rio-2026-entra-na-reta-final-e-cidade-do-rock-ganha-os-ultimos-ajustes-antes-da-abertura/"
        },
        {
          "t": "Prefeitura detalha o plano operacional: BRT a R$ 29 no app Jaé e bloqueios a partir das 14h",
          "src": "COR / Prefeitura do Rio",
          "when": "27/ago",
          "s": "O plano municipal soma-se à megaoperação estadual: BRT Expresso Rock in Rio a R$ 29 (compra pelo app Jaé, 3 rotas expressas, 18–40 min), embarque 24h no metrô Jardim Oceânico, VLT na madrugada, interdições na Av. Abelardo Bueno das 14h às 5h, 210 agentes de trânsito, 400+ guardas municipais/dia e monitoramento com 800 câmeras e drones do COR.",
          "u": "https://cor.rio/prefeitura-divulga-plano-operacional-para-o-rock-in-rio-2026-saiba-como-chegar-ao-festival/"
        },
        {
          "t": "Movimento de patrocinador: AXIA Energia ocupa área VIP, Global Village e a playlist oficial no Spotify",
          "src": "Promoview",
          "when": "ago/26",
          "s": "A parceira de energia ativa grid imersivo de LED e espelhos na área VIP, game estilo infinite-runner na Global Village (jaqueta refletiva para 2.100+ pontos), patrocínio da playlist oficial no Spotify (20/ago–20/set), VLT envelopado circulando desde 18/ago e squad de creators (Didi Wagner, Diego Hypólito, Isabelle Nogueira). Execução da Sherpa42.",
          "u": "https://www.promoview.com.br/axia-energia-rock-in-rio-2026/"
        }
      ],
      "ipiranga": [
        {
          "t": "7/set esgotado muda o KPI do dia-pilar: de venda para experiência e amplificação",
          "src": "Sopa Cultural",
          "when": "29/ago",
          "s": "Com lotação máxima garantida no dia dos 89 anos, a comunicação não precisa mais empurrar ingresso: o jogo agora é maximizar a jornada de quem estará lá (Espaço Ipiranga, brinde, rota) e alcançar quem ficou de fora — CRM KMV, conteúdo ao vivo e AmPm como extensão da festa fora da Cidade do Rock.",
          "u": "https://sopacultural.com/rock-in-rio-2026-elton-john-ingressos-esgotados/"
        },
        {
          "t": "Revenda em alta com 4 dias esgotados: pauta anti-golpe é serviço que protege o fã",
          "src": "Ego Brazil",
          "when": "20/ago",
          "s": "Plataformas de revenda já disputam manchete oferecendo datas esgotadas — e onde há FOMO e revenda, golpe de ingresso vira pauta policial na semana do evento. A marca pode chegar antes: conteúdo \"compre só nos canais oficiais\" para 4, 5 e 13/set, com o KMV (que teve resgate oficial de ingressos) como prova de legitimidade.",
          "u": "https://egobrazil.com.br/rock-in-rio-2026-plataforma-de-revenda-garante-ingressos-para-datas-esgotadas/"
        },
        {
          "t": "AXIA avança sobre mobilidade urbana e 'energia' — território adjacente ao da Ipiranga",
          "src": "Promoview",
          "when": "ago/26",
          "s": "VLT envelopado, playlist oficial no Spotify e narrativa de 'energia além dos megawatts' colocam a AXIA na conversa de como o fã chega e se energiza. O contraponto natural da Ipiranga é o asfalto: postos na rota, AmPm na madrugada e transfer/benefício KMV — jornada física que só ela entrega.",
          "u": "https://www.promoview.com.br/axia-energia-rock-in-rio-2026/"
        },
        {
          "t": "Plano da Prefeitura é a matéria-prima que faltava para o guia de chegada da marca",
          "src": "COR / Prefeitura do Rio",
          "when": "27/ago",
          "s": "BRT a R$ 29 comprado no app Jaé, bloqueios a partir das 14h, metrô 24h e VLT na madrugada: dados oficiais e estáveis para fechar o guia de chegada/volta (em produção desde a edição #5) — agora com a camada municipal além da estadual, sempre no tom de utilidade, sem estética de operação.",
          "u": "https://cor.rio/prefeitura-divulga-plano-operacional-para-o-rock-in-rio-2026-saiba-como-chegar-ao-festival/"
        },
        {
          "t": "Reta final de montagem é janela de bastidor para o Espaço Ipiranga",
          "src": "Semana Pop",
          "when": "29/ago",
          "s": "A imprensa está em modo 'últimos ajustes da Cidade do Rock' — pauta perfeita para mostrar o Espaço Ipiranga sendo montado ('tour antes de abrir'): humaniza a operação, antecipa o mapa mental do fã (onde fica, o que tem) e disputa espaço na cobertura de reta final sem depender de porta-voz.",
          "u": "https://www.semanapop.com.br/rock-in-rio-entra-na-reta-final-para-edicao-2026/"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set — próxima sexta. A partir da manhã seguinte, a repercussão de cada noite (melhores shows, momentos virais, críticas da imprensa) entra aqui, dia a dia.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "Luto e FOMO pelo 7/set esgotado",
            "s": "O anúncio de sábado transformou o FOMO em lamento: quem esperou o fim de semana para comprar ficou de fora do dia Elton John + Gil, e a conversa se divide entre prints de 'esgotado', busca por revenda e alertas de golpe entre fãs.",
            "u": "https://sopacultural.com/rock-in-rio-2026-elton-john-ingressos-esgotados/"
          },
          {
            "t": "\"Sobrou só o rock\"",
            "s": "A leitura de que o pop esgotou primeiro (6, 7, 11, 12) e as noites de rock seguem à venda vira provocação recorrente entre tribos — rockeiros celebram o line-up 'raiz' disponível, fãs de pop rebatem com a velocidade dos sell-outs.",
            "u": "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-elton-john-esgota-e-so-restam-ingressos-para-os-headliners-de-rock,f55cd65d51bbe64d7f0ad80e24ff07f7uywp9z1n.html"
          },
          {
            "t": "Madrugada na planilha do fã",
            "s": "Os horários de 00h05 dos headliners (Foo Fighters na sexta, Avenged no sábado) alimentam a conversa de logística: como voltar às 2h da manhã, cochilo estratégico e memes de 'quem trabalha na segunda'.",
            "u": "https://whiplash.net/materias/news_668/382002-foofighters.html"
          }
        ],
        "tiktok": [
          {
            "t": "Checklist T-5: capa de chuva consolidada no kit",
            "s": "Os vídeos de 'o que levar' seguem dominantes e a capa de chuva virou item fixo ao lado de carregador portátil e calçado fechado, com a previsão instável do 1º fim de semana ainda circulando nas páginas de descoberta.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          },
          {
            "t": "Looks por dia ganham urgência",
            "s": "Com 4 dias esgotados, a trend de outfits segmentados ('look Elton', 'look Stray Kids', looks por noite) acelera — agora com tom de contagem regressiva e vídeos de prova de look final.",
            "u": "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026"
          },
          {
            "t": "Cidade do Rock em construção",
            "s": "Imagens aéreas e cortes da montagem do novo Palco Mundo (107 m, 2.400 m² de LED) entram nos edits de expectativa — o 'tour pela obra' vira formato de esquenta na reta final.",
            "u": "https://www.expressocarioca.com.br/rock-in-rio-2026-entra-na-reta-final-e-cidade-do-rock-ganha-os-ultimos-ajustes-antes-da-abertura/"
          }
        ],
        "instagram": [
          {
            "t": "Perfil oficial em pico de FOMO",
            "s": "O post de esgotamento de 7/set coroa a semana de 'últimos ingressos'; comentários misturam celebração de quem garantiu, desespero de quem ficou de fora e dúvidas de logística — atenção máxima da base no perfil.",
            "u": "https://www.instagram.com/rockinrio/"
          },
          {
            "t": "Websérie ECCO, a jornada do som",
            "s": "A série oficial em 4 episódios sobre a criação do espetáculo ECCO (figurinos com 1.500 pixels de LED e 1.000 m de fibra óptica) roda no Instagram do festival como o grande conteúdo de bastidor da reta final.",
            "u": "https://jornaldebrasilia.com.br/entretenimento/katia-flavia/rock-in-rio-abre-bastidor-do-ecco-e-revela-figurino-com-1-500-leds/"
          }
        ],
        "sounds": [
          {
            "t": "Clássicos de Elton John em pico",
            "s": "\"Rocket Man\", \"Your Song\" e \"Tiny Dancer\" ganham nova onda nos vídeos após o esgotamento de 7/set — trilha padrão tanto da celebração de quem vai quanto do lamento de quem ficou de fora."
          },
          {
            "t": "Foo Fighters sinfônico",
            "s": "Áudios do show com a Filarmônica de LA seguem como trilha dos edits de contagem regressiva para a abertura de 4/set — dia que ainda tem ingresso."
          },
          {
            "t": "Stray Kids — THIS & THAT",
            "s": "O mini-álbum com a versão de festival de \"RUN IT\" segue dominando o recorte K-pop rumo ao 11/set esgotado; fancams de ensaio mantêm o fandom mobilizado."
          }
        ],
        "note": "Fase pré-evento: leitura editorial a partir de imprensa e páginas públicas das plataformas — sem dado quantitativo de plataforma disponível nesta data. Durante o festival, esta aba passa a trazer os trending topics e vídeos mais vistos de cada noite."
      },
      "direcionais": {
        "leitura": "O fato do dia é o esgotamento de 7/set: o dia dos 89 anos da Ipiranga agora tem lotação máxima garantida, e a comunicação muda de eixo — de conversão para experiência, amplificação e proteção do fã (revenda e golpe entram no radar). Enquanto isso, a reta final de montagem vira vitrine editorial (Palco Mundo, ECCO) e a AXIA avança sobre mobilidade urbana e 'energia', território vizinho ao da marca.",
        "dirs": [
          {
            "t": "Dia-pilar esgotado pede novo KPI",
            "s": "Não há mais ingresso para vender em 7/set: a régua do dia dos 89 anos passa a ser experiência de quem está dentro (Espaço Ipiranga, brinde, rota) e alcance de quem ficou de fora (conteúdo ao vivo, CRM KMV, AmPm como ponto da 'festa estendida'). Ajustar metas e mensagens já nesta segunda."
          },
          {
            "t": "Ser o escudo do fã contra o golpe do ingresso",
            "s": "4 dias esgotados + revenda em manchete = semana de golpes. Conteúdo de serviço 'compre só nos canais oficiais' (para 4, 5 e 13/set) posiciona a marca como aliada antes de a pauta virar caso de polícia — e conversa com a credencial do KMV, que teve resgate oficial de ingressos."
          },
          {
            "t": "Responder à AXIA no asfalto, não na playlist",
            "s": "A AXIA ocupou VLT, Spotify e 'energia' como narrativa. O contra-ataque da Ipiranga é o território que ninguém mais entrega: rota física do fã — postos no caminho, AmPm na madrugada, benefício KMV na volta. Mobilidade urbana é deles no discurso; a estrada e a rua são da Ipiranga."
          },
          {
            "t": "Últimas 3 noites à venda = última janela de conversão",
            "s": "4, 5 e 13/set (noites de rock) ainda têm ingresso. Se sobrou verba de mídia ou benefício KMV atrelado a ingresso, o público dessas datas está decidindo agora — depois disso, toda a comunicação do festival vira awareness e experiência."
          },
          {
            "t": "Bastidor é a pauta da semana — entrar nela antes da abertura",
            "s": "Imprensa e feeds estão em modo 'últimos ajustes' (Palco Mundo, ECCO, montagem). O Espaço Ipiranga montando é conteúdo que a marca controla 100%: mostra escala, gera expectativa e antecipa o mapa mental do fã sem depender de pauta externa."
          }
        ],
        "acion": [
          "Acionar hoje o disparo de celebração do esgotamento de 7/set (peça pronta desde a edição #5), no tom '89 anos com casa cheia' — celebração e experiência, sem tom de venda.",
          "Produzir e publicar até 2/set o conteúdo anti-golpe 'compre só nos canais oficiais' para 4, 5 e 13/set (stories + CRM), monitorando menções a revenda no war room.",
          "Atualizar o guia de chegada com a camada municipal do COR: BRT R$ 29 comprado no app Jaé, bloqueios a partir das 14h, metrô 24h e VLT na madrugada — publicar até 3/set, véspera da abertura.",
          "Agendar captação de bastidor da montagem do Espaço Ipiranga para 2–3/set ('tour antes de abrir', stories + TikTok), aproveitando a pauta de reta final da imprensa.",
          "Fechar amanhã (1/set) o go/no-go das três pendências herdadas: poncho/capa dos 89 anos no kit de brinde, presença na cobertura oficial do Promoview e tutorial de resgate no Quentro."
        ]
      },
      "sources": [
        [
          "Sopa Cultural — 7/set esgotado (29/08)",
          "https://sopacultural.com/rock-in-rio-2026-elton-john-ingressos-esgotados/"
        ],
        [
          "CNN Brasil — quatro dias esgotados (6, 7, 11 e 12/set)",
          "https://www.cnnbrasil.com.br/pop/musica/rock-in-rio-esgota-ingressos-para-dia-em-que-elton-john-se-apresenta/"
        ],
        [
          "Terra — só restam as noites de rock; Comfort Zone R$ 1.950 (29/08)",
          "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-elton-john-esgota-e-so-restam-ingressos-para-os-headliners-de-rock,f55cd65d51bbe64d7f0ad80e24ff07f7uywp9z1n.html"
        ],
        [
          "Semana Pop — reta final: ECCO, Gourmet Square, ~1 milhão de brindes (29/08)",
          "https://www.semanapop.com.br/rock-in-rio-entra-na-reta-final-para-edicao-2026/"
        ],
        [
          "Jornal Expresso Carioca — novo Palco Mundo em números (28/08)",
          "https://www.expressocarioca.com.br/rock-in-rio-2026-entra-na-reta-final-e-cidade-do-rock-ganha-os-ultimos-ajustes-antes-da-abertura/"
        ],
        [
          "COR / Prefeitura do Rio — plano operacional de mobilidade (27/08)",
          "https://cor.rio/prefeitura-divulga-plano-operacional-para-o-rock-in-rio-2026-saiba-como-chegar-ao-festival/"
        ],
        [
          "Promoview — ativações da AXIA Energia (ago/26)",
          "https://www.promoview.com.br/axia-energia-rock-in-rio-2026/"
        ],
        [
          "Ego Brazil — plataforma de revenda para datas esgotadas (20/08)",
          "https://egobrazil.com.br/rock-in-rio-2026-plataforma-de-revenda-garante-ingressos-para-datas-esgotadas/"
        ],
        [
          "Whiplash — headliners à 00h05 (horários oficiais)",
          "https://whiplash.net/materias/news_668/382002-foofighters.html"
        ],
        [
          "Jornal de Brasília — websérie ECCO e figurinos de LED (10/08)",
          "https://jornaldebrasilia.com.br/entretenimento/katia-flavia/rock-in-rio-abre-bastidor-do-ecco-e-revela-figurino-com-1-500-leds/"
        ]
      ]
    },
    {
      "date": "29/08/2026",
      "dateISO": "2026-08-29",
      "weekday": "sábado",
      "edition": 6,
      "phase": "pré-evento",
      "pulse": [
        "⏳ <b>Faltam 6 dias</b>: sábado de contagem regressiva, com a pauta pública dominada pela megaoperação de segurança anunciada ontem — 7.680 agentes, drones e reconhecimento facial na Cidade do Rock.",
        "🎟️ <b>\"Últimos ingressos\" para 7/set agora é oficial</b>: a organização anunciou na sexta a reta final de vendas do dia Elton John + Gil — o dia dos 89 anos da Ipiranga pode esgotar a qualquer momento do fim de semana. 6, 11 e 12/set seguem esgotados; 4, 5 e 13/set à venda.",
        "🌦️ <b>Clima entra no radar</b>: primeiras previsões indicam primeiro fim de semana com instabilidade e possibilidade de chuva na área aberta da Cidade do Rock — capa de chuva (guarda-chuva é proibido) entra no checklist do fã."
      ],
      "news": [
        {
          "t": "Governo do RJ detalha megaoperação: 7.680 agentes, drones e reconhecimento facial",
          "src": "Super Rádio Tupi",
          "when": "28/ago",
          "s": "Esquema reúne PM (4.500 agentes, 177 viaturas, 8 torres), Polícia Civil (1.700, sendo 725 dentro do recinto), Bombeiros (600), Lei Seca (700) e Segurança Presente (140). Drones inéditos no espaço aéreo, câmeras com reconhecimento facial e leitura de placas nos acessos, 6 pontos de bloqueio e Centro Integrado de Comando móvel no BRT Parque Olímpico. Público estimado: 700 mil+ nos 7 dias.",
          "u": "https://www.tupi.fm/rio/rock-in-rio-2026-megaoperacao-tera-drones-e-reconhecimento-facial/"
        },
        {
          "t": "Delegacia dentro da Cidade do Rock e Juizado do Torcedor no local",
          "src": "A Onça / Agência Brasil",
          "when": "28/ago",
          "s": "A 16ª DP funcionará dentro do evento com Juizado Especial do Torcedor e Grandes Eventos e equipes especializadas (DEAM, Delegacia da Criança e do Adolescente, DEAT e DECRADI) — estrutura de atendimento ao público inédita nesta escala.",
          "u": "https://www.aonca.com.br/rock-in-rio-seguranca-tera-mais-de-7-mil-agentes-alem-de-drones/"
        },
        {
          "t": "Organização anuncia oficialmente os últimos ingressos para 7/set (Elton John)",
          "src": "ABC do ABC",
          "when": "28/ago",
          "s": "Comunicado da sexta de manhã confirma a reta final de vendas do feriado: Elton John encerra o Palco Mundo em seu único show no Brasil pós-aposentadoria das grandes turnês, com Gilberto Gil, Jon Batiste, Luísa Sonza, Laufey, Péricles, Roupa Nova e Fatboy Slim no mesmo dia. 6 e 12/set seguem esgotados.",
          "u": "https://www.abcdoabc.com.br/rock-in-rio-libera-ultimos-ingressos-elton-john/"
        },
        {
          "t": "Previsão preliminar: primeiro fim de semana com instabilidade e chance de chuva",
          "src": "Rock Notícias",
          "when": "26/ago",
          "s": "Primeiras projeções para 4–7/set apontam tempo instável, com possibilidade de chuva em alguns momentos na Cidade do Rock — área aberta, sem cobertura para o público do gramado. Sem números consolidados ainda; a previsão fecha mais perto do evento.",
          "u": "https://www.rocknoticias.com.br/rock-in-rio-2026-previsao-do-tempo-e-o-que-vestir-no-primeiro-fim-de-semana-173881.html"
        },
        {
          "t": "Promoview cria reconhecimento editorial das melhores ativações de marca do RiR 2026",
          "src": "Promoview",
          "when": "27/ago",
          "s": "Redação do portal de brand experience vai eleger destaques em 20 categorias (Melhor Ativação, Brinde Disputado, Brinde Criativo, Ativação Mais Querida, Gamificação, Influenciadores etc.), sem vínculo com a organização do festival. Marcas que integram a cobertura oficial do veículo entram no radar — janela até 1/set.",
          "u": "https://www.promoview.com.br/reconhecimento-melhores-ativacoes-rock-in-rio-2026/"
        },
        {
          "t": "Esquenta do headliner: Foo Fighters faz show raro com orquestra dias antes do RiR",
          "src": "The Hollywood Reporter",
          "when": "23/ago",
          "s": "A banda que abre o Palco Mundo em 4/set estreou no Hollywood Bowl (22/ago) ao lado da Filarmônica de Los Angeles regida por Gustavo Dudamel — show único que reacendeu o hype internacional da banda na semana em que embarca para o Brasil.",
          "u": "https://www.hollywoodreporter.com/music/music-news/foo-fighters-rock-hollywood-bowl-debut-gustavo-dudamel-1236680241/"
        }
      ],
      "ipiranga": [
        {
          "t": "Pauta de segurança pede ajuste de tom: jornada tranquila, nunca estética policial",
          "src": "Super Rádio Tupi",
          "when": "28/ago",
          "s": "Com 7.680 agentes, drones e reconhecimento facial dominando o noticiário, o espaço da marca é o lado do fã: chegar cedo, planejar a volta, pontos de apoio na rota. Evitar qualquer associação visual com operação policial nas peças de jornada.",
          "u": "https://www.tupi.fm/rio/rock-in-rio-2026-megaoperacao-tera-drones-e-reconhecimento-facial/"
        },
        {
          "t": "Lei Seca com 700 agentes: território legítimo para mensagem de direção responsável",
          "src": "Super Rádio Tupi",
          "when": "28/ago",
          "s": "A operação Lei Seca em escala inédita conversa direto com quem vai de carro. \"Quem dirige não bebe + rota de volta segura (metrô 24h, AmPm aberta)\" é mensagem que só uma marca de combustível entrega com naturalidade — e blinda a marca na pauta.",
          "u": "https://www.tupi.fm/rio/rock-in-rio-2026-megaoperacao-tera-drones-e-reconhecimento-facial/"
        },
        {
          "t": "Chuva possível no 1º fim de semana reabre a discussão do brinde-herói",
          "src": "Rock Notícias",
          "when": "26/ago",
          "s": "Se a instabilidade se confirmar, capa de chuva/poncho vira o item mais desejado da Cidade do Rock (guarda-chuva é proibido). Pochete e leque resolvem sol e pertences; um poncho assinado \"89 anos\" resolveria o cenário de chuva — decisão precisa sair até 1/set por logística.",
          "u": "https://www.rocknoticias.com.br/rock-in-rio-2026-previsao-do-tempo-e-o-que-vestir-no-primeiro-fim-de-semana-173881.html"
        },
        {
          "t": "Atrito no resgate de ingressos no app Quentro é espaço de utilidade para a marca",
          "src": "Reclame Aqui",
          "when": "ago/26",
          "s": "Relatos recorrentes no Reclame Aqui de ingressos que não aparecem no app após compra/resgate na Ticketmaster. A organização resolve o problema; a marca pode ser a aliada que orienta (\"resgate hoje, não deixe para a porta\") — conteúdo de serviço com alto potencial de gratidão do fã.",
          "u": "https://www.reclameaqui.com.br/ticketmaster-brasil-ltda/ingresso-do-rock-in-rio-2026-nao-aparece-no-aplicativo-quentro-apos-compra-e-resgate-bem-sucedidos-na-plataforma-ticket_NwIft42PNvhBFqZv/"
        },
        {
          "t": "Placar do trade definido: Promoview vai eleger as melhores ativações",
          "src": "Promoview",
          "when": "27/ago",
          "s": "Categorias como \"Brinde Disputado\", \"Ativação Mais Querida\" e \"Influenciadores/Creators\" são exatamente os territórios do Espaço Ipiranga. Estar na cobertura oficial do veículo (janela até 1/set) é o que garante disputar a narrativa pós-festival no trade.",
          "u": "https://www.promoview.com.br/reconhecimento-melhores-ativacoes-rock-in-rio-2026/"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set — próxima sexta. A partir da manhã seguinte, a repercussão de cada noite (melhores shows, momentos virais, críticas da imprensa) entra aqui, dia a dia.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "Corrida final pelo ingresso de 7/set",
            "s": "O anúncio oficial de \"últimos ingressos\" para o dia Elton John transformou o fim de semana em plantão de FOMO — fãs compartilham prints de setores sumindo na Ticketmaster e cobram aviso de esgotamento.",
            "u": "https://www.abcdoabc.com.br/rock-in-rio-libera-ultimos-ingressos-elton-john/"
          },
          {
            "t": "Megaoperação de segurança em debate",
            "s": "Drones e reconhecimento facial repercutem em dois tons: sensação de segurança para quem vai e discussão sobre vigilância — conversa de imprensa e público, sem lado dominante ainda.",
            "u": "https://www.tupi.fm/rio/rock-in-rio-2026-megaoperacao-tera-drones-e-reconhecimento-facial/"
          },
          {
            "t": "Ingresso sumido no Quentro",
            "s": "Relatos de ingressos que não aparecem no app após o resgate viram tópico recorrente entre fãs (e no Reclame Aqui) — ansiedade operacional cresce à medida que a abertura se aproxima.",
            "u": "https://www.reclameaqui.com.br/ticketmaster-brasil-ltda/ingresso-do-rock-in-rio-2026-nao-aparece-no-aplicativo-quentro-apos-compra-e-resgate-bem-sucedidos-na-plataforma-ticket_NwIft42PNvhBFqZv/"
          }
        ],
        "tiktok": [
          {
            "t": "Checklist agora inclui capa de chuva",
            "s": "Com a previsão de instabilidade circulando, vídeos de \"o que levar\" incorporam capa de chuva e calçado fechado ao lado do carregador portátil e da garrafa de 500 ml — utilidade segue como formato dominante da reta final.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          },
          {
            "t": "Looks por dia e por artista",
            "s": "A trend de outfits segmentados (\"look Calvin\", \"outfits Laufey\", looks masculinos por data) segue crescendo nas páginas de descoberta — planejamento visual show a show.",
            "u": "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026"
          },
          {
            "t": "Foo Fighters com orquestra alimenta o esquenta",
            "s": "Cortes do show com a Filarmônica de LA no Hollywood Bowl (22/ago) entram nos edits de contagem regressiva da abertura — \"Everlong\" sinfônico é o clipe do momento entre fãs.",
            "u": "https://www.youtube.com/watch?v=oWyvNipcMfw"
          }
        ],
        "instagram": [
          {
            "t": "Perfil oficial entre serviço e FOMO",
            "s": "Contagem regressiva, posts de mobilidade/ingresso digital e o alerta de últimos ingressos de 7/set dividem o feed; comentários seguem concentrando dúvidas de logística — território aberto para marcas úteis.",
            "u": "https://www.instagram.com/rockinrio/"
          },
          {
            "t": "Ensaios dos shows brasileiros",
            "s": "Ivete (recordista de apresentações no festival), Capital Inicial e os encontros do Sunset publicam bastidores de ensaio — UGC de expectativa puxado pelos próprios artistas.",
            "u": "https://www.bahianoticias.com.br/holofote/noticia/85341-ivete-sangalo-inicia-ensaios-para-novo-show-no-rock-in-rio-baiana-e-artista-que-mais-se-apresentou-no-festival"
          }
        ],
        "sounds": [
          {
            "t": "Foo Fighters sinfônico",
            "s": "Áudios do show com a LA Phil (22/ago) e \"Everlong\"/\"The Pretender\" seguem como trilha padrão dos edits de contagem regressiva para 4/set."
          },
          {
            "t": "Stray Kids — THIS & THAT",
            "s": "O mini-álbum lançado em 7/ago (com versão de festival de \"RUN IT\") domina o recorte K-pop rumo ao 11/set; fancams de ensaio alimentam o fandom."
          },
          {
            "t": "Clássicos de Elton John",
            "s": "\"Rocket Man\", \"Your Song\" e \"Tiny Dancer\" em alta nos vídeos de expectativa — tendência que se intensifica com o alerta de últimos ingressos."
          }
        ],
        "note": "Fase pré-evento: leitura editorial a partir de imprensa, Reclame Aqui e páginas públicas das plataformas — sem dado quantitativo de plataforma disponível nesta data. Durante o festival, esta aba passa a trazer os trending topics e vídeos mais vistos de cada noite."
      },
      "direcionais": {
        "leitura": "A 6 dias da abertura, o noticiário virou operação de verdade: megaoperação de segurança (7.680 agentes, drones, reconhecimento facial), \"últimos ingressos\" oficiais para o dia da Ipiranga (7/set) e primeiras previsões de chuva para o 1º fim de semana. O fã está entre o FOMO do ingresso e a ansiedade logística (Quentro, o que levar, como voltar) — e é nessa fresta de utilidade que a marca joga.",
        "dirs": [
          {
            "t": "Ocupar o lado do fã na pauta de segurança",
            "s": "A cobertura do fim de semana é policial (drones, bloqueios, reconhecimento facial). A marca não comenta a operação: traduz o que muda para o fã — chegue cedo, 6 bloqueios viários, planeje a volta. Zero estética de segurança pública nas peças."
          },
          {
            "t": "Direção responsável como extensão natural da jornada",
            "s": "Lei Seca com 700 agentes é fato novo e conversa com o core da marca: \"quem dirige não bebe\" + rota de volta (metrô 24h, AmPm na madrugada) é mensagem que a Ipiranga entrega com legitimidade única entre os patrocinadores — e antecipa risco reputacional zero."
          },
          {
            "t": "Clima instável muda a hierarquia do brinde",
            "s": "Se chover no 1º fim de semana, o item mais fotografado da Cidade do Rock será quem resolver a chuva (guarda-chuva é proibido). Avaliar poncho/capa dos 89 anos antes que outro patrocinador ocupe esse espaço — decisão até 1/set, ou perder a janela logística."
          },
          {
            "t": "O atrito do Quentro é a dor real da semana — e ninguém a resolveu em conteúdo",
            "s": "Enquanto os patrocinadores falam de ativação, o fã está brigando com o resgate do ingresso. Tutorial claro e empático nos canais da marca (sem criticar a organização) captura gratidão num momento de ansiedade máxima."
          },
          {
            "t": "Entrar no placar do trade antes de 1/set",
            "s": "O reconhecimento editorial do Promoview (20 categorias) vai definir quem \"ganhou\" o Rock in Rio na narrativa do mercado. Brinde Disputado, Ativação Mais Querida e Creators são categorias em que o Espaço Ipiranga tem tese — desde que a marca esteja na cobertura oficial."
          }
        ],
        "acion": [
          "Publicar até 1/set o tutorial \"resgate seu ingresso no Quentro hoje\" (stories + CRM KMV/AmPm), com monitoramento de Reclame Aqui e comentários oficiais no war room.",
          "Decidir até 1/set se capa de chuva/poncho dos 89 anos entra no kit de brinde ou no seeding de creators do 1º fim de semana, travando produção e frete ainda nesta janela.",
          "Garantir até 1/set a presença do Espaço Ipiranga na cobertura oficial do Promoview e briefar o time do espaço sobre as 20 categorias (foco: Brinde Disputado, Ativação Mais Querida, Creators).",
          "Adaptar o guia de chegada (em produção desde ontem) com o fato novo da segurança: 6 pontos de bloqueio, revista nos acessos e recomendação de chegada cedo — sem imagens de policiamento.",
          "Manter plantão de fim de semana para o esgotamento de 7/set: o aviso oficial de \"últimos ingressos\" saiu sexta; o disparo de celebração dos 89 anos (pronto desde a edição #5) pode ser acionado a qualquer momento."
        ]
      },
      "sources": [
        [
          "Super Rádio Tupi — megaoperação de segurança (28/08)",
          "https://www.tupi.fm/rio/rock-in-rio-2026-megaoperacao-tera-drones-e-reconhecimento-facial/"
        ],
        [
          "A Onça — 7.680 agentes e estrutura policial (28/08)",
          "https://www.aonca.com.br/rock-in-rio-seguranca-tera-mais-de-7-mil-agentes-alem-de-drones/"
        ],
        [
          "ABC do ABC — últimos ingressos para 7/set (28/08)",
          "https://www.abcdoabc.com.br/rock-in-rio-libera-ultimos-ingressos-elton-john/"
        ],
        [
          "Rock Notícias — previsão do tempo do 1º fim de semana",
          "https://www.rocknoticias.com.br/rock-in-rio-2026-previsao-do-tempo-e-o-que-vestir-no-primeiro-fim-de-semana-173881.html"
        ],
        [
          "Promoview — reconhecimento das melhores ativações (24–27/08)",
          "https://www.promoview.com.br/reconhecimento-melhores-ativacoes-rock-in-rio-2026/"
        ],
        [
          "The Hollywood Reporter — Foo Fighters no Hollywood Bowl (23/08)",
          "https://www.hollywoodreporter.com/music/music-news/foo-fighters-rock-hollywood-bowl-debut-gustavo-dudamel-1236680241/"
        ],
        [
          "Reclame Aqui — relatos de ingresso não exibido no app Quentro",
          "https://www.reclameaqui.com.br/ticketmaster-brasil-ltda/ingresso-do-rock-in-rio-2026-nao-aparece-no-aplicativo-quentro-apos-compra-e-resgate-bem-sucedidos-na-plataforma-ticket_NwIft42PNvhBFqZv/"
        ],
        [
          "Terra — Stray Kids, mini-álbum THIS & THAT (contexto)",
          "https://www.terra.com.br/diversao/musica/rock-in-rio/stray-kids-revela-tracklist-de-this-that-novo-mini-album-que-trarao-ao-rock-in-rio-2026,64061a7033a3c72d8bfc7d1396e11715ds45p5kp.html"
        ],
        [
          "Bahia Notícias — Ivete inicia ensaios (contexto)",
          "https://www.bahianoticias.com.br/holofote/noticia/85341-ivete-sangalo-inicia-ensaios-para-novo-show-no-rock-in-rio-baiana-e-artista-que-mais-se-apresentou-no-festival"
        ],
        [
          "YouTube — Foo Fighters c/ orquestra no Hollywood Bowl (22/08)",
          "https://www.youtube.com/watch?v=oWyvNipcMfw"
        ]
      ]
    },
    {
      "date": "28/08/2026",
      "dateISO": "2026-08-28",
      "weekday": "sexta-feira",
      "edition": 5,
      "phase": "pré-evento",
      "pulse": [
        "⏳ <b>Faltam 7 dias</b>: a Cidade do Rock abre na próxima sexta (4/set), com Foo Fighters puxando a noite do rock alternativo.",
        "🎟️ <b>Alerta de ingresso</b>: 6, 11 e 12/set esgotados e a organização sinaliza \"últimos ingressos\" para 7/set — justamente o dia da despedida de Elton John e dos 89 anos da Ipiranga. 4, 5 e 13/set seguem à venda (R$ 870 / meia R$ 435).",
        "📲 <b>A pauta virou operação</b>: ingresso 100% digital no app Quentro (print não passa na catraca), metrô 24h no Jardim Oceânico e BRT Expresso a R$ 29 — a semana T-7 é dominada por conteúdo de utilidade."
      ],
      "news": [
        {
          "t": "\"Últimos ingressos\" para 7/set — o dia de Elton John (e da Ipiranga) é o próximo a esgotar",
          "src": "Igor Miranda",
          "when": "28/ago",
          "s": "Levantamento desta sexta aponta o 7/set na reta final de vendas (R$ 870 inteira / R$ 435 meia, máx. 4 por comprador, Ticketmaster). Depois da venda extraordinária de 6/ago, os dias voltaram a esgotar um a um — o feriado com Elton + Gil deve ser o próximo \"sold out\".",
          "u": "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/"
        },
        {
          "t": "Balanço de ingressos: 6, 11 e 12/set esgotados; quatro dias seguiam à venda",
          "src": "O Reporter",
          "when": "21/ago",
          "s": "Calvin Harris (6), Stray Kids (11) e Maroon 5 (12) já não têm entradas. Restavam 4/set (Foo Fighters), 5/set (Avenged Sevenfold), 7/set (Elton John) e 13/set (Twenty One Pilots). A grade da aba Shows reflete o status atualizado.",
          "u": "https://oreporter.com/rock-in-rio/rock-in-rio-2026-ingressos-dias-disponiveis"
        },
        {
          "t": "Guia oficial da reta final: ingresso só no app Quentro, lockers com USB e The Flight com 756 fogos",
          "src": "Assessoria RiR / Visite Brasília",
          "when": "20/ago",
          "s": "Ingresso é 100% digital via app Quentro (captura de tela e impresso não passam na catraca). Pode entrar: água até 500 ml, protetor até 100 ml, carregador portátil, até 5 itens de alimento. Novidades: lockers com recarga USB, compra antecipada de bebidas, ECCO by LightWire imersivo e The Flight com 756 disparos de fogos diurnos.",
          "u": "https://visitebrasilia.com.br/noticias/faltam-15-dias-rock-in-rio-entra-na-reta-final-e-reune-tudo-o-que-o-publico-precisa-saber-para-viver-o-festival-ao-maximo"
        },
        {
          "t": "Esquema de mobilidade: metrô 24h e BRT Expresso a R$ 29",
          "src": "Semana Pop",
          "when": "21/ago",
          "s": "Estação Jardim Oceânico funciona 24h nos dias de evento (tarifa R$ 7,90); BRT Expresso Rock in Rio a R$ 29 por trecho via app Jaé (combo ida e volta metrô+BRT: R$ 44,80). Serviço Primeira Classe tem ônibus executivos com 20+ pontos de embarque na cidade.",
          "u": "https://www.semanapop.com.br/rock-in-rio-2026-entra-na-reta-final-no-rio/"
        },
        {
          "t": "90+ marcas, 100+ ativações e ~1 milhão de brindes na Cidade do Rock",
          "src": "propmark",
          "when": "18/ago",
          "s": "Edição 2026 terá mais de 90 marcas, 100+ ativações, cerca de 400 produtos licenciados e 8 mil horas de experiências. Projeção de ~1 milhão de brindes distribuídos nos 7 dias — o maior 'shopping de marcas' da história do festival.",
          "u": "https://propmark.com.br/mercado/rock-in-rio-2026-tera-mais-de-90-marcas-e-100-ativacoes/"
        },
        {
          "t": "Estudo Kantar: o que o público quer das marcas em festival",
          "src": "Mundo do Marketing",
          "when": "18/ago",
          "s": "Music Festival Brand Evaluator: 46% valorizam \"momentos divertidos e memoráveis\", 40% benefícios úteis e 39% experiências exclusivas. Das ativações desta edição, 36% apostam em brindes, 33% em benefícios exclusivos e 32% em experiências memoráveis.",
          "u": "https://mundodomarketing.com.br/rock-in-rio-2026-amplia-disputa-das-marcas-por-atencao-e-experiencias-na-cidade-do-rock"
        }
      ],
      "ipiranga": [
        {
          "t": "Imprensa detalha o Espaço Ipiranga renovado",
          "src": "Terra",
          "when": "21/ago",
          "s": "Matéria de ativações confirma: espaço \"completamente renovado, com ativações abertas ao público e uma área exclusiva para convidados\", brindes de pochete e leque e experiência fotográfica com Glambot. É a descrição pública mais recente do que o visitante vai encontrar.",
          "u": "https://www.terra.com.br/diversao/musica/meu-sonora/rock/ativacoes-do-rock-in-rio-2026-confira-que-cada-patrocinador-prepara-para-a-edicao,6339eb8ee0dcb937a8aec29a1bb062c3yjw477g5.html"
        },
        {
          "t": "Atenção: C&A anuncia \"primeira Glambot da Cidade do Rock\"",
          "src": "Terra",
          "when": "21/ago",
          "s": "Na mesma matéria, a C&A (50 anos) reivindica a \"primeira Glambot na Cidade do Rock\" — sobreposição direta com a experiência fotográfica do nosso espaço. Itaú leva pavilhão de 3 andares com Listening Club e roda-gigante; Heineken estreia a linha Ultimate com tirolesa; Philco monta estande-caixa de som com game.",
          "u": "https://www.terra.com.br/diversao/musica/meu-sonora/rock/ativacoes-do-rock-in-rio-2026-confira-que-cada-patrocinador-prepara-para-a-edicao,6339eb8ee0dcb937a8aec29a1bb062c3yjw477g5.html"
        },
        {
          "t": "7/set caminha para esgotar de novo — e é o dia dos 89 anos",
          "src": "Igor Miranda",
          "when": "28/ago",
          "s": "O alerta de \"últimos ingressos\" transforma o dia do aniversário no mais disputado do momento. Quando o esgotamento for anunciado, a pauta espontânea (\"dia mais desejado do festival\") se conecta direto à celebração da marca.",
          "u": "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/"
        },
        {
          "t": "Dado que valida a tese da jornada: benefício útil move 40% do público",
          "src": "Mundo do Marketing (Kantar)",
          "when": "18/ago",
          "s": "O 2º maior driver de lembrança de marca em festival é oferecer benefício útil (40%) — exatamente o território da \"parada completa\" (rota, abastecimento, AmPm, apoio ao fã). Argumento pronto para sustentar a estratégia junto ao cliente.",
          "u": "https://mundodomarketing.com.br/rock-in-rio-2026-amplia-disputa-das-marcas-por-atencao-e-experiencias-na-cidade-do-rock"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set — sexta que vem. A partir da manhã seguinte, a repercussão de cada noite (melhores shows, momentos virais, críticas da imprensa) entra aqui, dia a dia.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "\"Últimos ingressos\" para o dia Elton John",
            "s": "O alerta da organização para 7/set reacende a corrida por ingresso e o FOMO da despedida — assunto dominante da conversa de festival nesta sexta.",
            "u": "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/"
          },
          {
            "t": "Modo checklist (T-7)",
            "s": "Perfis de fã e imprensa viram guia de sobrevivência: app Quentro, o que pode levar, BRT vs carro. Logística superou line-up como pauta do pré-evento.",
            "u": "https://visitebrasilia.com.br/noticias/faltam-15-dias-rock-in-rio-entra-na-reta-final-e-reune-tudo-o-que-o-publico-precisa-saber-para-viver-o-festival-ao-maximo"
          },
          {
            "t": "STAY em mobilização pelo 11/set esgotado",
            "s": "Caravanas e projetos de fã seguem ativos para o K-pop day — primeiro da história do festival com lightstick liberado; ingresso esgotado só aumenta a ansiedade do fandom.",
            "u": "https://rollingstone.com.br/musica/rock-in-rio-2026-tera-o-maior-encontro-de-k-pop-da-america-latina-em-11-de-setembro/"
          }
        ],
        "tiktok": [
          {
            "t": "Looks segmentados por dia e artista",
            "s": "A trend de outfit evoluiu: páginas de descoberta já separam \"outfit Calvin\", \"outfits Laufey\" e looks masculinos por data — o público está planejando visual show a show.",
            "u": "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026"
          },
          {
            "t": "Hacks de logística e \"o que levar\"",
            "s": "Vídeos de como chegar, ingresso no app e itens permitidos ganham tração na semana da reta final — utilidade é o formato que mais cresce agora.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          },
          {
            "t": "Esquenta dos fandoms",
            "s": "Edits de Foo Fighters (abertura), do metal do dia 5 e fancams pré-álbum de Stray Kids alimentam a contagem regressiva.",
            "u": "https://www.tiktok.com/discover/rock-in-rio-2026-outfits-masculino"
          }
        ],
        "instagram": [
          {
            "t": "Perfil oficial em modo serviço",
            "s": "Posts de mobilidade, ingresso digital e mapa da Cidade do Rock dividem espaço com expectativa dos headliners; comentários concentram dúvidas de logística — território aberto para marcas úteis.",
            "u": "https://www.instagram.com/rockinrio/"
          },
          {
            "t": "Artistas em preparação",
            "s": "Ensaios e teasers dos shows brasileiros (Ivete, Gil, Capital Inicial) e posts da despedida de Elton John puxam o UGC de expectativa.",
            "u": "https://www.instagram.com/rockinrio/"
          }
        ],
        "sounds": [
          {
            "t": "Stray Kids — esquenta do álbum (17 faixas)",
            "s": "Fancams e edits pré-lançamento seguem dominando o recorte K-pop rumo ao 11/set."
          },
          {
            "t": "Clássicos de Elton John",
            "s": "\"Rocket Man\", \"Your Song\" e \"Tiny Dancer\" em trilhas de vídeo de expectativa — tendência de alta até 7/set."
          },
          {
            "t": "Foo Fighters e o esquenta da abertura",
            "s": "\"Everlong\" e \"The Pretender\" aparecem em edits de contagem regressiva para a primeira noite (4/set)."
          }
        ],
        "note": "Fase pré-evento: leitura editorial a partir de imprensa e páginas públicas das plataformas — sem dado quantitativo de plataforma disponível nesta data. Durante o festival, esta aba passa a trazer os trending topics e vídeos mais vistos de cada noite."
      },
      "direcionais": {
        "leitura": "A uma semana da abertura, a conversa migrou de line-up para operação (ingresso digital, mobilidade, o que levar) — e o alerta de \"últimos ingressos\" para 7/set coloca o dia da Ipiranga no centro do noticiário. O estudo Kantar dá o número que sustenta a tese da marca: benefício útil é o 2º maior driver de lembrança em festival (40%).",
        "dirs": [
          {
            "t": "Surfar o \"últimos ingressos\" de 7/set sem vender ingresso",
            "s": "O dia do aniversário caminha para esgotar de novo. Quando o esgotamento oficial sair, a marca entra com celebração — 89 anos no dia mais disputado do festival — nunca com call de compra: quem vende é a organização; a Ipiranga capitaliza o símbolo."
          },
          {
            "t": "Dominar a pauta de utilidade da semana T-7",
            "s": "App Quentro, BRT/metrô 24h, checklist do que levar: são as dúvidas reais do público agora, e utilidade é o território validado pela Kantar (40%). Conteúdo de serviço com selo Ipiranga/AmPm nesta janela rende mais que teaser de espaço."
          },
          {
            "t": "Diferenciar a Glambot antes que a C&A tome a narrativa",
            "s": "A C&A reivindica a \"primeira Glambot da Cidade do Rock\". Amarrar a nossa experiência fotográfica ao ritual dos 89 anos (moldura/motion exclusivo do aniversário) e comunicar antes — a disputa é por quem define a referência."
          },
          {
            "t": "Brinde não é diferencial, é aposta da maioria",
            "s": "36% das 100+ ativações apostam em brinde e o festival projeta ~1 milhão de itens. Pochete e leque precisam carregar uma história — kit de jornada do fã — para não virarem commodity de sacola."
          },
          {
            "t": "Tratar a semana 1 como ensaio geral do dia-pilar",
            "s": "A abertura (4/set) é o teste de fluxo do war room antes de 7/set: monitoramento, cortes e aprovação rodando desde a primeira noite, com ajuste fino aplicado no dia do aniversário."
          }
        ],
        "acion": [
          "Deixar pronto (texto + arte + press) o disparo de celebração para o momento em que a organização anunciar o esgotamento de 7/set — monitorar Ticketmaster e canais oficiais diariamente.",
          "Publicar até 1/set o guia Ipiranga de chegada: rota de carro, estacionamento, postos e AmPm no caminho do Parque Olímpico, integrado ao esquema oficial (metrô 24h, BRT R$ 29, app Jaé).",
          "Briefar a Glambot do espaço com assinatura visual dos 89 anos e antecipar o anúncio antes da comunicação da C&A.",
          "Transformar pochete + leque em \"kit de sobrevivência da Cidade do Rock\" no seeding com creators convidados (roteiro de uso real: fila, sol, pertences).",
          "Rodar dry run do war room na noite de 4/set com relatório-relâmpago na manhã de 5/set, calibrando o fluxo para o dia 7."
        ]
      },
      "sources": [
        [
          "Igor Miranda — próximo dia a esgotar (28/08)",
          "https://igormiranda.com.br/2026/08/rock-in-rio-2026-proximo-dia-deve-ter-ingressos-esgotados/"
        ],
        [
          "O Reporter — status de ingressos por dia",
          "https://oreporter.com/rock-in-rio/rock-in-rio-2026-ingressos-dias-disponiveis"
        ],
        [
          "Visite Brasília — guia oficial da reta final",
          "https://visitebrasilia.com.br/noticias/faltam-15-dias-rock-in-rio-entra-na-reta-final-e-reune-tudo-o-que-o-publico-precisa-saber-para-viver-o-festival-ao-maximo"
        ],
        [
          "Semana Pop — mobilidade e ingresso digital",
          "https://www.semanapop.com.br/rock-in-rio-2026-entra-na-reta-final-no-rio/"
        ],
        [
          "propmark — 90+ marcas e 100+ ativações",
          "https://propmark.com.br/mercado/rock-in-rio-2026-tera-mais-de-90-marcas-e-100-ativacoes/"
        ],
        [
          "Mundo do Marketing — estudo Kantar",
          "https://mundodomarketing.com.br/rock-in-rio-2026-amplia-disputa-das-marcas-por-atencao-e-experiencias-na-cidade-do-rock"
        ],
        [
          "Terra — ativações dos patrocinadores (Ipiranga, C&A, Itaú...)",
          "https://www.terra.com.br/diversao/musica/meu-sonora/rock/ativacoes-do-rock-in-rio-2026-confira-que-cada-patrocinador-prepara-para-a-edicao,6339eb8ee0dcb937a8aec29a1bb062c3yjw477g5.html"
        ],
        [
          "Estado de Minas — venda extraordinária (contexto)",
          "https://www.em.com.br/cultura/2026/08/7472038-rock-in-rio-disponibiliza-novos-ingressos-para-a-edicao-de-2026.html"
        ],
        [
          "Kiss FM — montagem da Cidade do Rock",
          "https://kissfm.com.br/rock-in-rio-2026-entra-na-reta-final-com-cidade-do-rock-em-montagem-acelerada-e-line-up-completo-confirmado/"
        ],
        [
          "TikTok — looks para o Rock in Rio 2026",
          "https://www.tiktok.com/discover/looks-para-o-rock-in-rio-2026"
        ]
      ]
    },
    {
      "date": "27/08/2026",
      "dateISO": "2026-08-27",
      "weekday": "quinta-feira",
      "edition": 4,
      "phase": "pré-evento",
      "pulse": [
        "🚦 <b>Prefeitura divulga o esquema oficial de trânsito e transporte</b>: bloqueios das 14h às 5h no entorno do Parque Olímpico e — atenção — <b>sem estacionamento para visitantes</b>.",
        "🚇 <b>Metrô 24h em Jardim Oceânico (R$ 7,90), BRT Expresso a R$ 29 (app Jaé) e VLT 24h</b>: a jornada até a Cidade do Rock será majoritariamente por transporte público.",
        "⏳ <b>Faltam 8 dias</b> para a abertura — logística de chegada vira o assunto dominante da semana."
      ],
      "news": [
        {
          "t": "Prefeitura divulga esquema especial de trânsito e transporte",
          "src": "Itatiaia",
          "when": "27/ago",
          "s": "Bloqueios das 14h às 5h nas avenidas Abelardo Bueno e Salvador Allende (só moradores cadastrados, veículos oficiais e BRT circulam). Metrô Jardim Oceânico 24h, BRT Expresso com 3 rotas a R$ 29 via app Jaé e VLT linha 1 por 24h. Recomendação oficial: não ir de carro — não haverá estacionamento para visitantes.",
          "u": "https://www.itatiaia.com.br/brasil/sudeste/rj/rock-in-rio-2026-prefeitura-divulga-esquema-especial-de-transito-e-transporte-no-rio/"
        },
        {
          "t": "Transporte integrado: metrô + BRT com bilhete conjunto",
          "src": "Diário do Rio",
          "when": "27/ago",
          "s": "Operação especial integra MetrôRio e BRT Expresso direto ao Terminal Centro Olímpico, com venda antecipada de bilhetes; ônibus executivo \"Primeira Classe\" sai de vários pontos do RJ, SP e MG com volta flexível.",
          "u": "https://diariodorio.com/rock-in-rio-2026-tera-transporte-integrado-entre-metrorio-e-brt-veja-como-comprar-os-bilhetes/"
        },
        {
          "t": "Festival compensa ~50 mil toneladas de CO₂ com a AXIA",
          "src": "Terra",
          "when": "contexto",
          "s": "Primeira operação de descarbonização total da jornada do público (créditos de carbono, certificados de energia renovável e reflorestamento) — o festival neutraliza as emissões internas da Cidade do Rock desde 2006.",
          "u": "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-2026-tera-transporte-especial-e-acao-de-sustentabilidade,b713b36354cb90e68e75ea05f4ea9bb27fyw41zv.html"
        }
      ],
      "ipiranga": [
        {
          "t": "Alerta estratégico: \"sem estacionamento\" muda a narrativa da jornada",
          "src": "análise do radar (sobre Itatiaia, 27/ago)",
          "when": "27/ago",
          "s": "Com a prefeitura desestimulando o carro no dia do evento, o discurso de utilidade da Ipiranga precisa migrar de \"vá de carro à Cidade do Rock\" para \"abasteça na ida ao metrô/BRT, no retorno para casa e nas viagens de quem vem de fora\" (Primeira Classe/caravanas saem de SP e MG — rota de estrada é oportunidade AmPm/Jet Oil).",
          "u": "https://www.itatiaia.com.br/brasil/sudeste/rj/rock-in-rio-2026-prefeitura-divulga-esquema-especial-de-transito-e-transporte-no-rio/"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set. A repercussão de cada dia entra aqui na manhã seguinte.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "\"Como chegar na Cidade do Rock\"",
            "s": "O anúncio do esquema de transporte pauta a conversa: dúvidas sobre BRT a R$ 29, metrô 24h e a proibição de estacionamento dominam as menções do dia.",
            "u": "https://www.itatiaia.com.br/brasil/sudeste/rj/rock-in-rio-2026-prefeitura-divulga-esquema-especial-de-transito-e-transporte-no-rio/"
          }
        ],
        "tiktok": [
          {
            "t": "Logística de festival vira conteúdo",
            "s": "Criadores começam a publicar guias de \"como chegar/o que levar\" — formato de alto save e compartilhamento na semana pré-evento.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          }
        ],
        "instagram": [
          {
            "t": "Perfil oficial reforça canais de serviço",
            "s": "Posts de utilidade (transporte, regras de entrada) somam-se à contagem regressiva no feed oficial.",
            "u": "https://www.instagram.com/rockinrio/"
          }
        ],
        "sounds": [
          {
            "t": "Esquenta das setlists",
            "s": "Playlists de \"aquecimento\" por dia do festival crescem nas plataformas na reta final."
          }
        ],
        "note": "Edição retroativa (publicada em 28/08 para completar o histórico): leitura editorial baseada na imprensa do dia 27/08; sem métricas quantitativas de social."
      },
      "direcionais": {
        "leitura": "O esquema oficial de mobilidade redesenha a jornada do público — e a conversa da semana. Para uma marca de combustível, o dado \"sem estacionamento para visitantes\" exige recalibrar o discurso de utilidade antes da abertura.",
        "dirs": [
          {
            "t": "Reposicionar o guia de mobilidade",
            "s": "Atualizar o conteúdo de utilidade com o esquema oficial: abastecer na ida ao ponto de metrô/BRT, na volta para casa de madrugada e nas rotas de quem vem de outras cidades (Primeira Classe/caravanas de SP e MG)."
          },
          {
            "t": "AmPm como parada da madrugada",
            "s": "Shows terminam ~1h30–3h e o transporte roda 24h: mapear lojas AmPm 24h em rotas de dispersão (Barra/Jardim Oceânico) e comunicar como parada de conveniência pós-show."
          },
          {
            "t": "Surfar a pauta de sustentabilidade com cautela",
            "s": "A descarbonização AXIA dá o tom ambiental da edição; a Ipiranga entra nessa conversa apenas com fatos próprios (ex.: iniciativas reais de energia/renováveis), sem greenwashing."
          }
        ],
        "acion": [
          "Refazer o guia \"como chegar\" com o esquema oficial (metrô 24h, BRT R$ 29 via Jaé, VLT) e publicar antes de 3/set.",
          "Levantar lojas AmPm e postos nas rotas de dispersão e de estrada (RJ↔SP/MG) para o conteúdo de utilidade.",
          "Ajustar qualquer peça que sugira ir de carro ao festival — não haverá estacionamento para o público."
        ]
      },
      "sources": [
        [
          "Itatiaia — esquema de trânsito e transporte",
          "https://www.itatiaia.com.br/brasil/sudeste/rj/rock-in-rio-2026-prefeitura-divulga-esquema-especial-de-transito-e-transporte-no-rio/"
        ],
        [
          "Diário do Rio — transporte integrado",
          "https://diariodorio.com/rock-in-rio-2026-tera-transporte-integrado-entre-metrorio-e-brt-veja-como-comprar-os-bilhetes/"
        ],
        [
          "Terra — transporte especial e sustentabilidade",
          "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-2026-tera-transporte-especial-e-acao-de-sustentabilidade,b713b36354cb90e68e75ea05f4ea9bb27fyw41zv.html"
        ]
      ]
    },
    {
      "date": "26/08/2026",
      "dateISO": "2026-08-26",
      "weekday": "quarta-feira",
      "edition": 3,
      "phase": "pré-evento",
      "pulse": [
        "📋 <b>Semana do \"tira-dúvidas\"</b>: imprensa publica os guias práticos — portões às 14h, última entrada à meia-noite, encerramento às 3h.",
        "🎒 <b>Regras de entrada definidas</b>: garrafa plástica de até 500 ml, até 5 itens de comida; proibidos vidro, mochilas grandes, câmeras profissionais e drones.",
        "⏳ <b>Faltam 9 dias</b> — venda extraordinária segue aberta, com disponibilidade variando por dia e setor."
      ],
      "news": [
        {
          "t": "Tira-dúvidas oficial: horários, regras e transferência de ingressos",
          "src": "Billboard Brasil",
          "when": "26/ago",
          "s": "Portões abrem às 14h, última entrada à meia-noite e encerramento às 3h. Transferência de ingresso só pelo app Quentro (irreversível; print não vale). Gramado a R$ 870 (15% off p/ clientes Itaú) e Comfort Zone a R$ 1.950. Detalhe de fandom: Stray Kids sobe à 00h05 do dia 11 — tecnicamente já 12/set.",
          "u": "https://billboard.com.br/rock-in-rio-2026-datas-ingressos-horarios-duvidas/"
        },
        {
          "t": "Organização divulga dicas e recomendações para os fãs",
          "src": "Sopa Cultural",
          "when": "ago/26",
          "s": "Comunicação oficial entra em modo serviço: recomendações de chegada, hidratação, pontos de encontro e uso do app oficial na reta final para o festival.",
          "u": "https://sopacultural.com/rock-in-rio-2026-faltando-dois-dias-para-a-venda-geral-organizacao-da-dicas-e-recomendacoes-para-os-fas-que-vao-viver-dias-magicos-na-cidade-do-rock/"
        },
        {
          "t": "Guia geral do festival: line-up, ingressos e serviço",
          "src": "Noize",
          "when": "contexto",
          "s": "Compilados de \"tudo o que você precisa saber\" se multiplicam na imprensa — termômetro de que a busca por informação prática domina a semana.",
          "u": "https://www.noize.com.br/rock-in-rio-2026-line-up-ingressos-festival"
        }
      ],
      "ipiranga": [
        {
          "t": "Janela de conteúdo utilitário se abre com força",
          "src": "análise do radar",
          "when": "26/ago",
          "s": "Com o público caçando informação prática (o que levar, como transferir ingresso, horários), conteúdo de utilidade assinado pela marca tem chance alta de save/share — o \"kit parada completa\" (checklist do festivaleiro + rota de abastecimento) conversa direto com essa demanda.",
          "u": "https://billboard.com.br/rock-in-rio-2026-datas-ingressos-horarios-duvidas/"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set. A repercussão de cada dia entra aqui na manhã seguinte.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "Dúvidas práticas em alta",
            "s": "\"O que pode levar no Rock in Rio\", \"como transferir ingresso\" e horários dos portões puxam o volume de buscas e menções do dia.",
            "u": "https://billboard.com.br/rock-in-rio-2026-datas-ingressos-horarios-duvidas/"
          },
          {
            "t": "STAY de olho no relógio",
            "s": "O horário de Stray Kids (00h05 do dia 11→12) vira assunto no fandom, entre memes de \"virada\" e planejamento de caravana.",
            "u": "https://billboard.com.br/rock-in-rio-2026-datas-ingressos-horarios-duvidas/"
          }
        ],
        "tiktok": [
          {
            "t": "Checklists e \"o que levar\"",
            "s": "Formato checklist (mochila, garrafa 500 ml, 5 itens de comida) engata na semana; criadores testam looks + kit de sobrevivência no mesmo vídeo.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          }
        ],
        "instagram": [
          {
            "t": "Modo serviço no feed oficial",
            "s": "Carrosséis de regras e horários do perfil oficial concentram comentários com dúvidas — bom território para social listening de dores do público.",
            "u": "https://www.instagram.com/rockinrio/"
          }
        ],
        "sounds": [
          {
            "t": "Playlists de esquenta por dia",
            "s": "Seleções por noite (rock alternativo 4/9, metal 5/9, K-pop 11/9) crescem nas plataformas de streaming."
          }
        ],
        "note": "Edição retroativa (publicada em 28/08 para completar o histórico): leitura editorial baseada na imprensa do dia 26/08; sem métricas quantitativas de social."
      },
      "direcionais": {
        "leitura": "A semana é de caça à informação prática. Quem responder às dúvidas do festivaleiro com clareza — e com a assinatura certa — compra relevância barata antes de a concorrência de atenção explodir na Cidade do Rock.",
        "dirs": [
          {
            "t": "Lançar o \"kit parada completa\" do festivaleiro",
            "s": "Checklist visual do que levar (dentro das regras oficiais) + rota de abastecimento e conveniência — conteúdo utilitário com alto potencial de save, assinado pela marca sem esforço de venda."
          },
          {
            "t": "Aproveitar o social listening dos posts de serviço",
            "s": "Os comentários nos carrosséis oficiais são um mapa gratuito das dores do público (transporte, ingresso, chuva) — usar esse insumo para calibrar o conteúdo da semana da abertura."
          },
          {
            "t": "Preparar resposta rápida para o K-pop day",
            "s": "O detalhe do horário de Stray Kids já mobiliza o fandom; deixar peças de utilidade específicas (madrugada, transporte 24h) prontas para 10–11/set."
          }
        ],
        "acion": [
          "Produzir e aprovar o checklist \"kit parada completa\" até 1/set.",
          "Montar planilha de escuta com as dúvidas mais recorrentes nos posts oficiais desta semana.",
          "Reservar mídia/impulsionamento para conteúdo utilitário entre 1 e 4/set."
        ]
      },
      "sources": [
        [
          "Billboard Brasil — tira-dúvidas oficial",
          "https://billboard.com.br/rock-in-rio-2026-datas-ingressos-horarios-duvidas/"
        ],
        [
          "Sopa Cultural — dicas da organização",
          "https://sopacultural.com/rock-in-rio-2026-faltando-dois-dias-para-a-venda-geral-organizacao-da-dicas-e-recomendacoes-para-os-fas-que-vao-viver-dias-magicos-na-cidade-do-rock/"
        ],
        [
          "Noize — guia geral",
          "https://www.noize.com.br/rock-in-rio-2026-line-up-ingressos-festival"
        ]
      ]
    },
    {
      "date": "25/08/2026",
      "dateISO": "2026-08-25",
      "weekday": "terça-feira",
      "edition": 2,
      "phase": "pré-evento",
      "pulse": [
        "🏗️ <b>Montagem da Cidade do Rock em ritmo final</b>: pela 1ª vez, toda a fachada do Palco Mundo será um telão de LED (2.400 m²) — a maior transformação cênica da história do palco.",
        "🚁 <b>Encerramento terá show inédito com 1.500 drones</b>, além do retorno do espetáculo aéreo The Flight.",
        "⏳ <b>Faltam 10 dias</b> — 1.300+ artistas e ~190 shows confirmados nos 7 dias."
      ],
      "news": [
        {
          "t": "Bastidores da montagem: Palco Mundo vira um telão único de LED",
          "src": "Billboard Brasil",
          "when": "atual. 19/ago",
          "s": "Ana Deccache (diretora de marketing do festival) abre os bastidores da construção: fachada 100% LED de 2.400 m² no Palco Mundo, inédita, e aposta em \"fazer o público parte dos bastidores\" na comunicação da reta final.",
          "u": "https://billboard.com.br/rock-in-rio-bastidores-montagem-cidade/"
        },
        {
          "t": "Show inédito com 1,5 mil drones no encerramento",
          "src": "Vanity Brasil",
          "when": "ago/26",
          "s": "Além do The Flight (espetáculo aéreo diurno), a edição terá apresentação com 1.500 drones — mesmo arsenal do \"Keep Art Human\" de Alok no dia 11 — reforçando a aposta em espetáculos visuais.",
          "u": "https://vanitybrasil.com.br/rock-in-rio-2026-tera-show-inedito-com-15-mil-drones-no-encerramento/"
        },
        {
          "t": "Reta final: 1.300 artistas, 190 shows e Babilônia Feira Hype de volta",
          "src": "Kiss FM",
          "when": "contexto",
          "s": "Estrutura entra na fase final com Sunset, Global Village e Espaço Favela em acabamento; feira de moda/design celebra 30 anos com 60 expositores e praça gastronômica assinada por chefs.",
          "u": "https://kissfm.com.br/rock-in-rio-2026-entra-na-reta-final-com-cidade-do-rock-em-montagem-acelerada-e-line-up-completo-confirmado/"
        }
      ],
      "ipiranga": [
        {
          "t": "Bastidores viram moeda de conteúdo — inclusive para as marcas",
          "src": "análise do radar (sobre Billboard, 19/ago)",
          "when": "25/ago",
          "s": "Se o próprio festival transformou a montagem em narrativa (\"o bastidor tem uma magia\"), a construção do novo Espaço Ipiranga é um ativo de conteúdo: teasers da estrutura repaginada alimentam a expectativa e colocam o espaço nos roteiros antes dos portões abrirem.",
          "u": "https://billboard.com.br/rock-in-rio-bastidores-montagem-cidade/"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set. A repercussão de cada dia entra aqui na manhã seguinte.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "Palco Mundo 100% LED impressiona",
            "s": "As imagens da montagem e o anúncio da fachada-telão circulam bem entre perfis de música e produção de eventos.",
            "u": "https://billboard.com.br/rock-in-rio-bastidores-montagem-cidade/"
          },
          {
            "t": "Expectativa pelos drones",
            "s": "O show de 1.500 drones no encerramento entra na conversa como \"novo fogos de artifício\" da edição.",
            "u": "https://vanitybrasil.com.br/rock-in-rio-2026-tera-show-inedito-com-15-mil-drones-no-encerramento/"
          }
        ],
        "tiktok": [
          {
            "t": "Vídeos de montagem e time-lapse",
            "s": "Conteúdo de bastidores da Cidade do Rock (estruturas, palcos nascendo) rende bem no formato time-lapse/POV de obra.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          },
          {
            "t": "\"Look para o Rock in Rio\" segue firme",
            "s": "A trend de looks por dia do festival continua como o principal conteúdo de esquenta do público.",
            "u": "https://www.tiktok.com/discover/look-para-o-rock-in-rio-2026"
          }
        ],
        "instagram": [
          {
            "t": "Bastidores no feed oficial",
            "s": "O festival aposta em conteúdo de montagem e making-of — engajamento alto de quem quer \"ver a cidade nascer\".",
            "u": "https://www.instagram.com/rockinrio/"
          }
        ],
        "sounds": [
          {
            "t": "Stray Kids — \"THIS & THAT\" no streaming",
            "s": "Mini-álbum de 8 faixas aberto por \"RUN IT\" alimenta o esquenta do fandom para a estreia do K-pop no festival (11/set)."
          },
          {
            "t": "Catálogo dos headliners em alta",
            "s": "Foo Fighters (abertura 4/9) e clássicos de Elton John seguem crescendo nas playlists de esquenta."
          }
        ],
        "note": "Edição retroativa (publicada em 28/08 para completar o histórico): leitura editorial baseada na imprensa do dia 25/08; sem métricas quantitativas de social."
      },
      "direcionais": {
        "leitura": "A dez dias da abertura, a narrativa dominante é a construção do espetáculo — palco-telão, drones, bastidores. É a última janela para a Ipiranga gerar expectativa sobre o próprio espaço antes de a atenção migrar para os shows.",
        "dirs": [
          {
            "t": "Teaser do Espaço Ipiranga repaginado",
            "s": "Surfar a onda de bastidores do festival com um making-of da montagem do espaço — mostra a novidade, gera expectativa e disputa lugar nos roteiros de \"o que visitar na Cidade do Rock\"."
          },
          {
            "t": "Amarrar a marca aos espetáculos visuais",
            "s": "Palco 100% LED e 1.500 drones serão os momentos mais filmados: planejar presença/conteúdo próximo a esses picos de captura (antes, durante e depois) sem disputar com o show em si."
          },
          {
            "t": "Acelerar o cronograma de creators",
            "s": "Convites e roteiros de creators para o espaço precisam sair esta semana — depois de 1/set a agenda deles fecha."
          }
        ],
        "acion": [
          "Produzir teaser/making-of do novo Espaço Ipiranga para publicar até 1/set.",
          "Fechar a lista de creators convidados com briefing de roteiro incluindo o espaço.",
          "Mapear os horários dos espetáculos visuais (The Flight, drones) para o plano de real-time."
        ]
      },
      "sources": [
        [
          "Billboard Brasil — bastidores da montagem",
          "https://billboard.com.br/rock-in-rio-bastidores-montagem-cidade/"
        ],
        [
          "Vanity Brasil — show de 1.500 drones",
          "https://vanitybrasil.com.br/rock-in-rio-2026-tera-show-inedito-com-15-mil-drones-no-encerramento/"
        ],
        [
          "Kiss FM — reta final da montagem",
          "https://kissfm.com.br/rock-in-rio-2026-entra-na-reta-final-com-cidade-do-rock-em-montagem-acelerada-e-line-up-completo-confirmado/"
        ],
        [
          "Exame — Stray Kids \"THIS & THAT\"",
          "https://exame.com/pop/stray-kids-que-vai-tocar-no-rock-in-rio-lanca-mini-album-saiba-tudo/"
        ]
      ]
    },
    {
      "date": "24/08/2026",
      "dateISO": "2026-08-24",
      "weekday": "segunda-feira",
      "edition": 1,
      "phase": "pré-evento",
      "pulse": [
        "⏳ <b>Faltam 11 dias</b> para a Cidade do Rock abrir: 4/set começa a 1ª semana (Foo Fighters, Avenged Sevenfold, Calvin Harris e Elton John).",
        "🎟️ <b>Três dias já esgotados</b> — 6/set (Calvin Harris), 7/set (despedida de Elton John) e 12/set (Maroon 5). Venda extraordinária dos demais segue na Ticketmaster.",
        "⛽ <b>Ipiranga chega à edição com espaço repaginado</b> e faz 89 anos em 7/set, no dia mais simbólico do festival."
      ],
      "news": [
        {
          "t": "Horários de todos os shows são divulgados",
          "src": "Rolling Stone Brasil",
          "when": "ago/26",
          "s": "Grade completa dos 7 dias já está pública: Palco Mundo abre ~16h40 e headliners sobem à 00h05. Tabelas completas na aba Shows.",
          "u": "https://rollingstone.com.br/guia-show/horarios-rock-in-rio-2026/"
        },
        {
          "t": "Venda extraordinária de ingressos abre a um mês do festival",
          "src": "Billboard Brasil",
          "when": "05/ago",
          "s": "Remanescentes de todos os dias voltaram à venda em 6/ago ao meio-dia na Ticketmaster. Gramado a R$ 870 e novidade Comfort Zone a R$ 1.950 (acesso lateral ao Palco Mundo, bares e banheiros exclusivos).",
          "u": "https://billboard.com.br/rock-in-rio-venda-extraordinaria-ingressos/"
        },
        {
          "t": "Bastidores gigantes: 88 camarins, 260 contêineres e 10 mil pessoas no backstage",
          "src": "Terra",
          "when": "05/ago",
          "s": "Cidade do Rock de 385 mil m² (54 Maracanãs): Palco Mundo com 2.400 m² de LED, New Dance Order com 56,5 m de boca, Global Village com 6 mil m² de cenografia e Espaço Favela com 60 casinhas.",
          "u": "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-2026-bastidores-gigantes-e-vendas-extras-de-ingressos,b41fbcf480ed2e2fe46fff2f8b78178a5f1qszq5.html"
        },
        {
          "t": "Despedida de Elton John no Brasil esgota o dia 7/set",
          "src": "Jornal DR1 / Portal Lineup",
          "when": "jul/26",
          "s": "Será o último show do artista no país. Em entrevista, Elton prometeu \"compensar os fãs com um show fantástico\". Dia também tem Gilberto Gil, Jon Batiste e Fatboy Slim.",
          "u": "https://jornaldr1.com.br/show-de-despedida-de-elton-john-no-rock-in-rio-tem-ingressos-esgotados-e-confirma-expectativa-historica/"
        },
        {
          "t": "11/set será o maior encontro de K-pop da América Latina",
          "src": "Rolling Stone Brasil",
          "when": "11/jun",
          "s": "Stray Kids, HWASA e NEXZ estreiam no Brasil em shows únicos. Pela 1ª vez na história do festival, lightsticks estão liberados (até 24 cm / 400 g). Fãs organizam caravanas de todo o país.",
          "u": "https://rollingstone.com.br/musica/rock-in-rio-2026-tera-o-maior-encontro-de-k-pop-da-america-latina-em-11-de-setembro/"
        },
        {
          "t": "O que esperar dos sete dias de festival",
          "src": "Site da Baixada",
          "when": "20/ago",
          "s": "Balanço de véspera destaca 7 dias temáticos: rock alternativo, metal, pop/hits, MPB+Elton, K-pop, pop global e encerramento com Twenty One Pilots e Ivete Sangalo.",
          "u": "https://sitedabaixada.com.br/cultura/2026/08/20/faltam-15-dias-para-o-rock-in-rio-2026-veja-o-que-esperar-dos-sete-dias-de-festival"
        },
        {
          "t": "Geração Z lidera line-up com funk e K-pop",
          "src": "SpaceMoney",
          "when": "ago/26",
          "s": "Leitura de mercado: curadoria 2026 aposta no público jovem (Pedro Sampaio no Mundo, trap no Favela, K-pop day), reacendendo o eterno debate \"isso é rock?\" nas redes.",
          "u": "https://www.spacemoney.com.br/cultura-e-entretenimento/geracao-z-rock-in-rio-2026/"
        }
      ],
      "ipiranga": [
        {
          "t": "Ipiranga renova patrocínio e prepara Espaço Ipiranga repaginado",
          "src": "Marcas pelo Mundo",
          "when": "04/jun",
          "s": "Parceria de 10+ edições. Na edição passada, o espaço recebeu 10 mil visitantes e distribuiu ~30 mil brindes; em 2026 vem \"completamente renovado\", com ativações abertas ao público, recepção de convidados, brindes (pouches, leques) e Glambot.",
          "u": "https://marcaspelomundo.com.br/anunciantes/ipiranga-confirma-presenca-no-rock-in-rio-brasil-2026-e-prepara-acoes-para-o-publico-do-festival/"
        },
        {
          "t": "89 anos da marca no meio do festival (7/set)",
          "src": "Mundo do Marketing",
          "when": "10/jun",
          "s": "Aniversário cai no feriado e no dia mais simbólico da edição: despedida de Elton John + Gilberto Gil no Mundo. Julio Sattamini (VP de Marketing) posiciona a jornada \"a caminho das grandes experiências\" com Ipiranga, AmPm, Jet Oil e KMV.",
          "u": "https://mundodomarketing.com.br/ipiranga-celebra-aniversario-de-89-anos-com-acoes-especiais-no-rock-in-rio"
        },
        {
          "t": "Promoção \"Parada Completa\" encerrou em 17/ago com R$ 1 mi em prêmios",
          "src": "Live MKT News",
          "when": "jun–ago",
          "s": "600 ingressos de gramado, picape Triton, moto 0 km, pacotes Azul Viagens, R$ 50 mil e R$ 350 mil em vale-combustível. Número da sorte a cada R$ 10 em postos, AmPm e Jet Oil; bônus para usuários KMV. Filme adaptado de \"Lá, a parada é completa\" (AlmapBBDO).",
          "u": "https://livemarketing.com.br/ipiranga-renova-patrocinio-ao-rock-in-rio-e-lanca-promocao-com-ingressos-para-o-festival"
        },
        {
          "t": "Cenário competitivo: 90+ marcas e 8 mil horas de experiência",
          "src": "Promoview",
          "when": "19/ago",
          "s": "Itaú (pavilhão de 3 andares + roda-gigante), Heineken (tirolesa), Coca-Cola (palco próprio), KitKat (prédio com vista pro Mundo), Natura, TIM, iFood (montanha-russa) e estreias de Piracanjuba, Tic Tac, Philco, Venancio, Seara e Vale (ECCO). Disputa por atenção será intensa — referência para calibrar a divulgação do Espaço Ipiranga.",
          "u": "https://www.promoview.com.br/ativacoes-marcas-rock-in-rio-2026/"
        }
      ],
      "shows": {
        "status": "A primeira noite é em 4/set. A partir daí, a repercussão de cada dia (melhores shows, momentos virais, críticas da imprensa) entra aqui na manhã seguinte, dia a dia.",
        "reperc": []
      },
      "trends": {
        "x": [
          {
            "t": "Despedida de Elton John",
            "s": "Esgotamento do dia 7/set e entrevistas do artista (\"vou compensar com um show fantástico\") mantêm o assunto recorrente nos trending topics de música.",
            "u": "https://portallineup.com.br/entrevistas/decepcionei-fas-no-brasil-e-vou-compensar-com-show-fantastico-diz-elton-john-sobre-rock-in-rio/"
          },
          {
            "t": "STAY em mobilização (Stray Kids)",
            "s": "Fandom organiza caravanas e projetos de fãs para 11/set; anúncio de álbum novo com 17 faixas às vésperas do festival turbina as menções.",
            "u": "https://www.terra.com.br/diversao/musica/rock-in-rio/stray-kids-anuncia-album-com-17-musicas-antes-do-rock-in-rio-2026,a6d4ae94396c2934da478db5b87e6485s1i5arcn.html"
          },
          {
            "t": "Debate \"cadê o rock?\"",
            "s": "Curadoria com funk, trap e K-pop reacende a discussão geracional sobre o line-up — pauta de alto engajamento (e alto risco para marcas que opinam).",
            "u": "https://www.spacemoney.com.br/cultura-e-entretenimento/geracao-z-rock-in-rio-2026/"
          }
        ],
        "tiktok": [
          {
            "t": "\"Look para o Rock in Rio\"",
            "s": "Maior trend pré-evento: vídeos de inspiração de looks e provas de outfit para cada dia do festival dominam as páginas de descoberta.",
            "u": "https://www.tiktok.com/discover/look-para-o-rock-in-rio-2026"
          },
          {
            "t": "#RockInRio2026 · humor de véspera",
            "s": "\"Lista vazada\", \"suspeitas\" e zoeiras sobre preço de ingresso/logística seguem como formato recorrente de meme.",
            "u": "https://www.tiktok.com/discover/rock-in-rio"
          },
          {
            "t": "\"Dia do trap\" no Espaço Favela",
            "s": "Recorte do line-up (Major RD, MC Cabelinho, TZ da Coronel) circula como \"dia do trap\", ampliando o alcance do festival no público de hip-hop.",
            "u": "https://www.tiktok.com/discover/rock-in-rio-2026-dia-do-trap"
          }
        ],
        "instagram": [
          {
            "t": "Perfil oficial em modo contagem regressiva",
            "s": "Anúncios de line-up e bastidores da montagem movimentam os comentários; posts de novidades são os de maior tração no momento.",
            "u": "https://www.instagram.com/rockinrio/"
          },
          {
            "t": "Artistas alimentam o esquenta",
            "s": "Teasers de Stray Kids (álbum pré-RiR), posts de despedida de Elton John e ensaios de brasileiros (Ivete, Gil) puxam o UGC de expectativa.",
            "u": "https://www.instagram.com/rockinrio/"
          }
        ],
        "sounds": [
          {
            "t": "Stray Kids — álbum novo (17 faixas)",
            "s": "Lançamento às vésperas do festival deve dominar os sons de fancam e edit no TikTok na semana do K-pop day."
          },
          {
            "t": "Clássicos de Elton John",
            "s": "\"Rocket Man\", \"Your Song\" e \"Tiny Dancer\" tendem a crescer em streaming e trilhas de vídeo rumo à despedida de 7/set."
          },
          {
            "t": "Esquenta do metal",
            "s": "Sepultura (turnê de despedida) e Avenged Sevenfold puxam edits do dia 5/set na comunidade de metal."
          }
        ],
        "note": "Fase pré-evento: leitura editorial a partir de imprensa e páginas públicas das plataformas. Com o festival em andamento, esta aba passa a trazer os trending topics do X, vídeos mais vistos e hashtags do TikTok/Instagram de cada dia."
      },
      "direcionais": {
        "leitura": "A 11 dias da abertura, a conversa é dominada por logística, looks e expectativa de setlist — e três datas concentram o maior potencial simbólico para a Ipiranga: 7/set (89 anos + Elton John), 11/set (K-pop day) e a abertura em 4/set.",
        "dirs": [
          {
            "t": "Ocupar a janela de esquenta (24/ago–3/set)",
            "s": "O público está planejando a ida ao festival AGORA. Posicionar a marca na jornada: conteúdo de utilidade sobre chegar de carro ao Parque Olímpico, abastecimento na rota, paradas AmPm — \"a parada completa antes da Cidade do Rock\"."
          },
          {
            "t": "Tratar 7/set como o dia-pilar da marca",
            "s": "Aniversário de 89 anos + despedida de Elton John + Gilberto Gil + feriado. É a maior chance de pauta espontânea da quinzena: preparar conteúdo real-time, press kit do aniversário e um momento no Espaço Ipiranga que amarre as duas histórias."
          },
          {
            "t": "K-pop day (11/set) como teste de relevância cultural",
            "s": "Fandoms chegam em caravanas de todo o país — utilidade real (postos na rota, AmPm 24h, pontos de encontro) vale mais que apropriação de linguagem. Primeira edição com lightstick liberado: oportunidade de brinde/ativação luminosa no espaço."
          },
          {
            "t": "Ficar fora do debate \"isso é rock?\"",
            "s": "A polêmica de curadoria rende engajamento, mas é armadilha para marcas. A Ipiranga fala de experiência e jornada, nunca de mérito musical do line-up."
          },
          {
            "t": "Garantir o Espaço Ipiranga nos roteiros de creators",
            "s": "Itaú, Heineken e KitKat entram com ativações de altíssimo impacto visual. O espaço repaginado precisa de um momento 'instagramável' assinatura, divulgado ANTES do festival, para entrar nos vídeos de \"o que fazer na Cidade do Rock\"."
          }
        ],
        "acion": [
          "Briefar social para surfar a trend \"look para o Rock in Rio\" com ângulo leve de marca (brindes do espaço: pouches, leques, adesivos).",
          "Mapear creators de \"roteiro Cidade do Rock\" e negociar a inclusão do Espaço Ipiranga até 1/set.",
          "Publicar guia de utilidade: como chegar de carro, estacionamentos, postos Ipiranga e AmPm na rota do Parque Olímpico.",
          "Fechar até 2/set a bateria de conteúdo dos 89 anos (7/set), incluindo plano de real-time para a noite Elton John + Gil.",
          "Definir a escala de war room para as noites de festival (quem monitora, horários de corte, fluxo de aprovação de resposta rápida)."
        ]
      },
      "sources": [
        [
          "Rolling Stone Brasil — horários",
          "https://rollingstone.com.br/guia-show/horarios-rock-in-rio-2026/"
        ],
        [
          "Rolling Stone Brasil — line-up por dia",
          "https://rollingstone.com.br/musica/rock-in-rio-2026-line-up-completo-por-dia/"
        ],
        [
          "Billboard Brasil — venda extraordinária",
          "https://billboard.com.br/rock-in-rio-venda-extraordinaria-ingressos/"
        ],
        [
          "Terra — bastidores e estrutura",
          "https://www.terra.com.br/diversao/musica/rock-in-rio/rock-in-rio-2026-bastidores-gigantes-e-vendas-extras-de-ingressos,b41fbcf480ed2e2fe46fff2f8b78178a5f1qszq5.html"
        ],
        [
          "Promoview — ativações das marcas",
          "https://www.promoview.com.br/ativacoes-marcas-rock-in-rio-2026/"
        ],
        [
          "Marcas pelo Mundo — Ipiranga no RiR",
          "https://marcaspelomundo.com.br/anunciantes/ipiranga-confirma-presenca-no-rock-in-rio-brasil-2026-e-prepara-acoes-para-o-publico-do-festival/"
        ],
        [
          "Mundo do Marketing — 89 anos Ipiranga",
          "https://mundodomarketing.com.br/ipiranga-celebra-aniversario-de-89-anos-com-acoes-especiais-no-rock-in-rio"
        ],
        [
          "Live MKT — promoção Parada Completa",
          "https://livemarketing.com.br/ipiranga-renova-patrocinio-ao-rock-in-rio-e-lanca-promocao-com-ingressos-para-o-festival"
        ],
        [
          "Rolling Stone — K-pop day",
          "https://rollingstone.com.br/musica/rock-in-rio-2026-tera-o-maior-encontro-de-k-pop-da-america-latina-em-11-de-setembro/"
        ],
        [
          "Jornal DR1 — Elton John esgotado",
          "https://jornaldr1.com.br/show-de-despedida-de-elton-john-no-rock-in-rio-tem-ingressos-esgotados-e-confirma-expectativa-historica/"
        ]
      ]
    }
  ]
};
