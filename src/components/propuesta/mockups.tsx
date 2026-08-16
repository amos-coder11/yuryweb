import Image from "next/image";
import { PRODUCTOS } from "@/lib/propuesta-data";

/* ── marcas ─────────────────────────────────────────────────────── */

export function TikTokIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v10.01c0 4.42-3.58 8.01-8 8.01-1.98 0-3.86-.72-5.29-2.03-1.43-1.31-2.24-3.11-2.24-5.01 0-3.87 3.13-7 7-7 .75 0 1.47.12 2.14.34v4.15a3.99 3.99 0 00-2.14-.62c-2.21 0-4 1.79-4 4 0 1.1.45 2.1 1.17 2.83.72.72 1.7 1.12 2.72 1.11 1.55-.01 2.98-.89 3.68-2.24.17-.34.27-.72.3-1.11V.02h-.01z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.6" cy="6.4" r="1.3" fill={color} stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export function XIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M18.9 5.6a5.6 5.6 0 0 1-3.4-1.2A5.7 5.7 0 0 1 13.4 0H9.6v14.3a3.1 3.1 0 1 1-2.2-3v-3.9a7 7 0 1 0 6 6.9V8.1a9.4 9.4 0 0 0 5.5 1.8V5.6z" />
    </svg>
  );
}

const AlfaMark = ({ size = 30 }: { size?: number }) => (
  <Image src="/alfa/logo.png" alt="ALFA VITAMINS" width={size} height={size} unoptimized className="h-auto w-full object-contain" />
);

/* ── TikTok ─────────────────────────────────────────────────────── */

export function TikTokPhone() {
  return (
    <div className="alfa-phone alfa-tilt-r h-[520px] w-[252px]">
      <div className="absolute left-1/2 top-3.5 z-10 h-[19px] w-[74px] -translate-x-1/2 rounded-xl bg-black" />
      <div className="alfa-phone-screen">
        <Image
          src="/alfa/vitchand.jpg"
          alt="Vitamin C Immunity Shot en cámara"
          fill
          unoptimized
          sizes="252px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80" />

        <div className="absolute inset-x-0 top-11 flex justify-center gap-5 text-[11px] font-semibold text-white/60">
          <span>Siguiendo</span>
          <span className="relative font-bold text-white">
            Para ti
            <span className="absolute -bottom-[7px] left-1/2 h-0.5 w-5 -translate-x-1/2 bg-white" />
          </span>
        </div>

        <div className="absolute bottom-[104px] right-3 flex flex-col items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-0.5">
            <AlfaMark />
          </div>
          {[
            { d: "M12 21s-7.5-4.6-9.6-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.6 12c-2.1 4.4-9.6 9-9.6 9z", l: "Me gusta" },
            { d: "M21 11.5a8.4 8.4 0 0 1-9 8.3 9 9 0 0 1-3.7-.8L3 21l1.9-4.9A8.1 8.1 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3.2a8.4 8.4 0 0 1 9 8.3z", l: "Comentar" },
            { d: "M3 20V4l18 8-18 8z", l: "Compartir" },
          ].map((i) => (
            <div key={i.l} className="flex flex-col items-center gap-1">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                <path d={i.d} />
              </svg>
              <span className="text-[8.5px] font-semibold text-white">{i.l}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-3 right-16">
          <div className="mb-1.5 text-[12px] font-bold text-white">@alfa_vitamins</div>
          <div className="text-[10.5px] leading-snug text-white/95">
            Vitamin C 1000 mg Shot · Immune Booster
          </div>
          <div className="mt-1 text-[10px] leading-snug text-white/60">
            Zinc · Turmeric · Ginger · Echinacea · Sugar Free
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Instagram ──────────────────────────────────────────────────── */

const GRID = [
  { src: "/alfa/vitcbox.png", fit: false },
  { src: "/alfa/collagen.png", fit: false },
  { src: "/alfa/women.png", fit: false },
  { src: "/alfa/vitchand.jpg", fit: true },
  { src: "/alfa/nad.png", fit: false },
  { src: "/alfa/prenatal.png", fit: false },
  { src: "/alfa/creatine.png", fit: false },
  { src: "/alfa/vitcart.jpg", fit: true },
  { src: "/alfa/vitcbox.png", fit: false },
];

export function InstagramPhone() {
  return (
    <div className="alfa-phone alfa-tilt-l h-[520px] w-[252px]">
      <div className="absolute left-1/2 top-3.5 z-10 h-[19px] w-[74px] -translate-x-1/2 rounded-xl bg-black" />
      <div className="alfa-phone-screen bg-white">
        <div className="absolute inset-x-0 top-0 h-11 bg-white" />

        <div className="absolute inset-x-3.5 top-[52px]">
          <div className="flex items-center gap-3.5">
            <div className="h-[62px] w-[62px] rounded-full bg-gradient-to-tr from-[#F5A93B] via-[#E1306C] to-[#833AB4] p-[2.5px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-1.5">
                <AlfaMark size={46} />
              </div>
            </div>
            <div className="flex min-w-0 flex-1 justify-between gap-1 text-center">
              {["Publicaciones", "Seguidores", "Siguiendo"].map((l) => (
                <div key={l}>
                  <div className="text-[13px] font-bold text-[#111]">—</div>
                  <div className="mt-1 whitespace-nowrap text-[7.5px] text-[#666]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2.5">
            <div className="text-[11px] font-bold text-[#111]">Alfa Vitamins Store</div>
            <div className="mt-1 text-[10px] leading-snug text-[#444]">
              Vitaminas y suplementos · Hecho en USA
              <br />
              alfavitamins.com
            </div>
          </div>

          <div className="mt-2.5 flex gap-1.5">
            <div className="flex h-[26px] flex-1 items-center justify-center rounded-md bg-[#0095F6] text-[10px] font-bold text-white">
              Seguir
            </div>
            <div className="flex h-[26px] flex-1 items-center justify-center rounded-md bg-[#EFEFEF] text-[10px] font-bold text-[#111]">
              Mensaje
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[214px] grid grid-cols-3 gap-0.5">
          {GRID.map((g, i) => (
            <div
              key={`${g.src}-${i}`}
              className="relative flex h-[76px] items-center justify-center overflow-hidden bg-[#F6F8F5]"
            >
              {g.fit ? (
                <Image src={g.src} alt="" fill unoptimized sizes="80px" className="object-cover" />
              ) : (
                <Image
                  src={g.src}
                  alt=""
                  width={120}
                  height={120}
                  unoptimized
                  className="max-h-[86%] w-auto max-w-[86%] object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Facebook ───────────────────────────────────────────────────── */

export function FacebookCard() {
  return (
    <div
      className="w-full max-w-[452px] overflow-hidden rounded-2xl bg-white"
      style={{
        transform: "perspective(1500px) rotateY(-13deg) rotateX(3deg)",
        boxShadow: "0 60px 90px -40px rgba(0,0,0,.95), 0 0 0 1px rgba(255,255,255,.08)",
      }}
    >
      <div className="flex h-[38px] items-center gap-2.5 bg-[#1877F2] px-3.5">
        <FacebookIcon size={17} color="#fff" />
        <span className="text-[11px] font-bold text-white">Facebook</span>
      </div>

      <div className="flex items-center gap-2.5 px-4 pt-3.5">
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#E4E6EB] bg-[#F0F2F5] p-1">
          <AlfaMark size={29} />
        </div>
        <div>
          <div className="text-[11.5px] font-bold text-[#050505]">Alfa Vitamins</div>
          <div className="mt-0.5 text-[9px] text-[#65676B]">Publicación de página</div>
        </div>
      </div>

      <div className="px-4 pb-3 pt-2.5 text-[11px] leading-relaxed text-[#050505]">
        CollagenC Hydrolysate con Biotina — fórmula para cabello, piel, uñas y articulaciones.
      </div>

      <div className="relative flex h-[216px] items-center justify-center bg-[#F0F2F5]">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_42%,#fff,transparent_72%)]" />
        <Image
          src="/alfa/collagen.png"
          alt="CollagenC Hydrolysate"
          width={200}
          height={320}
          unoptimized
          className="relative h-[88%] w-auto object-contain"
        />
      </div>

      <div className="flex border-t border-[#E4E6EB]">
        {[
          { d: "M7 22V10l5-8a2.6 2.6 0 0 1 2.6 3.2L13.8 9H20a2 2 0 0 1 2 2.4l-1.6 8A2.6 2.6 0 0 1 18 22H7z", l: "Me gusta" },
          { d: "M21 11.5a8.4 8.4 0 0 1-9 8.3 9 9 0 0 1-3.7-.8L3 21l1.9-4.9A8.1 8.1 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3.2a8.4 8.4 0 0 1 9 8.3z", l: "Comentar" },
          { d: "M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M12 15V3M8 7l4-4 4 4", l: "Compartir" },
        ].map((i) => (
          <div key={i.l} className="flex flex-1 items-center justify-center gap-1.5 py-2.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#65676B" strokeWidth={2} aria-hidden>
              <path d={i.d} />
            </svg>
            <span className="text-[10px] font-semibold text-[#65676B]">{i.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── set de producción ──────────────────────────────────────────── */

export function SetScene() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[620px] sm:h-[480px]">
      <div className="absolute inset-x-[-60px] top-0 h-[86%] bg-[radial-gradient(46%_52%_at_50%_30%,rgba(143,224,74,.20),transparent_74%)]" />

      {/* ciclorama con el logo en escena */}
      <div
        className="absolute inset-x-0 top-6 h-[62%] rounded-xl border"
        style={{
          borderColor: "rgba(242,246,240,.10)",
          background: "linear-gradient(180deg,#1C2A21 0%,#121D16 52%,#0B120E 100%)",
          boxShadow: "inset 0 0 120px rgba(0,0,0,.80), 0 40px 90px -40px rgba(0,0,0,.95)",
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-[radial-gradient(54%_58%_at_50%_30%,rgba(255,255,255,.13),transparent_72%)]" />
        <Image
          src="/alfa/logo.png"
          alt="ALFA VITAMINS"
          width={220}
          height={143}
          unoptimized
          className="absolute left-1/2 top-[14%] h-auto w-[38%] max-w-[220px] -translate-x-1/2 object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,.85)]"
        />
        <div className="absolute bottom-3.5 left-4 whitespace-nowrap text-[8.5px] font-bold uppercase tracking-[0.36em] text-white/35">
          Set de producción
        </div>
      </div>

      {/* mesa en perspectiva */}
      <div
        className="absolute inset-x-[-9%] top-[58%] h-[42%]"
        style={{
          transform: "perspective(620px) rotateX(64deg)",
          transformOrigin: "50% 0",
          background: "linear-gradient(180deg,#1D2B23 0%,#0D1511 72%,#080D0A 100%)",
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 18%,#000 82%,transparent)",
          maskImage: "linear-gradient(90deg,transparent,#000 18%,#000 82%,transparent)",
        }}
      />
      <div className="absolute inset-x-[-11%] top-[64%] h-[36%] bg-gradient-to-b from-transparent to-[var(--alfa-deep)]" />

      {/* producto sobre pedestal */}
      <div className="alfa-podium absolute left-1/2 top-[42%] aspect-square w-[32%] max-w-[190px] -translate-x-1/2">
        <Image
          src="/alfa/vitcbox.png"
          alt="Vitamin C Immunity Shot"
          width={260}
          height={268}
          unoptimized
          className="absolute bottom-[16%] left-1/2 w-[98%] -translate-x-1/2 object-contain"
        />
      </div>

      {/* softbox principal */}
      <div
        className="absolute left-0 top-[11%] h-[27%] w-[14%] rounded-md"
        style={{
          background: "linear-gradient(150deg,rgba(255,255,255,.94),rgba(255,255,255,.34))",
          boxShadow: "0 0 70px rgba(255,255,255,.26)",
          transform: "perspective(800px) rotateY(36deg)",
        }}
      />
      <div className="absolute left-[5.5%] top-[38%] h-[38%] w-1.5 bg-gradient-to-b from-[#2B342D] to-[#111814]" />

      {/* softbox de relleno */}
      <div
        className="absolute right-0 top-[15%] h-[24%] w-[12%] rounded-md"
        style={{
          background: "linear-gradient(210deg,rgba(143,224,74,.72),rgba(143,224,74,.18))",
          boxShadow: "0 0 70px rgba(143,224,74,.34)",
          transform: "perspective(800px) rotateY(-36deg)",
        }}
      />
      <div className="absolute right-[5%] top-[39%] h-[37%] w-1.5 bg-gradient-to-b from-[#2B342D] to-[#111814]" />

      {/* cámara */}
      <div className="absolute left-[6%] top-[74%]">
        <div
          className="relative h-[52px] w-[92px] rounded-lg border"
          style={{
            borderColor: "rgba(242,246,240,.16)",
            background: "linear-gradient(160deg,#2A332C,#0D1411)",
            boxShadow: "0 26px 46px -16px rgba(0,0,0,.95)",
          }}
        >
          <div
            className="absolute -right-5 top-2.5 h-8 w-8 rounded-full border"
            style={{
              borderColor: "rgba(242,246,240,.20)",
              background: "radial-gradient(circle at 38% 32%,#46534A,#080D0A)",
            }}
          />
          <div className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#FE2C55]" />
          <div className="absolute left-6 top-3 h-1 w-6 rounded-sm bg-white/15" />
        </div>
        <div className="mx-auto h-14 w-1.5 bg-gradient-to-b from-[#2B342D] via-[#111814] to-transparent" />
      </div>
    </div>
  );
}

/* ── marquesina de catálogo ─────────────────────────────────────── */

export function ProductMarquee() {
  const loop = [...PRODUCTOS, ...PRODUCTOS];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="alfa-marquee gap-4">
        {loop.map((p, i) => (
          <a
            key={`${p.id}-${i}`}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="alfa-glass alfa-glass-hover flex w-[228px] shrink-0 flex-col items-center gap-3 p-4 text-center"
          >
            <div className="alfa-podium relative h-[108px] w-[108px]">
              <Image
                src={p.img}
                alt={p.nombre}
                width={150}
                height={150}
                unoptimized
                className="absolute bottom-[12%] left-1/2 max-h-[102%] w-auto -translate-x-1/2 object-contain"
              />
            </div>
            <div className="text-[12px] font-bold leading-tight text-white">{p.nombre}</div>
            <div className="text-[10px] text-white/40">{p.precio || "Alfa Sports"}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
