import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BuildingIcon, CompassIcon, KeyIcon } from "@/components/icons";
import { PropertySearch } from "@/components/property-search";
import { properties } from "@/data/properties";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Imóveis para o seu próximo capítulo",
  description:
    "Atendimento imobiliário em Fortaleza para quem busca decisões claras na compra, venda e avaliação de imóveis.",
  path: "/",
});

const services = [
  {
    title: "Compra e venda",
    description:
      "Acompanhamento cuidadoso para conectar pessoas, propriedades e decisões bem fundamentadas.",
    icon: KeyIcon,
  },
  {
    title: "Avaliação de imóveis",
    description:
      "Análise criteriosa das características do imóvel e do contexto do mercado local.",
    icon: BuildingIcon,
  },
  {
    title: "Atendimento imobiliário",
    description:
      "Uma conversa próxima para compreender necessidades e orientar cada próximo passo.",
    icon: CompassIcon,
  },
];

export default function Home() {
  const featuredProperties = properties.filter(
    (property) => property.active && property.featured,
  );

  return (
    <>
      <section className="hero-section">
        <Image
          src="/hero-arquitetura-dga.png"
          alt="Arquitetura contemporânea com concreto, pedra natural e paisagismo tropical ao entardecer"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="site-container hero-content">
          <p className="eyebrow eyebrow-light">Imobiliária em Fortaleza</p>
          <h1>Imóveis que combinam com o seu próximo capítulo.</h1>
          <p className="hero-copy">
            Escolhas imobiliárias merecem clareza, repertório local e atenção
            aos detalhes. A DGA aproxima você de decisões mais seguras em
            Fortaleza.
          </p>
          <div className="hero-actions">
            <Link href="/imoveis" className="button button-gold">
              Encontrar um imóvel
              <ArrowUpRight />
            </Link>
            <Link href="/sobre" className="text-link text-link-light">
              Conheça a DGA
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-caption" aria-hidden="true">
          <span>Fortaleza, Ceará</span>
          <span className="caption-rule" />
          <span>03°43&apos; S</span>
        </div>
      </section>

      <section className="search-band" aria-labelledby="property-search-title">
        <div className="site-container">
          <div className="section-intro search-intro">
            <p className="eyebrow">Busca de imóveis</p>
            <h2 id="property-search-title">Comece pela sua intenção.</h2>
          </div>
          <PropertySearch />
        </div>
      </section>

      <section className="section" aria-labelledby="featured-title">
        <div className="site-container">
          <div className="section-heading-row">
            <div className="section-intro">
              <p className="eyebrow">Seleção DGA</p>
              <h2 id="featured-title">Imóveis em destaque</h2>
            </div>
            {featuredProperties.length > 0 && (
              <Link href="/imoveis" className="text-link">
                Ver todos <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          {featuredProperties.length === 0 ? (
            <div className="editorial-empty">
              <div className="empty-number" aria-hidden="true">01</div>
              <div>
                <p className="eyebrow">Curadoria em preparação</p>
                <h3>Novos imóveis serão apresentados em breve.</h3>
                <p>
                  Estamos preparando uma seleção para que cada anúncio chegue
                  com informações completas e relevantes.
                </p>
              </div>
              <Link href="/contato" className="button button-outline">
                Falar com a DGA
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section-ink" aria-labelledby="services-title">
        <div className="site-container">
          <div className="section-heading-row section-heading-inverse">
            <div className="section-intro">
              <p className="eyebrow eyebrow-light">Como podemos ajudar</p>
              <h2 id="services-title">Cuidado em cada decisão imobiliária.</h2>
            </div>
            <p className="section-lead">
              Do primeiro entendimento à condução do processo, o atendimento
              parte da escuta e avança com objetividade.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article className="service-card" key={title}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon /></span>
                  <span className="service-index">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <Link href="/servicos" className="text-link text-link-light service-link">
            Conheça os serviços <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section about-feature" aria-labelledby="about-title">
        <div className="site-container about-grid">
          <div className="about-mark" aria-hidden="true">
            <span>D</span><span>G</span><span>A</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Sobre a DGA</p>
            <h2 id="about-title">
              Relações imobiliárias conduzidas com presença e clareza.
            </h2>
            <p>
              A DGA Imobiliária atua em Fortaleza com uma proposta simples:
              tornar as decisões sobre imóveis mais compreensíveis, próximas e
              bem acompanhadas.
            </p>
            <Link href="/sobre" className="text-link">
              Nossa proposta <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Benefícios do atendimento">
        <div className="site-container benefit-grid">
          <p><span>01</span> Escuta antes de recomendar</p>
          <p><span>02</span> Comunicação clara no processo</p>
          <p><span>03</span> Conhecimento do contexto local</p>
        </div>
      </section>

      <section className="contact-cta">
        <div className="site-container contact-cta-grid">
          <div>
            <p className="eyebrow eyebrow-light">Vamos conversar</p>
            <h2>Seu próximo movimento começa com uma boa conversa.</h2>
          </div>
          <Link href="/contato" className="button button-gold">
            Entrar em contato
            <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
