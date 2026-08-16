import Container from "./Container";
import HaloButton from "./ui/HaloButton";
import RotatingEarth from "./ui/wireframe-dotted-globe";

const stats = [
  { value: "+10", label: "AÑOS DE EXPERIENCIA" },
  { value: "+500", label: "MARCAS ASESORADAS" },
  { value: "+50M", label: "ALCANCE DIGITAL" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-black py-12 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-yc-magenta">
              SOBRE MÍ
            </p>
            <h2 className="font-display text-[1.75rem] leading-tight tracking-wide text-white sm:text-5xl">
              Autoridad construida con estrategia, no con suerte.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base">
              Soy Yury Chacón, comunicadora social y consultora de marketing
              digital. Combino rigor periodístico con estrategia de crecimiento
              para posicionar marcas y profesionales como referentes en sus
              industrias.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:flex sm:items-start sm:gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${
                    index > 0 ? "border-l border-yc-magenta/50 pl-2 sm:pl-8" : "pr-0.5 sm:pr-8"
                  }`}
                >
                  <span className="font-display text-xl text-white sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-[8px] font-semibold leading-tight tracking-[0.08em] text-white/50 sm:mt-1 sm:text-[10px] sm:tracking-[0.15em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <HaloButton href="/sobre-yuri" variant="primary" fullWidth className="mt-8 sm:mt-10 sm:w-auto">
              CONOCER MI HISTORIA
              <span aria-hidden="true">→</span>
            </HaloButton>
          </div>

          <div className="flex justify-center lg:justify-end">
            <RotatingEarth
              width={560}
              height={560}
              className="w-full max-w-[min(100%,320px)] sm:max-w-[min(100%,420px)] lg:max-w-[min(100%,560px)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
