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
        sort: 1
      }
    },
    {
      caption: 'Status: Unread first',
      value: {
        field: 'readAlready',
        sort: -1
      }
    },
    {
      caption: 'Year: Older first',
      value: {
        field: 'printYear',
        sort: 1
      }
    },
    {
      caption: 'Year: Newer first',
      value: {
        field: 'printYear',
        sort: -1
      }
    },
  ];

  private readAlready: any = this.readAlreadyOptions[0];
  private sort: any = this.sortOptions[0];
  private _filterValues: IBookListFilterPanelValues = {};

  constructor() { }

  ngOnInit() {
  }

  pushFilters() {
    this.onFiltersChanged.emit(_.cloneDeep(this._filterValues));
  }

  onReadAlreadySelected(value: any) {
    this._filterValues.readAlready = value.value;
    this.readAlready = value;

    this.pushFilters();
  }

  onSortSelected(value: any) {
    this._filterValues.sort = value.value;
    this.sort = value;

    this.pushFilters();
  }

  resetFilters() {
    this.readAlready = this.readAlreadyOptions[0];
    this.sort = this.sortOptions[0];

    this._filterValues = {};

    this.pushFilters();
  }
}
