import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IBook } from "../../../models/book.interface";

@Component({
  selector: 'book-list-cards',
  templateUrl: './book-list-cards.component.html',
  styleUrls: ['./book-list-cards.component.scss']
})
export class BookListCardsComponent implements OnInit {
  @Output() onMarkAsReadClicked: EventEmitter<IBook> = new EventEmitter();
  @Output() onEditClicked: EventEmitter<IBook> = new EventEmitter();
  @Output() onDeleteClicked: EventEmitter<IBook> = new EventEmitter();

  private bookGroups: Array<Array<IBook>> = [];

  constructor() {}

  @Input("books")
  set books(books: Array<IBook>) {
    if (!Array.isArray(books)) {
      return;
    }

    let chunkSize = 3;

    for (let i = 0; i < books.length; i += chunkSize) {
      this.bookGroups.push(books.slice(i, i + chunkSize));
    }
  }

  markAsReadClicked(book: IBook) {
    this.onMarkAsReadClicked.emit(book);
  }

  editClicked($event: Event, book: IBook) {
    $event.preventDefault();

    this.onEditClicked.emit(book);
  }

  deleteClicked($event: Event, book: IBook) {
    $event.preventDefault();

    if (confirm('Are you sure you want to delete ' + book.title + '?')) {
      this.onDeleteClicked.emit(book);
    }
  }

  ngOnInit() {
  }
}
