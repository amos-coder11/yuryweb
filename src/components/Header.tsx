"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HaloBar from "./ui/HaloBar";

const navLinks = [
  { href: "/", label: "INICIO" },
  { href: "/noticias", label: "NOTICIAS" },
  { href: "/marketing-digital", label: "MARKETING DIGITAL" },
  { href: "/academia", label: "ACADEMIA" },
  { href: "/sobre-yuri", label: "SOBRE YURY" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-2 sm:pt-4">
      <Container className="px-3 sm:px-6 lg:px-8">
        <HaloBar className="pointer-events-auto w-full">
          <div className="flex min-h-14 w-full items-center justify-between px-3 sm:min-h-16 sm:px-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-6">
            <Link
              href="/"
              aria-label="YC Noticias - Inicio"
              className="lg:justify-self-start"
            >
              <Logo />
            </Link>

            <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-[10px] font-semibold tracking-widest text-white transition-colors hover:text-yc-magenta xl:text-xs ${
                    isActive(link.href)
                      ? "border-b-2 border-yc-magenta pb-0.5"
                      : "border-b-2 border-transparent pb-0.5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="p-2 lg:invisible lg:pointer-events-none lg:justify-self-end"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>

          {menuOpen && (
            <nav className="border-t border-white/10 px-3 py-3 sm:px-4 sm:py-4 lg:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-lg px-3 py-3 text-sm font-semibold tracking-widest transition-colors ${
                      isActive(link.href)
                        ? "text-yc-magenta"
                        : "text-white hover:text-yc-magenta"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </HaloBar>
      </Container>
    </header>
  );
}
