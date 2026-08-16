import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { articles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Noticias — YC Noticias | Yury Chacón",
  description:
    "Información veraz, análisis responsable y contenido de valor sobre comunicación, marketing, tecnología y emprendimiento.",
};

export default function NoticiasPage() {
  const [featured, ...archive] = articles;
  const categories = ["Todas", ...new Set(articles.map((article) => article.category))];

  return (
    <SiteShell>
      <PageHero
        eyebrow="YC NOTICIAS"
        title={<>NOTICIAS<span className="text-yc-magenta">.</span></>}
        description="Información veraz, análisis responsable y contenido de valor para mantenerte un paso adelante."
      />

      <section className="bg-black py-14 sm:py-20">
        <Container>
          <p className="mb-5 text-[10px] font-extrabold tracking-[0.2em] text-yc-magenta">
            ARTÍCULO DESTACADO
          </p>
          <Link
            href={`/noticias/${featured.slug}`}
            className="editorial-card group grid min-h-[460px] overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#111] lg:min-h-full lg:border-b-0 lg:border-r">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 65% 30%, rgba(230,0,126,.5), transparent 30%), radial-gradient(circle at 28% 80%, rgba(0,180,255,.38), transparent 34%), #08080a",
                }}
              />
              <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
              <span className="relative font-display text-[8rem] leading-none text-white/10 sm:text-[11rem]">YC</span>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em]">
                <span className="text-yc-magenta">{featured.category}</span>
                <span className="text-white/25">•</span>
                <span className="text-white/40">{featured.date}</span>
                <span className="text-white/25">•</span>
                <span className="text-white/40">{featured.readingTime}</span>
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide text-white transition-colors group-hover:text-yc-magenta sm:text-6xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                {featured.excerpt}
              </p>
              <span className="mt-8 text-xs font-extrabold tracking-[0.16em] text-white">
                LEER ARTÍCULO →
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#070707] py-14 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2" aria-label="Categorías disponibles">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] ${
                  index === 0
                    ? "border-yc-magenta bg-yc-magenta text-white"
                    : "border-white/10 text-white/45"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {archive.map((article) => (
              <Link
                key={article.slug}
                href={`/noticias/${article.slug}`}
                className="glass-panel group flex min-h-[330px] flex-col rounded-2xl p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-[0.16em]"
                    style={{ color: article.accent }}
                  >
                    {article.category}
                  </span>
                  <span className="font-display text-3xl text-white/10">YC</span>
                </div>
                <div className="mt-auto pt-12">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                    {article.date} · {article.readingTime}
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-tight tracking-wide text-white transition-colors group-hover:text-yc-blue">
                    {article.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/50">
                    {article.excerpt}
                  </p>
                  <span className="mt-6 inline-flex text-[10px] font-extrabold tracking-[0.14em] text-white/70">
                    LEER MÁS →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <Container>
          <div className="page-aurora overflow-hidden rounded-3xl border border-white/10 px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-xs font-bold tracking-[0.2em] text-yc-magenta">YC NOTICIAS</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">
              Información que transforma
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              Comunicación transparente, profesional y cercana para emprendedores, marcas y profesionales.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/sobre-yuri" className="rounded-full bg-yc-magenta px-6 py-3 text-xs font-extrabold tracking-[0.12em] text-white">
                CONOCER A YURY
              </Link>
              <Link href="/marketing-digital" className="rounded-full border border-white/20 px-6 py-3 text-xs font-extrabold tracking-[0.12em] text-white">
                VER SERVICIOS
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
