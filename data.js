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
    "version": 6,
    "updatedAt": "29/08/2026, 09h15 (BRT)",
    "updatedISO": "2026-08-29",
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
