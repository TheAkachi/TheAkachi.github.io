import { useEffect, useRef, useState } from 'react';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Hero from './components/Hero.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import { projects } from './projects.js';

function projectFromAddress() {
  return new URLSearchParams(window.location.search).get('projeto');
}

function runViewTransition(callback) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && typeof document.startViewTransition === 'function') {
    document.startViewTransition(callback);
  } else {
    callback();
  }
}

export default function App() {
  const [projectSlug, setProjectSlug] = useState(projectFromAddress);
  const [selectedSlug, setSelectedSlug] = useState(projectFromAddress() ?? projects[0]?.slug);
  const [activeNav, setActiveNav] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [lensStyle, setLensStyle] = useState({ x: 0, width: 0, visible: false });
  const navRef = useRef(null);

  const openableProjects = projects.filter((project) => !project.isEmpty);
  const currentProject = projectSlug
    ? openableProjects.find((project) => project.slug === projectSlug) ?? null
    : null;
  const currentProjectIndex = currentProject
    ? openableProjects.findIndex((project) => project.slug === currentProject.slug)
    : -1;
  const nextProject = currentProjectIndex >= 0 && currentProjectIndex < openableProjects.length - 1
    ? openableProjects[currentProjectIndex + 1]
    : null;

  // Mantém o título da aba coerente com a página exibida.
  useEffect(() => {
    if (projectSlug) {
      document.title = currentProject
        ? `${currentProject.title} — Pedro Siqueira`
        : 'Projeto não encontrado — Pedro Siqueira';
    } else {
      document.title = 'Pedro Siqueira — Full Stack Developer';
    }
  }, [currentProject, projectSlug]);

  // Garante rolagem até a âncora quando a página abre diretamente com #projetos, #sobre ou #contato.
  useEffect(() => {
    if (projectSlug || !window.location.hash) return undefined;
    const targetId = window.location.hash.slice(1);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  // O endereço próprio da página de cada projeto permite recarregar e compartilhar o detalhe.
  useEffect(() => {
    function syncAddress() {
      const nextSlug = projectFromAddress();
      setProjectSlug(nextSlug);
      if (nextSlug) setSelectedSlug(nextSlug);
      else if (window.history.state?.selectedProject) setSelectedSlug(window.history.state.selectedProject);

      window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        if (nextSlug) window.scrollTo({ top: 0, behavior: 'instant' });
        else if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
        else window.scrollTo({ top: 0, behavior: 'instant' });
      }));
    }

    window.addEventListener('popstate', syncAddress);
    return () => window.removeEventListener('popstate', syncAddress);
  }, []);

  // Revela seções em cascata ao entrar na tela e acompanha a seção ativa para a lente do menu.
  useEffect(() => {
    if (projectSlug) {
      setActiveNav('projetos');
      return undefined;
    }

    const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      revealTargets.forEach((node) => node.setAttribute('data-reveal', 'revealed'));
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'revealed');
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    );

    if (!prefersReducedMotion) {
      revealTargets.forEach((node) => revealObserver.observe(node));
    }

    const sectionIds = ['inicio', 'projetos', 'sobre', 'contato'];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveNav(id === 'inicio' ? null : id);
          }
        });
      },
      { threshold: 0.42 },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [projectSlug]);

  // Posiciona a lente deslizante do cabeçalho sobre o item em hover ou a seção ativa.
  useEffect(() => {
    const targetKey = hoveredNav ?? activeNav;
    const navElement = navRef.current;
    if (!navElement || !targetKey) {
      setLensStyle((previous) => ({ ...previous, visible: false }));
      return;
    }
    const linkElement = navElement.querySelector(`[data-nav="${targetKey}"]`);
    if (!linkElement) {
      setLensStyle((previous) => ({ ...previous, visible: false }));
      return;
    }
    setLensStyle({
      x: linkElement.offsetLeft - 14,
      width: linkElement.offsetWidth + 28,
      visible: true,
    });
  }, [activeNav, hoveredNav, projectSlug]);

  function handlePointerMove(event) {
    const surface = event.target.closest('.fluid-surface, .technologies li, .contact-channel, .contact-primary-link, .project-slide-center, .hero-case-pill, .project-details-cta');
    if (!surface) return;
    const rect = surface.getBoundingClientRect();
    surface.style.setProperty('--fluid-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    surface.style.setProperty('--fluid-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }

  function openProject(slug) {
    window.history.scrollRestoration = 'manual';
    const address = new URL(window.location.href);
    address.searchParams.set('projeto', slug);
    address.hash = '';
    window.history.pushState({ projectSlug: slug, selectedProject: slug }, '', `${address.pathname}${address.search}`);
    runViewTransition(() => {
      setSelectedSlug(slug);
      setProjectSlug(slug);
    });
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' })));
  }

  function returnToProjects() {
    window.history.scrollRestoration = 'manual';
    const address = new URL(window.location.href);
    address.searchParams.delete('projeto');
    address.hash = 'projetos';
    window.history.pushState({ selectedProject: selectedSlug }, '', `${address.pathname}${address.search}${address.hash}`);
    runViewTransition(() => {
      setProjectSlug(null);
    });
    window.requestAnimationFrame(() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' }));
  }

  function returnToAbout() {
    window.history.scrollRestoration = 'manual';
    const address = new URL(window.location.href);
    address.searchParams.delete('projeto');
    address.hash = 'sobre';
    window.history.pushState({ selectedProject: selectedSlug }, '', `${address.pathname}${address.search}${address.hash}`);
    runViewTransition(() => {
      setProjectSlug(null);
    });
    window.requestAnimationFrame(() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }));
  }

  function returnToContact() {
    window.history.scrollRestoration = 'manual';
    const address = new URL(window.location.href);
    address.searchParams.delete('projeto');
    address.hash = 'contato';
    window.history.pushState({ selectedProject: selectedSlug }, '', `${address.pathname}${address.search}${address.hash}`);
    runViewTransition(() => {
      setProjectSlug(null);
    });
    window.requestAnimationFrame(() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }));
  }

  function returnToHome() {
    window.history.scrollRestoration = 'manual';
    const address = new URL(window.location.href);
    address.searchParams.delete('projeto');
    address.hash = '';
    window.history.pushState({ selectedProject: selectedSlug }, '', `${address.pathname}${address.search}`);
    runViewTransition(() => {
      setProjectSlug(null);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const isProjectView = Boolean(projectSlug);

  return (
    <>
      <a className="skip-link" href={isProjectView ? '#pagina-projeto' : '#inicio'}>Pular para o conteúdo</a>
      <div className="portfolio" onPointerMove={handlePointerMove}>
        <header className="header page-width">
          <a className="wordmark" href="#inicio" aria-label="Pedro Siqueira — início" onClick={(event) => { event.preventDefault(); returnToHome(); }}>
            Akachi
          </a>
          <nav aria-label="Navegação principal" ref={navRef} onPointerLeave={() => setHoveredNav(null)}>
            <span
              className={`nav-lens${lensStyle.visible ? ' is-visible' : ''}`}
              aria-hidden="true"
              style={{
                width: `${lensStyle.width}px`,
                transform: `translate3d(${lensStyle.x}px, -50%, 0)`,
              }}
            />
            <a
              className={`nav-projects${activeNav === 'projetos' ? ' is-active' : ''}`}
              data-nav="projetos"
              href="#projetos"
              onPointerEnter={() => setHoveredNav('projetos')}
              onFocus={() => setHoveredNav('projetos')}
              onBlur={() => setHoveredNav(null)}
              onClick={isProjectView ? (event) => { event.preventDefault(); returnToProjects(); } : undefined}
            >
              Projetos
            </a>
            <a
              className={`nav-about${activeNav === 'sobre' ? ' is-active' : ''}`}
              data-nav="sobre"
              href="#sobre"
              onPointerEnter={() => setHoveredNav('sobre')}
              onFocus={() => setHoveredNav('sobre')}
              onBlur={() => setHoveredNav(null)}
              onClick={isProjectView ? (event) => { event.preventDefault(); returnToAbout(); } : undefined}
            >
              Sobre
            </a>
            <a
              className={`nav-section-contact${activeNav === 'contato' ? ' is-active' : ''}`}
              data-nav="contato"
              href="#contato"
              onPointerEnter={() => setHoveredNav('contato')}
              onFocus={() => setHoveredNav('contato')}
              onBlur={() => setHoveredNav(null)}
              onClick={isProjectView ? (event) => { event.preventDefault(); returnToContact(); } : undefined}
            >
              Contato
            </a>
          </nav>
        </header>
        <main>
          {isProjectView ? (
            <ProjectDetail
              project={currentProject}
              nextProject={nextProject}
              onBack={returnToProjects}
              onOpenProject={openProject}
              onContact={returnToContact}
            />
          ) : (
            <>
              <Hero selectedSlug={selectedSlug} onSelect={setSelectedSlug} onOpenProject={openProject} />
              <ProjectsSection selectedSlug={selectedSlug} onSelect={setSelectedSlug} onOpen={openProject} />
              <AboutSection />
              <ContactSection />
            </>
          )}
        </main>
      </div>
    </>
  );
}
