import type { Routes } from '@/types/routes'

export const routes: Routes = {
  league: { name: 'Liga', path: '/liga' },
  discord: { name: 'Discord', path: 'https://discord.gg/8nu3ZdDkp7' },

  applications: [
    { name: 'Staff', path: '/applications/staff' },
    { name: 'Desarrollador', path: '/applications/developer' },
    { name: 'Diseñador', path: '/applications/Designer' },
    { name: 'Editor', path: '/applications/editor' },
    { name: 'Programa de Creadores', path: '/applications/creators-program' },
  ],
}