import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private static _URL: string = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): any {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get(EmployeeService._URL, { headers, responseType: 'test' as 'json' });
  }

  public getUsers(username: string, password: string): Observable<Employee[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(`${username}:${password}`) });
    return this.http.get<Employee[]>(`${EmployeeService._URL}/all`, { headers });
  }

  public getUser(username: string, password: string, id: number): Observable<Employee> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(`${username}:${password}`) });
    return this.http.get<Employee>(`${EmployeeService._URL}/all/${id}`, { headers });
  }

  get loggedIn(): boolean {
    // The expression " !! (Double Negate)" will return TRUE if it is not null else return FALSE
    // return !!(localStorage.getItem('username') && localStorage.getItem('password'));
    return !!localStorage.getItem('username') && !!localStorage.getItem('password');
  }

  get getToken(): string {
    return localStorage.getItem('token');
  }

}
