import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Simplilearn';

  count: number = 1;
  
  num: number = 1;

  numClass: string = "color";

  classToSet: string = "positive";

  handleClick(value: number): void {
    this.count += value;
    this.classToSet = this.count > 0 ? 'positive' : 'negative';
  }
}
