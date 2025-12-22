import type { Application } from '@/types/applications'

import applicationsBanner from '@/assets/banners/applicationsBanner.png'
import staff from '@/assets/img/staff.webp'
import dev from '@/assets/img/dev.webp'
import designer from '@/assets/img/designer.png'
import editor from '@/assets/img/editor.png'
import creator from '@/assets/img/creator.png'

/* =========================
   STAFF APPLICATION
========================= */

export const staffApplication: Application = {
  id: 'staff',
  name: 'Staff',
  description: 'Encargado de la supervisión y correcta gestión de la comunidad.',
  color: '#f3e6a6',
  banner: {
    url: applicationsBanner.src,
    alt: 'Banner de postulaciones de TS'
  },
  icon: {
    url: staff.src,
    alt: 'Icono de Staff'
  },
  sections: [
    {
      name: 'Información del Usuario',
      questions: [
        {
          label: '¿ID de usuario de Discord?',
          aside:
            'Te dejamos un <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> para aprender cómo obtener tu ID.',
          type: 'short',
          required: true
        },
        {
          label: '¿Edad?',
          aside: 'Procura proporcionar tu edad real.',
          type: 'short',
          required: true
        },
        {
          label: '¿Región?',
          aside: 'Europa, América, Asia, África, Oceanía o Antártida.',
          type: 'short',
          required: true
        },
        {
          label: '¿Disponibilidad horaria?',
          aside: 'Tiempo aproximado que puedes dedicar a TS Community Brawl.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Habilidades y Experiencia',
      questions: [
        {
          label: '¿Por qué deseas postularte como Staff?',
          type: 'long',
          required: true
        },
        {
          label: '¿Tienes experiencia previa como Staff en otras comunidades de Discord?',
          type: 'select',
          options: ['Sí', 'No'],
          required: true
        },
        {
          label:
            'Describe tu experiencia: nombre del servidor, rol desempeñado y número aproximado de miembros.',
          aside:
            'Si no tienes experiencia previa, puedes dejar esta pregunta en blanco. Esto no implica un rechazo automático.',
          type: 'long',
          required: false
        },
        {
          label: 'Según tu criterio, ¿qué significa ser un buen Staff?',
          type: 'long',
          required: true
        },
        {
          label: '¿Cuáles consideras que son las funciones de cada rango del Staff?',
          aside:
            'Owner, Co-Owner, Administrador, Supervisor, Instructor y Moderador.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Casos Prácticos de Moderación',
      questions: [
        {
          label:
            '¿Qué harías si un miembro de TS Community Brawl te insulta?',
          type: 'select',
          required: true,
          options: [
            'Baneo permanente',
            'Muteo permanente',
            'Aislamiento permanente',
            'Advertencia (warn)',
            'Aviso verbal sin sanción',
            'Otro'
          ]
        },
        {
          label: 'Justifica tu respuesta anterior',
          aside: 'Opcional si consideras que no requiere explicación.',
          type: 'short',
          required: false
        },
        {
          label:
            '¿Qué harías si un miembro comparte un enlace a su propio servidor de Discord en un canal público?',
          type: 'select',
          required: true,
          options: [
            'Baneo permanente',
            'Muteo permanente',
            'Aislamiento permanente',
            'Advertencia (warn)',
            'Aviso verbal sin sanción',
            'Otro'
          ]
        },
        {
          label: 'Justifica tu respuesta anterior',
          aside: 'Opcional si consideras que no requiere explicación.',
          type: 'long',
          required: false
        },
        {
          label:
            '¿Qué harías si observas que un Staff de alto rango abusa de su poder?',
          type: 'long',
          required: true
        },
        {
          label:
            '¿Cuáles consideras que son buenas prácticas a la hora de moderar un servidor?',
          type: 'long',
          required: true
        }
      ]
    }
  ]
}

/* =========================
   DEVELOPER APPLICATION
========================= */

export const devApplication: Application = {
  id: 'dev',
  name: 'Desarrollador',
  description:
    'Encargado del desarrollo, mantenimiento y mejora de los sistemas técnicos del servidor.',
  color: '#c7d8f0',
  banner: {
    url: applicationsBanner.src,
    alt: 'Banner de postulaciones de TS'
  },
  icon: {
    url: dev.src,
    alt: 'Icono de Desarrollador'
  },
  sections: [
    {
      name: 'Información del Usuario',
      questions: [
        {
          label: '¿ID de usuario de Discord?',
          aside:
            'Consulta este <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> para aprender cómo obtener tu ID.',
          type: 'short',
          required: true
        },
        {
          label: '¿Edad?',
          aside: 'Procura proporcionar tu edad real.',
          type: 'short',
          required: true
        },
        {
          label: '¿Región?',
          aside: 'Europa, América, Asia, África, Oceanía o Antártida.',
          type: 'short',
          required: true
        },
        {
          label: '¿Disponibilidad horaria?',
          aside: 'Tiempo que puedes dedicar al desarrollo del proyecto.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Habilidades y Experiencia',
      questions: [
        {
          label: '¿Por qué deseas postularte como Desarrollador?',
          type: 'long',
          required: true
        },
        {
          label:
            '¿Qué lenguajes de programación dominas y qué experiencia tienes con ellos?',
          type: 'long',
          required: true
        },
        {
          label: '¿En qué tipos de bases de datos tienes experiencia?',
          aside: 'Por ejemplo: MongoDB, MySQL, PostgreSQL.',
          type: 'long',
          required: true
        },
        {
          label: '¿Qué frameworks utilizas habitualmente?',
          aside: 'Express, React, Angular, Next.js, etc.',
          type: 'long',
          required: true
        },
        {
          label:
            '¿Qué librerías o frameworks para bots de Discord conoces?',
          aside: 'discord.js, discord.py, Serenity, aoi.js, etc.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Prueba Técnica',
      questions: [
        {
          label:
            '¿Para qué se utilizan "\\" y "\\n" en programación?',
          type: 'long',
          required: true
        },
        {
          label:
            'Explica qué son los arrays y las funciones en programación.',
          type: 'long',
          required: true
        },
        {
          label:
            'Crea un programa que determine si un número es par o impar y lo muestre por consola.',
          type: 'long',
          required: false
        },
        {
          label:
            'Crea un bot de Discord sencillo que responda con "Pong" cuando alguien escriba "ping" en el servidor con ID 123456789.',
          type: 'long',
          required: false
        }
      ]
    }
  ]
}

/* =========================
   DESIGNER APPLICATION
========================= */

export const designerApplication: Application = {
  id: 'designer',
  name: 'Diseñador',
  description:
    'Encargado del diseño y mantenimiento de la identidad visual de la comunidad.',
  color: '#c7ebe6',
  banner: {
    url: applicationsBanner.src,
    alt: 'Banner de postulaciones de TS'
  },
  icon: {
    url: designer.src,
    alt: 'Icono de Diseñador'
  },
  sections: [
    {
      name: 'Información del Usuario',
      questions: [
        {
          label: '¿ID de usuario de Discord?',
          aside:
            'Consulta este <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> para obtener tu ID.',
          type: 'short',
          required: true
        },
        {
          label: '¿Edad?',
          aside: 'Procura proporcionar tu edad real.',
          type: 'short',
          required: true
        },
        {
          label: '¿Región?',
          aside: 'Europa, América, Asia, África, Oceanía o Antártida.',
          type: 'short',
          required: true
        },
        {
          label: '¿Disponibilidad horaria?',
          aside: 'Tiempo que puedes dedicar al diseño.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Habilidades y Experiencia',
      questions: [
        {
          label: '¿Por qué deseas postularte como Diseñador?',
          type: 'long',
          required: true
        },
        {
          label: '¿Tienes experiencia como Diseñador?',
          type: 'multiselect',
          required: true,
          options: [
            'Diseño gráfico (posters, banners, redes sociales)',
            'Diseño web y UX/UI',
            'Modelado 3D y animación',
            'No',
            'Otro'
          ]
        },
        {
          label: 'Cuéntanos sobre tu experiencia',
          aside:
            'Si no tienes experiencia previa, puedes omitir esta pregunta.',
          type: 'long',
          required: false
        },
        {
          label: 'Comparte un enlace a algún diseño reciente',
          aside:
            'Portfolio, Behance, Drive, etc.',
          type: 'long',
          required: false
        }
      ]
    }
  ]
}

/* =========================
   EDITOR APPLICATION
========================= */

export const editorApplication: Application = {
  id: 'editor',
  name: 'Editor',
  description:
    'Encargado de la creación, edición y optimización de contenido multimedia.',
  color: '#e2ccef',
  banner: {
    url: applicationsBanner.src,
    alt: 'Banner de postulaciones de TS'
  },
  icon: {
    url: editor.src,
    alt: 'Icono de Editor'
  },
  sections: [
    {
      name: 'Información del Usuario',
      questions: [
        {
          label: '¿ID de usuario de Discord?',
          aside:
            'Consulta este <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> para obtener tu ID.',
          type: 'short',
          required: true
        },
        {
          label: '¿Edad?',
          aside: 'Procura proporcionar tu edad real.',
          type: 'short',
          required: true
        },
        {
          label: '¿Región?',
          aside: 'Europa, América, Asia, África, Oceanía o Antártida.',
          type: 'short',
          required: true
        },
        {
          label: '¿Disponibilidad horaria?',
          aside: 'Tiempo que puedes dedicar a la edición.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Habilidades y Experiencia',
      questions: [
        {
          label: '¿Por qué deseas postularte como Editor?',
          type: 'long',
          required: true
        },
        {
          label: '¿Tienes experiencia como Editor?',
          type: 'multiselect',
          required: true,
          options: [
            'GFX (diseño estático)',
            'VFX (edición de vídeo)',
            'No',
            'Otro'
          ]
        },
        {
          label: 'Cuéntanos sobre tu experiencia',
          type: 'long',
          required: false
        },
        {
          label: 'Comparte un enlace a algún vídeo editado recientemente',
          type: 'long',
          required: false
        },
        {
          label: 'Según tu criterio, ¿qué significa ser un buen Editor?',
          type: 'long',
          required: true
        }
      ]
    }
  ]
}

/* =========================
   CREATOR APPLICATION
========================= */

export const creatorApplication: Application = {
  id: 'creator',
  name: 'Creador',
  description:
    'Creadores de contenido que colaboran activamente con la comunidad.',
  color: '#a9f5a2',
  banner: {
    url: applicationsBanner.src,
    alt: 'Banner de postulaciones de TS'
  },
  icon: {
    url: creator.src,
    alt: 'Icono de Creators Program'
  },
  sections: [
    {
      name: 'Información del Usuario',
      questions: [
        {
          label: '¿ID de usuario de Discord?',
          aside:
            'Consulta este <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> para obtener tu ID.',
          type: 'short',
          required: true
        },
        {
          label: '¿Edad?',
          aside: 'Procura proporcionar tu edad real.',
          type: 'short',
          required: true
        },
        {
          label: '¿Región?',
          aside: 'Europa, América, Asia, África, Oceanía o Antártida.',
          type: 'short',
          required: true
        },
        {
          label: '¿Disponibilidad horaria?',
          aside: 'Tiempo que puedes dedicar a la creación de contenido.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Canales y Plataformas',
      questions: [
        {
          label: '¿En qué plataformas creas contenido?',
          type: 'multiselect',
          required: true,
          options: [
            'YouTube',
            'Twitch',
            'TikTok',
            'Instagram',
            'X (Twitter)',
            'Otro'
          ]
        },
        {
          label: 'Enlace(s) a tus canales o perfiles',
          aside: 'Puedes incluir varios enlaces separados por comas.',
          type: 'long',
          required: true
        },
        {
          label: '¿Qué tipo de contenido creas habitualmente?',
          aside: 'Gameplays, clips, directos, tutoriales, etc.',
          type: 'long',
          required: true
        }
      ]
    },
    {
      name: 'Actividad y Compromiso',
      questions: [
        {
          label:
            '¿Por qué deseas formar parte del programa de creadores de TS?',
          type: 'long',
          required: true
        },
        {
          label: '¿Con qué frecuencia publicas contenido?',
          type: 'select',
          required: true,
          options: [
            'Diariamente',
            'Varias veces por semana',
            'Una vez por semana',
            'Ocasionalmente'
          ]
        }
      ]
    },
    {
      name: 'Opinión Personal',
      questions: [
        {
          label:
            '¿Qué crees que puede aportar tu contenido a TS Community Brawl?',
          type: 'long',
          required: true
        }
      ]
    }
  ]
}

export default [
  staffApplication,
  devApplication,
  designerApplication,
  editorApplication,
  creatorApplication
]
