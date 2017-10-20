import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBookListFilterPanelValues } from "../../../models/book-list-filter-panel-values.interface";
import * as _ from "lodash";

@Component({
  selector: 'book-list-filter',
  templateUrl: './book-list-filter.component.html',
  styleUrls: ['./book-list-filter.component.scss']
})
export class BookListFilterComponent implements OnInit {
  @Input() filterValues: IBookListFilterPanelValues;

  @Output() onFiltersChanged: EventEmitter<IBookListFilterPanelValues> = new EventEmitter();

  private readAlreadyOptions: Array<object> = [
    {
      caption: 'Doesn\'t matter',
      value: null
    },
    {
      caption: 'Read only',
      value: true
    },
    {
      caption: 'Unread only',
      value: false
    }
  ];

  private sortOptions: Array<object> = [
    {
      caption: 'Doesn\'t matter',
      value: null
    },
    {
      caption: 'Status: Read first',
      value: {
        field: 'readAlready',
        direction: 'desc'
      }
    },
    {
      caption: 'Status: Unread first',
      value: {
        field: 'readAlready',
        direction: 'asc'
      }
    },
    {
      caption: 'Year: Older first',
      value: {
        field: 'printYear',
        direction: 'asc'
      }
    },
    {
      caption: 'Year: Newer first',
      value: {
        field: 'printYear',
        direction: 'desc'
      }
    },
  ];

  private readAlready: any = this.readAlreadyOptions[0];
  private sort: any = this.sortOptions[0];
  private keywords: string;
  private yearFrom: string;
  private yearTo: string;

  constructor() { }

  ngOnInit() {
  }

  pushFilters() {
    let filterValues: IBookListFilterPanelValues = {};

    if (this.readAlready.value !== null) {
      filterValues.readAlready = this.readAlready.value;
    }

    if (this.sort.value !== null) {
      filterValues.sort = this.sort.value;
    }

    if (typeof this.keywords === 'string' && this.keywords.length !== 0) {
      filterValues.keywords = this.keywords;
    }

    if (typeof this.yearFrom === 'string' && this.yearFrom.length !== 0) {
      let parsed = parseInt(this.yearFrom);

      if (!isNaN(parsed)) {
        filterValues.yearFrom = parsed;
      }
    }

    if (typeof this.yearTo === 'string' && this.yearTo.length !== 0) {
      let parsed = parseInt(this.yearTo);

      if (!isNaN(parsed)) {
        filterValues.yearTo = parsed;
      }
    }

    this.onFiltersChanged.emit(filterValues);
  }

  onReadAlreadySelected(value: any) {
    this.readAlready = value;

    this.pushFilters();
  }

  onSortSelected(value: any) {
    this.sort = value;

    this.pushFilters();
  }

  resetFilters() {
    this.readAlready = this.readAlreadyOptions[0];
    this.sort = this.sortOptions[0];
    this.keywords = '';
    this.yearFrom = '';
    this.yearTo = '';

    this.pushFilters();
  }
}
