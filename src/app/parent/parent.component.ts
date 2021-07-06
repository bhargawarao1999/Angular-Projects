import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // puname: string = "chiranjeevi";
  parentData: any;
  allowance: number = 1000;
  parentMethod(value: any) 
  {
    //console.log(`Inside Parent ${value}`)
    this.parentData = value
  }
}
