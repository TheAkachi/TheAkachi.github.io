import { useEffect, useRef } from 'react';
import { LINKEDIN_URL } from '../content.js';

const TECHNOLOGIES = ['Node.js', 'React', 'PostgreSQL', 'Docker'];

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine) and (min-width: 901px)');
    let frame;

    const reset = () => {
      cancelAnimationFrame(frame);
      section.style.setProperty('--pointer-x', '0px');
      section.style.setProperty('--pointer-y', '0px');
    };
    const move = (event) => {
      if (!motion.matches) return;
      const bounds = section.getBoundingClientRect();
      // Move a arte inteira poucos pixels; a cabeça não gira e os textos ficam estáveis.
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        section.style.setProperty('--pointer-x', `${x}px`);
        section.style.setProperty('--pointer-y', `${y}px`);
      });
    };

    section.addEventListener('pointermove', move);
    section.addEventListener('pointerleave', reset);
    motion.addEventListener('change', reset);
    return () => {
      reset();
      section.removeEventListener('pointermove', move);
      section.removeEventListener('pointerleave', reset);
      motion.removeEventListener('change', reset);
    };
  }, []);

  return (
    <section className="hero" id="inicio" ref={sectionRef} aria-labelledby="hero-name" tabIndex={-1}>
      <div className="hero-grid page-width">
        <div className="hero-topline" aria-hidden="true">
          <span>PORTFÓLIO / PEDRO SIQUEIRA</span><span>IDEIAS. CÓDIGO. POSSIBILIDADES.</span>
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
          <img className="robot" src="/images/robo-final.png" alt="" width="1122" height="1402" fetchPriority="high" decoding="async" />
          <span className="visual-coordinate">PS — 01</span>
        </div>

        <div className="statement">
          <span className="statement-label" aria-hidden="true"><span /> CONSTRUINDO O PRÓXIMO PASSO</span>
          <p>O<br /><span>FUTURO</span><br />É AGORA<span className="statement-dot" aria-hidden="true">.</span></p>
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
