import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  admin: string;

  subscription: Subscription;

  constructor(private userService: UsersService) { }


  ngOnInit(): void {
    this.subscription = this.userService.changeAdmin.subscribe(admin => this.admin = admin.toString());
  }

  ngOnDestroy(): void {
    // We have to unsubscribe the subscription, because the BehaviorSubject will be never ending.
    //  so, to avoid memory or data leaks we have unsubscribe
    this.subscription.unsubscribe();
  }

  handleChangeUser(value: string): void {
    this.userService.setAdmin(value);
  }

}
