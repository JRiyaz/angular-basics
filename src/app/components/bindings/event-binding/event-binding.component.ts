import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html'
})
export class EventBindingComponent implements OnInit {

  button: any = `click me`;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: any): void {
    window.alert(value);
  }

  handleKeyUp(event: any): void {
    event.code == 'Enter' && window.alert(event.target.value);
  }

  getValueOnClick(value: string): void {
    window.alert(value);
  }

  changeTypeOnClick(element: any): void {
    let type = 'text';
    type = element.getAttribute('type') == 'password' ? 'text' : 'password';
    element.setAttribute('type', type);
  }
}
