import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  getWelcomeMessage(): string {
    return 'Bienvenido desde el servicio de Dashboard!';
  }
}
