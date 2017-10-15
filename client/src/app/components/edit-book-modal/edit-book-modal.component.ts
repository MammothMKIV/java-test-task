import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap";
import { IBook } from "../../models/book.interface";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.scss']
})
export class EditBookModalComponent implements OnInit {
  @Output() onCreateBook: EventEmitter<IBook> = new EventEmitter();
  @Output() onUpdateBook: EventEmitter<IBook> = new EventEmitter();
  @Output() onModalClose: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild(ModalDirective) private modal: ModalDirective;

  @Input() mode;

  @Input() book: IBook;

  private validationErrors: any = {};

  constructor(
    private bookService: BookService
  ) { }

  @Input()
  set visible(visible: boolean) {
    if (visible) {
      this.modal.show();
    } else {
      this.modal.hide();
    }
  }

  submitForm() {
    this.bookService.saveBook(this.book).then((book: IBook) => {
      if (this.mode === 'create') {
        this.onCreateBook.emit(book);
      } else {
        this.onUpdateBook.emit(book);
      }

      this.modal.hide();
    }).catch((e) => {
      console.log(e);
    });
  }

  ngOnInit() {
  }

  closeModal() {
    this.onModalClose.emit();
  }
}
