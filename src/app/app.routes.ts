import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { HomeComponent } from './home/home';
import { BookListComponent } from './book-list/book-list';
import { AddBookComponent } from './add-book/add-book';
import { EditBookComponent } from './edit-book/edit-book';
import { BookFormComponent } from './book-form/book-form';

export const routes: Routes = [

  {
    path: '',
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
    path: 'add-book',
    component: BookFormComponent
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];