import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SiteShell from "@/components/SiteShell";
import yuryBackground from "../../../public/yurifondo.png";

export const metadata: Metadata = {
  title: "Sobre Yury Chacón — Licenciada en Comunicación Social",
  description:
    "Comunicadora, estratega de marketing, periodista independiente y emprendedora al servicio de marcas y comunidades.",
};

const expertise = [
  "Marketing Digital",
  "Branding & Identidad Corporativa",
  "Comunicación Estratégica",
  "Gestión de Redes Sociales",
  "Periodismo Independiente",
  "Locución Profesional",
  "Campañas Publicitarias",
  "Liderazgo Organizacional",
];

const values = [
  { title: "Fe", copy: "Principio que guía cada decisión personal y profesional." },
  { title: "Disciplina", copy: "El liderazgo auténtico nace del trabajo constante y la excelencia." },
  { title: "Integridad", copy: "Compromiso con la verdad y el bienestar de la sociedad." },
  { title: "Servicio", copy: "Poner la experiencia y la vocación al servicio de la comunidad." },
];

export default function SobreYuryPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[92vh] overflow-hidden bg-black pt-24">
        <Image
          src={yuryBackground}
          alt="Yury Chacón en el estudio de YC Noticias"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25" />
        <Container className="relative z-10 flex min-h-[calc(92vh-6rem)] items-end pb-14 sm:pb-20">
          <div className="max-w-4xl">
            <p className="text-xs font-extrabold tracking-[0.22em] text-yc-magenta">LICENCIADA EN COMUNICACIÓN SOCIAL</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-wide text-white drop-shadow-2xl sm:text-8xl lg:text-9xl">
              YURY<br />CHACÓN
            </h1>
            <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-white/80 drop-shadow sm:text-lg">
              Estratega de Marketing · Especialista en Branding · Periodista Independiente · Emprendedora
            </p>
            <p className="mt-5 text-[10px] font-bold tracking-[0.18em] text-white/50">UNIVERSIDAD BICENTENARIA DE ARAGUA</p>
          </div>
        </Container>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            <div>
              <p className="sticky top-32 text-xs font-extrabold tracking-[0.2em] text-yc-magenta">MI HISTORIA</p>
            </div>
            <div>
              <h2 className="font-display text-4xl leading-tight tracking-wide text-white sm:text-6xl">
                Comunicadora de formación, estratega por vocación
              </h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-white/60">
                <p>
                  Soy Licenciada en Comunicación Social, egresada de la Universidad Bicentenaria de Aragua, con una sólida trayectoria profesional en comunicación, marketing estratégico, desarrollo de marcas y gestión empresarial.
                </p>
                <p>
                  A lo largo de mi carrera he combinado mi formación académica con experiencia en liderazgo organizacional, estrategias operativas, comerciales y de crecimiento corporativo.
                </p>
                <p>
                  Mi trabajo abarca la dirección de marketing, la planificación de campañas publicitarias, el manejo de redes sociales y el posicionamiento de marcas. He liderado procesos de identidad corporativa y estrategias de comunicación orientadas a fortalecer la imagen y presencia de empresas en el entorno digital.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-white/50">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#070707] py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="page-aurora relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
              <div className="dot-grid absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="relative flex h-full min-h-[420px] flex-col justify-between p-7 sm:p-10">
                <span className="font-display text-8xl text-white/10">YC</span>
                <div>
                  <p className="text-[10px] font-extrabold tracking-[0.18em] text-yc-blue">COMUNICADORA & LOCUTORA</p>
                  <p className="mt-3 font-display text-4xl leading-tight tracking-wide text-white sm:text-5xl">Una voz que conecta con las audiencias</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">COMUNICACIÓN CON PROPÓSITO</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-white sm:text-6xl">Claridad, credibilidad y profesionalismo</h2>
              <p className="mt-6 text-base leading-8 text-white/60">
                Como locutora y comunicadora, poseo la capacidad de informar con objetividad, conectar con las audiencias y transmitir mensajes con claridad. Mi pasión por la comunicación me ha llevado a consolidarme como periodista independiente comprometida con ofrecer información de interés público de manera responsable y ética.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">LO QUE ME DEFINE</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">Fe, disciplina e integridad</h2>
            <p className="mt-5 text-base leading-8 text-white/60">
              Soy una mujer emprendedora, madre de dos hijas y convencida de que el liderazgo auténtico nace del servicio, la disciplina y la integridad. Mi vida está profundamente inspirada por una sólida fe en Dios.
            </p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article key={value.title} className="min-h-[220px] bg-[#090909] p-6 sm:p-7">
                <span className="font-display text-5xl text-yc-magenta/40">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl tracking-wide text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{value.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#070707] py-16 sm:py-24">
        <Container>
          <div className="page-aurora rounded-3xl border border-white/10 px-6 py-14 text-center sm:px-12 sm:py-20">
            <p className="text-xs font-extrabold tracking-[0.2em] text-yc-magenta">YC NOTICIAS</p>
            <h2 className="mx-auto mt-3 max-w-4xl font-display text-4xl leading-tight tracking-wide text-white sm:text-7xl">
              Información veraz al servicio de la comunidad
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              A través de YC Noticias, pongo mi experiencia, preparación y vocación al servicio de una comunicación transparente, profesional y cercana.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/noticias" className="rounded-full bg-yc-magenta px-7 py-3.5 text-xs font-extrabold tracking-[0.14em] text-white">LEER NOTICIAS</Link>
              <Link href="/marketing-digital" className="rounded-full border border-white/20 px-7 py-3.5 text-xs font-extrabold tracking-[0.14em] text-white">VER SERVICIOS</Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
