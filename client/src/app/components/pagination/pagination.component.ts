import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Output() onPageSelected: EventEmitter<number> = new EventEmitter();

  @Input() currentPage: number;

  private _totalItems: number;
  private _itemsPerPage: number;
  private totalPages: number;
  private pages: Array<number> = [];

  constructor() { }

  @Input()
  set itemsPerPage(itemsPerPage: number) {
    this._itemsPerPage = itemsPerPage;
    this.refreshPages();
  }

  private refreshPages() {
    this.totalPages = Math.ceil(this._totalItems / this._itemsPerPage);
    this.pages = [];

    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  @Input()
  set totalItems(totalItems: number) {
    this._totalItems = totalItems;
    this.refreshPages();
  }

  pageClicked($event: Event, page: number) {
    $event.preventDefault();
    this.onPageSelected.emit(page);
  }

  ngOnInit() {
  }

}
