import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctors } from './doctors';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class DoctorService {

constructor(private http: HttpClient ) { }
    
  getDoctors(): Observable<Doctors[]>
    {
     return this.http.get<Doctors[]>('http://northwindapi.azurewebsites.net/api/products');
    }
}
