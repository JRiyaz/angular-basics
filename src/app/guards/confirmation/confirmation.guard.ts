import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from 'src/app/components/routing/contact/contact.component';

export interface ContactComponentDeActivate {
  areYouSure(): boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ConfirmationGuard implements CanDeactivate<ContactComponentDeActivate> {
  canDeactivate(
    component: ContactComponentDeActivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.areYouSure();
  }

}
