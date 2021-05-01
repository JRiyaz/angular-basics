import { Injectable } from '@angular/core';
import { Users } from 'src/app/interfaces/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = [
    { id: 1, name: 'Riyaz J', email: 'j.riyazu@gmail.com', gender: 'Male', },
    { id: 2, name: 'Fayaz J', email: 'j.fayaz@gmail.com', gender: 'Male', },
    { id: 3, name: 'Inthiyaz J', email: 'j.inthiyaz@gmail.com', gender: 'Male', },
    { id: 4, name: 'Begum J', email: 'j.begum@gmail.com', gender: 'Female', },
    { id: 5, name: 'Alfiya', email: 'j.alfiya@gmail.com', gender: 'Female', },
    { id: 6, name: 'Aisha', email: 'j.aisha@gmail.com', gender: 'Female', },
    { id: 7, name: 'Apsa', email: 'j.apsa@gmail.com', gender: 'Female', },
    { id: 8, name: 'Yusuf', email: 'j.yusuf@gmail.com', gender: 'Male', },
  ]

  constructor() { }

  getUsers(): Users[] {
    return this.users;
  }

  getUser(id: number): Users {
    return this.users.find(user => user.id === id);
  }
}
