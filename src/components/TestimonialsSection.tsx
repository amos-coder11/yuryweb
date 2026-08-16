"use client";

import type { CSSProperties } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Marquee } from "./ui/3d-testimonails";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "María González",
    username: "@maria_gz",
    body: "Yury transformó nuestra presencia digital en solo 3 meses.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    country: "🇨🇴 Colombia",
  },
  {
    name: "Carlos Mendoza",
    username: "@cmendoza",
    body: "Estrategia clara, resultados medibles. Recomendada al 100%.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    country: "🇲🇽 México",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod",
    body: "Su enfoque periodístico le da un valor único al marketing.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    country: "🇪🇸 España",
  },
  {
    name: "Diego Fernández",
    username: "@diego_f",
    body: "Duplicamos nuestro alcance orgánico con su metodología.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    country: "🇦🇷 Argentina",
  },
  {
    name: "Laura Vega",
    username: "@laurav",
    body: "Profesional, creativa y siempre al día con las tendencias.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    country: "🇨🇱 Chile",
  },
  {
    name: "Roberto Silva",
    username: "@rsilva",
    body: "La mejor inversión que hicimos para posicionar nuestra marca.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    country: "🇵🇪 Perú",
  },
  {
    name: "Patricia Núñez",
    username: "@patnu",
    body: "Contenido de calidad que conecta de verdad con la audiencia.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    country: "🇻🇪 Venezuela",
  },
  {
    name: "Andrés Morales",
    username: "@andresm",
    body: "YC Noticias es referencia en comunicación digital en la región.",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
    country: "🇪🇨 Ecuador",
  },
];

const desktopColumns = [
  { reverse: false, duration: "72s" },
  { reverse: true, duration: "80s" },
  { reverse: false, duration: "68s" },
  { reverse: true, duration: "76s" },
  { reverse: false, duration: "74s" },
  { reverse: true, duration: "82s" },
];

const mobileColumns = [
  { reverse: false, duration: "85s" },
  { reverse: true, duration: "92s" },
  { reverse: false, duration: "88s" },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ img, name, username, body, country }: Testimonial) {
  return (
    <Card className="w-[190px] shrink-0 rounded-xl border-white/[0.08] bg-[#111111]/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-300 sm:w-[220px] md:w-[240px] md:hover:scale-[1.02]">
      <CardContent className="p-3.5 sm:p-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Avatar className="size-8 ring-1 ring-white/10 sm:size-10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <figcaption className="truncate text-xs font-semibold text-white sm:text-sm">
              {name}
            </figcaption>
            <p className="truncate text-[10px] text-white/40 sm:text-[11px]">{username}</p>
          </div>
        </div>
        <p className="mt-1 text-[10px] text-white/50 sm:text-[11px]">{country}</p>
        <blockquote className="mt-2 text-xs leading-relaxed text-white/75 sm:mt-2.5 sm:text-[13px]">
          &ldquo;{body}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
}

function MarqueeColumn({
  reverse,
  duration,
  className,
  idPrefix,
}: {
  reverse: boolean;
  duration: string;
  className?: string;
  idPrefix: string;
}) {
  return (
    <Marquee
      vertical
      pauseOnHover
      reverse={reverse}
      repeat={4}
      style={{ "--duration": duration } as CSSProperties}
      className={className}
    >
      {testimonials.map((review) => (
        <TestimonialCard key={`${idPrefix}-${review.username}`} {...review} />
      ))}
    </Marquee>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-black py-12 sm:py-24">
      <div className="mb-8 px-4 text-center sm:mb-14 sm:px-6">
        <p className="mb-2 text-xs font-bold tracking-[0.2em] text-yc-magenta sm:mb-3">
          TESTIMONIOS
        </p>
        <h2 className="font-display text-2xl tracking-wide text-white sm:text-4xl lg:text-5xl">
          Lo que dicen quienes confían en mí
        </h2>
      </div>

      {/* Mobile */}
      <div className="relative h-[380px] w-full overflow-hidden sm:hidden [perspective:600px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.82]">
          <div
            className="flex flex-row items-stretch gap-3"
            style={{
              transform: "rotateX(10deg) rotateY(-2deg) rotateZ(5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {mobileColumns.map((col, i) => (
              <MarqueeColumn
                key={`mobile-${i}`}
                reverse={col.reverse}
                duration={col.duration}
                idPrefix={`m-${i}`}
              />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/50 to-transparent" />
      </div>

      {/* Tablet + Desktop */}
      <div className="relative hidden h-[520px] w-full overflow-hidden sm:block sm:h-[600px] lg:h-[640px] [perspective:900px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-95 md:scale-100 lg:scale-105 xl:scale-[1.15]">
          <div
            className="flex flex-row items-stretch gap-4 md:gap-5 lg:gap-6"
            style={{
              transform: "rotateX(14deg) rotateY(-4deg) rotateZ(8deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {desktopColumns.map((col, i) => (
              <MarqueeColumn
                key={i}
                reverse={col.reverse}
                duration={col.duration}
                idPrefix={`col-${i}`}
                className={i >= 4 ? "hidden lg:flex" : "flex"}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/40 to-transparent sm:w-32 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/40 to-transparent sm:w-32 lg:w-40" />
      </div>
    </section>
  );
}
