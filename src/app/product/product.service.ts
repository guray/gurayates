import { Injectable } from "@angular/core";
//Client işlemi bu servisde yapılacağı için client ve observable buraya import edildi
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";
import { Observable } from "rxjs/internal/Observable";

@Injectable()

export class ProductService {
  constructor(private http: HttpClient) {}
  //method hangi sınıftan veya nesne tipinden veri döndürecek ise buraya yazılır
  getProducts(): Observable<Product[]> {
    //metod dönüş işlemi yapacağı için return işlemi gerçekleştirdik
    return this.http.get<Product[]>(
      "http://northwindapi.azurewebsites.net/api/products"
    );
  }
}
