import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 style="text-align:center">Application de Facturation</h1>
    <p style="text-align:center">Bienvenue</p>
  `
})
export class HomeComponent { }
