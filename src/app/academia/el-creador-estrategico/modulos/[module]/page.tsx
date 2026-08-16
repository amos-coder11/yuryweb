import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { AppliedExampleVisual, CourseProgressRail, FrameworkVisual, ModuleLabVisual, PhaseMap } from "@/components/course/CourseVisuals";
import SiteShell from "@/components/SiteShell";
import { courseModules, coursePhases, getAdjacentModules, getCourseModule } from "@/lib/course";

type ModulePageProps = {
  params: Promise<{ module: string }>;
};

export function generateStaticParams() {
  return courseModules.map((module) => ({ module: module.number }));
}

export async function generateMetadata({ params }: ModulePageProps): Promise<Metadata> {
  const { module: number } = await params;
  const courseModule = getCourseModule(number);

  if (!courseModule) return {};

  return {
    title: `Módulo ${courseModule.number}: ${courseModule.title} — El Creador Estratégico`,
    description: courseModule.promise,
  };
}

export default async function CourseModulePage({ params }: ModulePageProps) {
  const { module: number } = await params;
  const courseModule = getCourseModule(number);

  if (!courseModule) notFound();

  const { previous, next } = getAdjacentModules(courseModule.number);
  const phase = coursePhases.find((item) => item.number === courseModule.phaseNumber);
  const image = `/cursos/el-creador-estrategico/modulo-${courseModule.number}.jpg`;

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-black pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="page-aurora absolute inset-0 opacity-75" aria-hidden="true" />
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="absolute -right-24 top-12 h-96 w-96 rounded-full bg-yc-magenta/20 blur-[120px]" aria-hidden="true" />

        <Container className="relative">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/40">
            <Link href="/academia" className="transition hover:text-white">Academia</Link>
            <span aria-hidden="true">/</span>
            <Link href="/academia/el-creador-estrategico" className="transition hover:text-white">El Creador Estratégico</Link>
            <span aria-hidden="true">/</span>
            <span className="text-yc-magenta">Módulo {courseModule.number}</span>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-yc-magenta/35 bg-yc-magenta/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-yc-magenta">
                  Módulo {courseModule.number} de 20
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                  Fase {courseModule.phaseNumber} · {courseModule.phase}
                </span>
              </div>

              <h1 className="mt-6 font-display text-6xl leading-[0.92] tracking-wide text-white sm:text-8xl lg:text-[7.2rem]">
                {courseModule.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
                {courseModule.promise}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                <span className="rounded-full border border-white/10 px-4 py-2">{courseModule.duration}</span>
                <span className="rounded-full border border-white/10 px-4 py-2">4 clases</span>
                <span className="rounded-full border border-white/10 px-4 py-2">1 misión práctica</span>
              </div>

              <a
                href="#clases"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-yc-magenta px-7 text-xs font-extrabold tracking-[0.14em] text-white transition hover:bg-yc-magenta-dark"
              >
                COMENZAR EL MÓDULO ↓
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mr-0">
              <div className="absolute -inset-8 rounded-full bg-yc-magenta/15 blur-[80px]" aria-hidden="true" />
              <div className="relative rotate-[2deg] overflow-hidden rounded-3xl border border-yc-magenta/30 bg-[#070707] p-2 shadow-[0_30px_100px_rgba(230,0,126,0.18)]">
                <Image
                  src={image}
                  alt={`Módulo ${courseModule.number}: ${courseModule.title}`}
                  width={1080}
                  height={1080}
                  priority
                  className="h-auto w-full rounded-[1.15rem]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-black py-8 sm:py-10">
        <Container>
          <CourseProgressRail activeModule={courseModule.number} />
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#070707] py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-blue">Por qué este módulo importa</p>
              <p className="mt-4 text-base leading-8 text-white/65 sm:text-lg">{courseModule.summary}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Al terminar podrás</p>
              <ul className="mt-5 space-y-4">
                {courseModule.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-white/65">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yc-magenta/15 text-[10px] font-black text-yc-magenta">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {phase ? (
            <div className="mt-12 sm:mt-16">
              <PhaseMap phase={phase} moduleNumber={courseModule.number} />
            </div>
          ) : null}

          <div className="mt-12 sm:mt-16">
            <ModuleLabVisual courseModule={courseModule} />
          </div>
        </Container>
      </section>

      <section id="clases" className="relative bg-black py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-14">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Contenido</p>
              <nav className="mt-5 border-l border-white/10" aria-label="Clases del módulo">
                {courseModule.lessons.map((lesson) => (
                  <a
                    key={lesson.number}
                    href={`#clase-${lesson.number.replace(".", "-")}`}
                    className="block border-l border-transparent py-3 pl-5 text-xs font-bold leading-relaxed text-white/40 transition hover:border-yc-magenta hover:text-white"
                  >
                    <span className="block text-[9px] uppercase tracking-[0.14em] text-yc-magenta">Clase {lesson.number}</span>
                    {lesson.title}
                  </a>
                ))}
              </nav>
              <a href="#mision" className="mt-6 inline-flex text-[10px] font-extrabold uppercase tracking-[0.15em] text-yc-blue">
                IR A LA MISIÓN →
              </a>
            </aside>

            <div className="space-y-10">
              {courseModule.lessons.map((lesson, index) => (
                <article
                  key={lesson.number}
                  id={`clase-${lesson.number.replace(".", "-")}`}
                  className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-[#090909]"
                >
                  <div className="border-b border-white/10 bg-white/[0.025] p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-yc-magenta">Clase {lesson.number}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">{lesson.duration}</p>
                    </div>
                    <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">{lesson.title}</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/55">
                      <strong className="text-white/80">Objetivo:</strong> {lesson.objective}
                    </p>
                  </div>

                  <div className="space-y-8 p-6 sm:p-8 lg:p-10">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-yc-blue">La idea central</p>
                      <p className="mt-3 text-base leading-8 text-white/70">{lesson.concept}</p>
                    </div>

                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-yc-blue">Marco de trabajo</p>
                      <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/38">Sigue el recorrido de izquierda a derecha. Cada paso alimenta el siguiente hasta convertir la idea en una acción concreta.</p>
                      <FrameworkVisual items={lesson.framework} />
                    </div>

                    <div>
                      <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-yc-magenta">Ejemplo aplicado</p>
                      <AppliedExampleVisual example={lesson.example} />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-yc-blue">Práctica</p>
                        <p className="mt-3 text-sm leading-7 text-white/60">{lesson.practice}</p>
                      </div>
                      <div className="rounded-2xl border border-yc-blue/25 bg-yc-blue/[0.06] p-5">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-yc-blue">Prueba de avance</p>
                        <p className="mt-3 text-sm font-semibold leading-7 text-white/75">{lesson.deliverable}</p>
                      </div>
                    </div>

                    {index < courseModule.lessons.length - 1 ? (
                      <a href={`#clase-${courseModule.lessons[index + 1].number.replace(".", "-")}`} className="inline-flex text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/40 transition hover:text-yc-magenta">
                        SIGUIENTE CLASE ↓
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="mision" className="scroll-mt-28 border-y border-white/10 bg-[#070707] py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-yc-magenta/25 bg-black p-7 sm:p-10 lg:p-14">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-yc-magenta/20 blur-[100px]" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Misión del módulo</p>
                <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-7xl">{courseModule.mission.title}</h2>
                <p className="mt-5 text-sm leading-7 text-white/55">{courseModule.mission.brief}</p>
              </div>
              <div>
                <ol className="relative space-y-4 before:absolute before:bottom-8 before:left-[1.65rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-yc-magenta before:to-yc-blue">
                  {courseModule.mission.steps.map((step, index) => (
                    <li key={step} className="relative flex gap-4 rounded-2xl border border-white/10 bg-[#090909] p-4 text-sm leading-relaxed text-white/65">
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-yc-magenta/40 bg-black font-display text-lg text-yc-magenta">{String(index + 1).padStart(2, "0")}</span>
                      <span className="pt-1.5">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 rounded-2xl border border-yc-blue/25 bg-yc-blue/[0.06] p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-yc-blue">Entregable final</p>
                  <p className="mt-2 text-sm font-semibold leading-7 text-white/80">{courseModule.mission.deliverable}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-magenta">Checklist de dominio</p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">NO AVANCES SIN ESTO</h2>
              <ul className="mt-6 space-y-4">
                {courseModule.checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/65">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-yc-magenta/40 text-[10px] text-yc-magenta">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yc-blue">Caja de herramientas</p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">RECURSOS DEL MÓDULO</h2>
              <div className="mt-6 space-y-3">
                {courseModule.resources.map((resource) => {
                  const content = (
                    <>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-yc-blue">{resource.type}</p>
                          <h3 className="mt-1 text-sm font-bold text-white">{resource.title}</h3>
                        </div>
                        {resource.href ? <span className="text-yc-blue" aria-hidden="true">↗</span> : null}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/45">{resource.description}</p>
                    </>
                  );

                  return resource.href ? (
                    <a key={resource.title} href={resource.href} target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-yc-blue/35">
                      {content}
                    </a>
                  ) : (
                    <div key={resource.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {previous ? (
              <Link href={`/academia/el-creador-estrategico/modulos/${previous.number}`} className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-yc-blue/35">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-yc-blue">← Módulo anterior</p>
                <p className="mt-2 font-display text-3xl tracking-wide text-white">{previous.number} · {previous.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/academia/el-creador-estrategico/modulos/${next.number}`} className="group rounded-3xl border border-yc-magenta/25 bg-yc-magenta/[0.06] p-6 text-right transition hover:border-yc-magenta/50">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-yc-magenta">Siguiente módulo →</p>
                <p className="mt-2 font-display text-3xl tracking-wide text-white">{next.number} · {next.title}</p>
              </Link>
            ) : (
              <Link href="/academia/el-creador-estrategico" className="rounded-3xl border border-yc-magenta/25 bg-yc-magenta/[0.06] p-6 text-right transition hover:border-yc-magenta/50">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-yc-magenta">Programa completado →</p>
                <p className="mt-2 font-display text-3xl tracking-wide text-white">VOLVER A LOS 20 MÓDULOS</p>
              </Link>
            )}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
