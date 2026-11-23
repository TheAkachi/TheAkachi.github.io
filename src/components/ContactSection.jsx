import { useEffect, useState } from 'react';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, GITHUB_URL, LINKEDIN_URL } from '../content.js';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        setCopied(true);
        return;
      }
    } catch {
      // Fallback abaixo caso a API de área de transferência não esteja disponível.
    }

    const helper = document.createElement('textarea');
    helper.value = CONTACT_EMAIL;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    try {
      document.execCommand('copy');
      setCopied(true);
    } finally {
      document.body.removeChild(helper);
    }
  }

  return (
    <section className="contact-section page-width" id="contato" data-reveal="pending" aria-labelledby="contact-heading">
      <div className="contact-heading-row">
        <span className="eyebrow">03 / CONTATO</span>
        <span className="contact-heading-note">ESTÁGIO E POSIÇÕES JÚNIOR</span>
      </div>

      <div className="contact-grid">
        <div className="contact-intro">
          <h2 id="contact-heading" className="modern-section-title">Vamos <span>conversar.</span></h2>
          <p>
            Aberto a oportunidades de estágio e júnior em desenvolvimento Full Stack.
          </p>

          <a
            className="hero-primary-cta fluid-surface"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hero-cta-bar" aria-hidden="true" />
            <span>Conversar no LinkedIn</span>
            <i aria-hidden="true">↗</i>
            <span className="sr-only"> (nova aba)</span>
          </a>
        </div>

        <ul className="contact-channels" aria-label="Canais de contato">
          <li className="contact-channel">
            <a
              className="contact-channel-link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-channel-index" aria-hidden="true">01</span>
              <span className="contact-channel-body">
                <span className="contact-channel-label">LINKEDIN · CANAL PRINCIPAL</span>
                <span className="contact-channel-value">linkedin.com/in/pedro-akachi</span>
              </span>
              <span className="contact-channel-arrow" aria-hidden="true">↗</span>
              <span className="sr-only"> (nova aba)</span>
            </a>
          </li>

          <li className="contact-channel contact-channel-email">
            <a className="contact-channel-link" href={CONTACT_EMAIL_HREF}>
              <span className="contact-channel-index" aria-hidden="true">02</span>
              <span className="contact-channel-body">
                <span className="contact-channel-label">E-MAIL</span>
                <span className="contact-channel-value">{CONTACT_EMAIL}</span>
              </span>
              <span className="contact-channel-arrow" aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              className={`contact-copy-button${copied ? ' is-copied' : ''}`}
              onClick={handleCopyEmail}
              aria-label={copied ? 'E-mail copiado para a área de transferência' : 'Copiar endereço de e-mail'}
            >
              {copied ? 'Copiado' : 'Copiar'}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Endereço de e-mail copiado.' : ''}
            </span>
          </li>

          <li className="contact-channel">
            <a
              className="contact-channel-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-channel-index" aria-hidden="true">03</span>
              <span className="contact-channel-body">
                <span className="contact-channel-label">GITHUB</span>
                <span className="contact-channel-value">github.com/TheAkachi</span>
              </span>
              <span className="contact-channel-arrow" aria-hidden="true">↗</span>
              <span className="sr-only"> (nova aba)</span>
            </a>
          </li>
        </ul>
      </div>

      <footer className="contact-footer">
        <div className="contact-footer-meta">
          <span>PEDRO SIQUEIRA</span>
          <i aria-hidden="true" />
          <span>AKACHI</span>
        </div>
        <a className="contact-top-link" href="#inicio">
          Voltar ao topo <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </section>
  );
}
