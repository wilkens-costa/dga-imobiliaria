import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import { siteConfig, whatsappUrl } from "@/config/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.filter((property) => property.active).map((property) => ({ slug: property.slug }));
}

export async function generateMetadata(props: PageProps<"/imoveis/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const property = properties.find((item) => item.slug === slug && item.active);

  if (!property) return { title: "Imóvel não encontrado", robots: { index: false } };

  return {
    title: property.title,
    description: property.description,
    alternates: { canonical: `/imoveis/${property.slug}` },
    openGraph: {
      type: "website",
      title: property.title,
      description: property.description,
      url: `/imoveis/${property.slug}`,
      images: property.images[0] ? [property.images[0]] : [],
    },
    twitter: {
      card: property.images[0] ? "summary_large_image" : "summary",
      title: property.title,
      description: property.description,
      images: property.images[0] ? [property.images[0]] : [],
    },
  };
}

export default async function PropertyPage(props: PageProps<"/imoveis/[slug]">) {
  const { slug } = await props.params;
  const property = properties.find((item) => item.slug === slug && item.active);
  if (!property) notFound();

  return (
    <article className="property-detail">
      <div className="site-container">
        <p className="eyebrow">{property.transactionType} · {property.propertyType}</p>
        <h1>{property.title}</h1>
        <p>{property.description}</p>
        {property.images[0] && (
          <Image src={property.images[0]} alt={property.title} width={1440} height={900} sizes="(max-width: 768px) 100vw, 1200px" />
        )}
        <dl>
          <div><dt>Bairro</dt><dd>{property.neighborhood}</dd></div>
          <div><dt>Cidade</dt><dd>{property.city} — {property.state}</dd></div>
          {property.area && <div><dt>Área</dt><dd>{property.area} m²</dd></div>}
          {property.bedrooms && <div><dt>Quartos</dt><dd>{property.bedrooms}</dd></div>}
        </dl>
        <a className="button button-primary" href={whatsappUrl || `mailto:${siteConfig.email}`}>
          Solicitar informações
        </a>
      </div>
    </article>
  );
}
