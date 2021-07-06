import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent
{
  name:string='bhargawa';
  getEmployeeInfo(){
    return `Inside the function: ${this.name}`
  }
}
