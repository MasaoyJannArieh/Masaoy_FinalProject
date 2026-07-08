import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from '../services/book';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookFormComponent {

  book: Book = {
    title: '',
    author: '',
    genre: '',
    publicationYear: new Date().getFullYear(),
    status: 'Want to Read',
    rating: 1,
    coverUrl: ''
  };

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  saveBook(): void {
    this.bookService.addBook(this.book).subscribe({
      next: () => {
        alert('Book saved successfully!');
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error(err);
        alert('Failed to save book.');
      }
    });
  }
}