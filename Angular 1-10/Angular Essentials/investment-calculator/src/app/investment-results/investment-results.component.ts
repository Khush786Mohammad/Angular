import { Component, computed, signal} from '@angular/core';
import { InvestmentService } from '../investment.service.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService){}

  results = computed( () => 
  this.investmentService.resultData());
}
