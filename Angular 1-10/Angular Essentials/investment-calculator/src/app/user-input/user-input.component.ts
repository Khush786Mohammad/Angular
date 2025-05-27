import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dataType } from '../modal/data.modules';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment :string = '0';
  annualInvestment : string = '0';
  expectedReturn : string = '0';
  duration : string = '0';

  @Output() calculateInvestmentResult = new EventEmitter<dataType>();

  calculate(){
    console.log("submitted");
    const obj = {
      initialInvestment: Number(this.initialInvestment),
      annualInvestment: Number(this.annualInvestment),
      expectedReturn: Number(this.expectedReturn),
      duration: Number(this.duration)
    }

    this.calculateInvestmentResult.emit(obj);
  }
}
