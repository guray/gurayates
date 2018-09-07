import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users} from '../model/users';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/users';

  getUsers() {

    return this.http.get<Users[]>(this.baseUrl);
  }

  getUsersByusername(username: string) {
    return this.http.get<Users>(this.baseUrl + '/' + username);
  }

  createtUsers(users: Users) {
    return this.http.post(this.baseUrl, users);
  }

  updatetUsers(users: Users) {
    return this.http.put(this.baseUrl + '/' + users.username, users);
  }

  deletetUsers(username: string) {
    return this.http.delete(this.baseUrl + '/' + username);
  }
}
