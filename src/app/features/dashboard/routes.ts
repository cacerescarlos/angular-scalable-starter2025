import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../../core/guards/auth.guard';

export const DASHBOARD_ROUTES: Routes = [
  { path: '',
    // canActivate: [AuthGuard],
    // data: { isAdmin: true },
    component: HomeComponent }
];
