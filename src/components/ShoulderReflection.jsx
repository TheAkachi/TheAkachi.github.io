// Reflexos localizados: a arte aprovada permanece intacta, inclusive fora do ombro.
// As coordenadas usam os pixels da imagem 1072 × 1467; o viewBox acompanha sua escala no CSS.
// Os IDs são fixos porque esta camada aparece uma única vez na página.
export default function ShoulderReflection() {
  return (
    <svg className="shoulder-reflection" viewBox="0 0 1072 1467" aria-hidden="true" focusable="false">
      <defs>
        {/* A primeira máscara delimita a placa e suaviza a transição do efeito. */}
        <filter id="shoulder-soft-region">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <mask id="shoulder-plate-region" maskUnits="userSpaceOnUse" x="0" y="0" width="1072" height="1467">
          <path d="M514 698 C551 659 586 640 627 642 L718 661 C780 689 816 747 832 809 L842 876 L807 927 L698 931 C664 886 649 876 600 869 L516 860 Q484 822 480 775 Z" fill="white" filter="url(#shoulder-soft-region)" />
        </mask>
        <filter id="shoulder-white-paint" colorInterpolationFilters="sRGB">
          {/* A matriz gera alpha a partir de 7R - 2G - 2B - 1,9.
              A seleção tonal protege mecanismos, decalques pretos e a faixa aqua. */}
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  7 -2 -2 0 -1.9" />
        </filter>
        <mask id="shoulder-paint-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1072" height="1467" style={{ maskType: 'alpha' }}>
          <image href="/images/robo-armadura-nova.webp" width="1072" height="1467" filter="url(#shoulder-white-paint)" />
        </mask>
        {/* Sombra e reflexo usam somente as cores aprovadas, sem substituir a imagem original. */}
        <linearGradient id="shoulder-metal-shade" x1="480" y1="720" x2="850" y2="880" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#001129" stopOpacity="0" />
          <stop offset=".35" stopColor="#001129" stopOpacity="0" />
          <stop offset=".76" stopColor="#001129" stopOpacity=".28" />
          <stop offset="1" stopColor="#00060F" stopOpacity=".08" />
        </linearGradient>
        <radialGradient id="shoulder-metal-highlight">
          <stop offset="0" stopColor="#F2FAFF" stopOpacity=".48" />
          <stop offset=".38" stopColor="#F2FAFF" stopOpacity=".28" />
          <stop offset="1" stopColor="#F2FAFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* As máscaras se combinam: o efeito precisa estar na placa E na pintura branca. */}
      <g mask="url(#shoulder-plate-region)">
        <g mask="url(#shoulder-paint-mask)">
          <path d="M450 600H880V960H450Z" fill="url(#shoulder-metal-shade)" />
          <ellipse cx="615" cy="770" rx="83" ry="215" transform="rotate(-24 615 770)" fill="url(#shoulder-metal-highlight)" />
        </g>
      </g>
    </svg>
  );
}
