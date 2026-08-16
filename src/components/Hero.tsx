import Image from "next/image";
import Container from "./Container";
import DailyNewsFeed from "./DailyNewsFeed";
import HaloButton from "./ui/HaloButton";
import heroBackground from "../../public/yurifondo.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] overflow-hidden pt-14 sm:min-h-screen sm:pt-16"
    >
      {/* Fondo principal */}
      <div className="absolute inset-0 bg-black">
        <Image
          src={heroBackground}
          alt="Yury Chacón en estudio YC Noticias"
          fill
          priority
          unoptimized
          quality={100}
          placeholder="blur"
          className="hero-bg-image object-cover object-[center_18%] sm:object-center"
          sizes="100vw"
        />

        {/* Degradado inferior para legibilidad del texto */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:h-2/3 sm:from-black/75 sm:via-black/25"
          aria-hidden="true"
        />

        {/* Difuminado negro — transición suave hacia la segunda sección */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/90 to-transparent sm:h-72"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent sm:h-32"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-[calc(100dvh-3.5rem)] flex-col justify-end pb-8 pt-4 sm:min-h-[calc(100vh-4rem)] sm:pb-16 sm:pt-8 lg:pb-20">
        <div className="grid w-full items-end gap-8 sm:gap-10 lg:grid-cols-[1fr_minmax(200px,280px)] lg:gap-8 xl:grid-cols-[1.1fr_minmax(220px,300px)] xl:gap-12">
          {/* Izquierda — título y CTAs */}
          <div className="flex w-full flex-col justify-end lg:min-h-[calc(100vh-7rem)] lg:max-w-none lg:pb-8 xl:pb-12">
            <h1 className="font-display text-[2.75rem] leading-[0.95] tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] min-[375px]:text-[3.25rem] sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl">
              YURY
              <span className="relative block">
                CHACÓN
                <span className="absolute -bottom-1 left-0 h-0.5 w-16 bg-yc-magenta sm:w-32" />
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:mt-6 sm:text-base">
              Comunicadora de formación, estratega por vocación. Transformo
              marcas en autoridades digitales con resultados reales.
            </p>

            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
              <HaloButton href="/sobre-yuri" variant="primary" fullWidth>
                CONOCE MI TRABAJO
                <span aria-hidden="true">→</span>
              </HaloButton>
              <HaloButton href="/marketing-digital" variant="secondary" fullWidth>
                VER SERVICIOS
              </HaloButton>
            </div>
          </div>

          {/* Derecha — noticias del día */}
          <div className="mx-auto flex w-full max-w-[min(100%,280px)] flex-col justify-end lg:mx-0 lg:min-h-[calc(100vh-7rem)] lg:col-start-2 lg:row-start-1 lg:max-w-[300px] lg:justify-self-end lg:pb-8 xl:pb-12">
            <DailyNewsFeed />
          </div>
        </div>
      </Container>
    </section>
  );
}
