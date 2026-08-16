export type CourseLesson = {
  number: string;
  title: string;
  duration: string;
  objective: string;
  concept: string;
  framework: string[];
  example: string;
  practice: string;
  deliverable: string;
};

export type CourseMission = {
  title: string;
  brief: string;
  steps: string[];
  deliverable: string;
};

export type CourseResource = {
  title: string;
  type: "Plantilla" | "Guía" | "Tablero" | "Referencia oficial";
  description: string;
  href?: string;
};

export type CourseModuleContent = {
  number: string;
  slug: string;
  title: string;
  phase: string;
  phaseNumber: string;
  duration: string;
  promise: string;
  summary: string;
  outcomes: string[];
  lessons: CourseLesson[];
  mission: CourseMission;
  checklist: string[];
  resources: CourseResource[];
};

export type CoursePhase = {
  number: string;
  title: string;
  range: string;
  description: string;
  image: string;
  imageAlt: string;
};
