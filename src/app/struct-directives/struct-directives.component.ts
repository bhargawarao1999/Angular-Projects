import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent
{
  employees:any = []
  errMsg:any;
  constructor(empService:EmployeeService){
    empService.getEmployeesInfo().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
  }
}
