import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hastalar',
  templateUrl: './hastalar.component.html',
  styleUrls: ['./hastalar.component.css']
})
export class HastalarComponent implements OnInit {
  
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }

}
