"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product, ProductCategory } from "@/lib/site-data";

type Filter = "Todo" | ProductCategory;

export default function ShopCatalog({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("Todo");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const visibleProducts = useMemo(
    () => (filter === "Todo" ? products : products.filter((product) => product.category === filter)),
    [filter, products],
  );

  const selectedProducts = products.filter((product) => selectedIds.includes(product.id));

  function toggleProduct(id: string) {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
    setCopied(false);
  }

  async function copyRequest() {
    const message = [
      "Hola Yury, me interesa recibir información sobre:",
      ...selectedProducts.map((product) => `• ${product.title} (${product.category})`),
      "",
      "¿Podrías contarme disponibilidad y próximos pasos?",
    ].join("\n");

    await navigator.clipboard.writeText(message);
    setCopied(true);
  }

  const filters: Filter[] = ["Todo", "Cursos", "Recursos", "Servicios"];

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" aria-label="Filtrar catálogo">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full border px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] transition ${
                filter === item
                  ? "border-yc-magenta bg-yc-magenta text-white"
                  : "border-white/10 text-white/45 hover:border-white/30 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="flex min-h-11 items-center justify-center gap-3 rounded-full border border-yc-blue/40 bg-yc-blue/10 px-5 text-[10px] font-extrabold tracking-[0.14em] text-yc-blue transition hover:bg-yc-blue hover:text-black"
        >
          MI SELECCIÓN
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-black/30 px-1.5 text-white">
            {selectedIds.length}
          </span>
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => {
          const selected = selectedIds.includes(product.id);
          return (
            <article key={product.id} className="glass-panel flex min-h-[410px] flex-col rounded-2xl p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                {product.cover ? (
                  <span className="relative block h-20 w-20 overflow-hidden rounded-2xl border border-yc-magenta/35 bg-black">
                    <Image src={product.cover} alt="" fill sizes="80px" className="object-cover" />
                  </span>
                ) : (
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border text-sm font-black"
                    style={{
                      color: product.accent,
                      borderColor: `${product.accent}55`,
                      background: `${product.accent}12`,
                    }}
                  >
                    {product.icon}
                  </span>
                )}
                <span
                  className={`rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.13em] ${
                    product.status === "Disponible"
                      ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                      : "border-white/10 bg-white/[0.03] text-white/35"
                  }`}
                >
                  {product.status}
                </span>
              </div>

              <div className="mt-auto pt-12">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em]" style={{ color: product.accent }}>
                  {product.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-4xl leading-[1.03] tracking-wide text-white">
                  {product.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{product.description}</p>
                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">
                  {product.format}
                </p>
                <div className="mt-6 grid gap-2">
                  {product.href ? (
                    <Link
                      href={product.href}
                      className="flex w-full items-center justify-center rounded-full bg-yc-magenta px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-yc-magenta-dark"
                    >
                      VER LOS 20 MÓDULOS →
                    </Link>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => toggleProduct(product.id)}
                    className={`w-full rounded-full border px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] transition ${
                      selected
                        ? "border-yc-blue bg-yc-blue text-black"
                        : "border-white/15 text-white hover:border-yc-magenta hover:text-yc-magenta"
                    }`}
                  >
                    {selected ? "AGREGADO ✓" : product.status === "Disponible" ? "ME INTERESA" : "QUIERO QUE ME AVISEN"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {panelOpen ? (
        <div className="fixed inset-0 z-[80] flex justify-end bg-black/75 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Mi selección">
          <button
            type="button"
            aria-label="Cerrar selección"
            className="absolute inset-0 cursor-default"
            onClick={() => setPanelOpen(false)}
          />
          <aside className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#090909] p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-extrabold tracking-[0.16em] text-yc-magenta">YC ACADEMIA</p>
                <h2 className="mt-2 font-display text-4xl tracking-wide text-white">Mi selección</h2>
              </div>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-white/60 hover:text-white"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="mt-8 flex-1 overflow-y-auto">
              {selectedProducts.length ? (
                <ul className="space-y-3">
                  {selectedProducts.map((product) => (
                    <li key={product.id} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: product.accent }}>{product.category}</p>
                          <h3 className="mt-1 text-sm font-bold text-white">{product.title}</h3>
                          <p className="mt-1 text-[10px] text-white/35">{product.status}</p>
                        </div>
                        <button type="button" onClick={() => toggleProduct(product.id)} className="text-lg text-white/30 hover:text-yc-magenta" aria-label={`Quitar ${product.title}`}>×</button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center">
                  <p className="font-display text-3xl tracking-wide text-white/30">Aún no has elegido nada</p>
                  <p className="mt-2 text-sm text-white/35">Cierra este panel y agrega los cursos, recursos o servicios que te interesan.</p>
                </div>
              )}
            </div>

            {selectedProducts.length ? (
              <div className="border-t border-white/10 pt-6">
                <p className="mb-4 text-xs leading-relaxed text-white/40">
                  Copiaremos una solicitud lista para pegar en el chat de Instagram. No se procesa ningún pago en esta página.
                </p>
                <button type="button" onClick={copyRequest} className="w-full rounded-full bg-yc-magenta px-5 py-3.5 text-[10px] font-extrabold tracking-[0.14em] text-white">
                  {copied ? "SOLICITUD COPIADA ✓" : "COPIAR SOLICITUD"}
                </button>
                <a href="https://instagram.com/ycnoticias" target="_blank" rel="noreferrer" className="mt-3 flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3.5 text-[10px] font-extrabold tracking-[0.14em] text-white">
                  CONTINUAR EN INSTAGRAM →
                </a>
              </div>
            ) : null}
          </aside>
        </div>
      ) : null}
    </>
  );
}
