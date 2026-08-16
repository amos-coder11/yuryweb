import { phaseOneModules } from "./phase-one";
import { phaseTwoModules } from "./phase-two";
import { phaseThreeModules } from "./phase-three";
import { phaseFourModules } from "./phase-four";
import type { CourseModuleContent, CoursePhase } from "./types";

export type { CourseLesson, CourseMission, CourseModuleContent, CourseResource } from "./types";

export const coursePhases: CoursePhase[] = [
  {
    number: "01",
    title: "Fundamentos de autoridad",
    range: "Módulos 01—05",
    description: "Mentalidad, marca, audiencia, posicionamiento y psicología para construir una base que no dependa de modas.",
    image: "/cursos/el-creador-estrategico/fase-01.png",
    imageAlt: "Mapa visual de autoridad con brújula, audiencia, psicología y posicionamiento",
  },
  {
    number: "02",
    title: "Mensaje y contenido",
    range: "Módulos 06—10",
    description: "Historias, escritura, pilares, distribución y guiones para producir mensajes que conectan y se recuerdan.",
    image: "/cursos/el-creador-estrategico/fase-02.png",
    imageAlt: "Mapa visual de un sistema de contenido desde la historia hasta la distribución",
  },
  {
    number: "03",
    title: "Producción y plataformas",
    range: "Módulos 11—15",
    description: "Grabación, edición y sistemas nativos para Instagram, TikTok y YouTube con calidad y consistencia.",
    image: "/cursos/el-creador-estrategico/fase-03.png",
    imageAlt: "Mapa visual de producción con cámara, edición y formatos digitales",
  },
  {
    number: "04",
    title: "Negocio y escala",
    range: "Módulos 16—20",
    description: "Inteligencia artificial, automatización, conversión, monetización y operaciones para crecer sin perder el control.",
    image: "/cursos/el-creador-estrategico/fase-04.png",
    imageAlt: "Mapa visual de inteligencia artificial, automatización, conversión y escalamiento",
  },
];

export const courseModules: CourseModuleContent[] = [
  ...phaseOneModules,
  ...phaseTwoModules,
  ...phaseThreeModules,
  ...phaseFourModules,
];

export function getCourseModule(number: string) {
  return courseModules.find((module) => module.number === number);
}

export function getAdjacentModules(number: string) {
  const index = courseModules.findIndex((module) => module.number === number);
  return {
    previous: index > 0 ? courseModules[index - 1] : null,
    next: index >= 0 && index < courseModules.length - 1 ? courseModules[index + 1] : null,
  };
}
