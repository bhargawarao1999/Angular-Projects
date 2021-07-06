import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit 
{
    // message: string = '';
    products:any=[]
    productsTemp:any = [{ "id":1, "productName": 'Computer' },
    { "id":2, "productName": 'Smartphone' }]
    constructor(private dataService: DataService) {
      dataService.currentMsg.subscribe(successMsg => this.products = successMsg)
    }
    ngOnInit(): void { }
    modifiedData() 
    {
      for(var i=0;i<this.productsTemp.length;i++)
      this.dataService.changeData(this.productsTemp[i])
    }
}
