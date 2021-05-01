import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/users/users';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetails: Users;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {

    // localhost:4200/users/1
    this.route.params.subscribe((param) => {

      // +param.userId NOTE: The '+' sign converts a string to number

      this.userDetails = this.userService.getUser(+param.userId);
    });

    // localhost:4200/users?username=riyaz&id=1
    this.route.queryParams.subscribe((param) => console.log(param));

    // this.users.forEach(element => {
    //   console.log(element);

    // });
  }

}
