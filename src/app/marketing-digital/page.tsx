import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Marketing Digital — Yury Chacón",
  description:
    "Estrategia, branding, imagen corporativa y campañas digitales con dirección y resultados reales.",
};

const collaborationFormats = [
  {
    tag: "REPRESENTACIÓN",
    title: "Imagen de marca",
    description:
      "Presencia, credibilidad y una voz capaz de presentar tu propuesta ante la audiencia correcta.",
    accent: "#e6007e",
  },
  {
    tag: "CAMPAÑAS",
    title: "Contenido con propósito",
    description:
      "Conceptos y piezas que combinan la fuerza de una buena historia con objetivos comerciales claros.",
    accent: "#00b4ff",
  },
  {
    tag: "ALIANZAS",
    title: "Colaboraciones estratégicas",
    description:
      "Activaciones y relaciones de largo plazo construidas desde la afinidad, no desde la improvisación.",
    accent: "#8b5cf6",
  },
];

export default function MarketingDigitalPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="MARKETING DIGITAL"
        title={<>ESTRATEGIA QUE <span className="text-yc-magenta">POSICIONA</span></>}
        description="Imagen corporativa, branding y campañas digitales construidas para conectar, diferenciar y convertir."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="#servicios" className="rounded-full bg-yc-magenta px-7 py-3.5 text-center text-xs font-extrabold tracking-[0.14em] text-white transition hover:bg-yc-magenta-dark">
            VER SERVICIOS
          </Link>
          <a href="https://instagram.com/ycnoticias" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-7 py-3.5 text-center text-xs font-extrabold tracking-[0.14em] text-white transition hover:border-yc-blue hover:text-yc-blue">
            CONTACTAR
          </a>
        </div>
      </PageHero>

      <section className="bg-black py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#09090b]">
              <div className="page-aurora absolute inset-0 opacity-80" aria-hidden="true" />
              <div className="dot-grid absolute inset-0 opacity-45" aria-hidden="true" />
              <div className="relative text-center">
                <span className="font-display text-[9rem] leading-none text-white/10 sm:text-[12rem]">YC</span>
                <p className="-mt-5 text-[10px] font-extrabold tracking-[0.25em] text-yc-magenta">ESTRATEGIA & RESULTADOS</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">MI ENFOQUE</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-white sm:text-6xl">
                Comunicación que construye marcas
              </h2>
              <p className="mt-6 text-base leading-8 text-white/60">
                Como Licenciada en Comunicación Social y estratega de marketing, combino formación académica con experiencia real en posicionamiento, identidad corporativa y campañas digitales.
              </p>
              <p className="mt-4 text-base leading-8 text-white/60">
                Cada proyecto comienza con una pregunta simple: ¿qué debe entender, sentir y hacer tu audiencia? Desde ahí convertimos objetivos de negocio en mensajes, experiencias y contenido que sí tienen dirección.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["ESTRATEGIA", "PRESENCIA", "CONTENIDO"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 text-center text-[10px] font-bold tracking-[0.15em] text-white/55">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#070707] py-16 sm:py-24">
        <Container>
          <div className="mb-10 max-w-3xl sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">IMAGEN CORPORATIVA</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">
              Formas de trabajar juntos
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              Estrategia, presencia y contenido auténtico para marcas que buscan algo más que una publicación aislada.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {collaborationFormats.map((format) => (
              <article key={format.title} className="glass-panel flex min-h-[320px] flex-col rounded-2xl p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-extrabold tracking-[0.16em]" style={{ color: format.accent }}>{format.tag}</span>
                  <span className="font-display text-4xl text-white/10">YC</span>
                </div>
                <div className="mt-auto pt-14">
                  <h3 className="font-display text-4xl tracking-wide text-white">{format.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">{format.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="servicios" className="scroll-mt-24 bg-black py-16 sm:py-24">
        <Container>
          <div className="mb-10 sm:mb-14">
            <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">SERVICIOS</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">
              ¿En qué puedo ayudarte?
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group min-h-[270px] bg-[#090909] p-6 transition-colors hover:bg-[#111] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-yc-magenta">{service.number}</span>
                  <span className="h-px w-12 bg-gradient-to-r from-yc-magenta to-yc-blue opacity-50 transition-all group-hover:w-20" />
                </div>
                <h3 className="mt-10 font-display text-3xl leading-tight tracking-wide text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#070707] py-16 sm:py-24">
        <Container>
          <div className="page-aurora rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
            <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">HAGAMOS EQUIPO</p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-tight tracking-wide text-white sm:text-7xl">
              ¿Quieres que sea la imagen de tu marca?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              Cuéntame qué estás construyendo y conversemos sobre la mejor manera de conectar tu marca con la audiencia correcta.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://instagram.com/ycnoticias" target="_blank" rel="noreferrer" className="rounded-full bg-yc-magenta px-7 py-3.5 text-xs font-extrabold tracking-[0.14em] text-white">
                ESCRIBIRME EN INSTAGRAM
              </a>
              <Link href="/noticias" className="rounded-full border border-white/20 px-7 py-3.5 text-xs font-extrabold tracking-[0.14em] text-white">
                VER NOTICIAS
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
