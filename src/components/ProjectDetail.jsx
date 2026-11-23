import ProjectArtwork from './ProjectArtwork.jsx';

export default function ProjectDetail({ project, nextProject, onBack, onOpenProject, onContact }) {
  if (!project) {
    return (
      <article className="project-detail project-not-found page-width" id="pagina-projeto" aria-labelledby="project-not-found-title">
        <button className="project-back-link" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span> Voltar aos projetos
        </button>
        <div className="project-not-found-body">
          <span className="eyebrow">DESTINO NÃO ENCONTRADO</span>
          <h1 id="project-not-found-title">Projeto não encontrado<span aria-hidden="true">.</span></h1>
          <p>O endereço informado não corresponde a um case disponível no portfólio.</p>
          <button className="contact-primary-link" type="button" onClick={onBack}>
            Explorar projetos disponíveis <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="project-detail page-width" id="pagina-projeto" aria-labelledby="project-title">
      <button className="project-back-link" type="button" onClick={onBack}>
        <span aria-hidden="true">←</span> Voltar aos projetos
      </button>

      <header className="project-detail-heading">
        <div>
          <span className="concept-badge">{project.category}</span>
          <span className="eyebrow project-detail-eyebrow">{project.number} / {project.architecture || project.category}</span>
          <h1 id="project-title" className="modern-detail-title">{project.title}<span aria-hidden="true">.</span></h1>
          <h2>{project.subtitle}</h2>
          <p>{project.description}</p>
          {project.technologies.length > 0 && (
            <ul className="project-technologies" aria-label="Tecnologias do projeto">
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          )}
          {project.repoUrl && (
            <div style={{ marginTop: '22px' }}>
              <a
                className="project-details-cta fluid-surface"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hero-cta-bar" aria-hidden="true" />
                <span>Ver repositório no GitHub</span>
                <i aria-hidden="true">↗</i>
                <span className="sr-only"> (nova aba)</span>
              </a>
            </div>
          )}
        </div>
        <p className="project-detail-disclaimer">{project.detailNote}</p>
      </header>

      <figure className="project-detail-preview">
        <ProjectArtwork project={project} />
        <figcaption>{project.architecture}</figcaption>
      </figure>

      <div className="project-story">
        <section aria-labelledby="project-context-title">
          <span className="eyebrow">01 / CONTEXTO</span>
          <h3 id="project-context-title">O projeto<span>.</span></h3>
          <p>{project.context}</p>
        </section>
        <section aria-labelledby="project-features-title">
          <span className="eyebrow">02 / EXPERIÊNCIA</span>
          <h3 id="project-features-title">Funcionalidades<span>.</span></h3>
          {project.features.length > 0 ? (
            <ul className="project-feature-list">
              {project.features.map((feature, index) => (
                <li key={feature}><span>{String(index + 1).padStart(2, '0')}</span>{feature}</li>
              ))}
            </ul>
          ) : (
            <p>As funcionalidades serão registradas quando o case estiver pronto.</p>
          )}
        </section>
        <section aria-labelledby="project-role-title">
          <span className="eyebrow">03 / CONTRIBUIÇÃO</span>
          <h3 id="project-role-title">Minha participação<span>.</span></h3>
          <p>{project.participation}</p>
        </section>
        <section aria-labelledby="project-learning-title">
          <span className="eyebrow">04 / PROCESSO</span>
          <h3 id="project-learning-title">Aprendizados<span>.</span></h3>
          <p>{project.learnings}</p>
        </section>
      </div>

      <footer className="project-detail-footer">
        <button className="project-back-link" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span> Todos os projetos
        </button>

        <div className="project-detail-actions">
          <a
            className="project-contact-link"
            href="#contato"
            onClick={(event) => {
              event.preventDefault();
              onContact();
            }}
          >
            Entrar em contato
          </a>
          {nextProject && (
            <button
              className="project-next-link"
              type="button"
              onClick={() => onOpenProject(nextProject.slug)}
            >
              Próximo: {nextProject.title} <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
      </footer>
    </article>
  );
}
