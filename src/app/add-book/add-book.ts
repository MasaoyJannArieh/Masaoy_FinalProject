import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBookComponent {

  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      publicationYear: ['', Validators.required],
      status: ['Want to Read', Validators.required],
      rating: [1, Validators.required],
      coverUrl: ['']
    });

  }

  addBook() {

    if (this.bookForm.invalid) {
      alert('Please complete all required fields.');
      return;
    }

    console.log(this.bookForm.value);

    alert('Book added successfully!');

    this.bookForm.reset({
      status: 'Want to Read',
      rating: 1
    });

  }

}