import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  constructor() { }
  productArray:any=[];
  private behaviorSubj = new BehaviorSubject(this.productArray)
  currentMsg = this.behaviorSubj.asObservable()
  changeData(productArray:any)
  {
    console.log(productArray)
    this.behaviorSubj.value.push(productArray)
}
}
