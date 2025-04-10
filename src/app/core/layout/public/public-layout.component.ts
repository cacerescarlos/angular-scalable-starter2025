import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-public-layout',
  template: `
    <div class="public-layout">
      <router-outlet />
    </div>
  `,
  styles: [`
    .public-layout {
      padding: 2rem;
      background-color: #fefefe;
    }
  `],
  imports: [RouterOutlet]
})
export class PublicLayoutComponent {}
