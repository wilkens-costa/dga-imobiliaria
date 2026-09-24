import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Serviços",
  description: "Compra e venda de imóveis, avaliação de imóveis e atendimento imobiliário em Fortaleza.",
  path: "/servicos",
});

const services = [
  { number: "01", title: "Compra e venda de imóveis", text: "Atendimento para compreender objetivos, apresentar possibilidades e acompanhar as etapas da negociação imobiliária." },
  { number: "02", title: "Avaliação de imóveis", text: "Análise das características do imóvel e do contexto em que ele está inserido para orientar uma decisão mais bem informada." },
  { number: "03", title: "Atendimento imobiliário", text: "Orientação próxima para dúvidas, necessidades e próximos passos relacionados ao mercado imobiliário." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Orientação para cada decisão imobiliária."
        description="Atendimento próximo para compreender o contexto, organizar informações e conduzir os próximos passos."
      />
      <section className="content-section">
        <div className="site-container service-list">
          {services.map((service) => (
            <article className="fact-card" key={service.number}>
              <span className="card-index">{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-cta">
        <div className="site-container contact-cta-grid">
          <div><p className="eyebrow eyebrow-light">Atendimento DGA</p><h2>Conte o que você precisa.</h2></div>
          <Link href="/contato" className="button button-gold">Iniciar uma conversa</Link>
        </div>
      </section>
    </>
  );
}
