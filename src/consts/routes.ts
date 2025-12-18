import type { Routes } from '@/types/routes'

export const routes: Routes = {
  league: { name: 'Liga', path: '/liga' },
  discord: { name: 'Discord', path: '/discord' },

  applications: {
    name: 'Postulaciones',
    path: '/applications',
    children: [
      { name: 'Staff', path: '/applications/staff' },
      { name: 'Desarrollador', path: '/applications/dev' },
      { name: 'Diseñador', path: '/applications/designer' },
      { name: 'Editor', path: '/applications/editor' },
      { name: 'Programa de Creadores', path: '/applications/creators-program' }
    ]
  }
}