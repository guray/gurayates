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
 
  ngOnInit() { 
    this.rowData = this.http.get('http://localhost:8080/doctors');
    
    this.http.post("http://localhost:8080/doctors",
    {
        'adsoyad': 'pakainfo007',
        'unvan': 'prof',
        'brans': 'kulak',
        'ceptel': '99898225024'
    })
    .subscribe(
        data => {
            console.log('An Angular 6 POST Request is successful,Good Luck ', data);
        },
        error => {
            console.log("Error", error);
        }
    );    
  }

}
