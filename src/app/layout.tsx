import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brandName} | Imóveis em Fortaleza`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Atendimento imobiliário em Fortaleza para compra, venda e avaliação de imóveis.",
  applicationName: siteConfig.brandName,
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | Imóveis em Fortaleza`,
    description:
      "Atendimento imobiliário em Fortaleza para compra, venda e avaliação de imóveis.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DGA Imobiliária — Clareza para boas escolhas imobiliárias.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Imóveis em Fortaleza`,
    description:
      "Atendimento imobiliário em Fortaleza para compra, venda e avaliação de imóveis.",
    images: ["/og.png"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#102e32",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteConfig.brandName,
  legalName: siteConfig.legalName,
  url: siteConfig.siteUrl,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: siteConfig.cep,
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>
        <a className="skip-link" href="#conteudo-principal">Ir para o conteúdo principal</a>
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
