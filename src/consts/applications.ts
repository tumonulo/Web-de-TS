import type { Application } from '@/types/applications'

export const staffApplication: Application = {
  id: "staff",
  name: "Staff",
  intro: `
¡Hola! Gracias por querer unirte al staff. 
Por favor responde con sinceridad y completa todas las preguntas obligatorias.
`,
  questions: [
    {
      label: "Nombre completo",
      type: "short",
      required: true,
      placeholder: "Tu nombre aquí",
      maxLength: 50
    },
    {
      label: "Edad",
      type: "short",
      required: true,
      placeholder: "Ej: 18"
    },
    {
      label: "¿Tienes experiencia previa como staff? Si es así, detalla.",
      type: "long",
      required: true,
      maxLength: 500
    },
    {
      label: "Días disponibles para moderar",
      type: "multiselect",
      required: true,
      options: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    },
    {
      label: "Motivación para unirte al staff",
      type: "long",
      required: true,
      maxLength: 300
    }
  ]
}

export default [staffApplication]