import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bhargawa',
  templateUrl: './bhargawa.component.html',
  styleUrls: ['./bhargawa.component.css']
})
export class BhargawaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  person={
    myName:'Bhargawa'
  }
  name: string = 'bhargawa';
  age: number = 21;
  truth: boolean = true;
  array: number[] = [10, 20, 30, 40]
  numAndString: [number, string] = [1, 'Bhargawa']
  allType: any = true;
  g: number | string = 10;
}
