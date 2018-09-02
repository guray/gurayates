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
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];
rowData: any;

  constructor(private http: HttpClient) { }
 
  ngOnInit() { this.rowData = this.http.get('https://api.myjson.com/bins/15psn9'); }

 

}
