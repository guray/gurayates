import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = '';
  age: number;
  found: boolean;
  title = 'Çukurova Tıp Fakültesi Hastanesine';
  
  constructor(private httpClient:HttpClient){  }
  
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  ngOnInit() {
  }

  getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      }
    );
}

postProfile(){
  this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
  {
    name:'mark',
    age: 41
  })
  .subscribe(
    (data:any) => {
      console.log(data);
    }
  );
}

}
