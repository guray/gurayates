import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../service/UsersService";
import {Users} from "../model/users";


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: Users[];

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

  deleteUsers(users: Users): void {
    this.usersService.deletetUsers(users.username)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== users);
      })
  };

  editUsers(users: Users): void {
    localStorage.removeItem('username');
    localStorage.setItem('username', users.username);
    this.router.navigate(['edituser']);
  };

  addUsers(): void {
    this.router.navigate(['adduser']);
  };
}
