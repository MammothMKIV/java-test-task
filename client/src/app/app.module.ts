import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { BookListLayoutComponent } from "./layouts/book-list-layout/book-list-layout.component";
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BookListCardsComponent } from "./components/book-list/book-list-cards/book-list-cards.component";

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
    BookListCardsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
