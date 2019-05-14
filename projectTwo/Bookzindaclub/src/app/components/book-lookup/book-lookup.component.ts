import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-lookup',
  templateUrl: './book-lookup.component.html',
  styleUrls: ['./book-lookup.component.css']
})
export class BookLookupComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
  }

}
