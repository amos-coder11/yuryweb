/**
 * ALFA VITAMINS × Yury Chacón — Propuesta de partnership estratégico.
 *
 * Toda la copia vive aquí: precios, títulos, nombres, condiciones, horarios,
 * redes y derechos son texto editable en un solo sitio. Los componentes sólo
 * pintan; no incrustan contenido.
 *
 * REGLA: no se inventan servicios, resultados, seguidores ni estadísticas.
 * Los bloques marcados como `slot` esperan el texto literal de la propuesta
 * comercial original.
 */

export const BRAND = {
  nombre: "Alfa Vitamins Store",
  sitio: "alfavitamins.com",
  sitioUrl: "https://alfavitamins.com",
  coleccion: "https://alfavitamins.com/collections/vitamins-minerals",
  email: "info@alfavitamins.com",
  telefono: "+1 (305) 597-6410",
  fax: "+1 (305) 597-6420",
  catalogo: "54 productos activos en Vitamins & Supplements",
  copyright: "© 2026 Alfa Vitamins Store · Todos los derechos reservados",
} as const;

export const CREATOR = {
  nombre: "Yury Chacón",
  rol: "Dirección creativa y producción de contenido",
  descriptor: "Comunicadora de formación, estratega por vocación.",
} as const;

/** Redes verificadas en el sitio oficial de la marca. */
export const REDES = [
  {
    id: "instagram",
    nombre: "Instagram",
    handle: "@alfa_vitamins",
    href: "https://www.instagram.com/alfa_vitamins/",
    estado: "activo",
    color: "#E1306C",
  },
  {
    id: "facebook",
    nombre: "Facebook",
    handle: "facebook.com/alfavitamins",
    href: "https://www.facebook.com/alfavitamins",
    estado: "activo",
    color: "#1877F2",
  },
  {
    id: "x",
    nombre: "X (Twitter)",
    handle: "@alfa_vitamins",
    href: "https://twitter.com/alfa_vitamins",
    estado: "activo",
    color: "#FFFFFF",
  },
  {
    id: "tiktok",
    nombre: "TikTok",
    handle: "Canal por construir",
    href: BRAND.sitioUrl,
    estado: "no-enlazado",
    color: "#F5E04B",
  },
] as const;

/** Cifras contractuales. No modificar sin el texto original. */
export const INVERSION = {
  mensual: "$7,500 USD / MES",
  mensualValor: 7500,
  referencial: "$7,750 / MES",
  referencialValor: 7750,
  compromiso: "3 meses",
  compromisoMeses: 3,
  inicial: "$22,500 USD",
  inicialValor: 22500,
  moneda: "USD",
} as const;

/** Producto real del catálogo, con enlace a su ficha en la academia. */
export type Producto = {
  id: string;
  nombre: string;
  bajada: string;
  precio: string;
  href: string;
  img: string;
  ancho: number;
  alto: number;
};

export const PRODUCTOS: Producto[] = [
  {
    id: "vitc",
    nombre: "Vitamin C Immunity Shot",
    bajada: "Zinc · Turmeric · Ginger · Echinacea",
    precio: "$49.99",
    href: "https://alfavitamins.com/products/vitamin-c-shot",
    img: "/alfa/vitcbox.png",
    ancho: 818,
    alto: 842,
  },
  {
    id: "collagen",
    nombre: "CollagenC Hydrolysate",
    bajada: "Con biotina · cabello, piel, uñas y articulaciones",
    precio: "$39.99",
    href: "https://alfavitamins.com/products/collagenc-hydrolysate-with-biotin-premium-formula-120-capsules",
    img: "/alfa/collagen.png",
    ancho: 472,
    alto: 764,
  },
  {
    id: "women",
    nombre: "Multi Women",
    bajada: "One Daily Multivitamin",
    precio: "$19.99",
    href: "https://alfavitamins.com/products/multi-women",
    img: "/alfa/women.png",
    ancho: 502,
    alto: 743,
  },
  {
    id: "nad",
    nombre: "NAD+ Plus Resveratrol",
    bajada: "60 cápsulas",
    precio: "$19.99",
    href: "https://alfavitamins.com/products/nad-plus-resveratrol",
    img: "/alfa/nad.png",
    ancho: 547,
    alto: 866,
  },
  {
    id: "prenatal",
    nombre: "Alfa Prenatal",
    bajada: "Before · During · After Pregnancy",
    precio: "$23.99",
    href: "https://alfavitamins.com/products/alfa-prenatal",
    img: "/alfa/prenatal.png",
    ancho: 578,
    alto: 1000,
  },
  {
    id: "creatine",
    nombre: "Maximum Creatine 1200 mg",
    bajada: "Alfa Sports · 100 cápsulas",
    precio: "",
    href: "https://alfavitamins.com/collections/vitamins-minerals",
    img: "/alfa/creatine.png",
    ancho: 492,
    alto: 805,
  },
];

/** Los 13 puntos. El índice del rail lateral se genera de aquí. */
export const PUNTOS = [
  { n: "01", id: "partnership", titulo: "El partnership", kicker: "Portada" },
  { n: "02", id: "diagnostico", titulo: "Dónde estamos hoy", kicker: "Punto de partida" },
  { n: "03", id: "creator", titulo: "Yury Chacón", kicker: "La creator" },
  { n: "04", id: "sistema", titulo: "El sistema", kicker: "Método de trabajo" },
  { n: "05", id: "tiktok", titulo: "TikTok", kicker: "Canal 01" },
  { n: "06", id: "instagram", titulo: "Instagram", kicker: "Canal 02" },
  { n: "07", id: "facebook", titulo: "Facebook", kicker: "Canal 03" },
  { n: "08", id: "produccion", titulo: "El set ALFA VITAMINS", kicker: "Producción" },
  { n: "09", id: "creativa", titulo: "El catálogo como narrativa", kicker: "Línea creativa" },
  { n: "10", id: "datos", titulo: "Decisiones sobre datos", kicker: "Tecnología y medición" },
  { n: "11", id: "cronograma", titulo: "Tres meses de construcción", kicker: "Cronograma" },
  { n: "12", id: "inversion", titulo: "La inversión", kicker: "Inversión" },
  { n: "13", id: "condiciones", titulo: "Condiciones, derechos y propiedad", kicker: "Marco del acuerdo" },
] as const;

export const FASES = [
  {
    n: "01",
    titulo: "Estrategia",
    texto:
      "Definición de ejes narrativos, público y prioridades de catálogo antes de grabar la primera pieza.",
  },
  {
    n: "02",
    titulo: "Producción",
    texto:
      "Rodaje en set con identidad ALFA VITAMINS: dirección, cámara, luz, arte y producto real.",
  },
  {
    n: "03",
    titulo: "Distribución",
    texto:
      "Publicación adaptada al lenguaje propio de TikTok, Instagram y Facebook. Un mismo rodaje, tres gramáticas.",
  },
  {
    n: "04",
    titulo: "Optimización",
    texto:
      "Lectura de desempeño y ajuste del ciclo siguiente sobre datos propios de las cuentas.",
  },
] as const;

export const MESES = [
  {
    n: "01",
    etiqueta: "Mes 01",
    titulo: "Cimientos",
    texto:
      "Kickoff, definición de ejes narrativos, montaje del set y primer ciclo de producción y publicación.",
  },
  {
    n: "02",
    etiqueta: "Mes 02",
    titulo: "Consolidación",
    texto:
      "Ajuste sobre el desempeño del primer ciclo, ampliación de formatos y afinamiento del lenguaje por canal.",
  },
  {
    n: "03",
    etiqueta: "Mes 03",
    titulo: "Escala",
    texto:
      "Consolidación del sistema, lectura del trimestre completo y definición del horizonte siguiente.",
  },
] as const;

export const INDICADORES = [
  "Alcance",
  "Retención",
  "Interacción",
  "Crecimiento",
  "Tráfico al sitio",
  "Contenido top",
] as const;

/** Bloques contractuales pendientes del texto literal original. */
export const CONDICIONES = [
  {
    n: "01",
    titulo: "Alcance y condiciones",
    slot: "Alcance del servicio, duración y condiciones de trabajo — texto original.",
  },
  {
    n: "02",
    titulo: "Horarios y disponibilidad",
    slot: "Horarios de trabajo, jornadas y disponibilidad acordada — texto original.",
  },
  {
    n: "03",
    titulo: "Derechos de contenido",
    slot: "Derechos de uso, cesión y vigencia sobre el material producido — texto original.",
  },
  {
    n: "04",
    titulo: "Propiedad de las cuentas",
    slot: "Titularidad de las cuentas y accesos durante y después del acuerdo — texto original.",
  },
  {
    n: "05",
    titulo: "Servicios incluidos",
    slot: "Listado exacto de servicios contemplados — texto original. No se añade ninguno adicional.",
  },
] as const;
