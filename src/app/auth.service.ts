import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signup(user: any): void {

    localStorage.setItem('user', JSON.stringify(user));

  }

  login(email: string, password: string): boolean {

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (
      user.email === email &&
      user.password === password
    ) {

      localStorage.setItem('loggedIn', 'true');

      return true;

    }

    return false;

  }

  logout(): void {

    localStorage.removeItem('loggedIn');

  }

  isLoggedIn(): boolean {

    return localStorage.getItem('loggedIn') === 'true';

  }

}