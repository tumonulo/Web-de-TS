import type { Routes } from '@/types/routes'

export const routes: Routes = {
  league: { name: 'Liga', path: '/liga' },
  discord: { name: 'Discord', path: 'https://discord.gg/8nu3ZdDkp7' },

  applications: [
    { name: 'Staff', path: '/aplications/staff' },
    { name: 'Desarrollador', path: '/aplications/developer' },
    { name: 'Diseñador', path: '/aplications/Designer' },
    { name: 'Editor', path: '/aplications/editor' },
    { name: 'Programa de Creadores', path: '/aplications/creators-program' },
  ],
}