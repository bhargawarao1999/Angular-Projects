import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = 'assets/product.json';
  constructor(private httpClient:HttpClient)
  {}
  getProductInfo()
  {
     return this.httpClient.get(this.url)
}
}
