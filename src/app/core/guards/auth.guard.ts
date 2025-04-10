import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    return router.createUrlTree(['/auth/login'], {
      queryParams: { redirect: state.url }
    });
  }

  // if (route.data?.isAdmin && !auth.isAdmin()) {
  //   return router.createUrlTree(['/error/not-allowed']);
  // }

  return true;
};
