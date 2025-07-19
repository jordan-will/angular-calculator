import { CommonModule, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-btn-calc',
  imports: [CommonModule, NgStyle],
  templateUrl: './btn-calc.html',
  styleUrl: './btn-calc.scss',
  standalone: true
})
export class BtnCalc {
  btnLabel = input<string>('x')
  typeOp = input<string>()
  btnPressed = output<string | number | null>()

  sendData(){
      this.btnPressed.emit(this.btnLabel())
  }

}
