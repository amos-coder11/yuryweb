export type Article = {
  slug: string;
  category: string;
  date: string;
  readingTime: string;
  title: string;
  excerpt: string;
  accent: string;
};

export const articles: Article[] = [
  {
    slug: "marca-personal-autoridad-2026",
    category: "Marketing Digital",
    date: "20 jul 2026",
    readingTime: "6 min de lectura",
    title: "Cómo construir una marca personal que genere autoridad en 2026",
    excerpt:
      "En un mundo saturado de contenido, la diferenciación ya no es opcional. Descubre las estrategias que están usando los líderes digitales para posicionarse como referentes en su industria.",
    accent: "#e6007e",
  },
  {
    slug: "errores-emprendedores-negocio-digital",
    category: "Emprendimiento",
    date: "15 jul 2026",
    readingTime: "4 min",
    title: "5 errores que cometen los emprendedores al lanzar su negocio digital",
    excerpt:
      "Lanzar un negocio online parece sencillo, pero hay trampas que pueden costarte tiempo y dinero. Aquí los errores más comunes y cómo evitarlos.",
    accent: "#00b4ff",
  },
  {
    slug: "comunicacion-estrategica-era-digital",
    category: "Comunicación",
    date: "10 jul 2026",
    readingTime: "5 min",
    title: "El poder de la comunicación estratégica en la era digital",
    excerpt:
      "La comunicación ya no es solo transmitir mensajes. Es construir relaciones, generar confianza y posicionar tu voz como referente en tu sector.",
    accent: "#8b5cf6",
  },
  {
    slug: "identidad-corporativa-logo-no-es-marca",
    category: "Branding",
    date: "5 jul 2026",
    readingTime: "5 min",
    title: "Identidad corporativa: por qué tu logo no es tu marca",
    excerpt:
      "Muchas empresas confunden su logo con su marca. La identidad corporativa va mucho más allá del diseño visual y comienza con una idea clara.",
    accent: "#f97316",
  },
  {
    slug: "inteligencia-artificial-marketing-2026",
    category: "Tecnología",
    date: "28 jun 2026",
    readingTime: "7 min",
    title: "Inteligencia artificial y marketing: lo que debes saber en 2026",
    excerpt:
      "La IA está transformando la forma en que las marcas se comunican con sus audiencias. Descubre las herramientas que están cambiando el juego.",
    accent: "#22c55e",
  },
  {
    slug: "redes-sociales-2026-plataformas",
    category: "Marketing Digital",
    date: "20 jun 2026",
    readingTime: "4 min",
    title: "Redes sociales en 2026: qué plataformas dominar y cuáles ignorar",
    excerpt:
      "No todas las redes sociales son para todos los negocios. Aprende a elegir las plataformas correctas según tu audiencia y tus objetivos.",
    accent: "#e6007e",
  },
  {
    slug: "empleada-a-emprendedora",
    category: "Emprendimiento",
    date: "15 jun 2026",
    readingTime: "6 min",
    title: "De empleada a emprendedora: el camino que nadie te cuenta",
    excerpt:
      "El salto del empleo al emprendimiento es uno de los más desafiantes. Estas son las lecciones que vale la pena conocer antes de dar el paso.",
    accent: "#00b4ff",
  },
];

export const services = [
  {
    number: "01",
    title: "Estrategia de Marketing Digital",
    description:
      "Planificación y ejecución de campañas orientadas a resultados medibles y crecimiento sostenido.",
  },
  {
    number: "02",
    title: "Branding e Identidad Corporativa",
    description:
      "Identidad visual, manuales de marca y una estrategia de comunicación capaz de sostener tu posicionamiento.",
  },
  {
    number: "03",
    title: "Gestión de Redes Sociales",
    description:
      "Contenido, comunidad y publicidad gestionados con criterio editorial, consistencia y objetivos claros.",
  },
  {
    number: "04",
    title: "Imagen Corporativa",
    description:
      "Representación auténtica de tu marca ante audiencias clave, con presencia, credibilidad y profesionalismo.",
  },
  {
    number: "05",
    title: "Campañas Publicitarias",
    description:
      "Concepto, producción y ejecución de campañas de alto impacto para conquistar atención y convertirla en acción.",
  },
  {
    number: "06",
    title: "Consultoría Estratégica",
    description:
      "Asesoría personalizada para emprendedores y empresas que quieren ordenar y escalar su presencia digital.",
  },
];

export type ProductCategory = "Cursos" | "Recursos" | "Servicios";

export type Product = {
  id: string;
  category: ProductCategory;
  eyebrow: string;
  title: string;
  description: string;
  format: string;
  status: "Disponible" | "Próximamente";
  accent: string;
  icon: string;
  href?: string;
  cover?: string;
};

export type CourseModule = {
  number: string;
  title: string;
  image: string;
};

export const creatorStrategistModules: CourseModule[] = [
  { number: "01", title: "Mentalidad del Creador", image: "/cursos/el-creador-estrategico/modulo-01.jpg" },
  { number: "02", title: "Construcción de Marca Personal", image: "/cursos/el-creador-estrategico/modulo-02.jpg" },
  { number: "03", title: "Avatar", image: "/cursos/el-creador-estrategico/modulo-03.jpg" },
  { number: "04", title: "Posicionamiento", image: "/cursos/el-creador-estrategico/modulo-04.jpg" },
  { number: "05", title: "Psicología del Consumidor", image: "/cursos/el-creador-estrategico/modulo-05.jpg" },
  { number: "06", title: "Storytelling", image: "/cursos/el-creador-estrategico/modulo-06.jpg" },
  { number: "07", title: "Copywriting", image: "/cursos/el-creador-estrategico/modulo-07.jpg" },
  { number: "08", title: "Pilares de Contenido", image: "/cursos/el-creador-estrategico/modulo-08.jpg" },
  { number: "09", title: "Algoritmos", image: "/cursos/el-creador-estrategico/modulo-09.jpg" },
  { number: "10", title: "Guiones", image: "/cursos/el-creador-estrategico/modulo-10.jpg" },
  { number: "11", title: "Grabación", image: "/cursos/el-creador-estrategico/modulo-11.jpg" },
  { number: "12", title: "Edición", image: "/cursos/el-creador-estrategico/modulo-12.jpg" },
  { number: "13", title: "Instagram", image: "/cursos/el-creador-estrategico/modulo-13.jpg" },
  { number: "14", title: "TikTok", image: "/cursos/el-creador-estrategico/modulo-14.jpg" },
  { number: "15", title: "YouTube", image: "/cursos/el-creador-estrategico/modulo-15.jpg" },
  { number: "16", title: "Inteligencia Artificial", image: "/cursos/el-creador-estrategico/modulo-16.jpg" },
  { number: "17", title: "Automatización", image: "/cursos/el-creador-estrategico/modulo-17.jpg" },
  { number: "18", title: "Conversión", image: "/cursos/el-creador-estrategico/modulo-18.jpg" },
  { number: "19", title: "Monetización", image: "/cursos/el-creador-estrategico/modulo-19.jpg" },
  { number: "20", title: "Escalamiento", image: "/cursos/el-creador-estrategico/modulo-20.jpg" },
];

export const products: Product[] = [
  {
    id: "el-creador-estrategico",
    category: "Cursos",
    eyebrow: "Programa completo",
    title: "El Creador Estratégico",
    description:
      "Una ruta de principio a fin para construir tu marca, crear contenido con intención y convertir tu audiencia en un negocio escalable.",
    format: "Curso online · 20 módulos · 80 clases",
    status: "Disponible",
    accent: "#e6007e",
    icon: "20",
    href: "/academia/el-creador-estrategico",
    cover: "/cursos/el-creador-estrategico/modulo-01.jpg",
  },
  {
    id: "instagram-convierte",
    category: "Cursos",
    eyebrow: "Taller intensivo",
    title: "Instagram que conecta y convierte",
    description:
      "Contenido, narrativa y llamadas a la acción para transformar una cuenta activa en una herramienta de negocio.",
    format: "Taller online · 3 sesiones",
    status: "Próximamente",
    accent: "#8b5cf6",
    icon: "IG",
  },
  {
    id: "calendario-contenidos",
    category: "Recursos",
    eyebrow: "Sistema editable",
    title: "Calendario estratégico de contenidos",
    description:
      "Una estructura simple para planificar campañas, organizar ideas y publicar con intención durante todo el mes.",
    format: "Plantilla digital",
    status: "Disponible",
    accent: "#00b4ff",
    icon: "30",
  },
  {
    id: "kit-identidad",
    category: "Recursos",
    eyebrow: "Kit de trabajo",
    title: "Fundamentos de identidad digital",
    description:
      "Guías y ejercicios para alinear propósito, tono, mensajes y presencia visual antes de diseñar o rediseñar tu marca.",
    format: "Workbook descargable",
    status: "Disponible",
    accent: "#22c55e",
    icon: "ID",
  },
  {
    id: "auditoria-express",
    category: "Servicios",
    eyebrow: "Diagnóstico profesional",
    title: "Auditoría de marca express",
    description:
      "Una revisión enfocada de tu presencia digital con hallazgos, prioridades y próximos pasos accionables.",
    format: "Entrega personalizada",
    status: "Disponible",
    accent: "#f97316",
    icon: "01",
  },
  {
    id: "consultoria-uno-a-uno",
    category: "Servicios",
    eyebrow: "Sesión estratégica",
    title: "Consultoría 1:1 con Yury",
    description:
      "Una sesión para destrabar decisiones, ordenar tu comunicación y salir con un plan de acción claro para tu marca.",
    format: "Sesión privada online",
    status: "Disponible",
    accent: "#e6007e",
    icon: "1:1",
  },
];
