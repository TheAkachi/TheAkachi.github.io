import Hero from './components/Hero.jsx';
import { LINKEDIN_URL } from './content.js';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#inicio">Pular para o conteúdo</a>
      <header className="header page-width">
        <a className="wordmark" href="#inicio" aria-label="Pedro Siqueira — início">
          akachi<span aria-hidden="true">_</span>
        </a>
        <nav aria-label="Navegação principal">
          <a className="nav-projects" href="#projetos">Projetos</a>
          <a className="nav-contact" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            Vamos conversar <span aria-hidden="true">↗</span><span className="sr-only"> no LinkedIn (nova aba)</span>
          </a>
        </nav>
      </header>
      <main>
        <Hero />
        {/* Estado honesto até a próxima entrega: nenhum projeto demonstrativo é apresentado como real. */}
        <section className="projects-preview page-width" id="projetos" aria-labelledby="projects-heading">
          <span className="eyebrow">01 / PROJETOS</span>
          <div>
            <h2 id="projects-heading">Projetos em preparação<span aria-hidden="true">.</span></h2>
            <p>Em breve, os projetos e as histórias por trás de cada construção.</p>
          </div>
          <span className="section-marker" aria-hidden="true">[ em construção ]</span>
        </section>
      </main>
    </>
  );
}
