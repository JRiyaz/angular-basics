import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  // fromChild: EventEmitter<String> = new EventEmitter<String>();
  // value will be passed from parent

  @Output() handleChildEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input() someNumber: number = 1;
  
  @Output() someNumberChange: EventEmitter<number> = new EventEmitter<number>();

  ng_model: any = "Two way binding";


  @Input() name: string;

  @Input() data: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: number) {
    this.handleChildEvent.emit(value);
    this.someNumber += value;
    this.someNumberChange.emit(this.someNumber);
  }

}
