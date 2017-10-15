import { Component, OnInit } from '@angular/core';
import { IBook } from "../../models/book.interface";
import { BookService } from "../../services/book.service";
import * as _ from "lodash";
import { IApiSearchResults } from "../../models/book-search-results.interface";

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
  private booksPerPage: number = 5;

  onPageSelected(page: number) {
    this.currentPage = page;
    this.loadBooks();
  }

  onCreateBook(book: IBook) {
    this.loadBooks();
  }

  markBookAsRead(book: IBook) {
    this.bookService.toggleRead(book);
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

  loadBooks() {
    this.bookService.getBooks({
      page: this.currentPage,
      perPage: this.booksPerPage
    }).then((result: IApiSearchResults<IBook>) => {
      this.books = result.entries;
      this.booksTotal = result.totalCount;
    }).catch((e) => {
      console.log(e);
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }
}
