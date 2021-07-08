import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-java',
  templateUrl: './adv-java.component.html',
  styleUrls: ['./adv-java.component.css']
})
export class AdvJavaComponent implements OnInit 
{
  image:string="assets/images/javaserverfaces.png"
  constructor() { }

  ngOnInit(): void {
  }

}
