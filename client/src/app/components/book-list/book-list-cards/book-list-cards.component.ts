import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IBook } from "../../../models/book.interface";

@Component({
  selector: 'book-list-cards',
  templateUrl: './book-list-cards.component.html',
  styleUrls: ['./book-list-cards.component.scss']
})
export class BookListCardsComponent implements OnInit {
  @Output() onMarkAsReadClicked: EventEmitter<number> = new EventEmitter();

  private bookGroups: Array<Array<IBook>> = [];

  constructor() {}

  @Input("books")
  set books(books: Array<IBook>) {
    console.log(books);

    if (!Array.isArray(books)) {
      return;
    }

    let chunkSize = 3;

    for (let i = 0; i < books.length; i += chunkSize) {
      this.bookGroups.push(books.slice(i, i + chunkSize));
    }
  }

  markAsReadClicked(id: number) {
    this.onMarkAsReadClicked.emit(id);
  }

  ngOnInit() {
  }

}
