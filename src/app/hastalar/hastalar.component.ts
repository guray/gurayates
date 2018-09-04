import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hastalar',
  templateUrl: './hastalar.component.html',
  styleUrls: ['./hastalar.component.css']
})
export class HastalarComponent implements OnInit {
  
  columnDefs = [
    {headerName: 'Hasta No', field: 'hastano'},
    {headerName: 'Ad Soyad', field: 'adsoyad'},
    {headerName: 'Adres', field: 'adres'},
    {headerName: 'Meslek', field: 'meslek'}
  ];


rowData: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    // this.rowData = this.http.get('http://northwindapi.azurewebsites.net/api/products');
    this.rowData = this.http.get('http://localhost:8080/hastalar');
  }

}
