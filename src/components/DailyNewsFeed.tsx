"use client";

import AnimatedList from "./ui/animated-list";
import Notification, { type NotificationProps } from "./ui/notification";

const dailyNews: NotificationProps[] = [
  {
    name: "Mercados regionales en alza",
    description: "Economía · YC Noticias",
    time: "Hace 12m",
    icon: "📈",
    color: "#e6007e",
  },
  {
    name: "Nueva reforma digital aprobada",
    description: "Política · YC Noticias",
    time: "Hace 25m",
    icon: "🏛️",
    color: "#00b4ff",
  },
  {
    name: "Tendencias en redes sociales 2026",
    description: "Marketing · YC Noticias",
    time: "Hace 38m",
    icon: "📱",
    color: "#402fb5",
  },
  {
    name: "Entrevista exclusiva al sector tech",
    description: "Tecnología · YC Noticias",
    time: "Hace 51m",
    icon: "💻",
    color: "#00C9A7",
  },
  {
    name: "Análisis de coyuntura internacional",
    description: "Mundo · YC Noticias",
    time: "Hace 1h",
    icon: "🗞️",
    color: "#FFB800",
  },
  {
    name: "Deportes: resumen de la jornada",
    description: "Deportes · YC Noticias",
    time: "Hace 1h",
    icon: "⚽",
    color: "#45B26B",
  },
];

interface DailyNewsFeedProps {
  className?: string;
  delay?: number;
}

export default function DailyNewsFeed({
  className = "",
  delay = 2800,
}: DailyNewsFeedProps) {
  return (
    <div className={`relative w-full overflow-visible lg:min-h-[240px] ${className}`}>
      <AnimatedList
        items={dailyNews}
        delay={delay}
        maxVisible={3}
        renderItem={(item) => <Notification {...item} />}
      />
    </div>
  );
}
