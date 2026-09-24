import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-intro">
            <Logo />
            <p>Atendimento imobiliário em Fortaleza com clareza, proximidade e atenção a cada decisão.</p>
          </div>
          <div className="footer-column">
            <h2>Navegação</h2>
            <nav aria-label="Navegação do rodapé">
              <Link href="/imoveis">Imóveis</Link>
              <Link href="/servicos">Serviços</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/privacidade">Privacidade</Link>
            </nav>
          </div>
          <div className="footer-column">
            <h2>Endereço cadastral</h2>
            <address>
              <span>{siteConfig.address.street}</span>
              <span>{siteConfig.address.neighborhood}</span>
              <span>{siteConfig.city} — {siteConfig.state}</span>
              <span>CEP {siteConfig.cep}</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.brandName}</span>
          <span>CNPJ {siteConfig.cnpj}</span>
        </div>
      </div>
    </footer>
  );
}
