import ProjectArtwork from './ProjectArtwork.jsx';
import { projects } from '../projects.js';

export default function ProjectsSection({ selectedSlug, onSelect, onOpen }) {
  const activeProject = projects.find((project) => project.slug === selectedSlug) ?? projects[0];

  return (
    <section
      className="projects-section page-width"
      id="projetos"
      data-reveal="pending"
      aria-labelledby="projects-heading"
    >
      <div className="projects-heading-row">
        <div>
          <span className="eyebrow">01 / PROJETOS</span>
          <h2 id="projects-heading" className="modern-section-title">
            Projetos <span>próprios.</span>
          </h2>
        </div>

        <div className="project-tabs" role="tablist" aria-label="Escolher projeto">
          {projects.map((project) => {
            const isSelected = project.slug === activeProject.slug;
            return (
              <button
                key={project.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`project-tab-btn fluid-surface${isSelected ? ' is-active' : ''}`}
                onClick={() => onSelect(project.slug)}
              >
                <span className="project-tab-num">{project.number}</span>
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="project-workbench" key={activeProject.slug}>
        <div
          className={`project-window-card fluid-surface${activeProject.isEmpty ? ' is-empty' : ''}`}
          onClick={() => {
            if (!activeProject.isEmpty) onOpen(activeProject.slug);
          }}
          role={activeProject.isEmpty ? undefined : 'button'}
          tabIndex={activeProject.isEmpty ? -1 : 0}
          onKeyDown={(event) => {
            if (!activeProject.isEmpty && (event.key === 'Enter' || event.key === ' ')) {
              event.preventDefault();
              onOpen(activeProject.slug);
            }
          }}
          aria-label={activeProject.isEmpty ? undefined : `Abrir página detalhada de ${activeProject.title}`}
        >
          <div className="project-window-canvas">
            <ProjectArtwork project={activeProject} empty={activeProject.isEmpty} />
          </div>
        </div>

        <article className={`project-spec-panel${activeProject.isEmpty ? ' is-empty' : ''}`}>
          <div className="project-spec-header">
            <div className="project-index">
              <span>{activeProject.number}</span>
              <i aria-hidden="true" />
              {activeProject.category}
            </div>
            <h3 className="modern-project-title">
              {activeProject.title}<span>.</span>
            </h3>
            <h4>{activeProject.subtitle}</h4>
          </div>

          <p className="project-description">{activeProject.description}</p>

          {activeProject.technologies.length > 0 && (
            <ul className="project-technologies" aria-label="Tecnologias do projeto">
              {activeProject.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          )}

          {!activeProject.isEmpty && (
            <div className="project-spec-footer">
              <button
                className="project-details-cta fluid-surface"
                type="button"
                onClick={() => onOpen(activeProject.slug)}
              >
                <span className="hero-cta-bar" aria-hidden="true" />
                <span>Ver projeto</span>
                <i aria-hidden="true">↗</i>
              </button>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
