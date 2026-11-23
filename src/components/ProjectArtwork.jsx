const PROJECT_IMAGES = {
  nexus: '/images/projects/nexus.webp',
  'nexus-adm': '/images/projects/nexus-adm.webp',
  apex: '/images/projects/apex.webp',
};

export default function ProjectArtwork({ project }) {
  const slug = project?.slug || 'nexus';
  const src = PROJECT_IMAGES[slug] || PROJECT_IMAGES.nexus;

  return (
    <span className={`project-artwork project-artwork-photo is-${slug}`} aria-hidden="true">
      <img
        className="project-real-img"
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
