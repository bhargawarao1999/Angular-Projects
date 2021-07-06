import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit 
{
  // message: string = '';
  products:any=[]
  productsTemp:any=[{ "id":1, "productName": 'Laptop' },
  { "id":2, "productName": 'Mobile' }]

  constructor(private dataService: DataService) 
  {
    dataService.currentMsg.subscribe(successMsg => this.products = successMsg)
  }
  

  ngOnInit(): void { }
  modifiedData() 
  {
    for(var i=0;i<this.productsTemp.length;i++)
    {
        this.dataService.changeData(this.productsTemp[i])
    }
  }

}
