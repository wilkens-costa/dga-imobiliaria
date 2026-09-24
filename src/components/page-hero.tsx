type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="site-container page-hero-grid">
        <div className="page-hero-label">
          <p className="eyebrow">{eyebrow}</p>
          <span aria-hidden="true" />
        </div>
        <div>
          <h1>{title}</h1>
          <p className="page-hero-copy">{description}</p>
        </div>
      </div>
    </section>
  );
}
