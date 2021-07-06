import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor() 
  {
    
  }
  calculatorOperation(number1:number,number2:number,operator:any)
  {
    if(operator==='+')
    {
      return number1+number2;
    }
    else if (operator==='-')
    {
      return number1-number2
    }
    else if (operator==='/')
    {
      return number1/number2
    }
    else
    {
      return number1*number2
    }
  }
}
