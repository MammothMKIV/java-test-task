import { Injectable } from '@angular/core';
import { IBook } from "../models/book.interface";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IApiSearchResults } from "../models/api-search-results.interface";
import { IBookQuery } from "../models/book-query.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BookService {
  constructor(
    private http: HttpClient
  ) { }

  public saveBook(book: IBook): Observable<IBook> {
    if (typeof book.id === 'undefined') {
      return this.http.post('api/books', book);
    } else {
      return this.http.post('api/books/' + book.id, book);
    }
  }

  public getBooks(query: IBookQuery): Observable<IApiSearchResults<IBook>> {
    let params = new HttpParams();

    if (typeof query.keywords !== 'undefined') {
      params = params.append('keywords', query.keywords);
    }

    if (typeof query.yearFrom !== 'undefined') {
      params = params.append('yearFrom', query.yearFrom.toString());
    }

    if (typeof query.yearTo !== 'undefined') {
      params = params.append('yearTo', query.yearFrom.toString());
    }

    if (typeof query.readAlready !== 'undefined') {
      params = params.append('readAlready', query.readAlready ? '1' : '0');
    }

    params = params.append('page', query.page.toString());
    params = params.append('perPage', query.perPage.toString());

    if (typeof query.orderBy !== 'undefined') {
      params = params.append('orderBy', query.orderBy);
    }

    if (typeof query.order !== 'undefined') {
      params = params.append('order', query.order);
    }

    return this.http.get('api/books', {
      params: params
    });
  }

  public getBook(id: number): Observable<IBook> {
    return this.http.get('api/books/' + id);
  }

  public getBlankBook(): IBook {
    return {
      title: '',
      description: '',
      author: '',
      printYear: null,
      isbn: '',
      readAlready: false
    };
  }

  public deleteBook(book: IBook): Observable<Object> {
    return this.http.delete('api/books/' + book.id);
  }

  public toggleRead(book: IBook) {
    let previousValue = book.readAlready;

    book.readAlready = !book.readAlready;

    this.http.post('api/books/' + book.id + '/toggleRead', null).subscribe(() => {

    }, () => {
      book.readAlready = previousValue;
    });
  }
}
