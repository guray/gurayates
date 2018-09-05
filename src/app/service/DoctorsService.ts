import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Doctors} from '../model/Doctors';

@Injectable()
export class DoctorsService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/doctors';

  getDoctors() {

    return this.http.get<Doctors[]>(this.baseUrl);
  }

  getDoctorsBykullaniciadi(kullaniciadi: string) {
    return this.http.get<Doctors>(this.baseUrl + '/' + kullaniciadi);
  }

  createtDoctors(doctors: Doctors) {
    return this.http.post(this.baseUrl, doctors);
  }

  updateDoctors(doctors: Doctors) {
    return this.http.put(this.baseUrl + '/' + doctors.kullaniciadi, doctors);
  }

  deleteDoctors(kullaniciadi: string) {
    return this.http.delete(this.baseUrl + '/' + kullaniciadi);
  }
}
