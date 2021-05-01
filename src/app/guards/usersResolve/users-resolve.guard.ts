import { Injectable } from '@angular/core';
import { Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/interfaces/users/users';
import { UsersService } from 'src/app/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveGuard implements Resolve<Users[]> {

  constructor(private userService: UsersService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Users[] {
    return this.userService.getUsers();
  }
}
