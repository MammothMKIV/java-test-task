import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {
  @Input() captionKey: string;
  @Input() placeholderItem: string;
  @Input() fieldTitle: string;

  @Output() onItemSelected: EventEmitter<object> = new EventEmitter();

  private currentValue: any;
  private _options: Array<any>;

  @Input()
  set value(value) {
    this.currentValue = value;
  }

  @Input()
  set options(options: Array<object>) {
    if (!Array.isArray(options)) {
      return;
    }

    this._options = [];

    for (let i = 0; i < options.length; i++) {
      this._options.push(options[i]);
    }
  }

  optionSelected($event: Event, option: object) {
    $event.preventDefault();

    this.currentValue = option;
    this.onItemSelected.emit(option);
  }

  constructor() { }

  ngOnInit() {
  }

}
