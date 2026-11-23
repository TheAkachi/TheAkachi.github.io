// Os três projetos do portfólio com descrições alinhadas ao código real de cada repositório e transparência sobre escopo, caráter demonstrativo e apoio de IA.
export const projects = [
  {
    slug: 'nexus',
    number: '01',
    title: 'Nexus',
    subtitle: 'Guia Gastronômico & Cultural do Rio de Janeiro',
    description:
      'Aplicação web Full Stack renderizada no servidor (SSR) para descoberta de 40 espaços gastronômicos e culturais em 17 bairros do Rio de Janeiro, com mapa SVG interativo, busca com filtros cruzados, cupons, eventos, roteiros e painel do parceiro.',
    category: 'FULL STACK · SSR',
    architecture: 'Node.js · PostgreSQL · Mapa SVG (IBGE / OpenStreetMap) · Docker',
    repoUrl: 'https://github.com/TheAkachi/nexus',
    technologies: ['Node.js', 'PostgreSQL', 'Docker', 'JavaScript'],
    context:
      'Projeto demonstrativo Full Stack construído para reunir restaurantes, cafés, bares, galerias, cinemas e eventos do Rio de Janeiro em uma plataforma única. Utiliza 40 locais públicos reais da cidade combinados a dados demonstrativos de cupons, ofertas e perfis de acesso (Visitante, Parceiro e Admin).',
    features: [
      'Mapa SVG interativo do Rio de Janeiro gerado com malhas do IBGE e vias do OpenStreetMap, com 40 locais em 17 bairros',
      'Busca hiperlocal com filtros cruzados (texto, bairro e categoria), status "aberto agora", favoritos e 6 roteiros culturais',
      'Sistema de cupons, ofertas, eventos, avaliações moderadas e acesso demonstrativo em 1 clique',
      'Painel do Parceiro (métricas de 7/30/90 dias e gestão do espaço) e administração de curadoria com controle de permissões',
    ],
    participation:
      'Concepção do produto, definição dos fluxos de busca, curadoria dos dados do Rio de Janeiro, estruturação do servidor em Node.js com PostgreSQL/PGlite e configuração de Docker, desenvolvendo e revisando o código em conjunto com ferramentas de IA.',
    learnings:
      'Prática da arquitetura SSR separando carregamento de dados (data loaders) e camada de visualização (views), modelagem relacional com migrações SQL, autenticação com sessões HttpOnly e integração de dados geográficos abertos em SVG.',
    detailNote:
      'Projeto demonstrativo de portfólio: os 40 locais são espaços públicos reais do Rio de Janeiro; cupons, ofertas e contas de parceiro/admin são dados de demonstração.',
  },
  {
    slug: 'nexus-adm',
    number: '02',
    title: 'Nexus ADM',
    subtitle: 'Sistema de Gestão Comercial & Assinaturas',
    description:
      'Sistema administrativo Full Stack (SSR) integrado ao guia Nexus para gestão comercial de anunciantes: controle de receita recorrente, assinaturas, régua de cobrança com atalho para WhatsApp, indicadores em SVG, importação CSV e 2FA.',
    category: 'SISTEMA DE GESTÃO',
    architecture: 'Node.js · PostgreSQL · 2FA TOTP · RBAC · Docker',
    repoUrl: 'https://github.com/TheAkachi/sistema-nexus',
    technologies: ['Node.js', 'PostgreSQL', 'Docker', 'SQL'],
    context:
      'Back-office comercial e financeiro criado para operar a carteira de estabelecimentos parceiros do guia Nexus. Centraliza o acompanhamento de contratos, recebimentos do mês, inadimplência, fila de renovação, leads e histórico de auditoria com dados demonstrativos semeados.',
    features: [
      'Painel de resumo financeiro com receita mensal recorrente, recebidos no mês, contratos a renovar em 30 dias e inadimplentes',
      'Fila de cobrança e régua de lembretes por janela de vencimento, com prévia de mensagem, cobrança via WhatsApp e registro de pagamento',
      'Gestão de clientes, ciclos de assinatura (mensal a anual), interessados (leads), gráficos SVG no servidor e importação de planilhas CSV',
      'Controle de acesso por perfil (Admin, Financeiro, Comercial e Leitura), autenticação 2FA TOTP e trilha de auditoria',
    ],
    participation:
      'Definição das regras comerciais de carteira, cobrança e ciclos de assinatura, organização das telas operacionais e testes dos fluxos financeiros e de segurança, utilizando ferramentas de IA como apoio na implementação e validação.',
    learnings:
      'Compreensão prática de regras de negócio financeiro (ciclos, vencimentos, tolerância e estornos), controle de permissões por papel (RBAC), importação validada de arquivos CSV e autenticação em duas etapas (TOTP).',
    detailNote:
      'Sistema demonstrativo de portfólio: clientes, valores, contratos, cobranças e contas de equipe (@nexus.demo) são fictícios para avaliação da aplicação.',
  },
  {
    slug: 'apex',
    number: '03',
    title: 'Apex',
    subtitle: 'PWA de Foco, Planejamento Diário & Constância',
    description:
      'Aplicativo web progressivo (PWA) escuro, minimalista e 100% offline-first com cronômetros de Foco (Pomodoro e Blitz) e Maratona, janela flutuante Picture-in-Picture, dock de tarefas, notas e áudio ambiente, calendário 24h e mapa anual de constância.',
    category: 'PWA · REACT + TS',
    architecture: 'React 19 · TypeScript · Vite · IndexedDB · Web APIs',
    repoUrl: 'https://github.com/TheAkachi/apex',
    technologies: ['React', 'TypeScript', 'PWA', 'IndexedDB'],
    context:
      'Aplicação front-end instalável no computador e no celular, pensada para organizar sessões de estudo e trabalho profundo sem exigir cadastro ou conexão com servidor. Reúne ferramentas rápidas em um dock lateral (Tarefas, Notas, Música, Flutuante, Estética e Ajustes).',
    features: [
      'Modos Foco (Atividade/Descanso editáveis + Blitz 10 min) e Maratona (cronômetro crescente) com ampulheta animada em SVG',
      'Dock lateral integrado com lista de tarefas do dia, bloco de notas da sessão, gerador de ruído marrom (Web Audio API) e personalização estética',
      'Timer flutuante sempre visível no topo da tela via Document Picture-in-Picture API (com fallback automático em Canvas/Vídeo)',
      'Calendário mensal com prioridades, grade semanal de 24 horas e aba Constância com mapa anual (Jan–Dez) e gráficos em SVG salvos no IndexedDB',
    ],
    participation:
      'Idealização da experiência de uso, organização das abas e do dock lateral, definição das regras de cronômetro, calendário e persistência local em React e TypeScript, contando com apoio de IA no desenvolvimento dos componentes e integrações com APIs do navegador.',
    learnings:
      'Evolução prática em componentização e tipagem com React e TypeScript, persistência local assíncrona no navegador com IndexedDB, configuração de PWA offline e uso de APIs nativas como Picture-in-Picture e Web Audio.',
    detailNote:
      'Aplicação 100% local e offline-first, com modo de demonstração integrado e opção de exportar e importar backup em JSON.',
  },
];
