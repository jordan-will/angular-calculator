import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-calc',
  imports: [],
  templateUrl: './input-calc.html',
  styleUrl: './input-calc.scss',
  standalone: true
})
export class InputCalc {
  calculatorScreen = input<string>('')
}
