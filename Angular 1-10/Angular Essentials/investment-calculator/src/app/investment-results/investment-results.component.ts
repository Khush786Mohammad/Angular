import { Component, Input, Pipe } from '@angular/core';
import { type annualData } from '../modal/data.modules';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results ?: annualData[];
}
