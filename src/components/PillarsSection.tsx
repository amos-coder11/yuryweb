import Container from "./Container";
import PillarCard from "./PillarCard";

const pillars = [
  {
    icon: "📈",
    title: "Marketing Digital",
    description:
      "Estrategias de contenido, posicionamiento y conversión para marcas que quieren crecer con intención.",
    link: { href: "/marketing-digital", label: "VER SERVICIOS →" },
  },
  {
    icon: "📰",
    title: "Noticias",
    description:
      "Cobertura, análisis y narrativa periodística con rigor, claridad y perspectiva independiente.",
    link: { href: "/noticias", label: "LEER ARTÍCULOS →" },
    featured: true,
  },
  {
    icon: "🛍️",
    title: "Academia Virtual",
    description:
      "Productos y recursos digitales diseñados para emprendedores y creadores de contenido.",
    link: { href: "/academia", label: "EXPLORAR ACADEMIA →" },
  },
];

export default function PillarsSection() {
  return (
    <section
      id="trabajo"
      className="border-t border-white/10 bg-black pb-16 pt-14 sm:pb-24 sm:pt-20"
    >
      <Container>
        <div className="mb-8 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-yc-magenta">
            LO QUE HAGO
          </p>
          <h2 className="font-display text-3xl tracking-wide text-white sm:text-5xl md:text-6xl">
            Tres pilares de mi trabajo
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-4">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              href={pillar.link.href}
              linkLabel={pillar.link.label}
              featured={pillar.featured}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
