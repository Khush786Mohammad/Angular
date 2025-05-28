import { Component, inject, signal } from '@angular/core';
import { type investmentData, type dataType } from './modal/data.modules';
import { InvestmentService } from './investment.service.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultData = signal<investmentData[] | undefined>(undefined);
  private investmentService = inject(InvestmentService);

  calculateInvestment(data: dataType){
    this.investmentService.calculateInvestmentResults(data);
    this.resultData.set(this.investmentService.resultData());
  }
}
