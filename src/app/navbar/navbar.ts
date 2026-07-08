import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
=======
import { RouterLink, RouterLinkActive } from '@angular/router';
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

<<<<<<< HEAD
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

=======
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c
}