import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

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

  calculate(){

  }

  print(){
    console.log(this.initialInvestment);
    console.log(this.annualInvestment);
  }
}
