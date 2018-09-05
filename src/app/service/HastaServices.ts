import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Hasta} from '../model/Hasta';

@Injectable()
export class HastaServices {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/hastalar';

  getHasta() {

    return this.http.get<Hasta[]>(this.baseUrl);
  }

  getHastaBykimlikno(kimlikno: string) {
    return this.http.get<Hasta>(this.baseUrl + '/' + kimlikno);
  }

  createtHasta(hasta: Hasta) {
    return this.http.post(this.baseUrl, hasta);
  }

  updateHasta(hasta: Hasta) {
    return this.http.put(this.baseUrl + '/' + hasta.kimlikno, hasta);
  }

  deleteHasta(kimlikno: string) {
    return this.http.delete(this.baseUrl + '/' + kimlikno);
  }
}
