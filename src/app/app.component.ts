import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UsersService) { }
  ngOnInit(): void {
    this.userService.changeAdmin.subscribe(admin => this.admin = admin.toString());
  }

  title: string = 'Simplilearn';

  admin: string;

  count: number = 1;

  num: number = 1;

  numClass: string = "color";

  classToSet: string = "positive";

  handleClick(value: number): void {
    this.count += value;
    this.classToSet = this.count > 0 ? 'positive' : 'negative';
  }
}
