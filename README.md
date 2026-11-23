# Pedro Siqueira — Portfólio

Portfólio pessoal desenvolvido com **React, Vite, JavaScript e CSS**, em português do Brasil. Projeto em desenvolvimento por seções.

## Primeira entrega

- Abertura responsiva com apresentação, formação e tecnologias.
- Frase de destaque: “A new era of software development”, com software em aqua e quebras adaptadas à largura.
- Arte do robô aprovada, estática, em escala ampliada do topo à base da abertura e destacada por iluminação azul-água.
- Rajdhani Bold (700) no nome Pedro Siqueira, em caixa alta; Silkscreen em Akachi, na frase e no cargo Full Stack Developer; Anton nos demais títulos e Inter nos textos. Assinatura sem sublinhado ao lado. As três famílias anteriores são locais; Rajdhani usa a versão web do Fontsource neste teste.
- Links “Projetos” e “LinkedIn” com o mesmo estilo de texto no cabeçalho, sem caixa ou seta, com sublinhado aqua no hover e no foco por teclado. LinkedIn abre o [perfil de Pedro](https://www.linkedin.com/in/pedro-akachi) em nova aba. A apresentação mantém somente a chamada para projetos.
- Navegação por teclado, foco visível e respeito à preferência por movimento reduzido.
- Seção de projetos com entrada para uma página interna e endereço compartilhável.
- Seção de projetos com três cartões interativos em composição de carrossel: Nexus ADM, o conceito fictício Nexo e um espaço reservado para outro case.
- O texto lateral acompanha automaticamente o projeto em destaque. Nexus ADM e Nexo abrem páginas internas com os limites de conteúdo explicitados.
- Seção “Sobre” com uma linha narrativa da infância até a formação atual, sem período do curso nem níveis de proficiência.

O case do Nexus ADM precisa receber sua descrição real, tecnologias, telas e participação antes da publicação. Nexo é somente o conceito fictício apresentado anteriormente, sem implementação. O terceiro cartão está reservado para outro projeto. O texto da seção Sobre é um primeiro rascunho para revisão; Contato continua como próxima entrega.

## Executar

Requer Node.js 22.12 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://127.0.0.1:5173`.

```sh
npm run build
npm run preview
```

O build estático é gerado em `dist/`. O Node.js é usado pelas ferramentas de desenvolvimento; esta entrega não possui backend ou banco de dados.

## Organização

```text
public/
  images/robo-armadura-nova.png Versão sem marcas aprovada para a abertura
  images/robo-armadura-nova-2x.png Ampliação técnica para telas de maior densidade
  images/robo-metalico-branco.png Versão anterior preservada
  images/robo-metalico.png Acabamento metálico anterior preservado
  images/robo-polido.png   Acabamento anterior preservado
  images/robo-final.png    Original aprovado preservado
src/
  components/Hero.jsx    Apresentação e composição da abertura
  components/ProjectsSection.jsx Coleção de projetos e navegação entre cards
  components/AboutSection.jsx História pessoal após os projetos
  components/ProjectDetail.jsx Modelo da página interna de um projeto
  components/ProjectArtwork.jsx Prévia gráfica temporária para os cartões
  components/ShoulderReflection.jsx Reflexo metálico localizado no ombro
  App.jsx                Cabeçalho e estrutura da página
  content.js             Contato compartilhado
  projects.js            Conteúdo separado da coleção e das páginas de detalhe
  main.jsx               Inicialização e fontes
  styles.css             Tokens visuais e responsividade
```

Para atualizar o contato, edite `src/content.js`. Os textos e as tecnologias da abertura estão em `Hero.jsx`; as cores e os pontos de adaptação estão em `styles.css`.

A [revisão de código](REVISAO-CODIGO.md) descreve a limpeza, os comentários adicionados e as verificações de preservação da interface, com seus limites.

## Direção visual

Fundo `#080F17`, superfícies `#14303A`, texto `#F0F8FA`, apoio `#AEC5CC`, destaque `#81D8D8` e luz `#234F61`. Arte branca com mecanismos pretos e luzes aqua. O robô e a iluminação permanecem estáticos em todas as telas. Os cartões de tecnologias têm cantos arredondados e hover com expansão suave de 6%, realce de fundo, borda e brilho; continuam informativos. A escala não desloca os elementos vizinhos e é desativada com preferência por movimento reduzido. O slogan tem escala ampliada e posição elevada.

A arte foi produzida com auxílio de IA e refinada segundo a direção visual de Pedro. O código também foi desenvolvido com auxílio de IA e está sendo revisado em entregas modulares. As fontes Anton, Inter e Silkscreen são distribuídas pelos pacotes Fontsource; suas licenças estão em `public/licenses/`. Anton aproxima os títulos pesados, condensados e em caixa alta da referência Masters of the Future, enviada após a tentativa com Bebas Neue. A fonte exata da imagem não foi identificada.

O teste atual do nome usa Rajdhani Bold (700), escolhida após o pedido de uma fonte mais básica, discretamente quadrada e em caixa alta. O arquivo latino desse peso é servido pelo CDN Fontsource/jsDelivr, fixado em 5.3.0; nenhum pacote npm foi adicionado. A prévia depende dessa conexão para Rajdhani e dispõe de Inter como alternativa. [Fonte e licença OFL](https://fontsource.org/fonts/rajdhani/about). A versão local poderá ser integrada quando a obtenção do arquivo estiver disponível. As tentativas com Unbounded e Orbitron foram substituídas.

A revisão atual centraliza a silhueta compensando a margem transparente e escurece o entorno para destacar a armadura. No celular e tablet, o slogan fica acima da figura centralizada. `robo-refinado.png` recebeu refinamento generativo de nitidez via Imagegen, mantendo transparência e 1122 × 1402 pixels: não é um aumento de resolução. Pequenas variações de textura podem existir; o original está preservado. O prompt está em `public/images/robo-refinado-prompt.txt`.

O repositório contém apenas o código desta interface e seus recursos. A publicação do site será definida separadamente.

A profundidade da abertura é construída em CSS: luz branca fria `#F0F8FA` acompanhando a transparência da arte, halo de apoio `#AEC5CC` e sombra deslocada mais suave atrás da silhueta. As camadas de luz têm baixa opacidade e desfoque, sem traço luminoso de 1 px, para não acentuar serrilhados do recorte. Esses efeitos são estáticos e preservam o arquivo da imagem e sua centralização; as luzes aqua da própria arte permanecem.

O filete aqua gravado na borda externa da arte é neutralizado na exibição por `public/filters/robot-white-rim.svg`. O filtro atua numa faixa do alpha do recorte e nos pixels azulados dessa faixa; as luzes aqua internas permanecem. O arquivo PNG aprovado não foi substituído.

O fundo compartilhado da página usa exclusivamente a paleta do planejamento: `#080F17`, `#14303A`, `#F0F8FA`, `#AEC5CC`, `#81D8D8` e `#234F61`. Cabeçalho, abertura e área de projetos compartilham o mesmo campo de degradê, sem linhas ou cortes de fundo nas transições. A distribuição segue a referência: base contínua em diagonal, transições longas, luz ampla no alto à esquerda e na parte inferior direita. A revisão de contraste aprofunda a faixa central escura e reforça o azul difuso nas diagonais, com reflexos brancos suaves e aqua como apoio, acompanhando o contraste do robô metálico branco. As camadas são estáticas e variam a intensidade e transparência das bases aprovadas. A sombra e a iluminação local do robô preservam sua presença central. Hover, textos e iluminação também seguem essas bases, sem violeta, magenta ou azul elétrico. O efeito está em CSS, sem alterar a imagem ou adicionar dependências.

A arte vigente é `robo-armadura-nova.png`, a segunda versão da remoção de marcas com Imagegen, selecionada por Pedro após comparar as amostras. Armadura branca com pintura limpa, mecanismos pretos, reflexos metálicos e luzes aqua. A edição generativa tem pequenas diferenças de enquadramento e detalhes em relação à anterior, informadas antes da escolha. O arquivo selecionado tem 1072 × 1467 pixels RGBA; dimensões do componente, proporção CSS e compensação da margem transparente acompanham essa versão. A máscara usa o alpha da própria arte aprovada para não recortar peças pela silhueta antiga. A interface oferece também `robo-armadura-nova-2x.png`, com 2144 × 2934 pixels, por `srcSet`. A versão 2x usa interpolação bicúbica sem redesenho ou nova iluminação: quadruplica a quantidade de pixels, mas não recupera detalhes reais ausentes. Fontes anteriores permanecem preservadas. Prompt e método estão em `public/images/robo-armadura-nova-prompt.txt` e `public/images/robo-armadura-nova-2x-notas.txt`.

O ombro recebe um reflexo metálico adicional na exibição por `ShoulderReflection.jsx`. Gradientes de luz branca e sombra petróleo seguem a placa, com bordas difusas e seleção tonal das áreas brancas para preservar decalques pretos e a faixa aqua. A arte aprovada permanece intacta; não há troca de enquadramento, desenho ou movimento. O efeito é estático e acompanha a escala da figura.

## Histórico do teste de cores — encerrado

Pedro encerrou o teste preto e decidiu manter a versão branca. A seleção por `?robo=preto` foi removida: mesmo os links antigos exibem o robô branco. A revisão metálica posterior também preserva essa direção branca. As variantes e prompts anteriores estão preservados apenas como histórico, sem uso na página.

### Circunferências centralizadas e com profundidade

Adicionados dois aros concêntricos finos atrás do robô, em branco frio e cinza azulado da paleta. Centro comum em 53,27% horizontal e 45% vertical da arte, compensando a margem transparente e centralizando o enquadramento visível. Diâmetros de 126% e 120%, translação de -50% nos dois eixos e sombra petróleo suave na linha. No celular os arcos podem ultrapassar as laterais, contidos pela página, para manter a escala em torno da figura. Robô e aros permanecem estáticos; arte preservada.

### Respiro entre cabeça e aros — revisão vigente

Diâmetros ampliados para 144% e 138%, mantendo o centro em 53,27% / 45%. A folga adicional separa a cabeça das duas linhas. Luz branca fria mais presente na parte superior/esquerda, sombra petróleo difusa e brilho externo discreto dão profundidade aos aros. Segundo aro a 72% de opacidade. A arte do robô permanece preservada.

### Disponibilidade removida e link GitHub

Removidos da abertura os textos Aberto a oportunidades e ESTÁGIO & JÚNIOR, incluindo a indicação acessível de estágio e júnior. Adicionado GitHub após LinkedIn, apontando para https://github.com/TheAkachi em nova aba, com a mesma linha de hover/foco. Cabeçalho móvel mantém espaço de 20 px entre os perfis. A indicação Explore continua centralizada no desktop e à esquerda no celular.

### Aros partindo do tronco — direção vigente

A circunferência enquadra a cabeça e parte superior do robô, com o tronco saindo à frente. Diâmetros reduzidos para 106% e 100%, centro em 47% / 32% do contêiner da arte para acompanhar cabeça e ombros. Máscara suave entre 70% e 96% da altura dos aros dissipa as linhas atrás do peito. Luz e sombra discretas mantidas; nenhuma mudança na arte. Substitui a geometria anterior que envolvia a figura inteira.

### Aros difusos como detalhe de fundo — direção vigente

Ajuste vigente: diâmetros 124% / 118%, centro 51% / 38,6% da arte, mantendo o topo livre acima da cabeça. Dissipação inferior entre 78,5% e 93%. O término direito foi aproximado do tronco, usando o esquerdo como referência, após a tentativa mais larga deixar uma folga excessiva. Luz branca uniforme em todos os lados, com halo de borda desfocado em 5 px e sombra petróleo. Após aprovar o efeito difuso, Pedro pediu menor presença: opacidades finais de 42% no aro externo e 33% no interno, reduzindo linha e brilho juntos. Permanece um detalhe de fundo, com o robô em primeiro plano. Substitui os valores das revisões anteriores.

Azul atmosférico aprovado em 16/11/2026: conservar o fundo atual, com #234F61 mais evidente nas diagonais superior esquerda e inferior direita, centro escuro e reflexos brancos suaves. A distribuição e intensidade atuais passam a integrar o planejamento; nenhuma alteração do gradiente nesta revisão.
