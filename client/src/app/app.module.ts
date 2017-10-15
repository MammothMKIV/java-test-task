import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { BookListLayoutComponent } from "./layouts/book-list-layout/book-list-layout.component";
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BookListCardsComponent } from "./components/book-list/book-list-cards/book-list-cards.component";
import { BookService } from "./services/book.service";
import { HttpClientModule } from "@angular/common/http";
import { EditBookModalComponent } from './components/edit-book-modal/edit-book-modal.component';
import { BsDropdownModule, ModalModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { NumberOnlyDirective } from "./forms/number-only.directive";

const appRoutes = [
  {
    path: 'books',
    component: BookListLayoutComponent
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/books'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookListLayoutComponent,
    PaginationComponent,
    BookListCardsComponent,
    EditBookModalComponent,
    NumberOnlyDirective,
  ],
  imports: [
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : true }
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
