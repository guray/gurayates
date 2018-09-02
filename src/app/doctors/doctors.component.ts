import { Component, OnInit } from '@angular/core';
import { Doctors } from './doctors';
import { DoctorService } from './doctor.service';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [DoctorService]
})

export class DoctorsComponent implements OnInit {
  title = 'Hastanemizin Doktorları';
  drs: Doctors[];

  constructor(private doctorService: DoctorService ) { }
 
  ngOnInit() {  this.getDoctors(); }

  getDoctors() {
      this.doctorService.getDoctors().subscribe(res => {this.drs = res; });
    }

}
