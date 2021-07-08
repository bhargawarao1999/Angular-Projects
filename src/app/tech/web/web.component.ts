import { Component, OnInit } from '@angular/core';
import { WebService } from '../../Services/web.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent
{
  filteredString : string='';
  sortedString : any='a-z';
  webArray:any = []
  errMsg:any;
  constructor(webService:WebService)
  {
    webService.getWebInfo().subscribe(
      result => this.webArray = result,
      error => this.errMsg = error)

  }
}
