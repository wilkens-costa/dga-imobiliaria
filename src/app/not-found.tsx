import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="site-container">
        <p className="not-found-code">404</p>
        <h1>Esta página não foi encontrada.</h1>
        <p>O endereço pode ter mudado ou o conteúdo ainda não está disponível. Você pode voltar ao início ou consultar o catálogo.</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="button button-primary">Voltar ao início</Link>
          <Link href="/imoveis" className="button button-outline">Ver imóveis</Link>
        </div>
      </div>
    </section>
  );
}
