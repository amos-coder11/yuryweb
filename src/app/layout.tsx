import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yurychacon.com"),
  title: "Yury Chacón | YC Noticias — Marketing Digital",
  description:
    "Comunicadora de formación, estratega por vocación. Transformo marcas en autoridades digitales con resultados reales.",
  openGraph: {
    title: "Yury Chacón | Comunicación · Estrategia · Resultados",
    description:
      "Noticias, marketing digital, cursos, recursos y estrategia para construir marcas con autoridad.",
    type: "website",
    locale: "es_ES",
    siteName: "Yury Chacón · YC Noticias",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 908,
        alt: "Yury Chacón — Comunicación, estrategia y resultados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yury Chacón | Comunicación · Estrategia · Resultados",
    description:
      "Noticias, marketing digital, cursos, recursos y estrategia para construir marcas con autoridad.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/yclogo.png", type: "image/png" }],
    apple: [{ url: "/yclogo.png", type: "image/png" }],
    shortcut: ["/yclogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${bebasNeue.variable}`}>
      <head>
        <link
          rel="preload"
          href="/yurifondo.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
