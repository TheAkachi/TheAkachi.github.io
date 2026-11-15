import { LINKEDIN_URL } from '../content.js';

const TECHNOLOGIES = ['Node.js', 'React', 'PostgreSQL', 'Docker'];

export default function Hero() {
  // Variante reversível para comparação visual, sem substituir a arte branca aprovada.
  const robotImage = new URLSearchParams(window.location.search).get('robo') === 'preto'
    ? '/images/robo-preto.png'
    : '/images/robo-polido.png';

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-name" tabIndex={-1}>
      <div className="hero-grid page-width">
        <div className="hero-topline" aria-hidden="true">
          <span>PORTFÓLIO / PEDRO SIQUEIRA</span>
        </div>

        <div className="intro">
          <p className="availability"><span aria-hidden="true" />Aberto a oportunidades <span className="sr-only">de estágio e júnior</span></p>
          <h1 id="hero-name"><span>Pedro</span>{' '}<span>Siqueira<span className="name-dot" aria-hidden="true">.</span></span></h1>
          <p className="role">Full Stack Developer</p>
          <p className="education">Graduando em Análise e Desenvolvimento de Sistemas pela <strong>FAETERJ-RIO</strong></p>
          <ul className="technologies" aria-label="Tecnologias">
            {TECHNOLOGIES.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <a className="primary-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            Vamos conversar no LinkedIn <span className="arrow" aria-hidden="true">↗</span><span className="sr-only"> (nova aba)</span>
          </a>
          <a className="text-link" href="#projetos">Conheça meus projetos <span aria-hidden="true">↓</span></a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="robot-glow" />
          <div className="orbital orbital-one" />
          <div className="orbital orbital-two" />
          <div className="robot-art">
            <img className="robot" src={robotImage} alt="" width="1122" height="1402" fetchPriority="high" decoding="async" />
          </div>
          <span className="visual-coordinate">PS — 01</span>
        </div>

        <div className="statement">
          <span className="statement-label" aria-hidden="true"><span /> CONSTRUINDO O PRÓXIMO PASSO</span>
          <p>O<br /><span className="statement-future">FUTURO</span><br /><span className="statement-ending">É AGORA<span className="statement-dot" aria-hidden="true">.</span></span></p>
          <div className="statement-line" aria-hidden="true"><span>01</span><i /><span>∞</span></div>
        </div>

        <div className="hero-bottom">
          <p>DESENVOLVIMENTO <span aria-hidden="true">/</span> APRENDIZADO CONTÍNUO</p>
          <a href="#projetos" aria-label="Explorar os projetos"><span aria-hidden="true">↓</span> EXPLORE</a>
          <p>ESTÁGIO <span aria-hidden="true">&</span> JÚNIOR</p>
        </div>
      </div>
    </section>
  );
}
