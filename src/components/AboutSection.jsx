const story = [
  {
    label: 'INFÂNCIA',
    text: 'O interesse começou cedo. Cresci assistindo meus primos jogarem no PlayStation 2 que tínhamos na época; com o tempo, passamos para o Xbox 360 e depois para o computador — foi ali que nasceu minha proximidade com a tecnologia.',
  },
  {
    label: 'INSPIRAÇÃO',
    text: 'A decisão de seguir carreira em tecnologia veio da minha mãe. Em meio a muitas possibilidades e dúvidas, ela me apontou um caminho que já trilhou. Com mais de 25 anos de experiência na área, é minha maior inspiração.',
  },
  {
    label: 'O INÍCIO',
    text: 'Ingressei em Análise e Desenvolvimento de Sistemas na FAETERJ-RIO. Apesar das dúvidas no começo, logo percebi que havia encontrado a área que procurava.',
  },
  {
    label: 'PRÓXIMOS PASSOS',
    text: 'Hoje sigo explorando as possibilidades da área. Encontrei no desenvolvimento e na resolução de problemas o que mais me motiva, e busco uma oportunidade de estágio ou júnior para evoluir na prática.',
  },
];

export default function AboutSection() {
  return (
    <section className="about-section page-width" id="sobre" data-reveal="pending" aria-labelledby="about-heading">
      <div className="about-header">
        <span className="eyebrow">02 / SOBRE MIM</span>
        <h2 id="about-heading" className="modern-section-title">A curiosidade virou <span>caminho.</span></h2>
      </div>

      <ol className="about-timeline" aria-label="Linha do tempo da minha trajetória">
        {story.map((chapter, index) => {
          const isTop = index % 2 === 1;
          const stepNumber = String(index + 1).padStart(2, '0');

          return (
            <li
              key={chapter.label}
              className={`about-step ${isTop ? 'about-step-top' : 'about-step-bottom'}`}
            >
              <div className="about-step-node" aria-hidden="true">
                <span className="about-node-ring">
                  <span className="about-node-core" />
                </span>
              </div>

              <div className="about-step-stem" aria-hidden="true">
                <span className="about-stem-line" />
                <span className="about-stem-dot" />
              </div>

              <div className="about-step-content">
                <span className="about-step-number">{stepNumber}</span>
                <h3 className="about-step-banner">{chapter.label}</h3>
                <p>{chapter.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
