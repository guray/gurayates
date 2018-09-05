import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoctorsService} from "../service/DoctorsService";
//import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private doctorsService: DoctorsService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      kullaniciadi: ['', Validators.required],
      adsoyad: ['', Validators.required],
      unvan: ['', Validators.required],
      brans: ['', Validators.required],
      ceptel: ['', Validators.required]
    });

  }

  onSubmit() {
    this.doctorsService.createtDoctors(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['listdoctors']);
      });
  }

}
