import { Component, OnInit } from '@angular/core';
import {DoctorsService} from '../service/DoctorsService';
import {Router} from '@angular/router';
import {Doctors} from '../model/Doctors';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-doctors',
  templateUrl: './edit-doctors.component.html',
  styleUrls: ['./edit-doctors.component.css']
})
export class EditDoctorsComponent implements OnInit {
  doctors: Doctors;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private doctorsService: DoctorsService) { }

  ngOnInit() {
     let kullaniciad = localStorage.getItem('kullaniciadi');
    if(!kullaniciad) {
      alert('Invalid action.')
      this.router.navigate(['listdoctors']);
      return;
    }
    this.editForm = this.formBuilder.group({
      kullaniciadi: [],
      adsoyad: ['', Validators.required],
      unvan: ['', Validators.required],
      brans: ['', Validators.required],
      ceptel: ['', Validators.required]
    });
    this.doctorsService.getDoctorsBykullaniciadi(kullaniciad)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
   }

  onSubmit() {

    this.doctorsService.updateDoctors(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['listdoctors']);
        },
        error => {
          alert(error);
        });
  }

}
