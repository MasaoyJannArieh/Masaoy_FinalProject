import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  loginForm;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login(): void {

    if (this.loginForm.invalid) {
  
      alert('Please complete all fields.');
  
      return;
  
    }
  
    const value = this.loginForm.value;
  
    const success = this.auth.login(
      value.email!,
      value.password!
    );
  
    if (success) {
  
      alert('Login Successful!');
  
      this.router.navigate(['/home']);
  
    }
  
    else {
  
      alert('No account found. Please sign up first.');
  
    }
  
  }

}
=======

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c
