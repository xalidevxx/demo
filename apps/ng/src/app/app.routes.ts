import { Route } from '@angular/router'

export const routes: Route[] = [
	{ path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
	{ path: '**', redirectTo: '' },
]
