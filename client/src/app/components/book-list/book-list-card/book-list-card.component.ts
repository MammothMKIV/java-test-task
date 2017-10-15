import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBook} from "../../../models/book.interface";

@Component({
  selector: 'book-list-card',
  templateUrl: './book-list-card.component.html',
  styleUrls: ['./book-list-card.component.scss']
})
export class BookListCardComponent implements OnInit {
  @Input() book: IBook;
  @Output() onMarkAsReadClicked: EventEmitter<IBook> = new EventEmitter();
  @Output() onEditClicked: EventEmitter<IBook> = new EventEmitter();
  @Output() onDeleteClicked: EventEmitter<IBook> = new EventEmitter();

  private undoable: boolean = false;

  markAsReadClicked(book: IBook) {
    this.undoable = true;
    this.onMarkAsReadClicked.emit(book);
  }

  editClicked($event: Event, book: IBook) {
    $event.preventDefault();

    this.onEditClicked.emit(book);
  }

  deleteClicked($event: Event, book: IBook) {
    $event.preventDefault();
    this.onDeleteClicked.emit(book);
  }

  constructor() { }

  ngOnInit() {
  }

}
