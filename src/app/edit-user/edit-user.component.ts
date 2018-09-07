import { Component, OnInit } from '@angular/core';
import {UsersService} from '../service/UsersService';
import {Router} from '@angular/router';
import {Users} from '../model/users';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  users: Users;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private usersService: UsersService) { }


  ngOnInit() {
    let username = localStorage.getItem('username');
    if(!username) {
      alert('Invalid action.')
      this.router.navigate(['listuser']);
      return;
    }
    this.editForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required]     
    });
    this.usersService.getUsersByusername(username)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
   }

  onSubmit() {

    this.usersService.updatetUsers(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['listuser']);
        },
        error => {
          alert(error);
        });
  }

  }


