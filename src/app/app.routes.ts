import { Routes } from '@angular/router';

<<<<<<< HEAD
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
=======
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c
import { HomeComponent } from './home/home';
import { BookListComponent } from './book-list/book-list';
import { AddBookComponent } from './add-book/add-book';
import { EditBookComponent } from './edit-book/edit-book';

export const routes: Routes = [

  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'home',
=======
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c
    component: HomeComponent
  },

  {
    path: 'books',
    component: BookListComponent
  },

  {
    path: 'add-book',
    component: AddBookComponent
  },

  {
    path: 'edit-book/:id',
    component: EditBookComponent
  },

  {
    path: '**',
<<<<<<< HEAD
    redirectTo: 'login'
=======
    redirectTo: ''
>>>>>>> f01f04b7fb9f677c62cc253683c9397e14a3ff3c
  }

];