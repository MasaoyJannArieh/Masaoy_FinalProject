import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { filter } from 'rxjs';
=======
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
<<<<<<< HEAD
    CommonModule,
=======
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

<<<<<<< HEAD
  currentUrl = '';

  constructor(private router: Router) {

    this.currentUrl = this.router.url;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.url;
      });

  }

  showNavbar(): boolean {

    return !(
      this.currentUrl === '/login' ||
      this.currentUrl === '/signup' ||
      this.currentUrl === '/'
    );

  }
=======
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c
}