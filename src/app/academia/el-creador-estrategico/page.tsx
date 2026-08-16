import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { PhaseMap } from "@/components/course/CourseVisuals";
import SiteShell from "@/components/SiteShell";
import { coursePhases } from "@/lib/course";
import { creatorStrategistModules } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "El Creador Estratégico — Yury Chacón",
  description:
    "Programa de 20 módulos para construir una marca personal, crear contenido estratégico, monetizar y escalar.",
};

export default function ElCreadorEstrategicoPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="page-aurora absolute inset-0 opacity-75" aria-hidden="true" />
        <div className="dot-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-yc-magenta/20 blur-[110px]" aria-hidden="true" />

        <Container className="relative">
          <Link
            href="/academia"
            className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/45 transition hover:text-white"
          >
            ← VOLVER A LA ACADEMIA
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-yc-magenta">
                Programa completo · 20 módulos
              </p>
              <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-wide text-white sm:text-8xl lg:text-[7.8rem]">
                EL CREADOR
                <span className="block text-yc-magenta">ESTRATÉGICO</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                La ruta para convertir tus ideas y tu experiencia en una marca con dirección, una comunidad real y un sistema de contenido capaz de generar resultados.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#modulos"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-yc-magenta px-7 text-xs font-extrabold tracking-[0.14em] text-white transition hover:bg-yc-magenta-dark"
                >
                  EXPLORAR LOS MÓDULOS ↓
                </a>
                <a
                  href="https://instagram.com/ycnoticias"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-xs font-extrabold tracking-[0.14em] text-white transition hover:border-yc-blue hover:text-yc-blue"
                >
                  SOLICITAR INFORMACIÓN →
                </a>
              </div>

              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {[
                  ["20", "Módulos"],
                  ["80", "Clases"],
                  ["20", "Misiones"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">{label}</dt>
                    <dd className="mt-1 font-display text-3xl tracking-wide text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mr-0">
              <div className="absolute -inset-8 rounded-full bg-yc-magenta/15 blur-[70px]" aria-hidden="true" />
              <div className="relative rotate-[3deg] overflow-hidden rounded-3xl border border-yc-magenta/35 bg-[#070707] p-2 shadow-[0_30px_100px_rgba(230,0,126,0.2)]">
                <Image
                  src="/cursos/el-creador-estrategico/modulo-20.jpg"
                  alt="Módulo 20: Escalamiento"
                  width={1080}
                  height={1080}
                  priority
                  className="h-auto w-full rounded-[1.15rem]"
                />
              </div>
              <div className="absolute -bottom-8 -left-2 w-[38%] -rotate-[8deg] overflow-hidden rounded-2xl border border-yc-blue/35 bg-[#070707] p-1.5 shadow-2xl sm:-left-10">
                <Image
                  src="/cursos/el-creador-estrategico/modulo-01.jpg"
                  alt="Módulo 01: Mentalidad del Creador"
                  width={1080}
                  height={1080}
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#070707] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-blue">Una metodología progresiva</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-7xl">DE LA IDEA AL ESCALAMIENTO</h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base lg:ml-auto">
              Cada módulo construye sobre el anterior: primero tu mentalidad y posicionamiento, luego la creación y distribución de contenido, y finalmente los sistemas de conversión, monetización y crecimiento.
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {coursePhases.map((phase) => (
              <div key={phase.number} className="relative">
                <PhaseMap phase={phase} />
                <span className="absolute right-6 top-6 rounded-full border border-white/15 bg-black/65 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/60 backdrop-blur-md">
                  {phase.range}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="modulos" className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-yc-magenta/10 blur-[120px]" aria-hidden="true" />
        <Container className="relative">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Contenido del programa</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-7xl">LOS 20 MÓDULOS</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/45">
              Una ruta completa para pensar, crear, comunicar, convertir y escalar como creador estratégico.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {creatorStrategistModules.map((module) => (
              <li key={module.number} className="group">
                <Link href={`/academia/el-creador-estrategico/modulos/${module.number}`} className="block overflow-hidden rounded-2xl border border-white/10 bg-[#080808] transition duration-300 hover:-translate-y-1 hover:border-yc-magenta/45">
                  <div className="overflow-hidden">
                    <Image
                      src={module.image}
                      alt={`Módulo ${module.number}: ${module.title}`}
                      width={1080}
                      height={1080}
                      className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-yc-magenta">Módulo {module.number}</p>
                      <h3 className="mt-1 text-sm font-bold text-white">{module.title}</h3>
                      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.13em] text-yc-blue">4 clases · Laboratorio visual · Abrir →</p>
                    </div>
                    <span className="font-display text-3xl text-white/15" aria-hidden="true">{module.number}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#070707] py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-yc-magenta/25 bg-black p-7 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-yc-magenta/20 blur-[90px]" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Tu próximo nivel empieza aquí</p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-7xl">
                CONVIERTE TU CONTENIDO EN UNA ESTRATEGIA REAL
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                Solicita la información del programa y conoce disponibilidad, modalidad de acceso y próximos pasos directamente con Yury.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/ycnoticias"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-yc-magenta px-7 text-xs font-extrabold tracking-[0.14em] text-white"
                >
                  HABLAR CON YURY →
                </a>
                <Link
                  href="/academia"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-xs font-extrabold tracking-[0.14em] text-white"
                >
                  VOLVER A LA ACADEMIA
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
