import type { Application } from '@/types/applications'
import applicationsBanner from '@/assets/banners/applicationsBanner.png'
import staff from '@/assets/img/staff.webp'
import dev from '@/assets/img/dev.webp'
import designer from '@/assets/img/designer.png'
import editor from '@/assets/img/editor.png'
import creator from '@/assets/img/creator.png'

export const staffApplication: Application = {
  id: "staff",
  name: "Staff",
  description: "Encargado de la supervisión y correcta gestión de la comunidad.",
  color: "#f3e6a6",
  banner: {
    url: applicationsBanner.src,
    alt: "Banner de postulaciones de TS"
  },
  icon: {
    url: staff.src,
    alt: "Icono de Staff"
  },
  sections: [
    {
      name: "Información de Usuario",
      questions: [
        {
          label: "¿ID de usuario? ( Discord )",
          aside: 'A continuación te dejamos adjuntado un <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> donde puedes ver cómo obtener tu ID de Discord.',
          type: "short",
          required: true,
        },
        {
          label: "¿Edad?",
          aside: "Procura proporcionar tú edad real.",
          type: "short",
          required: true
        },
        {
          label: "¿Región?",
          aside: "Europa, America, Asia, África, Oceanía, y Antartida.",
          type: "short",
          required: true
        },
        {
          label: "¿Disponibilidad horaria?",
          aside: "Tiempo para dedicar a TS Community Brawl.",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Habilidades y Experiencia",
      questions: [
        {
          label: "¿Por qué deseas postularte como Staff?",
          type: "long",
          required: true
        },
        {
          label: "¿Cuentas con experiencia como Staff en otras comunidades de Discord?",
          type: "select",
          options: [
            "Sí",
            "No"
          ],
          required: true
        },
        {
          label: "Háblanos sobre ella: nombre de cada servidor, tú papel en ellos (rol) y la cantidad de miembros de cada uno.",
          type: "long",
          aside: "Si no cuentas con experiencia siendo Staff en otros servidores de Discord, no es necesario que respondas a esta pregunta y no por ellos significa que vayas a ser rechazado.",
          required: false
        },
        {
          label: "¿Según tu criterio que es ser un buen Staff?",
          type: "long",
          required: true
        },
        {
          label: "¿Cuales crees que son las funciones de cada rango del Staff?",
          type: "long",
          required: true,
          aside: "Owner, Co-Owner, Administrador, Supervisor, Instructor, Moderador."
        }
      ]
    },
    {
      name: "Casos Prácticos de Moderación",
      questions: [
        {
          label: "¿Que harías si un miembro de TS Comunity Brawl te insulta?",
          type: "select",
          required: true,
          options: [
            "Baneo Permamente",
            "Muteo Permamente",
            "Aislamiento Permamente",
            "Warn",
            "Aviso verbal sin penalización",
            "Other"
          ]
        },
        {
          label: "Justifica tu respuesta anterior",
          aside: "Si no ves necesaria esta pregunta, no la contestes.",
          type: "short",
          required: false
        },
        {
          label: "¿Que harías si un miembro envía un enlace a su servidor de Discord en un canal publico de TS Community?",
          type: "select",
          required: true,
          options: [
            "Baneo Permamente",
            "Muteo Permamente",
            "Aislamiento Permamente",
            "Warn",
            "Aviso verbal sin penalización",
            "Other"
          ]
        },
        {
          label: "Justifica tu respuesta anterior",
          aside: "Si no ves necesaria esta pregunta, no la contestes.",
          type: "long",
          required: false
        },
        {
          label: "¿Que harías si ves a un alto rango del Staff abusando de su poder?",
          type: "long",
          required: true
        },
        {
          label: "¿Cuales crees que son buenas practicas a la hora de moderar un servidor?",
          type: "long",
          required: true
        }
      ]
    }
  ]
}

export const devApplication: Application = {
  id: "dev",
  name: "Desarrollador",
  description: "Encargado del desarrollo y mantenimiento de sistemas técnicos del servidor.",
  color: "#c7d8f0",
  banner: {
    url: applicationsBanner.src,
    alt: "Banner de postulaciones de TS"
  },
  icon: {
    url: dev.src,
    alt: "Icono de Desarrollador"
  },
  sections: [
    {
      name: "Información de Usuario",
      questions: [
        {
          label: "¿ID de usuario? ( Discord )",
          aside: 'A continuación te dejamos adjuntado un <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> donde puedes ver cómo obtener tu ID de Discord.',
          type: "short",
          required: true,
        },
        {
          label: "¿Edad?",
          aside: "Procura proporcionar tú edad real.",
          type: "short",
          required: true
        },
        {
          label: "¿Región?",
          aside: "Europa, America, Asia, África, Oceanía, y Antartida.",
          type: "short",
          required: true
        },
        {
          label: "¿Disponibilidad horaria?",
          aside: "Tiempo para dedicar a TS Community Brawl.",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Habilidades y Experiencia",
      questions: [
        {
          label: "¿Por qué deseas postularte como Desarrollador?",
          type: "long",
          required: true
        },
        {
          label: "¿Qué lenguajes de programación manejas con fluidez? Háblanos sobre tu experiencia utilizándolos.",
          type: "long",
          required: true
        },
        {
          label: "¿En que tipo de bases de datos te especializas?",
          aside: "MongoDB, SQL...",
          type: "long",
          required: true
        },
        {
          label: "¿En que frameworks te especializas?",
          aside: "Express, React, Angular...",
          type: "long",
          required: true
        },
        {
          label: "¿Qué librerías para programar bots de Discord controlas?",
          aside: "discord.js, discord.py, serenity, aoi...",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Test Técnica",
      questions: [
        {
          label: "¿Para qué sirve '\' y '\n' en la programación?",
          type: "long",
          required: true
        },
        {
          label: "¿Qué son los arrays y las funciones en el mundo de la programación?",
          type: "long",
          required: true
        },
        {
          label: "Crea un programa en el lenguaje de programación que prefieras que determine si un número pasado como variable es par o impar y lo comunique mediante la consola.",
          type: "long",
          required: false
        },
        {
          label: "Crea un bot de Discord sencillo que responda con “Pong” cada vez que alguien envíe el mensaje “ping” en el servidor con ID 123456789.",
          type: "long",
          required: false
        }
      ]
    }
  ]
}

export const designerApplication: Application = {
  id: "designer",
  name: "Diseñador",
  description: "Encargado del diseño y la identidad visual de la comunidad.",
  color: "#c7ebe6",
  banner: {
    url: applicationsBanner.src,
    alt: "Banner de postulaciones de TS"
  },
  icon: {
    url: designer.src,
    alt: "Icono de Diseñador"
  },
  sections: [
    {
      name: "Información de Usuario",
      questions: [
        {
          label: "¿ID de usuario? ( Discord )",
          aside: 'A continuación te dejamos adjuntado un <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> donde puedes ver cómo obtener tu ID de Discord.',
          type: "short",
          required: true,
        },
        {
          label: "¿Edad?",
          aside: "Procura proporcionar tú edad real.",
          type: "short",
          required: true
        },
        {
          label: "¿Región?",
          aside: "Europa, America, Asia, África, Oceanía, y Antartida.",
          type: "short",
          required: true
        },
        {
          label: "¿Disponibilidad horaria?",
          aside: "Tiempo para dedicar a TS Community Brawl.",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Habilidades y Experiencia",
      questions: [
         {
          label: "¿Por qué deseas postularte como Diseñador?",
          type: "long",
          required: true
         },
        {
          label: "¿Cuentas con experiencia como Diseñador?",
          type: "multiselect",
          required: true,
          options: [
            "Sí, diseño gráfico ( posters, banners, redes sociales ).",
            "Sí, diseño web y UX/UI ( Experiencia de usuario e interfaz ).",
            "Modelado 3D y animación ( motion graphics ).",
            "No",
            "Other"
          ]
        },
        {
          label: "Háblanos sobre ella",
          aside: "Si no cuentas con experiencia como Diseñador, no es necesario que respondas a esta pregunta y no por ellos significa que vayas a ser rechazado.",
          type: "long",
          required: false
        },
        {
          label: "Envía un enlace de algún diseño que hayas creado recientemente",
          aside: "Si no cuentas con experiencia como Diseñador, no es necesario que respondas a esta pregunta y no por ello significa que vayas a ser rechazado.",
          type: "long",
          required: false
        }
      ]
    }
  ]
}

export const editorApplication: Application = {
  id: "editor",
  name: "Editor",
  description: "Encargado de la optimización y creación de contenido.",
  color: "#e2ccef",
  banner: {
    url: applicationsBanner.src,
    alt: "Banner de postulaciones de TS"
  },
  icon: {
    url: editor.src,
    alt: "Icono de Editor"
  },
  sections: [
    {
      name: "Información de Usuario",
      questions: [
        {
          label: "¿ID de usuario? ( Discord )",
          aside: 'A continuación te dejamos adjuntado un <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> donde puedes ver cómo obtener tu ID de Discord.',
          type: "short",
          required: true,
        },
        {
          label: "¿Edad?",
          aside: "Procura proporcionar tú edad real.",
          type: "short",
          required: true
        },
        {
          label: "¿Región?",
          aside: "Europa, America, Asia, África, Oceanía, y Antartida.",
          type: "short",
          required: true
        },
        {
          label: "¿Disponibilidad horaria?",
          aside: "Tiempo para dedicar a TS Community Brawl.",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Habilidades y Experiencia",
      questions: [
        {
          label: "¿Por qué deseas postularte como Editor?",
          type: "long",
          required: true
        },
        {
          label: "¿Cuentas con experiencia como Editor?",
          type: "multiselect",
          required: true,
          options: [
            "Sí, GFX ( Diseño estatico )",
            "Sí, VFX ( Videos o cortometrajes )",
            "No",
            "Other"
          ]
        },
        {
          label: "Háblanos sobre ella",
          aside: "Si no cuentas con experiencia siendo Editor en otros servidores de Discord, no es necesario que respondas a esta pregunta y no por ello significa que vayas a ser rechazado.",
          type: "long",
          required: false
        },
        {
          label: "Envía un enlace de algún vídeo que hayas editado recientemente",
          aside: "Si no cuentas con experiencia como Editor, no es necesario que respondas a esta pregunta y no por ellos significa que vayas a ser rechazado.",
          type: "long",
          required: false
        },
        {
          label: "¿Según tu criterio que es ser un buen Editor?",
          type: "long",
          required: true
        }
      ]
    }
  ]
}

export const creatorApplication: Application = {
  id: "creators-program",
  name: "Creators Program",
  description: "Programa dirigido a creadores de contenido interesados en colaborar con la comunidad.",
  color: "#a9f5a2",
  banner: {
    url: applicationsBanner.src,
    alt: "Banner de postulaciones de TS"
  },
  icon: {
    url: creator.src,
    alt: "Icono de Creators Program"
  },
  sections: [
    {
      name: "Información de Usuario",
      questions: [
        {
          label: "¿ID de usuario? ( Discord )",
          aside:
            'A continuación te dejamos adjuntado un <a href="https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje" target="_blank" class="underline text-blue-400">enlace</a> donde puedes ver cómo obtener tu ID de Discord.',
          type: "short",
          required: true
        },
        {
          label: "¿Edad?",
          aside: "Procura proporcionar tu edad real.",
          type: "short",
          required: true
        },
        {
          label: "¿Región?",
          aside: "Europa, América, Asia, África, Oceanía o Antártida.",
          type: "short",
          required: true
        }
      ]
    },
    {
      name: "Canales y Plataformas",
      questions: [
        {
          label: "¿En qué plataformas creas contenido?",
          type: "multiselect",
          required: true,
          options: [
            "YouTube",
            "Twitch",
            "TikTok",
            "Instagram",
            "X (Twitter)",
            "Otra"
          ]
        },
        {
          label: "Enlace(s) a tu(s) canal(es) o perfil(es)",
          aside: "Puedes incluir varios enlaces separados por comas.",
          type: "long",
          required: true
        },
        {
          label: "¿Qué tipo de contenido sueles crear?",
          aside: "Gameplays, clips, directos, ediciones, tutoriales, etc.",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Actividad y Compromiso",
      questions: [
        {
          label: "¿Con qué frecuencia publicas contenido?",
          type: "select",
          required: true,
          options: [
            "Diariamente",
            "Varias veces por semana",
            "Una vez por semana",
            "Ocasionalmente"
          ]
        },
        {
          label: "¿Cuánto tiempo podrías dedicar al programa de creadores?",
          aside: "Sé lo más realista posible.",
          type: "long",
          required: true
        },
        {
          label: "¿Por qué deseas formar parte del Creators Program?",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Opinión Personal",
      questions: [
        {
          label: "¿Qué crees que puede aportar tu contenido a TS Community Brawl?",
          type: "long",
          required: true
        },
        {
          label: "¿Has participado anteriormente en programas de creadores?",
          type: "select",
          required: true,
          options: [
            "Sí",
            "No"
          ]
        },
        {
          label: "Si tu respuesta fue sí, cuéntanos brevemente tu experiencia",
          type: "long",
          required: false
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