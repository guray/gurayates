import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../service/UsersService";
//import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private usersService: UsersService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  onSubmit() {
    this.usersService.createtUsers(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['listuser']);
      });
  }

}
