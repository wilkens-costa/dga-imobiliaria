import { PageHero } from "@/components/page-hero";
import { siteConfig, whatsappUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contato",
  description: "Entre em contato com a DGA Imobiliária por e-mail e consulte o endereço cadastral em Fortaleza.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos começar por uma boa conversa."
        description="Compartilhe sua necessidade imobiliária. Nesta versão, o contato está disponível por e-mail."
      />
      <section className="content-section">
        <div className="site-container contact-grid">
          <article className="contact-card">
            <span className="card-index">01</span>
            <p className="eyebrow">E-mail</p>
            <h2>Escreva para a DGA</h2>
            <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            <a className="button button-primary" href={`mailto:${siteConfig.email}?subject=Contato pelo site DGA Imobiliária`}>Enviar e-mail</a>
          </article>
          <article className="contact-card">
            <span className="card-index">02</span>
            <p className="eyebrow">Endereço cadastral</p>
            <h2>{siteConfig.city} — {siteConfig.state}</h2>
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.neighborhood}</p>
            <p>CEP {siteConfig.cep}</p>
            <p className="contact-note">Este é o endereço cadastral da empresa. Atendimento presencial não informado nesta versão.</p>
          </article>
          <article className="contact-card">
            <span className="card-index">03</span>
            <p className="eyebrow">Atendimento</p>
            <h2>{siteConfig.brandName}</h2>
            <p>Para compra, venda, avaliação ou outras orientações imobiliárias, envie uma mensagem com um breve contexto.</p>
            {whatsappUrl && (
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar pelo WhatsApp</a>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
