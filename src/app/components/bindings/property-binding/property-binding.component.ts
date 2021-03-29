import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html'
})
export class PropertyBindingComponent implements OnInit {

  message: string = "Property Binding";

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(): string {
    return this.message;
  }

}
