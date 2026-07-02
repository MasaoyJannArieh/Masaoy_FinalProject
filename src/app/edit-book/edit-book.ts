import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.css'
})
export class EditBookComponent {

  bookForm: FormGroup;
  bookId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.bookId = Number(this.route.snapshot.paramMap.get('id'));

    this.bookForm = this.fb.group({
      title: ['Atomic Habits', Validators.required],
      author: ['James Clear', Validators.required],
      genre: ['Self Help', Validators.required],
      publicationYear: [2018, Validators.required],
      status: ['Read', Validators.required],
      rating: [5, Validators.required],
      coverUrl: ['https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg']
    });

  }

  updateBook() {

    if (this.bookForm.invalid) {
      alert('Please complete all required fields.');
      return;
    }

    console.log('Book ID:', this.bookId);
    console.log(this.bookForm.value);

    alert('Book updated successfully!');

    this.router.navigate(['/books']);
  }

}