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

export const developerApplication: Application = {
  id: "developer",
  name: "Desarrollador",
  intro: `
¡Bienvenido a la postulación para Developer!
Buscamos personas con experiencia en programación, automatización o bots.
Cuéntanos qué puedes aportar al equipo.
`
}

export const designerApplication: Application = {
  id: "designer",
  name: "Diseñador",
  intro: `
Gracias por tu interés en unirte como Designer.
Queremos conocer tu estilo, tu experiencia y qué te inspira a colaborar.
`
}

export const editorApplication: Application = {
  id: "editor",
  name: "Editor",
  intro: `
¡Hola! Nos alegra que quieras aplicar como Editor.
Cuéntanos sobre tu experiencia editando y tu motivación.
`
}

export default [
  staffApplication,
  developerApplication,
  designerApplication,
  editorApplication
]
