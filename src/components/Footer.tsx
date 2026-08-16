import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/noticias", label: "Noticias" },
  { href: "/marketing-digital", label: "Marketing Digital" },
  { href: "/academia", label: "Academia" },
  { href: "/sobre-yuri", label: "Sobre Yury" },
];

const socialLinks = [
  {
    href: "https://instagram.com/ycnoticias",
    label: "Instagram",
    handle: "@YCNoticias",
  },
  {
    href: "https://www.facebook.com/share/1FEwekpzfX/?mibextid=wwXIfr",
    label: "Facebook",
    handle: "YC Noticias",
  },
  {
    href: "https://www.tiktok.com/@yc.noticias",
    label: "TikTok",
    handle: "@yc.noticias",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black pb-6 pt-12 sm:pb-8 sm:pt-16">
      <Container>
        <div className="grid gap-8 border-t-2 border-yc-magenta pt-10 sm:gap-10 sm:pt-12 md:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          <div>
            <Logo size={48} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Comunicadora, estratega digital y reportera independiente.
              Transformando marcas en autoridades digitales.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-white">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-yc-magenta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-white">
              SÍGUEME EN REDES SOCIALES
            </h3>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} — ${social.handle}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2.5 text-white/60 transition-colors hover:border-yc-magenta/50 hover:text-white"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em]">{social.label}</span>
                  <span className="text-[10px] text-white/35">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-center text-[11px] text-white/40 sm:mt-12 sm:flex-row sm:pt-6 sm:text-left">
          <p>© 2026 Yury Chacón | YC Noticias. Todos los derechos reservados.</p>
          <p>Comunicación · Estrategia · Comunidad</p>
        </div>
      </Container>
    </footer>
  );
}
