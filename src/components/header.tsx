"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`site-header${isHome ? " header-home" : ""}${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="site-container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/imoveis" className="button header-cta">
            Encontrar imóvel <ArrowUpRight />
          </Link>
        </nav>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu" id="mobile-navigation">
          <nav aria-label="Navegação móvel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/imoveis" className="button button-primary" onClick={() => setOpen(false)}>
              Encontrar imóvel <ArrowUpRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
