import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../Services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent 
{
  public num1:any;
  public num2:any;
  public result:any;
  
  constructor(private calculatorService:CalculatorService)
  {  }

  operation(operator:any)
  {
    var number1=(Number)(this.num1)
    var number2=(Number)(this.num2)
    this.result=this.calculatorService.calculatorOperation(number1,number2,operator)
  }
}
