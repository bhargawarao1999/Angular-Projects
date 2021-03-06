import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  webArray:any = [
    {id:1,name:"Browsers",price:50000,description:"A computer program with a graphical user interface for displaying and navigating between web pages.",image:"assets/images/browser.jpg"},
    {id:2,name:"HTML",price:500,description:"HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.",image:"assets/images/html.png"},
    {id:3,name:"CSS",price:1500,description:"CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts.",image:"assets/images/css.png"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
