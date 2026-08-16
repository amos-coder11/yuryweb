import Container from "./Container";
import HaloButton from "./ui/HaloButton";

export default function CtaSection() {
  return (
    <section className="bg-black py-12 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-yc-magenta sm:mb-3">
            SIGUIENTE PASO
          </p>
          <h2 className="font-display text-2xl tracking-wide text-white sm:text-5xl md:text-6xl">
            ¿Listo para transformar tu marca?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-white/55 sm:text-base">
            Trabajemos juntos para posicionarte como autoridad en tu sector.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <HaloButton href="/marketing-digital" variant="solid" fullWidth>
              COMENZAR AHORA
              <span aria-hidden="true">→</span>
            </HaloButton>
            <HaloButton href="/academia" variant="secondary" fullWidth>
              EXPLORAR LA ACADEMIA
            </HaloButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
