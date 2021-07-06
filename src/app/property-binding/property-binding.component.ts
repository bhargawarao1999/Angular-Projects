import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent 
{
  myImage: string='assets/images/angular.png';
  newImg: string='assets/images/java.png';
}
