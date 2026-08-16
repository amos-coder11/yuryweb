import Image from "next/image";
import Link from "next/link";
import type { CourseModuleContent, CoursePhase } from "@/lib/course/types";

type FrameworkVisualProps = {
  items: string[];
};

export function FrameworkVisual({ items }: FrameworkVisualProps) {
  return (
    <div className="relative mt-5">
      <div
        className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-yc-magenta via-white/25 to-yc-blue md:block"
        aria-hidden="true"
      />
      <ol className="relative grid gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <li key={item} className="group relative">
            <div className="flex items-center gap-3 md:block">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-yc-magenta/45 bg-black font-display text-2xl text-yc-magenta shadow-[0_0_30px_rgba(230,0,126,0.18)] transition group-hover:border-yc-blue group-hover:text-yc-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/30 md:mt-4 md:block">
                Paso {index + 1}
              </span>
            </div>
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4 md:min-h-36">
              <p className="text-sm leading-7 text-white/68">{item}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AppliedExampleVisual({ example }: { example: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-yc-magenta/25 bg-yc-magenta/[0.06]">
      <div className="grid md:grid-cols-[0.7fr_auto_0.7fr_auto_1.6fr] md:items-stretch">
        <div className="p-5 sm:p-6">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/35">01 · Situación</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-white/75">Un reto real que necesita una decisión estratégica.</p>
        </div>
        <div className="hidden items-center text-yc-magenta md:flex" aria-hidden="true">→</div>
        <div className="border-t border-white/10 p-5 sm:p-6 md:border-l md:border-t-0">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-yc-magenta">02 · Aplicación</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-white/75">Se ejecuta el marco paso a paso.</p>
        </div>
        <div className="hidden items-center text-yc-blue md:flex" aria-hidden="true">→</div>
        <div className="border-t border-yc-blue/15 bg-yc-blue/[0.045] p-5 sm:p-6 md:border-l md:border-t-0">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-yc-blue">03 · Así se ve</p>
          <p className="mt-3 text-sm leading-7 text-white/72">{example}</p>
        </div>
      </div>
    </div>
  );
}

export function PhaseMap({ phase, moduleNumber }: { phase: CoursePhase; moduleNumber?: string }) {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-[16/9] min-h-72 w-full">
        <Image
          src={phase.image}
          alt={phase.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-9">
          <figcaption>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Mapa visual · Fase {phase.number}</p>
            <p className="mt-2 font-display text-4xl tracking-wide text-white sm:text-6xl">{phase.title}</p>
          </figcaption>
          <div className="max-w-sm rounded-2xl border border-white/15 bg-black/65 p-4 backdrop-blur-md">
            {moduleNumber ? (
              <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-yc-blue">Estás construyendo el módulo {moduleNumber}</p>
            ) : null}
            <p className="mt-2 text-xs leading-relaxed text-white/60">{phase.description}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function ModuleLabVisual({ courseModule }: { courseModule: CourseModuleContent }) {
  const image = `/cursos/el-creador-estrategico/laboratorio-${courseModule.number}.png`;
  const cropPositions = ["12% center", "38% center", "64% center", "88% center"];

  return (
    <section aria-labelledby={`laboratorio-${courseModule.number}`}>
      <div className="relative overflow-hidden rounded-3xl border border-yc-magenta/25 bg-black shadow-[0_30px_100px_rgba(230,0,126,0.12)]">
        <div className="relative aspect-[16/9] min-h-72 w-full">
          <Image
            src={image}
            alt={`Ilustración educativa del módulo ${courseModule.number}: ${courseModule.title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Laboratorio visual · Módulo {courseModule.number}</p>
            <h2 id={`laboratorio-${courseModule.number}`} className="mt-2 font-display text-4xl tracking-wide text-white sm:text-6xl">
              {courseModule.title}
            </h2>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/65 sm:text-sm">
              Mira la escena completa primero. Después recórrela en cuatro partes: cada una representa una clase y una decisión práctica del módulo.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courseModule.lessons.map((lesson, index) => (
          <article key={lesson.number} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#090909]">
            <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: cropPositions[index] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" aria-hidden="true" />
              <span className="absolute bottom-3 left-3 rounded-full border border-yc-magenta/35 bg-black/75 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.14em] text-yc-magenta backdrop-blur-md">
                Clase {lesson.number}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-white">{lesson.title}</h3>
              <p className="mt-2 text-xs leading-6 text-white/48">{lesson.objective}</p>
              <a
                href={`#clase-${lesson.number.replace(".", "-")}`}
                className="mt-4 inline-flex text-[9px] font-extrabold uppercase tracking-[0.14em] text-yc-blue transition hover:text-white"
              >
                APRENDER ESTA PARTE ↓
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CourseProgressRail({ activeModule }: { activeModule: string }) {
  return (
    <nav aria-label="Progreso por los 20 módulos" className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/45">Tu ruta completa</p>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-yc-magenta">Módulo {activeModule} de 20</p>
      </div>
      <ol className="mt-5 grid grid-cols-10 gap-2 sm:grid-cols-[repeat(20,minmax(0,1fr))]">
        {Array.from({ length: 20 }, (_, index) => String(index + 1).padStart(2, "0")).map((number) => {
          const isActive = number === activeModule;
          const isPast = Number(number) < Number(activeModule);

          return (
            <li key={number}>
              <Link
                href={`/academia/el-creador-estrategico/modulos/${number}`}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Abrir módulo ${number}`}
                className={`flex aspect-square items-center justify-center rounded-full border text-[8px] font-black transition sm:text-[9px] ${
                  isActive
                    ? "scale-110 border-yc-magenta bg-yc-magenta text-white shadow-[0_0_24px_rgba(230,0,126,0.45)]"
                    : isPast
                      ? "border-yc-blue/35 bg-yc-blue/10 text-yc-blue hover:border-yc-blue"
                      : "border-white/10 text-white/30 hover:border-white/35 hover:text-white"
                }`}
              >
                {number}
              </Link>
            </li>
          );
        })}
      </ol>
      <div className="mt-4 grid grid-cols-4 text-center text-[8px] font-extrabold uppercase tracking-[0.12em] text-white/25">
        <span>Autoridad</span>
        <span>Contenido</span>
        <span>Producción</span>
        <span>Escala</span>
      </div>
    </nav>
  );
}
