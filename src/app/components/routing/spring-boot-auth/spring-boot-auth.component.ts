import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-spring-boot-auth',
  templateUrl: './spring-boot-auth.component.html',
  styleUrls: ['./spring-boot-auth.component.css']
})
export class SpringBootAuthComponent implements OnInit {

  username: string = 'riyaz';

  password: string = 'riyaz';

  id: number = 1;

  message: any;

  error: any;

  employees: Employee[];

  employee: Employee;

  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.service.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.message = data;
          if (this.message != (null || undefined)) {
            localStorage.setItem('username', this.username);
            localStorage.setItem('password', this.password);
          }
          // this.router.navigate(['../multi-step-form'])
        },
        (err: any) => this.error = err
      );
  }

  handleGetAllUsers(): void {
    this.service.getUsers(this.username, this.password)
      .subscribe(
        data => this.employees = data,
        err => this.error = err
      );
  }

  handleGetUser(): void {
    this.service.getUser(this.username, this.password, this.id)
      .subscribe(
        data => this.employee = data,
        err => this.error = err
      );
  }

  handleReset(): void {
    this.error = null;
    this.employee = null;
    this.message = null;
    this.employees = null;
    localStorage.clear();
  }

}
