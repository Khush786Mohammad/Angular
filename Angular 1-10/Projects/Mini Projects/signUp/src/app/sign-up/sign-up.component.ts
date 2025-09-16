import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  countries: string[] = ["Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Brazil", 
    "Canada", "Chile", "China", "Colombia", "Denmark", "Dominican Republic", "Ecuador", "Egypt", 
    "Estonia", "Finland", "France", "Germany", "Greece", "Guatemala", "Honduras", "Hungary", 
    "Iceland", "India", "Indonesia", "Japan", "Jordan", "Kenya", "Kuwait", "Latvia", "Lebanon", 
    "Liberia", "Lithuania", "Luxembourg", "Malaysia", "Malta", "Mexico", "Morocco", "Nepal", 
    "Netherlands", "New Zealand", "Nicaragua", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", 
    "Peru", "Philippines", "Poland"];
  
  currentCountry :string = 'India';
  constructor(){}

  onChangeCountry(event: Event){
    const country = event.target as HTMLSelectElement | null;
    if(country){
      this.currentCountry = country.value;
      country.value="change";
    }
  }
}
