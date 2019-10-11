import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: User[] = [];

  constructor() { }

  public saveUser(user : User) {
    this.userList.push(user);
  }

  public getAllUsers() {
    return this.userList;
  }
}
