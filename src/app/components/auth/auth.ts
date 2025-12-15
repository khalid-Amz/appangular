import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {

  username = '';
  password = '';
  message = '';

  constructor(
    private auth: AuthService,
    private router: Router   // ✅ injection du router
  ) { }

  async login() {
    const success = await this.auth.login(this.username, this.password);

    if (success) {
      this.message = 'Connexion réussie';
      this.router.navigate(['/products']); // ✅ REDIRECTION
    } else {
      this.message = 'Erreur de connexion';
    }
  }

  async register() {
    await this.auth.register({
      username: this.username,
      password: this.password
    });

    this.message = 'Utilisateur créé';
  }
}
