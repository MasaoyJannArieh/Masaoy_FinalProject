import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { BookListComponent } from './book-list/book-list';
import { AddBookComponent } from './add-book/add-book';
import { EditBookComponent } from './edit-book/edit-book';

export const routes: Routes = [

  {
    path: '',
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
    redirectTo: ''
  }

];