import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './Child.html'
})
export class Child {
  number: string;
  @Input() 
  set content(content: string) {
    this.number = content;
  }
  get content(): string {
    return this.number;
  }
  @Output() public changeNumber: EventEmitter<number> = new EventEmitter();

  constructor() {}

  resetNumber(number) {
    this.changeNumber.emit(number);
  }
}