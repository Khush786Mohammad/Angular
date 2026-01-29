import { Component, signal} from '@angular/core';
import { InvestmentService } from '../investment.service.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  duration = signal('0');

  constructor(private investmentService: InvestmentService){}

  calculate(){
    const obj = {
      initialInvestment: Number(this.initialInvestment()),
      annualInvestment: Number(this.annualInvestment()),
      expectedReturn: Number(this.expectedReturn()),
      duration: Number(this.duration())
    }

    this.investmentService.calculateInvestmentResults(obj);

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('0');
    this.duration.set('0');
  }
}
