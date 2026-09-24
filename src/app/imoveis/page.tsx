import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PropertySearch } from "@/components/property-search";
import { properties } from "@/data/properties";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Imóveis",
  description: "Consulte o catálogo de imóveis da DGA Imobiliária em Fortaleza.",
  path: "/imoveis",
});

export default function PropertiesPage() {
  const activeProperties = properties.filter((property) => property.active);

  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Um catálogo pensado para escolhas claras."
        description="Os imóveis serão publicados aqui com informações completas, filtros objetivos e apresentação cuidadosa."
      />
      <section className="content-section">
        <div className="site-container">
          <div className="catalog-toolbar" aria-label="Filtros de imóveis">
            <PropertySearch />
          </div>
          {activeProperties.length === 0 ? (
            <div className="catalog-empty">
              <div className="catalog-empty-inner">
                <p className="eyebrow">Catálogo em atualização</p>
                <h2>Novas oportunidades serão publicadas em breve.</h2>
                <p>
                  Ainda não há imóveis cadastrados. Se você procura algo
                  específico, conte à DGA o que precisa.
                </p>
                <Link href="/contato" className="button button-primary">Entrar em contato</Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
