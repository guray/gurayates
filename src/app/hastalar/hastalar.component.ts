import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HastaServices} from "../service/HastaServices";
import {Hasta} from "../model/Hasta";
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-hastalar',
  templateUrl: './hastalar.component.html',
  styleUrls: ['./hastalar.component.css']
})
export class HastalarComponent implements OnInit {
  hasta: Hasta[];
  //addForm: FormGroup;
  //constructor(private formBuilder: FormBuilder, private router: Router, private hastaServices: HastaServices) { }
  constructor( private router: Router, private hastaServices: HastaServices) { }
  ngOnInit() {
    this.hastaServices.getHasta()
      .subscribe( data => {
        this.hasta = data;
      });

      // this.addForm = this.formBuilder.group({
      //   kimlikno: ['', Validators.required]

      // });
  }

  deleteHasta(hasta: Hasta): void {
    this.hastaServices.deleteHasta(hasta.kimlikno)
      .subscribe( data => {
        this.hasta = this.hasta.filter(u => u !== hasta);
      })
  };
  

  getHastaBykimlikno(hasta: Hasta): void {
    this.hastaServices.getHastaBykimlikno(hasta.kimlikno)
    .subscribe( data => {
      this.hasta = this.hasta.filter(u => u == hasta);
    })
  };

  editHasta(hasta: Hasta): void {
    localStorage.removeItem('kimlikno');
    localStorage.setItem('kimlikno', hasta.kimlikno);
    this.router.navigate(['edithasta']);
  };

  addHasta(): void {
    this.router.navigate(['hasta']);
  };

  // onSubmit() {
    
  //   this.hastaServices.getHastaBykimlikno(this.addForm.value)
  //     .subscribe( data => {
  //       this.router.navigate(['hastalar']);
  //     });
 // }


}
