import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DoctorsService} from "../service/DoctorsService";
import {Doctors} from "../model/Doctors";

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {
  doctors: Doctors[];

  constructor(private router: Router, private doctorsService: DoctorsService) { }

  ngOnInit() {
    this.doctorsService.getDoctors()
      .subscribe( data => {
        this.doctors = data;
      });
  }

  deleteDoctors(doctors: Doctors): void {
    this.doctorsService.deleteDoctors(doctors.kullaniciadi)
      .subscribe( data => {
        this.doctors = this.doctors.filter(u => u !== doctors);
      })
  };

  editDoctors(doctors: Doctors): void {
    localStorage.removeItem('kullaniciadi');
    localStorage.setItem('kullaniciadi', doctors.kullaniciadi);
    this.router.navigate(['editdoctors']);
  };

  addDoctors(): void {
    this.router.navigate(['adddoctors']);
  };
}
