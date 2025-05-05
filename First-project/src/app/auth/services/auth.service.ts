import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: UserInterface[] = [
    {
      email: "test@gmail.com",
      password:"password"
    },
    {
      email: "test1@gmail.com",
      password:"password"
    },
    {
      email: "test2@gmail.com",
      password:"password"
    },
  ]
  

  constructor() { }

  login(user: UserInterface) {
    const u = this.users.filter(item => {
      return item.email === user.email
    })
  }
}
