const fallbackSiteUrl = "http://localhost:3000";

function normalizeSiteUrl(value: string | undefined) {
  const url = value?.trim() || fallbackSiteUrl;
  return url.replace(/\/$/, "");
}

export const siteConfig = {
  brandName: "DGA Imobiliária",
  legalName: "R O DUARTE GESTAO E ADMINISTRACAO IMOBILIARIA",
  cnpj: "13.938.369/0001-91",
  email: "rodrigoduarte.imoveis@gmail.com",
  phone: "(85) 9405-3636",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "",
  address: {
    street: "Rua Coronel Nunes de Melo, 302",
    neighborhood: "Rodolfo Teófilo",
  },
  city: "Fortaleza",
  state: "CE",
  cep: "60430-270",
  domain: "https://dgaimobiliaria.com.br",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  creci: "",
  instagram: "",
  facebook: "",
} as const;

export const whatsappUrl = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
  : "";
