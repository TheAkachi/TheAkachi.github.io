# Pedro Siqueira — Portfólio

Portfólio pessoal desenvolvido com **React, Vite, JavaScript e CSS**, em português do Brasil. Projeto em desenvolvimento por seções.

## Primeira entrega

- Abertura responsiva com apresentação, formação e tecnologias.
- Arte do robô aprovada, estática, em escala ampliada do topo à base da abertura e destacada por iluminação azul-água.
- Silkscreen nos títulos e Manrope nos textos, servidas localmente.
- Contato pelo [LinkedIn](https://www.linkedin.com/in/pedro-akachi).
- Navegação por teclado, foco visível e respeito à preferência por movimento reduzido.
- Estado de projetos em preparação, sem trabalhos ou resultados fictícios.

O carrossel, as páginas internas dos projetos e as seções Sobre e Contato são próximas entregas.

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
  images/robo-refinado.png Arte refinada usada na abertura
  images/robo-final.png    Original aprovado preservado
src/
  components/Hero.jsx    Apresentação e composição da abertura
  App.jsx                Cabeçalho e estrutura da página
  content.js             Contato compartilhado
  main.jsx               Inicialização e fontes
  styles.css             Tokens visuais e responsividade
```

Para atualizar o contato, edite `src/content.js`. Os textos e as tecnologias da abertura estão em `Hero.jsx`; as cores e os pontos de adaptação estão em `styles.css`.

## Direção visual

Fundo `#080F17`, superfícies `#14303A`, texto `#F0F8FA`, apoio `#AEC5CC`, destaque `#81D8D8` e luz `#234F61`. Arte branca com mecanismos pretos e luzes aqua. O robô e a iluminação permanecem estáticos em todas as telas. Os cartões de tecnologias têm cantos arredondados e hover com realce de fundo, borda e brilho; continuam informativos. O slogan tem escala ampliada e posição elevada.

A arte foi produzida com auxílio de IA e refinada segundo a direção visual de Pedro. O código também foi desenvolvido com auxílio de IA e está sendo revisado em entregas modulares. As fontes Silkscreen e Manrope são distribuídas pelos pacotes Fontsource com suas licenças próprias.

A revisão atual centraliza a silhueta compensando a margem transparente e escurece o entorno para destacar a armadura. No celular e tablet, o slogan fica acima da figura centralizada. `robo-refinado.png` recebeu refinamento generativo de nitidez via Imagegen, mantendo transparência e 1122 × 1402 pixels: não é um aumento de resolução. Pequenas variações de textura podem existir; o original está preservado. O prompt está em `public/images/robo-refinado-prompt.txt`.

O repositório contém apenas o código desta interface e seus recursos. A publicação do site será definida separadamente.

A profundidade da abertura é construída em CSS: luz aqua difusa acompanhando a transparência da arte, halo localizado e sombra deslocada atrás da silhueta. As camadas de luz têm baixa opacidade e desfoque, sem traço luminoso de 1 px, para não acentuar serrilhados do recorte. Esses efeitos são estáticos e preservam o arquivo da imagem e sua centralização.
