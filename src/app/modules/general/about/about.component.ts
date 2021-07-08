import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit 
{
  sortedString:string='';
  filteredString:string='';
  productsArray:any = [{id:1,name:"Laptop",price:50000,description:"A Laptop",image:"assets/images/laptop.png"},
  {id:2,name:"Mouse",price:500,description:"A Mouse",image:"assets/images/mouse.png"},
  {id:3,name:"Keyboard",price:1500,description:"A Keyboard",image:"assets/images/keyboard.jpg"}]
  constructor() { }

  ngOnInit(): void {
  }

}
