import { Component, OnInit } from '@angular/core';
import {HastaServices} from '../service/HastaServices';
import {Router} from '@angular/router';
import {Doctors} from '../model/Doctors';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import { Hasta } from '../model/Hasta';

@Component({
  selector: 'app-edit-hasta',
  templateUrl: './edit-hasta.component.html',
  styleUrls: ['./edit-hasta.component.css']
})
export class EditHastaComponent implements OnInit {
  hasta: Hasta;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private hastaServices: HastaServices) { }

  ngOnInit() {
     let kimlikno = localStorage.getItem('kimlikno');
    if(!kimlikno) {
      alert('Invalid action.')
      this.router.navigate(['hastalar']);
      return;
    }
    this.editForm = this.formBuilder.group({
      kimlikno: [],
      adsoyad: ['', Validators.required],
      hastano: ['', Validators.required],
      dtarih: ['', Validators.required],
      dyer: ['', Validators.required],
      meslek: ['', Validators.required],
      kangrubu: ['', Validators.required],
      ceptel: ['', Validators.required],
      adres: ['', Validators.required]

    });
    this.hastaServices.getHastaBykimlikno(kimlikno)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
   }

  onSubmit() {

    this.hastaServices.updateHasta(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['hastalar']);
        },
        error => {
          alert(error);
        });
  }

}
