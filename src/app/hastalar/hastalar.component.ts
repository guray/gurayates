import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HastaServices} from "../service/HastaServices";
import {Hasta} from "../model/Hasta";

@Component({
  selector: 'app-hastalar',
  templateUrl: './hastalar.component.html',
  styleUrls: ['./hastalar.component.css']
})
export class HastalarComponent implements OnInit {
  hasta: Hasta[];

  constructor(private router: Router, private hastaServices: HastaServices) { }

  ngOnInit() {
    this.hastaServices.getHasta()
      .subscribe( data => {
        this.hasta = data;
      });
  }

  deleteHasta(hasta: Hasta): void {
    this.hastaServices.deleteHasta(hasta.kimlikno)
      .subscribe( data => {
        this.hasta = this.hasta.filter(u => u !== hasta);
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
}
