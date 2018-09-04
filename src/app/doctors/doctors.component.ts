import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],

})

export class DoctorsComponent implements OnInit {
  title = 'Hastanemizin Doktorları';
    
  columnDefs = [
    {headerName: 'Ad Soyad', field: 'adsoyad' },
    {headerName: 'Ünvan', field: 'unvan' },
    {headerName: 'Branş', field: 'brans'},
    {headerName: 'Cep Telefonu', field: 'ceptel'}
];
rowData: any;

  constructor(private http: HttpClient) { }
 
  ngOnInit() { this.rowData = this.http.get('http://localhost:8080/doctors'); }

 

}
