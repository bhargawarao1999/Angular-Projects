import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  // @Input() cuname:string='';
  @Output() notify:EventEmitter<any> = new EventEmitter<any>();
//   sendDataFromChildToParent(){
//     this.notify.emit('Child Data sending from Child Component')
// }
@Input() childAllowance:number=0;

@Input() investing : number=0;
  mutualFunds()
  {
    this.childAllowance++;
    this.notify.emit(this.childAllowance);

  }
  stockMarket()
  {
    this.childAllowance--;
    this.notify.emit(this.childAllowance);
  }
}
