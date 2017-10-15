import { Component, OnInit } from '@angular/core';
import { IBook } from "../../models/book.interface";
import { BookService } from "../../services/book.service";
import * as _ from "lodash";

@Component({
  selector: 'book-list-layout',
  templateUrl: './book-list-layout.component.html',
  styleUrls: ['./book-list-layout.component.scss']
})
export class BookListLayoutComponent implements OnInit {
  constructor(
    private bookService: BookService
  ) {

  }

  private books: Array<IBook>;

  private modalBook: IBook;
  private modalMode: 'create' | 'update';
  private modalVisible: boolean = false;
  private booksTotal: number = 25;
  private currentPage: number = 1;
  private booksPerPage: number = 10;

  onPageSelected(page: number) {
    this.currentPage = page;
  }

  onCreateBook(book: IBook) {
    console.log(book);
  }

  markBookAsRead(book: IBook) {
    console.log(book);
  }

  showEditBook(book: IBook) {
    this.modalBook = _.cloneDeep(book);
    this.modalMode = 'update';
    this.modalVisible = true;
  }

  showAddBook() {
    this.modalBook = this.bookService.getBlankBook();
    this.modalMode = 'create';
    this.modalVisible = true;
  }

  deleteBook(book: IBook) {
    this.bookService.deleteBook(book);
  }

  onModalClose() {
    this.modalVisible = false;
  }

  ngOnInit(): void {
    this.bookService.getBooks().then((books: Array<IBook>) => {
      this.books = books;
    }).catch((e) => {
      console.log(e);
    });
  }
}
