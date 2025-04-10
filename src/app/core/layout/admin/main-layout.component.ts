// src/app/core/layout/main-layout.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  templateUrl:'./main-layout.component.html',
  styleUrl:  './main-layout.component.scss',
  imports: [RouterOutlet]
})
export class MainLayoutComponent {}
