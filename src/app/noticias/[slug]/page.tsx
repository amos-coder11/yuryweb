import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import SiteShell from "@/components/SiteShell";
import { articles } from "@/lib/site-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} — YC Noticias`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  const related = articles.find(
    (item) => item.slug !== article.slug && item.category === article.category,
  ) ?? articles.find((item) => item.slug !== article.slug)!;

  return (
    <SiteShell>
      <article className="bg-black pb-20 pt-32 sm:pb-28 sm:pt-40">
        <Container>
          <Link
            href="/noticias"
            className="text-[10px] font-extrabold tracking-[0.18em] text-white/45 transition hover:text-yc-magenta"
          >
            ← TODAS LAS NOTICIAS
          </Link>

          <header className="mx-auto mt-12 max-w-5xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em]" style={{ color: article.accent }}>
              {article.category}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-wide text-white sm:text-7xl lg:text-8xl">
              {article.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.12em] text-white/40">
              <span>Yury Chacón</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readingTime}</span>
            </div>
          </header>

          <div className="editorial-card relative mx-auto mt-12 flex min-h-[380px] max-w-6xl items-center justify-center overflow-hidden rounded-3xl border border-white/10">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 70% 25%, ${article.accent}66, transparent 30%), radial-gradient(circle at 25% 80%, rgba(0,180,255,.35), transparent 35%), #09090b`,
              }}
            />
            <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <span className="relative font-display text-[9rem] leading-none text-white/10 sm:text-[15rem]">YC</span>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <p className="text-xl font-medium leading-relaxed text-white/85 sm:text-2xl">
              {article.excerpt}
            </p>
            <div className="my-10 h-px bg-gradient-to-r from-yc-magenta via-yc-blue to-transparent" />
            <div className="space-y-6 text-base leading-8 text-white/60">
              <p>
                El contenido completo de este artículo estará disponible próximamente. Yury Chacón está preparando un análisis profundo y detallado sobre este tema para ofrecerte información práctica y de valor.
              </p>
              <p>
                Mientras tanto, explora las demás publicaciones de YC Noticias y sigue a Yury en sus redes sociales para conocer las últimas historias, análisis y herramientas.
              </p>
            </div>

            <aside className="glass-panel mt-12 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-yc-magenta font-display text-3xl text-white">
                  YC
                </div>
                <div>
                  <p className="text-[10px] font-extrabold tracking-[0.16em] text-yc-magenta">AUTORA</p>
                  <h2 className="mt-1 font-display text-3xl tracking-wide text-white">Yury Chacón</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Licenciada en Comunicación Social · Estratega de Marketing · Periodista Independiente
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </article>

      <section className="border-t border-white/10 bg-[#070707] py-16 sm:py-20">
        <Container>
          <p className="text-[10px] font-extrabold tracking-[0.18em] text-yc-magenta">
            TAMBIÉN TE PUEDE INTERESAR
          </p>
          <Link href={`/noticias/${related.slug}`} className="group mt-5 block max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/35">{related.category}</span>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-wide text-white transition-colors group-hover:text-yc-blue sm:text-6xl">
              {related.title}
            </h2>
            <span className="mt-5 inline-flex text-xs font-extrabold tracking-[0.15em] text-yc-magenta">LEER →</span>
          </Link>
        </Container>
      </section>
    </SiteShell>
  );
}
