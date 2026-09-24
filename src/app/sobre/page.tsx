import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre a DGA",
  description: "Conheça a proposta institucional da DGA Imobiliária e sua atuação em Fortaleza.",
  path: "/sobre",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a DGA"
        title="Clareza para escolher o próximo caminho."
        description="A DGA conduz relações imobiliárias com proximidade, atenção e informação compreensível."
      />
      <section className="content-section">
        <div className="site-container content-grid">
          <div className="prose-block">
            <p className="eyebrow">Nossa proposta</p>
            <h2>Um atendimento atento ao que realmente importa.</h2>
            <p>
              Comprar, vender ou avaliar um imóvel envolve contexto, tempo e prioridades particulares.
              A DGA procura compreender cada cenário antes de orientar possibilidades, mantendo uma
              comunicação direta ao longo do processo.
            </p>
            <p>
              A atuação está voltada ao mercado imobiliário de Fortaleza, com serviços de compra e
              venda, avaliação e atendimento imobiliário.
            </p>
          </div>
          <div className="info-card">
            <p className="eyebrow">Identidade empresarial</p>
            <h2>{siteConfig.brandName}</h2>
            <p>{siteConfig.legalName}</p>
            <p>CNPJ {siteConfig.cnpj}</p>
            <p className="contact-note">
              A razão social vinculada à DGA possui cadastro empresarial desde 2011.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-ink">
        <div className="site-container">
          <div className="section-intro section-heading-inverse">
            <p className="eyebrow eyebrow-light">Princípios de atendimento</p>
            <h2>Princípios que orientam cada conversa.</h2>
          </div>
          <div className="values-grid">
            <article className="value-card"><span>01</span><h3>Escuta</h3><p>Entender necessidades antes de indicar caminhos.</p></article>
            <article className="value-card"><span>02</span><h3>Clareza</h3><p>Informações objetivas para decisões conscientes.</p></article>
            <article className="value-card"><span>03</span><h3>Cuidado</h3><p>Atenção aos detalhes em cada etapa do processo.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
