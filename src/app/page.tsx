import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BuildingIcon, CompassIcon, KeyIcon } from "@/components/icons";
import { PropertySearch } from "@/components/property-search";
import { properties } from "@/data/properties";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Boas escolhas imobiliárias em Fortaleza",
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
          <h1>Seu próximo endereço começa com uma boa escolha.</h1>
          <p className="hero-copy">
            Atendimento imobiliário em Fortaleza com clareza para comprar,
            vender e avaliar imóveis.
          </p>
          <div className="hero-actions">
            <Link href="/imoveis" className="button button-gold">
              Encontrar imóvel
              <ArrowUpRight />
            </Link>
            <Link href="/sobre" className="text-link text-link-light">
              Conhecer a DGA
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
                <h3>Novas oportunidades serão publicadas em breve.</h3>
                <p>
                  O catálogo está sendo preparado para receber anúncios com
                  informações claras e completas.
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
            <h2 id="services-title">Como a DGA pode ajudar.</h2>
            </div>
            <p className="section-lead">
              Três frentes de atendimento para apoiar cada decisão com
              proximidade e objetividade.
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
            <span className="about-monogram">DGA</span>
            <span className="about-since">Cadastro empresarial desde 2011</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Sobre a DGA</p>
            <h2 id="about-title">
              Proximidade para entender. Clareza para decidir.
            </h2>
            <p>
              A DGA Imobiliária atua em Fortaleza para tornar cada decisão mais
              compreensível, com atendimento próximo e condução cuidadosa.
            </p>
            <Link href="/sobre" className="text-link">
              Nossa proposta <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section benefit-section" aria-labelledby="benefits-title">
        <div className="site-container">
          <div className="section-heading-row">
            <div className="section-intro">
              <p className="eyebrow">Diferenciais de atendimento</p>
              <h2 id="benefits-title">Uma condução atenta, do início à decisão.</h2>
            </div>
            <p className="section-copy">
              Relações imobiliárias pedem escuta, contexto e informações que façam sentido para cada pessoa.
            </p>
          </div>
          <div className="benefit-grid">
            <article><span>01</span><h3>Atendimento próximo</h3><p>Uma conversa aberta para compreender prioridades e contexto.</p></article>
            <article><span>02</span><h3>Informações claras</h3><p>Comunicação direta para acompanhar cada etapa com segurança.</p></article>
            <article><span>03</span><h3>Condução cuidadosa</h3><p>Atenção aos detalhes e ao ritmo de cada processo imobiliário.</p></article>
            <article><span>04</span><h3>Decisões informadas</h3><p>Orientação para avaliar possibilidades com mais consciência.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="site-container contact-cta-grid">
          <div>
            <p className="eyebrow eyebrow-light">Vamos conversar</p>
            <h2>Vamos entender o que faz sentido para você.</h2>
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
