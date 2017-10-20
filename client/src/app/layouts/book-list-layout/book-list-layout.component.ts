import { Component, OnInit } from '@angular/core';
import { IBook } from "../../models/book.interface";
import { BookService } from "../../services/book.service";
import * as _ from "lodash";
import { IApiSearchResults } from "../../models/api-search-results.interface";
import { IBookListFilterPanelValues } from "../../models/book-list-filter-panel-values.interface";
import { IBookQuery } from "../../models/book-query.interface";

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
  private filters: IBookListFilterPanelValues;

  onPageSelected(page: number) {
    this.currentPage = page;
    this.loadBooks();
  }

  onBooksChanged(book: IBook) {
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
    if (confirm('Are you sure you want to delete ' + book.title + '?')) {
      this.bookService.deleteBook(book).subscribe(() => {
        this.loadBooks();
      });
    }
  }

  onModalClose() {
    this.modalVisible = false;
  }

  onFiltersChanged(filters: IBookListFilterPanelValues) {
    this.filters = filters;
    this.currentPage = 1;
    this.loadBooks();
  }

  loadBooks() {
    let query: IBookQuery = {
      page: this.currentPage - 1,
      perPage: this.booksPerPage
    };

    if (typeof this.filters !== 'undefined') {
      if (typeof this.filters.keywords !== 'undefined') {
        query.keywords = this.filters.keywords;
      }

      if (typeof this.filters.yearFrom !== 'undefined') {
        query.yearFrom = this.filters.yearFrom;
      }

      if (typeof this.filters.yearTo !== 'undefined') {
        query.yearTo = this.filters.yearTo;
      }

      if (typeof this.filters.readAlready !== 'undefined') {
        query.readAlready = this.filters.readAlready;
      }

      if (typeof this.filters.sort !== 'undefined') {
        if (typeof this.filters.sort.field !== 'undefined') {
          query.orderBy = this.filters.sort.field;
        }

        if (typeof this.filters.sort.direction !== 'undefined') {
          query.order = this.filters.sort.direction;
        }
      }
    }

    this.bookService.getBooks(query).subscribe((result: IApiSearchResults<IBook>) => {
      this.books = result.entries;
      this.booksTotal = result.totalCount;
    }, (e) => {
      console.log(e);
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }
}
