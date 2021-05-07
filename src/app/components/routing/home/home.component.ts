import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users/users';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show: boolean = true;

  text: string = 'hide';

  alert: string;

  users: Users[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  handleButtonClick(): void {
    this.show = !this.show;
    this.text = this.show ? 'hide' : 'show';
  }

}
