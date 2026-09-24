import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brandName,
    short_name: "DGA",
    description: "Atendimento imobiliário em Fortaleza.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#102e32",
    lang: "pt-BR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
