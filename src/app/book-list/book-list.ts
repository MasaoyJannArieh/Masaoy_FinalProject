import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  status: string;
  rating: number;
  coverUrl: string;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookListComponent {

  books: Book[] = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self Help',
      publicationYear: 2018,
      status: 'Read',
      rating: 5,
      coverUrl: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg'
    },
    {
      id: 2,
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      genre: 'Fantasy',
      publicationYear: 1997,
      status: 'Currently Reading',
      rating: 4,
      coverUrl: 'https://covers.openlibrary.org/b/isbn/9780439554930-L.jpg'
    },
    {
      id: 3,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      publicationYear: 1937,
      status: 'Want to Read',
      rating: 5,
      coverUrl: 'https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg'
    },
    {
      id:4,
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "publicationYear": 1997,
      "status": "Completed",
      "rating": 5,
      "coverUrl": "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg"
    },
    {
      id:5,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publicationYear": 1937,
      "status": "Reading",
      "rating": 5,
      "coverUrl": "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg"
    },
    {
      id:6,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publicationYear": 1954,
      "status": "Completed",
      "rating": 5,
      "coverUrl": "https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg"
    },
    {
      id:7,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Classic",
      "publicationYear": 1960,
      "status": "Completed",
      "rating": 5,
      "coverUrl": "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
    },
    {
      id:8,
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "publicationYear": 1949,
      "status": "Completed",
      "rating": 5,
      "coverUrl": "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
    },
    {
      id:9,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "publicationYear": 1925,
      "status": "Not Started",
      "rating": 4,
      "coverUrl": "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
    },
    {
      id:10,
          "title": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "genre": "Classic",
          "publicationYear": 1951,
          "status": "Reading",
          "rating": 4,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg"
        },
        {
          id:11,
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "genre": "Romance",
          "publicationYear": 1813,
          "status": "Completed",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
        },
        {
          id:12,
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "genre": "Adventure",
          "publicationYear": 1988,
          "status": "Completed",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
        },
        {
          id:13,
          "title": "The Da Vinci Code",
          "author": "Dan Brown",
          "genre": "Mystery",
          "publicationYear": 2003,
          "status": "Reading",
          "rating": 4,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg"
        },
        {
          id:14,
          "title": "Percy Jackson: The Lightning Thief",
          "author": "Rick Riordan",
          "genre": "Fantasy",
          "publicationYear": 2005,
          "status": "Completed",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780786838653-L.jpg"
        },
        {
          id:15,
          "title": "The Hunger Games",
          "author": "Suzanne Collins",
          "genre": "Science Fiction",
          "publicationYear": 2008,
          "status": "Completed",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780439023528-L.jpg"
        },
        {
          id:16,
          "title": "Dune",
          "author": "Frank Herbert",
          "genre": "Science Fiction",
          "publicationYear": 1965,
          "status": "Reading",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg"
        },
        {
          id:17,
          "title": "The Maze Runner",
          "author": "James Dashner",
          "genre": "Science Fiction",
          "publicationYear": 2009,
          "status": "Completed",
          "rating": 4,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780385737951-L.jpg"
        },
        {
          id:18,
          "title": "The Fault in Our Stars",
          "author": "John Green",
          "genre": "Romance",
          "publicationYear": 2012,
          "status": "Completed",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg"
        },
        {
          id:19,
          "title": "Atomic Habits",
          "author": "James Clear",
          "genre": "Self Help",
          "publicationYear": 2018,
          "status": "Reading",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
        },
        {
          id:20,
          "title": "Rich Dad Poor Dad",
          "author": "Robert Kiyosaki",
          "genre": "Finance",
          "publicationYear": 1997,
          "status": "Completed",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
        },
        {
          id:21,
          "title": "The Psychology of Money",
          "author": "Morgan Housel",
          "genre": "Finance",
          "publicationYear": 2020,
          "status": "Reading",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
        },
        {
          id:22,
          "title": "Clean Code",
          "author": "Robert C. Martin",
          "genre": "Programming",
          "publicationYear": 2008,
          "status": "Reading",
          "rating": 4,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
        },
        {
          id:23,
          "title": "Introduction to Algorithms",
          "author": "Thomas H. Cormen",
          "genre": "Programming",
          "publicationYear": 2009,
          "status": "Not Started",
          "rating": 5,
          "coverUrl": "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg"
        },
        {
          id: 24,
          title: 'The Pragmatic Programmer',
          author: 'Andrew Hunt & David Thomas',
          genre: 'Programming',
          publicationYear: 1999,
          status: 'Reading',
          rating: 4,
          coverUrl: 'https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg'
        },
        {
          id: 25,
          title: 'Think and Grow Rich',
          author: 'Napoleon Hill',
          genre: 'Self Help',
          publicationYear: 1937,
          status: 'Completed',
          rating: 3,
          coverUrl: 'https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg'
        }
      ];

  deleteBook(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this book?');

    if (confirmDelete) {
      this.books = this.books.filter(book => book.id !== id);
    }
  }
}
