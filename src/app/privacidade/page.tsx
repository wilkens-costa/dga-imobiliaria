import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Política de privacidade",
  description: "Informações sobre privacidade no site institucional da DGA Imobiliária.",
  path: "/privacidade",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Transparência sobre o uso deste site."
        description="Esta política descreve a versão institucional atual, sem formulário, conta de usuário, analytics ou banco de dados próprio."
      />
      <section className="content-section">
        <article className="site-container privacy-article">
          <section>
            <h2>Dados tratados nesta versão</h2>
            <p>O site institucional da {siteConfig.brandName} não mantém cadastro próprio de visitantes. Não há formulário de contato, criação de conta, área de login, analytics ou banco de dados de usuários nesta versão.</p>
          </section>
          <section>
            <h2>Contato por e-mail</h2>
            <p>Ao escolher o botão de e-mail, seu aplicativo de correio será aberto. O envio e o tratamento da mensagem acontecem pelos serviços de e-mail envolvidos, conforme as respectivas políticas.</p>
          </section>
          <section>
            <h2>Cookies e tecnologias semelhantes</h2>
            <p>Esta versão não utiliza cookies de publicidade ou rastreamento. Por isso, não é exibido um banner de consentimento de cookies.</p>
          </section>
          <section>
            <h2>Canal para dúvidas</h2>
            <p>Dúvidas sobre esta política podem ser encaminhadas para <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
          </section>
        </article>
      </section>
    </>
  );
}
