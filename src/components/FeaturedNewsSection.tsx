import Link from "next/link";
import { articles } from "@/lib/site-data";
import Container from "./Container";

export default function FeaturedNewsSection() {
  const [featured, ...more] = articles;

  return (
    <section id="noticias" className="border-t border-white/10 bg-black py-16 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-yc-magenta">
              YC NOTICIAS
            </p>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-6xl">
              Información que mueve ideas
            </h2>
          </div>
          <Link
            href="/noticias"
            className="text-xs font-bold tracking-[0.16em] text-white/70 transition-colors hover:text-yc-magenta"
          >
            VER TODAS LAS NOTICIAS →
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <Link
            href={`/noticias/${featured.slug}`}
            className="editorial-card group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-9"
          >
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(circle at 78% 20%, rgba(230,0,126,.35), transparent 33%), radial-gradient(circle at 15% 90%, rgba(0,180,255,.2), transparent 35%), #0d0d0f",
              }}
              aria-hidden="true"
            />
            <div className="dot-grid absolute inset-0 opacity-35" aria-hidden="true" />
            <div className="relative flex h-full min-h-[380px] flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-yc-magenta/40 bg-yc-magenta/10 px-3 py-1 text-[10px] font-extrabold tracking-[0.16em] text-yc-magenta">
                  ARTÍCULO DESTACADO
                </span>
                <span className="font-display text-4xl text-white/10 sm:text-6xl">YC</span>
              </div>
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                  {featured.category} · {featured.date}
                </p>
                <h3 className="max-w-3xl font-display text-3xl leading-tight tracking-wide text-white transition-colors group-hover:text-yc-magenta sm:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-7 inline-flex text-xs font-bold tracking-[0.16em] text-white">
                  LEER ARTÍCULO →
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-4">
            {more.slice(0, 2).map((article) => (
              <Link
                key={article.slug}
                href={`/noticias/${article.slug}`}
                className="glass-panel group flex min-h-[205px] flex-col justify-between rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-[0.17em]"
                    style={{ color: article.accent }}
                  >
                    {article.category}
                  </span>
                  <span className="text-[10px] text-white/35">{article.date}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight tracking-wide text-white transition-colors group-hover:text-yc-blue sm:text-3xl">
                    {article.title}
                  </h3>
                  <span className="mt-4 inline-flex text-[10px] font-bold tracking-[0.14em] text-white/55">
                    LEER MÁS →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
