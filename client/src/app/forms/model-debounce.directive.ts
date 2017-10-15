import { EventEmitter, ElementRef, OnInit, Directive, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[modelDebounce]'
})
export class ModelDebounceDirective implements OnInit {
  @Input() delay: number = 500;

  @Output() onDebounce: EventEmitter<any> = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private model: NgModel
  ) {
  }

  ngOnInit(): void {
    const eventStream = Observable.fromEvent(this.elementRef.nativeElement, 'keyup')
      .map(() => this.model.value)
      .debounceTime(this.delay);

    eventStream.subscribe(input => this.onDebounce.emit(input));
  }
}
