import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/site-data";
import Container from "./Container";

export default function FeaturedShopSection() {
  return (
    <section id="academia" className="relative overflow-hidden border-t border-white/10 bg-[#070707] py-16 sm:py-24">
      <div className="page-aurora absolute inset-0 opacity-35" aria-hidden="true" />
      <Container className="relative">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-yc-magenta">
            YC ACADEMIA
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white sm:text-6xl">
            Aprende. Aplica. Crece.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
            Cursos, recursos y asesorías creados para convertir ideas en una presencia digital con dirección.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <article key={product.id} className="glass-panel rounded-2xl p-6">
              <div className="mb-10 flex items-start justify-between gap-4">
                {product.cover ? (
                  <span className="relative block h-16 w-16 overflow-hidden rounded-xl border border-yc-magenta/35 bg-black">
                    <Image src={product.cover} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                ) : (
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl border text-sm font-extrabold"
                    style={{ color: product.accent, borderColor: `${product.accent}55`, background: `${product.accent}10` }}
                  >
                    {product.icon}
                  </span>
                )}
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                  {product.status}
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: product.accent }}>
                {product.category}
              </p>
              <h3 className="mt-2 font-display text-3xl leading-tight tracking-wide text-white">
                {product.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{product.description}</p>
              {product.href ? (
                <Link href={product.href} className="mt-5 inline-flex text-[10px] font-extrabold tracking-[0.14em] text-yc-magenta">
                  VER LOS 20 MÓDULOS →
                </Link>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/academia"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-yc-magenta px-7 text-xs font-extrabold tracking-[0.14em] text-white transition hover:bg-yc-magenta-dark"
          >
            EXPLORAR CURSOS Y RECURSOS →
          </Link>
        </div>
      </Container>
    </section>
  );
}
