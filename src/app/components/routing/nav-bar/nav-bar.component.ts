import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() app: string;

  alert: boolean = false;

  border: string;

  message: string;

  showLinks: boolean;

  private timeOut: any;

  constructor(private _route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // Hide links when user is not logged in
    this.showLinks = !this.employeeService.loggedIn;

    console.log(this.showLinks);


    // Show alert when there is a query param
    this._route.queryParams.subscribe(param => {
      // const userId: number = +param.userId;
      // const userId: number = +param.get('userId');
      if (param['login'] != (null || undefined)) {
        this.alert = true;
        this.border = "bg-danger";
        this.message = 'Please login first!';
        this.timeOut = setTimeout(() => this.alert = false, 5000);
      }
    });
  }

  handleCloseAlert(): void {
    this.alert = false;
    clearTimeout(this.timeOut);
  }

}
