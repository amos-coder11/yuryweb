import type { Metadata } from "next";
import "./alfa.css";

export const metadata: Metadata = {
  title: "ALFA VITAMINS × Yury Chacón | Propuesta de Partnership Estratégico",
  description:
    "Dirección creativa, producción de contenido y crecimiento estructurado en TikTok, Instagram y Facebook para Alfa Vitamins Store.",
  robots: { index: false, follow: false },
};

export default function PropuestaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="alfa-doc">{children}</div>;
}
