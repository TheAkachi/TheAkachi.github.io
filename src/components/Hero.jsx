import { useEffect, useState } from 'react';
import ProjectArtwork from './ProjectArtwork.jsx';
import ShoulderReflection from './ShoulderReflection.jsx';
import { projects } from '../projects.js';

const TECHNOLOGIES = ['Node.js', 'React', 'PostgreSQL', 'Docker'];

export default function Hero({ selectedSlug, onSelect, onOpenProject }) {
  const [heroHovering, setHeroHovering] = useState(false);

  const activeProject = projects.find((project) => project.slug === selectedSlug) ?? projects[0];
  const activeIndex = projects.findIndex((project) => project.slug === activeProject.slug);

  useEffect(() => {
    if (projects.length < 2 || heroHovering) return undefined;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      const currentIdx = projects.findIndex((project) => project.slug === selectedSlug);
      const nextIdx = (currentIdx + 1) % projects.length;
      onSelect(projects[nextIdx].slug);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [heroHovering, onSelect, selectedSlug]);

  function heroCardPosition(project) {
    if (project.slug === activeProject.slug) return 'center';
    if (projects.length === 2) return 'next';
    if (projects[(activeIndex - 1 + projects.length) % projects.length].slug === project.slug) return 'previous';
    if (projects[(activeIndex + 1) % projects.length].slug === project.slug) return 'next';
    return 'hidden';
  }

  function handleHeroCardClick(project, isActive) {
    if (!isActive) {
      onSelect(project.slug);
      return;
    }
    if (!project.isEmpty) {
      onOpenProject(project.slug);
    } else {
      document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-name" tabIndex={-1}>
      <div className="hero-grid page-width">
        {/* Coluna esquerda: apenas cargo, nome, formação e stack */}
        <div className="intro">
          <div className="hero-role-badge">
            <i aria-hidden="true" />
            <span>FULL STACK DEVELOPER</span>
          </div>

          <h1 id="hero-name">
            <span>Pedro</span>{' '}
            <span>Siqueira<span className="name-dot" aria-hidden="true">.</span></span>
          </h1>

          <p className="education">
            Graduando em Análise e Desenvolvimento de Sistemas pela <strong>FAETERJ-RIO</strong>
          </p>

          <ul className="technologies" aria-label="Tecnologias principais">
            {TECHNOLOGIES.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        {/* Figura central */}
        <div className="hero-visual" aria-hidden="true">
          <div className="robot-glow" />
          <div className="robot-art">
            <img
              className="robot"
              src="/images/robo-armadura-nova.webp"
              srcSet="/images/robo-armadura-nova.webp 1x, /images/robo-armadura-nova-2x.webp 2x"
              alt=""
              width="1072"
              height="1467"
              fetchPriority="high"
              decoding="async"
            />
            <ShoulderReflection />
          </div>
        </div>

        {/* Coluna direita: apenas o leque 3D de projetos + 3 pontos discretos */}
        <div
          className="hero-showcase"
          onMouseEnter={() => setHeroHovering(true)}
          onMouseLeave={() => setHeroHovering(false)}
        >
          <div className="project-card-stack hero-card-stack" aria-label="Projetos em destaque">
            {projects.map((project) => {
              const position = heroCardPosition(project);
              const isActive = position === 'center';
              const isVisible = position !== 'hidden';

              return (
                <button
                  key={project.slug}
                  type="button"
                  className={`project-slide project-slide-${position}${project.isEmpty ? ' is-empty' : ''}`}
                  tabIndex={isVisible ? 0 : -1}
                  aria-hidden={!isVisible}
                  aria-label={
                    isActive
                      ? (project.isEmpty ? `Ver espaço reservado: ${project.title}` : `Abrir página do projeto ${project.title}`)
                      : `Trazer ${project.title} para o centro`
                  }
                  onClick={() => handleHeroCardClick(project, isActive)}
                >
                  <ProjectArtwork project={project} empty={project.isEmpty} />
                  <span className="project-side-shade" aria-hidden="true" />
                  <span className={`project-slide-caption${isActive ? ' is-active' : ''}`}>
                    {isActive ? (
                      <>
                        <i />
                        {project.title}
                        <b aria-hidden="true">↗</b>
                      </>
                    ) : (
                      <>
                        <i>{project.number}</i>
                        <b>{project.title}</b>
                      </>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="project-picker hero-picker" aria-label="Alternar projeto na abertura">
            {projects.map((project) => (
              <button
                key={project.slug}
                type="button"
                className={project.slug === activeProject.slug ? 'is-active' : ''}
                aria-current={project.slug === activeProject.slug ? 'true' : undefined}
                onClick={() => onSelect(project.slug)}
                aria-label={`Selecionar ${project.title}`}
              />
            ))}
          </div>
        </div>

        {/* Indicador inferior centralizado */}
        <div className="hero-bottom">
          <a href="#projetos" aria-label="Explorar os projetos">
            <span aria-hidden="true">↓</span> EXPLORE
          </a>
        </div>
      </div>
    </section>
  );
}
