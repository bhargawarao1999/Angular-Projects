import { Component, OnInit } from '@angular/core';
import { JavaService } from '../../Services/java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent{
  filteredString : string='';
  sortedString : any='a-z';
  javaArray:any = []
  errMsg:any;
  constructor(javaService:JavaService)
  {
    javaService.getJavaInfo().subscribe(
      result => this.javaArray = result,
      error => this.errMsg = error)

}
}
