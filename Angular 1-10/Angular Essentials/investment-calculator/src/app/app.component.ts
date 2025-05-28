import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { type investmentData, type dataType } from './modal/data.modules';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentService } from './investment.service.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  standalone: true,
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
