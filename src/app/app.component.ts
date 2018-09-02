import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Çukurova Tıp Fakültesi Hastanesine';
  columnDefs = [
		{headerName: 'Name', field: 'name' },
		{headerName: 'Email', field: 'email' },
		{headerName: 'Location', field: 'location' },
		{headerName: 'Profession', field: 'profession' },
];
rowData = [
		{name : 'guray', email : 'gurayates@yahoo.com', location:'adana', profession: 'müh'},
		{name : 'lora', email : 'lora@yahoo.com', location:'adana', profession: 'dr'},
]

  constructor(){  }

  
}
