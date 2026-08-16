import Image from "next/image";
import {
  BRAND,
  CONDICIONES,
  CREATOR,
  FASES,
  INDICADORES,
  INVERSION,
  MESES,
  PRODUCTOS,
  REDES,
} from "@/lib/propuesta-data";
import { Body, Chip, Eyebrow, Glass, KeyValue, Lead, Micro, Podium, Rule, Sec, Slot, Title } from "./ui";
import {
  FacebookCard,
  FacebookIcon,
  InstagramIcon,
  InstagramPhone,
  ProductMarquee,
  SetScene,
  TikTokIcon,
  TikTokPhone,
  XIcon,
} from "./mockups";
import { CountUp } from "./client";

const ICONO = {
  instagram: <InstagramIcon size={19} color="#fff" />,
  facebook: <FacebookIcon size={19} color="#fff" />,
  x: <XIcon size={17} color="#fff" />,
  tiktok: <TikTokIcon size={18} color="#F5E04B" />,
} as const;

const FONDO_RED = {
  instagram: "linear-gradient(135deg,#833AB4,#E1306C 55%,#F5A93B)",
  facebook: "#1877F2",
  x: "#111",
  tiktok: "#111",
} as const;

/* ══════════════ 01 · PORTADA ══════════════ */

export function S01() {
  return (
    <Sec id="partnership" n="01" kicker="Portada" floor className="justify-end lg:justify-center">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="alfa-reveal">
          <Image
            src="/alfa/logo.png"
            alt="ALFA VITAMINS"
            width={190}
            height={124}
            unoptimized
            priority
            className="mb-8 h-auto w-[132px] object-contain sm:w-[168px]"
          />

          <Eyebrow className="mb-5">Propuesta de partnership estratégico · 2026</Eyebrow>

          <h1 className="font-display text-[clamp(3.4rem,10vw,8rem)] leading-[0.88] tracking-wide text-white">
            ALFA
            <span className="block" style={{ color: "var(--alfa-lime)" }}>
              VITAMINS
            </span>
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <span className="h-px w-12" style={{ background: "var(--alfa-yellow)" }} />
            <span className="text-[15px] font-extrabold uppercase tracking-[0.3em] text-white">
              {CREATOR.nombre}
            </span>
          </div>

          <Lead className="mt-6 max-w-[44ch]">
            Dirección creativa, producción de contenido y crecimiento estructurado en TikTok,
            Instagram y Facebook.
          </Lead>

          <div className="mt-9 flex flex-wrap gap-2.5">
            <Chip tone="yellow">{INVERSION.mensual}</Chip>
            <Chip>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--alfa-lime)" }} />
              {INVERSION.compromiso}
            </Chip>
            <Chip>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--alfa-lime)" }} />
              {INVERSION.inicial}
            </Chip>
          </div>
        </div>

        {/* escena: retrato + producto sobre luz */}
        <div className="alfa-reveal relative mx-auto h-[420px] w-full max-w-[440px] sm:h-[520px]">
          <div className="absolute right-[6%] top-0 h-full w-[74%] overflow-hidden rounded-t-full rounded-b-2xl ring-1 ring-white/15 shadow-[0_60px_110px_-40px_rgba(0,0,0,.95)]">
            <Image
              src="/alfa/yury.jpg"
              alt={`${CREATOR.nombre} — dirección creativa`}
              fill
              priority
              unoptimized
              sizes="(max-width:1024px) 60vw, 340px"
              className="scale-[1.24] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--alfa-deep)] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--alfa-deep)]/60" />
          </div>

          <div
            className="absolute right-[2%] top-[-4%] aspect-square w-[86%] rounded-full border"
            style={{ borderColor: "rgba(143,224,74,.26)" }}
          />

          <Podium
            src="/alfa/prenatal.png"
            alt="Alfa Prenatal"
            size={148}
            scale={1.04}
            className="absolute bottom-[16%] left-0"
          />
          <Podium
            src="/alfa/collagen.png"
            alt="CollagenC Hydrolysate"
            size={110}
            scale={1.02}
            className="absolute bottom-0 left-[28%]"
          />
        </div>
      </div>

      <div className="alfa-scroll-hint mt-14 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.26em] text-white/30">
        <span className="relative flex h-1.5 w-1.5">
          <span
            className="alfa-pulse absolute inset-0 rounded-full"
            style={{ background: "var(--alfa-lime)", color: "var(--alfa-lime)" }}
          />
        </span>
        Desliza para recorrer los 13 puntos
      </div>
    </Sec>
  );
}

/* ══════════════ 02 · DIAGNÓSTICO ══════════════ */

export function S02() {
  return (
    <Sec id="diagnostico" n="02" kicker="Punto de partida">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="alfa-reveal">
          <Eyebrow className="mb-5">Diagnóstico</Eyebrow>
          <Title accent="hoy">
            Dónde
            <br />
            estamos
          </Title>
          <Lead className="mt-6 max-w-[38ch]">
            Lectura del ecosistema digital actual de la marca, verificada directamente sobre sus
            canales públicos.
          </Lead>
          <Rule className="my-8" />
          <KeyValue k="Catálogo" v={BRAND.catalogo} />
          <KeyValue
            k="Sitio"
            v={
              <a
                href={BRAND.sitioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-[var(--alfa-lime)]"
              >
                {BRAND.sitio}
              </a>
            }
          />
          <KeyValue k="Contacto" v={`${BRAND.telefono} · ${BRAND.email}`} />
        </div>

        <div className="alfa-reveal">
          <Micro className="mb-4">Canales enlazados desde {BRAND.sitio}</Micro>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {REDES.map((r) => {
              const pendiente = r.estado === "no-enlazado";
              return (
                <a
                  key={r.id}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alfa-glass alfa-glass-hover block p-5"
                  style={
                    pendiente
                      ? {
                          borderColor: "rgba(245,224,75,.34)",
                          background:
                            "linear-gradient(158deg,rgba(245,224,75,.10),rgba(245,224,75,.02))",
                        }
                      : undefined
                  }
                >
                  <div className="mb-3.5 flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-[10px]"
                      style={{
                        background: FONDO_RED[r.id],
                        border: r.id === "x" || r.id === "tiktok" ? "1px solid rgba(255,255,255,.2)" : undefined,
                      }}
                    >
                      {ICONO[r.id]}
                    </span>
                    <div>
                      <h3
                        className="text-[15px] font-extrabold leading-tight"
                        style={{ color: pendiente ? "var(--alfa-yellow)" : "#fff" }}
                      >
                        {r.nombre}
                      </h3>
                      <Micro
                        className="mt-1"
                        style={{ color: pendiente ? "var(--alfa-yellow)" : "var(--alfa-lime)" }}
                      >
                        {pendiente ? "No enlazado" : "Activo"}
                      </Micro>
                    </div>
                  </div>
                  {pendiente ? (
                    <Body>
                      No figura entre los canales enlazados desde el sitio oficial. Es territorio por
                      construir, no por mantener.
                    </Body>
                  ) : (
                    <div className="text-[13px] text-white">{r.handle}</div>
                  )}
                </a>
              );
            })}
          </div>

          <Slot className="mt-4">
            Espacio reservado para el diagnóstico específico de la propuesta original: situación de
            partida, antecedentes de la cuenta y observaciones acordadas con la marca.
          </Slot>
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 03 · LA CREATOR ══════════════ */

const ROLES = [
  { n: "Rol 01", t: "Rostro de marca", d: "Continuidad de identidad visual en todas las escenas." },
  { n: "Rol 02", t: "Dirección de contenido", d: "Criterio editorial, guion y tono para cada pieza." },
  { n: "Rol 03", t: "Ejecución en cámara", d: "Presencia y desempeño frente al lente en cada rodaje." },
];

export function S03() {
  return (
    <Sec id="creator" n="03" kicker="La creator">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="alfa-reveal relative mx-auto h-[380px] w-full max-w-[360px] overflow-hidden rounded-3xl ring-1 ring-white/10 sm:h-[500px]">
          <Image
            src="/alfa/yury.jpg"
            alt={CREATOR.nombre}
            fill
            unoptimized
            sizes="(max-width:1024px) 80vw, 360px"
            className="scale-[1.16] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--alfa-deep)] via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
              {CREATOR.descriptor}
            </div>
          </div>
        </div>

        <div className="alfa-reveal">
          <Eyebrow className="mb-5">Quién ejecuta</Eyebrow>
          <Title accent="Chacón">Yury</Title>
          <Lead className="mt-6 max-w-[46ch]">
            La marca no contrata publicaciones: incorpora un rostro, una voz y un criterio editorial
            que sostienen la narrativa en los tres canales.
          </Lead>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
            {ROLES.map((r) => (
              <Glass key={r.n}>
                <Micro style={{ color: "var(--alfa-lime)" }}>{r.n}</Micro>
                <h3 className="mt-3 text-[15px] font-extrabold leading-tight text-white">{r.t}</h3>
                <Body className="mt-2">{r.d}</Body>
              </Glass>
            ))}
          </div>

          <Slot className="mt-5" label="Editable · perfil de la creator">
            Trayectoria, credenciales, sectores trabajados y comunidad — según el texto original de
            la propuesta. Este documento no declara cifras de audiencia ni resultados: se completan
            únicamente con datos verificables aportados por la creator.
          </Slot>
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 04 · EL SISTEMA ══════════════ */

export function S04() {
  return (
    <Sec id="sistema" n="04" kicker="Método de trabajo" floor>
      <div className="alfa-reveal">
        <Eyebrow className="mb-5">Método de trabajo</Eyebrow>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-14">
          <Title accent="publicaciones" className="shrink-0">
            Un sistema,
            <br />
            no una serie de
          </Title>
          <Lead className="max-w-[44ch] lg:pb-3">
            Cada mes opera como un ciclo cerrado. Lo que se produce se distribuye, lo que se
            distribuye se mide, y lo que se mide define el ciclo siguiente.
          </Lead>
        </div>
      </div>

      <div className="alfa-reveal mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {FASES.map((f, i) => (
          <Glass
            key={f.n}
            className="min-h-[210px]"
            style={i === 3 ? { borderColor: "rgba(245,224,75,.30)" } : undefined}
          >
            <span
              className="mb-5 flex h-8 w-8 items-center justify-center rounded-full border font-display text-sm"
              style={{
                borderColor: i === 3 ? "rgba(245,224,75,.5)" : "rgba(143,224,74,.45)",
                color: i === 3 ? "var(--alfa-yellow)" : "var(--alfa-lime)",
                background: "radial-gradient(circle at 50% 30%,rgba(143,224,74,.2),transparent 70%)",
              }}
            >
              {f.n}
            </span>
            <h3 className="text-[19px] font-extrabold leading-tight text-white">{f.titulo}</h3>
            <Body className="mt-3">{f.texto}</Body>
          </Glass>
        ))}
      </div>

      <Slot className="alfa-reveal mt-6" label="Editable · alcance contractual">
        Detalle exacto de entregables, volumen, formatos y responsabilidades por fase — según el
        texto original de la propuesta comercial. No se incorpora aquí ningún servicio no
        contemplado.
      </Slot>
    </Sec>
  );
}

/* ══════════════ 05 · TIKTOK ══════════════ */

const TIKTOK_PUNTOS = [
  { t: "Formato vertical nativo", d: "Pieza pensada para el feed de TikTok, no adaptada desde otro canal." },
  { t: "Ritmo y retención", d: "Estructura de apertura, desarrollo y cierre orientada a permanencia." },
  { t: "Producto en uso", d: "Demostración real del catálogo ALFA VITAMINS en manos de la creator." },
  { t: "Voz de la creator", d: "Narrativa en primera persona, coherente con la identidad de marca." },
];

export function S05() {
  return (
    <Sec
      id="tiktok"
      n="05"
      kicker="Canal · TikTok"
      tint="radial-gradient(110% 80% at 74% 12%, rgba(37,244,238,.14) 0%, transparent 55%), radial-gradient(90% 70% at 16% 92%, rgba(254,44,85,.16) 0%, transparent 58%)"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="alfa-reveal">
          <div className="mb-6 flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black">
              <TikTokIcon size={22} color="#fff" />
            </span>
            <Eyebrow>Canal 01</Eyebrow>
          </div>
          <Title>TikTok</Title>
          <Lead className="mt-5 max-w-[42ch]">
            El canal donde la marca todavía no está enlazada. Se construye desde cero, con formato
            nativo, ritmo propio y producto real en cámara.
          </Lead>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {TIKTOK_PUNTOS.map((p) => (
              <Glass key={p.t}>
                <h3 className="text-[15px] font-extrabold leading-tight text-white">{p.t}</h3>
                <Body className="mt-2">{p.d}</Body>
              </Glass>
            ))}
          </div>

          <Slot className="mt-5" label="Editable · TikTok">
            Cantidad de piezas, frecuencia, duración y condiciones de publicación en TikTok — según
            el texto original.
          </Slot>
        </div>

        <div className="alfa-reveal flex justify-center">
          <TikTokPhone />
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 06 · INSTAGRAM ══════════════ */

const IG_PUNTOS = [
  { t: "Cuadrícula con criterio", d: "Cada pieza construye una imagen de conjunto, no un post aislado." },
  { t: "Reels y estáticos", d: "Movimiento para alcance, imagen fija para catálogo y detalle." },
  { t: "Producto como héroe", d: "Envase real, etiqueta legible, fidelidad total de marca." },
  { t: "Historias", d: "Capa diaria que sostiene la conversación entre publicaciones." },
];

export function S06() {
  return (
    <Sec
      id="instagram"
      n="06"
      kicker="Canal · Instagram"
      tint="radial-gradient(110% 80% at 24% 14%, rgba(225,48,108,.18) 0%, transparent 55%), radial-gradient(90% 70% at 86% 92%, rgba(131,58,180,.18) 0%, transparent 58%)"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="alfa-reveal order-2 flex justify-center lg:order-1">
          <InstagramPhone />
        </div>

        <div className="alfa-reveal order-1 lg:order-2">
          <div className="mb-6 flex items-center gap-4">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: FONDO_RED.instagram }}
            >
              <InstagramIcon size={21} color="#fff" />
            </span>
            <Eyebrow tone="magenta">Canal 02</Eyebrow>
          </div>
          <Title>Instagram</Title>
          <Lead className="mt-5 max-w-[42ch]">
            El canal donde la marca se ve completa: catálogo, rostro y estética conviviendo en una
            sola cuadrícula coherente.
          </Lead>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {IG_PUNTOS.map((p) => (
              <Glass key={p.t}>
                <h3 className="text-[15px] font-extrabold leading-tight text-white">{p.t}</h3>
                <Body className="mt-2">{p.d}</Body>
              </Glass>
            ))}
          </div>

          <Slot className="mt-5" label="Editable · Instagram">
            Cantidad de piezas, formatos, frecuencia y condiciones de publicación en Instagram —
            según el texto original.
          </Slot>
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 07 · FACEBOOK ══════════════ */

const FB_PUNTOS = [
  { t: "Contenido explicativo", d: "Espacio para desarrollar beneficio, uso y composición del producto." },
  { t: "Comunidad", d: "Conversación sostenida en comentarios y mensajes de página." },
  { t: "Reutilización inteligente", d: "El material del set se adapta al lenguaje del canal, no se copia." },
  { t: "Puente al e-commerce", d: `Ruta clara desde la publicación hacia ${BRAND.sitio}.` },
];

export function S07() {
  return (
    <Sec
      id="facebook"
      n="07"
      kicker="Canal · Facebook"
      tint="radial-gradient(110% 80% at 74% 12%, rgba(24,119,242,.22) 0%, transparent 55%), radial-gradient(90% 70% at 16% 92%, rgba(59,169,62,.12) 0%, transparent 58%)"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="alfa-reveal">
          <div className="mb-6 flex items-center gap-4">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: FONDO_RED.facebook }}
            >
              <FacebookIcon size={22} color="#fff" />
            </span>
            <Eyebrow>Canal 03</Eyebrow>
          </div>
          <Title>Facebook</Title>
          <Lead className="mt-5 max-w-[42ch]">
            El canal de confianza y permanencia. Formato más explicativo, público más maduro y mayor
            tolerancia al detalle del producto.
          </Lead>

          <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
            {FB_PUNTOS.map((p) => (
              <Glass key={p.t}>
                <h3 className="text-[15px] font-extrabold leading-tight text-white">{p.t}</h3>
                <Body className="mt-2">{p.d}</Body>
              </Glass>
            ))}
          </div>

          <Slot className="mt-5" label="Editable · Facebook">
            Cantidad de piezas, formatos, frecuencia y condiciones de publicación en Facebook —
            según el texto original.
          </Slot>
        </div>

        <div className="alfa-reveal flex justify-center">
          <FacebookCard />
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 08 · PRODUCCIÓN ══════════════ */

const SET_PUNTOS = [
  { t: "Dirección y cámara", d: "Puesta en escena, encuadre y dirección de la creator." },
  { t: "Luz y arte", d: "Esquema de iluminación y dirección de arte con paleta ALFA." },
  { t: "Post-producción", d: "Montaje, color y entrega en los formatos de cada canal." },
];

export function S08() {
  return (
    <Sec id="produccion" n="08" kicker="Producción">
      <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] xl:grid-cols-[0.6fr_1.4fr]">
        <div className="alfa-reveal">
          <Eyebrow className="mb-5">Producción</Eyebrow>
          <Title accent="VITAMINS">
            El set
            <br />
            ALFA
          </Title>
          <Body className="mt-5 text-[14px]">
            Cada rodaje ocurre en un set con identidad de marca: logo en escena, producto real y
            control total de luz, arte y encuadre.
          </Body>
          <Slot className="mt-6" label="Editable · producción">
            Días de rodaje, horarios, duración de jornada y condiciones logísticas — según el texto
            original.
          </Slot>
        </div>

        <div className="alfa-reveal">
          <SetScene />
          <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
            {SET_PUNTOS.map((p) => (
              <Glass key={p.t}>
                <h3 className="text-[15px] font-extrabold leading-tight text-white">{p.t}</h3>
                <Body className="mt-2">{p.d}</Body>
              </Glass>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 09 · LÍNEA CREATIVA ══════════════ */

const CREATIVA_PUNTOS = [
  { t: "Fidelidad de etiqueta", d: "Sin recortes ni alteraciones del envase original." },
  { t: "Paleta por producto", d: "Cada línea tiene su color; la marca conserva su código." },
  { t: "Uso demostrado", d: "El producto se muestra en uso, no solo en bodegón." },
];

export function S09() {
  return (
    <Sec id="creativa" n="09" kicker="Línea creativa">
      <div className="alfa-reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-14">
        <div className="shrink-0">
          <Eyebrow className="mb-5">Producto real</Eyebrow>
          <Title accent="narrativa">
            El catálogo
            <br />
            como
          </Title>
        </div>
        <Lead className="max-w-[46ch] lg:pb-3">
          El contenido se construye sobre los productos reales de ALFA VITAMINS. Cada envase entra
          en cámara con su etiqueta íntegra y su identidad intacta.
        </Lead>
      </div>

      <div className="alfa-reveal mt-10">
        <ProductMarquee />
      </div>

      <div className="alfa-reveal mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CREATIVA_PUNTOS.map((p) => (
          <Glass key={p.t}>
            <h3 className="text-[14px] font-extrabold leading-tight text-white">{p.t}</h3>
            <Body className="mt-2">{p.d}</Body>
          </Glass>
        ))}
        <Slot label="Editable · selección de productos">
          Productos priorizados y rotación por mes — según el texto original de la propuesta.
        </Slot>
      </div>

      <div className="alfa-reveal mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Micro>Fichas de producto</Micro>
        {PRODUCTOS.slice(0, 5).map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/45 underline decoration-white/15 underline-offset-4 transition-colors hover:text-[var(--alfa-lime)]"
          >
            {p.nombre}
          </a>
        ))}
      </div>
    </Sec>
  );
}

/* ══════════════ 10 · TECNOLOGÍA Y DATOS ══════════════ */

const DATOS_PUNTOS = [
  { t: "Métricas nativas", d: "TikTok, Instagram y Facebook como fuente única de verdad." },
  { t: "Reporte periódico", d: "Lectura de desempeño entregada a la marca." },
  { t: "Iteración", d: "El dato del ciclo anterior define el contenido del siguiente." },
];

export function S10() {
  return (
    <Sec id="datos" n="10" kicker="Tecnología y medición" floor>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="alfa-reveal">
          <Eyebrow className="mb-5">Medición</Eyebrow>
          <Title accent="datos">
            Decisiones
            <br />
            sobre
          </Title>
          <Lead className="mt-6 max-w-[38ch]">
            El marco de medición se define en el arranque y se alimenta exclusivamente de las
            métricas nativas de las cuentas de la marca.
          </Lead>
          <Slot className="mt-7" label="Editable · marco de medición">
            Indicadores acordados, periodicidad de reporte y herramientas — según el texto original.
          </Slot>
        </div>

        <div className="alfa-reveal">
          <Glass hover={false} className="p-6 sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <Micro>Marco de indicadores</Micro>
              <Chip className="px-3 py-1.5 text-[9px]">Se define en kickoff</Chip>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {INDICADORES.map((i) => (
                <div
                  key={i}
                  className="rounded-xl border p-4"
                  style={{ borderColor: "var(--alfa-line)", background: "rgba(242,246,240,.02)" }}
                >
                  <div className="font-display text-3xl leading-none text-white/20">—</div>
                  <Micro className="mt-3">{i}</Micro>
                </div>
              ))}
            </div>
            <div
              className="mt-5 border-t pt-4 text-[11.5px] font-light leading-relaxed"
              style={{ borderColor: "var(--alfa-line)", color: "var(--alfa-fog-2)" }}
            >
              Este documento no declara resultados, seguidores ni estadísticas previas. Los valores
              se completan con datos reales de las cuentas una vez iniciado el trabajo.
            </div>
          </Glass>

          <div className="mt-4 grid gap-3.5 sm:grid-cols-3">
            {DATOS_PUNTOS.map((p) => (
              <Glass key={p.t}>
                <h3 className="text-[14px] font-extrabold leading-tight text-white">{p.t}</h3>
                <Body className="mt-2">{p.d}</Body>
              </Glass>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 11 · CRONOGRAMA ══════════════ */

export function S11() {
  const acentos = ["var(--alfa-lime)", "var(--alfa-yellow)", "var(--alfa-green)"];
  return (
    <Sec id="cronograma" n="11" kicker="Cronograma">
      <div className="alfa-reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-14">
        <div className="shrink-0">
          <Eyebrow className="mb-5">Horizonte</Eyebrow>
          <Title accent="construcción">
            Tres meses
            <br />
            de
          </Title>
        </div>
        <Lead className="max-w-[44ch] lg:pb-3">
          El compromiso es de {INVERSION.compromiso}. Es el tiempo mínimo para que un sistema de
          contenido deje de ser una prueba y empiece a comportarse como un activo.
        </Lead>
        <div className="lg:ml-auto lg:pb-3">
          <Chip tone="yellow">Compromiso · {INVERSION.compromiso}</Chip>
        </div>
      </div>

      <div className="alfa-reveal relative mt-14">
        <div
          className="absolute inset-x-0 top-3.5 hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg,rgba(143,224,74,.7),rgba(245,224,75,.7),rgba(59,169,62,.25))",
          }}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {MESES.map((m, i) => (
            <div key={m.n}>
              <span
                className="relative z-[2] flex h-7 w-7 items-center justify-center rounded-full border font-display text-[13px]"
                style={{
                  background: "var(--alfa-deep)",
                  borderColor: acentos[i],
                  color: acentos[i],
                }}
              >
                {m.n}
              </span>
              <Glass className="mt-6">
                <Micro style={{ color: acentos[i] }}>{m.etiqueta}</Micro>
                <h3 className="mt-3 font-display text-2xl tracking-wide text-white">{m.titulo}</h3>
                <Body className="mt-3">{m.texto}</Body>
                <Slot className="mt-5">Hitos y entregables del mes {m.n} según el texto original.</Slot>
              </Glass>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 12 · INVERSIÓN ══════════════ */

export function S12() {
  return (
    <Sec
      id="inversion"
      n="12"
      kicker="Inversión"
      floor
      tint="radial-gradient(100% 80% at 66% 8%, rgba(245,224,75,.24) 0%, transparent 55%), radial-gradient(90% 80% at 20% 96%, rgba(59,169,62,.24) 0%, transparent 60%)"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="alfa-reveal">
          <Eyebrow className="mb-6">La inversión</Eyebrow>

          <div className="flex flex-wrap items-start gap-3">
            <CountUp
              value={INVERSION.mensualValor}
              className="font-display text-[clamp(4.5rem,13vw,9.5rem)] leading-[0.8] tracking-tight"
            />
            <div className="pt-3">
              <div className="text-[18px] font-extrabold tracking-[0.1em] text-white">
                {INVERSION.moneda}
              </div>
              <Micro className="mt-2">Por mes</Micro>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <span
              className="text-[16px] font-light line-through"
              style={{ color: "var(--alfa-fog-2)", textDecorationColor: "rgba(245,224,75,.7)" }}
            >
              {INVERSION.referencial}
            </span>
            <span className="h-4 w-px" style={{ background: "var(--alfa-line-2)" }} />
            <Micro style={{ color: "var(--alfa-yellow)" }}>Valor referencial</Micro>
          </div>

          <Rule className="my-8" />

          <KeyValue k="Inversión mensual" v={INVERSION.mensual} strong />
          <KeyValue k="Valor referencial" v={INVERSION.referencial} />
          <KeyValue k="Compromiso" v={INVERSION.compromiso} />
          <KeyValue
            k="Inversión inicial"
            v={<span style={{ color: "var(--alfa-yellow)" }}>{INVERSION.inicial}</span>}
            strong
          />

          <Slot className="mt-7" label="Editable · condiciones de pago">
            Forma de pago, calendario de facturación y condiciones económicas — según el texto
            original de la propuesta.
          </Slot>
        </div>

        <div className="alfa-reveal">
          <div className="alfa-neo">
            <div className="alfa-neo-inner p-8 sm:p-10">
              <Micro style={{ color: "var(--alfa-yellow)" }}>
                Inversión inicial · {INVERSION.compromiso}
              </Micro>
              <div className="mt-6 font-display text-[clamp(3.4rem,9vw,5.6rem)] leading-[0.86] tracking-tight text-white">
                <CountUp value={INVERSION.inicialValor} duration={1800} />
              </div>
              <div
                className="mt-3 text-[15px] font-extrabold tracking-[0.16em]"
                style={{ color: "var(--alfa-yellow)" }}
              >
                {INVERSION.moneda}
              </div>

              <Rule className="my-7" />

              <div className="flex items-baseline justify-between py-2">
                <Micro>{INVERSION.compromiso}</Micro>
                <span className="text-[14px] text-white">× {INVERSION.mensual}</span>
              </div>
              <div
                className="flex items-baseline justify-between border-t py-3"
                style={{ borderColor: "var(--alfa-line)" }}
              >
                <Micro style={{ color: "var(--alfa-yellow)" }}>Total</Micro>
                <span
                  className="text-[19px] font-bold tabular-nums"
                  style={{ color: "var(--alfa-yellow)" }}
                >
                  {INVERSION.inicial}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
            <Glass>
              <h3 className="text-[14px] font-extrabold text-white">Partnership</h3>
              <Body className="mt-2">Estrategia, producción y ejecución bajo una sola dirección.</Body>
            </Glass>
            <Glass>
              <h3 className="text-[14px] font-extrabold text-white">Tres canales</h3>
              <Body className="mt-2">TikTok, Instagram y Facebook dentro del mismo sistema.</Body>
            </Glass>
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ══════════════ 13 · CONDICIONES ══════════════ */

export function S13() {
  return (
    <Sec id="condiciones" n="13" kicker="Marco del acuerdo">
      <div className="alfa-reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-14">
        <Title accent="propiedad de cuentas" className="shrink-0 text-[clamp(2.2rem,4.6vw,3.8rem)]">
          Condiciones, derechos
          <br />y
        </Title>
        <Lead className="max-w-[42ch] lg:pb-2">
          Los términos se transcriben exactamente como fueron acordados en la propuesta comercial
          original.
        </Lead>
      </div>

      <div className="alfa-reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONDICIONES.map((c) => (
          <Glass key={c.n}>
            <Micro style={{ color: "var(--alfa-lime)" }}>{c.n}</Micro>
            <h3 className="mt-3 text-[16px] font-extrabold leading-tight text-white">{c.titulo}</h3>
            <Slot className="mt-4">{c.slot}</Slot>
          </Glass>
        ))}

        <Glass
          style={{
            borderColor: "rgba(245,224,75,.30)",
            background: "linear-gradient(158deg,rgba(245,224,75,.10),rgba(245,224,75,.02))",
          }}
        >
          <Micro style={{ color: "var(--alfa-yellow)" }}>Siguiente paso</Micro>
          <h3 className="mt-3 text-[16px] font-extrabold leading-tight text-white">
            Aprobación y kickoff
          </h3>
          <Body className="mt-3">
            Confirmada la propuesta, se agenda el kickoff, se define el marco de medición y se monta
            el primer ciclo de producción.
          </Body>
          <a
            href={`mailto:${BRAND.email}?subject=Propuesta%20ALFA%20VITAMINS%20x%20Yury%20Chac%C3%B3n`}
            className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-white"
            style={{ color: "var(--alfa-yellow)" }}
          >
            Confirmar propuesta <span aria-hidden>→</span>
          </a>
        </Glass>
      </div>

      {/* firma */}
      <div
        className="alfa-reveal mt-12 flex flex-col gap-8 border-t pt-8 lg:flex-row lg:items-end"
        style={{ borderColor: "var(--alfa-line)" }}
      >
        <div className="flex items-end gap-5">
          <Image
            src="/alfa/logo.png"
            alt="ALFA VITAMINS"
            width={100}
            height={65}
            unoptimized
            className="h-auto w-[76px] object-contain"
          />
          <span className="h-10 w-px" style={{ background: "var(--alfa-line-2)" }} />
          <div>
            <div className="text-[13px] font-extrabold tracking-[0.24em] text-white">
              {CREATOR.nombre.toUpperCase()}
            </div>
            <Micro className="mt-2">{CREATOR.rol}</Micro>
          </div>
        </div>

        <div className="lg:ml-auto lg:text-right">
          <Micro className="mb-3">{BRAND.nombre}</Micro>
          <div className="text-[13px] leading-relaxed" style={{ color: "var(--alfa-fog)" }}>
            <a
              href={BRAND.sitioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--alfa-lime)]"
            >
              {BRAND.sitio}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-[var(--alfa-lime)]">
              {BRAND.email}
            </a>
            <br />
            {BRAND.telefono}
          </div>
          <div className="mt-4 flex gap-2.5 lg:justify-end">
            {REDES.filter((r) => r.estado === "activo").map((r) => (
              <a
                key={r.id}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.nombre}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--alfa-lime)] hover:text-[var(--alfa-lime)]"
              >
                {ICONO[r.id]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/25">
        {BRAND.copyright} · Documento confidencial
      </div>
    </Sec>
  );
}
