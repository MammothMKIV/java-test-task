import { Component } from '@angular/core';
import { IBook } from "../../models/book.interface";

@Component({
  selector: 'book-list-layout',
  templateUrl: './book-list-layout.component.html'
})
export class BookListLayoutComponent {
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

  markBookAsRead(id: number) {
    console.log(id);
  }
}
