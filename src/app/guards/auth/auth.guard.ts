import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private employee: EmployeeService, private router: Router) {

  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  // canActivateChild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   // return false;
  //   return true;
  // }

  canActivate(): boolean {
    // if (this.employee.loggedIn) return true
    // else {
    //   this.router.navigate(['../basic-auth'], { queryParams: { login: 'false' } });
    //   return false;
    // }
    return true;
  }

  canActivateChild(): boolean {
    return true;
  }

}
