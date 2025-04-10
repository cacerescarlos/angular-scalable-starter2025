import { Injectable, signal } from '@angular/core';
import { AuthSession } from '../models/auth.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly key = environment.sessionStorageKey;
  private session = signal<AuthSession | null>(null);

  constructor() {
    const raw = localStorage.getItem(this.key);
    if (raw) this.session.set(JSON.parse(raw));
  }

  isLoggedIn(): boolean {
    return !!this.session()?.token;
  }

  isAdmin(): boolean {
    return !!this.session()?.isAdmin;
  }

  login(data: AuthSession) {
    localStorage.setItem(this.key, JSON.stringify(data));
    this.session.set(data);
  }

  logout() {
    localStorage.removeItem(this.key);
    this.session.set(null);
  }

  get user(): AuthSession | null {
    return this.session();
  }
}
