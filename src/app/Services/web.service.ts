import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  url:string = 'assets/web.json';
  constructor(private httpClient:HttpClient)
  {}
  getWebInfo()
  {
     return this.httpClient.get(this.url)
}
}