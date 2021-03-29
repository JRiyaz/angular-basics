import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html'
})
export class StringInterpolationComponent implements OnInit {

  message: string = "String Interpolation";

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(): string {
    return this.message;
  }

}
