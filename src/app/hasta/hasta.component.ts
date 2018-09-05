import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HastaServices} from "../service/HastaServices";
//import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hasta',
  templateUrl: './hasta.component.html',
  styleUrls: ['./hasta.component.css']
})
export class HastaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router, private hastaServices: HastaServices) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      kimlikno: ['', Validators.required],
      adsoyad: ['', Validators.required],
      hastano: ['', Validators.required],
      dtarih: ['', Validators.required],
      dyer: ['', Validators.required],
      meslek: ['', Validators.required],
      kangrubu: ['', Validators.required],
      ceptel: ['', Validators.required],
      adres: ['', Validators.required]
    });

  }

  onSubmit() {
    this.hastaServices.createtHasta(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['hastalar']);
      });
  }

}

