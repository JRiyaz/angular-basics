// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// export class TokenInterceptorService implements HttpInterceptor{

//   constructor(private injector: Injector) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     let authService = this.injector.get(EmployeeService);
//     let tokenizedReq = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${authService.getToken}`
//       }
//     })
//     return next.handle(tokenizedReq);
//   }
// }

export class TokenInterceptorService {

}
