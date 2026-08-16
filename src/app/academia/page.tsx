import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ShopCatalog from "@/components/ShopCatalog";
import SiteShell from "@/components/SiteShell";
import { products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Academia Virtual — Yury Chacón",
  description:
    "Cursos, recursos digitales y servicios para impulsar tu marca, tu comunicación y tu negocio.",
};

export default function AcademiaPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="YC ACADEMIA"
        title={<>ACADEMIA<span className="text-yc-blue">.</span></>}
        description="Cursos, recursos y servicios diseñados para impulsar tu marca y convertir tus ideas en acción."
      >
        <div className="flex flex-wrap gap-2">
          {["Cursos prácticos", "Recursos editables", "Servicios 1:1"].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white/50">
              {item}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-black py-14 sm:py-20">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">CATÁLOGO</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">Elige tu próximo paso</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Explora el catálogo, guarda lo que te interesa y genera una solicitud para conversar directamente con Yury.
            </p>
          </div>
          <ShopCatalog products={products} />
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#070707] py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">SERVICIOS PERSONALIZADOS</p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">¿Buscas algo específico?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                Si no encuentras lo que necesitas, conversemos. Cada marca tiene un punto de partida distinto y el acompañamiento puede adaptarse.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/marketing-digital" className="rounded-full bg-yc-magenta px-7 py-3.5 text-center text-xs font-extrabold tracking-[0.14em] text-white">VER SERVICIOS</Link>
              <Link href="/sobre-yuri" className="rounded-full border border-white/15 px-7 py-3.5 text-center text-xs font-extrabold tracking-[0.14em] text-white">CONOCER A YURY</Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
