import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html'
})
export class AttributeBindingComponent implements OnInit {

  names: Array<string> = ["Riyaz", "khan"];

  addresses: Array<string> = ["B.Kothakota", "517370"];

  buttonAction: string = "Alert";

  border: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
