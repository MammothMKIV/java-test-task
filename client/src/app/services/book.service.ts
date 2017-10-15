import { Injectable } from '@angular/core';
import {IBook} from "../models/book.interface";
import {HttpClient} from "@angular/common/http";

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
    },
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

  public getBooks(): Promise<Array<IBook>> {
    return Promise.resolve(this.books);
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
}
