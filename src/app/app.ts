import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCalc } from './components/btn-calc/btn-calc';
import { InputCalc } from './components/input-calc/input-calc';

interface Data {
  label: string,
  type: 'number' | 'op' | 'statement'
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, BtnCalc, InputCalc],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  
  protected title = 'Angular Calculator';

  calculatorInfo: Data[][] = [
    [{ label: 'c', type: 'op' }, { label: 'e', type: 'op' }, { label: '%', type: 'op' }, { label: '/', type: 'op' }],
    [{ label: '7', type: 'number' }, { label: '8', type: 'number' }, { label: '9', type: 'number' }, { label: 'x', type: 'op' }],
    [{ label: '4', type: 'number' }, { label: '5', type: 'number' }, { label: '6', type: 'number' }, { label: '-', type: 'op' }],
    [{ label: '1', type: 'number' }, { label: '2', type: 'number' }, { label: '3', type: 'number' }, { label: '+', type: 'op' }],
    [{ label: '+/-', type: 'op' }, { label: '0', type: 'number' }, { label: '.', type: 'statement' }, { label: '=', type: 'op' }],
  ]
  calculatorScreen: string = ''
  hasResult:boolean =  false
  operators:string[] = ['/', 'x', '+', '-', '%'] 

  receiveData(evt: any) {
    if(this.hasResult) this.calculatorScreen = ''
    
    switch(evt)
    {
      case 'c':
        this.calculatorScreen = ''
        break
      case 'e':
        this.calculatorScreen = this.calculatorScreen.slice(0, this.calculatorScreen.length - 1)
        break
      case '=':
        const hasOperation = (element:string) => this.operators.includes(element)
        if(!this.calculatorScreen.split('').some(hasOperation)) return

        this.calculatorScreen = eval(this.calculatorScreen.replace(/x/g, '*'))
        this.hasResult = true
        break
      case '+/-':
        break
      default:
        if(this.hasResult) this.hasResult = false
        this.calculatorScreen = this.operators.includes(evt) ? this.calculatorScreen + ` ${evt} ` : this.calculatorScreen + evt
    }
  }
  
}
