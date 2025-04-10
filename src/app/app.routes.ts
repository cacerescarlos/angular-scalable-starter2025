import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/admin/main-layout.component';
import { PublicLayoutComponent } from './core/layout/public/public-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/clientes/routes').then(m => m.CLIENTES_ROUTES)
            }
        ]
    },
  {
        path: 'dashboard',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/dashboard/routes').then(m => m.DASHBOARD_ROUTES)
            }
        ]
    },
];
