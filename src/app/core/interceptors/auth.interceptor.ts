import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const session = auth.user;

  if (session?.token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${session.token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
