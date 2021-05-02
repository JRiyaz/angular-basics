import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from 'src/app/interfaces/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _admin: string = "Riyaz J";
  public changeAdmin: BehaviorSubject<String> = new BehaviorSubject<string>(this._admin);

  private users: Users[] = [
    { id: 1, name: 'Riyaz J', email: 'j.riyazu@gmail.com', gender: 'Male', address: { city: 'Bengaluru', street: 'KR Puram', zip: '560006' } },
    { id: 2, name: 'Fayaz J', email: 'j.fayaz@gmail.com', gender: 'Male', address: { city: 'Hyderabad', street: 'Kukatpalli', zip: '660006' } },
    { id: 3, name: 'Inthiyaz J', email: 'j.inthiyaz@gmail.com', gender: 'Male', address: { city: 'B.Kothakota', street: 'Santha Bazar Street', zip: '517370' } },
    { id: 4, name: 'Begum J', email: 'j.begum@gmail.com', gender: 'Female', address: { city: 'B.Kothakota', street: 'Santha Bazar Street', zip: '517370' } },
    { id: 5, name: 'Alfiya', email: 'j.alfiya@gmail.com', gender: 'Female', address: { city: 'B.Kothakota', street: 'Santha Bazar Street', zip: '517370' } },
    { id: 6, name: 'Aisha', email: 'j.aisha@gmail.com', gender: 'Female', address: { city: 'B.Kothakota', street: 'Santha Bazar Street', zip: '517370' } },
    { id: 7, name: 'Apsa', email: 'j.apsa@gmail.com', gender: 'Female', address: { city: 'B.Kothakota', street: 'Santha Bazar Street', zip: '517370' } },
    { id: 8, name: 'Yusuf', email: 'j.yusuf@gmail.com', gender: 'Male', address: { city: 'B.Kothakota', street: 'Santha Bazar Street', zip: '517370' } },
  ]

  constructor() { }

  getUsers(): Users[] {
    return this.users;
  }

  getUser(id: number): Users {
    return this.users.find(user => user.id === id);
  }

  getUserName(userId: number): string {
    return this.users.find(user => user.id == userId).name;
  }

  public getAdmin(): string {
    return this._admin;
  }

  public setAdmin(admin: string) {
    this._admin = admin;
    this.changeAdmin.next(this._admin);
  }
}
