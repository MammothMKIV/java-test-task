import { Injectable } from '@angular/core';
import { IBook } from "../models/book.interface";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IApiSearchResults } from "../models/api-search-results.interface";
import { IBookQuery } from "../models/book-query.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BookService {
  private books: Array<IBook> = [
    {
      id: 1,
      title: 'Book 1',
      description: 'Description 1',
      author: 'Author 1',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 2,
      title: 'Book 2',
      description: 'Description 2',
      author: 'Author 2',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 3,
      title: 'Book 1',
      description: 'Description 3',
      author: 'Author 3',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 4,
      title: 'Book 4',
      description: 'Description 4',
      author: 'Author 4',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 4,
      title: 'Book 4',
      description: 'Description 4',
      author: 'Author 4',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 5,
      title: 'Book 5',
      description: 'Description 5',
      author: 'Author 5',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 6,
      title: 'Book 6',
      description: 'Description 6',
      author: 'Author 6',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 7,
      title: 'Book 7',
      description: 'Description 7',
      author: 'Author 7',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 8,
      title: 'Book 8',
      description: 'Description 8',
      author: 'Author 8',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 9,
      title: 'Book 9',
      description: 'Description 9',
      author: 'Author 9',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 10,
      title: 'Book 10',
      description: 'Description 10',
      author: 'Author 10',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 11,
      title: 'Book 11',
      description: 'Description 11',
      author: 'Author 11',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 12,
      title: 'Book 12',
      description: 'Description 12',
      author: 'Author 12',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 13,
      title: 'Book 13',
      description: 'Description 13',
      author: 'Author 13',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 15,
      title: 'Book 15',
      description: 'Description 15',
      author: 'Author 15',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 16,
      title: 'Book 16',
      description: 'Description 16',
      author: 'Author 16',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    },{
      id: 17,
      title: 'Book 17',
      description: 'Description 17',
      author: 'Author 18',
      isbn: '4232342342342',
      printYear: 2005,
      readAlready: false
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  public saveBook(book: IBook): Promise<IBook> {
    if (typeof book.id === 'undefined') {
      book.id = 95;

      console.log('book created');

      return Promise.resolve(book);
    } else {
      console.log('book updated');

      return Promise.resolve(book);
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

    return this.http.get('http://localhost:8080/CRUDRogovoy/api/books', {
      params: params
    });
  }

  public getBook(id: number): Promise<IBook> {
    return Promise.resolve<IBook>(this.books[0]);
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

  public deleteBook(book: IBook): Promise<void> {
    console.log('book deleted');

    return Promise.resolve();
  }

  public toggleRead(book: IBook) {
    let previousValue = book.readAlready;

    book.readAlready = !book.readAlready;

    this.http.post('http://localhost:8080/CRUDRogovoy/api/books/' + book.id + '/toggleRead', null).subscribe(() => {

    }, () => {
      book.readAlready = previousValue;
    });
  }
}
