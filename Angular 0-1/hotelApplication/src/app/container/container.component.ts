import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  imports: [EmployeeComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit, AfterContentInit{
  
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  constructor(){}
  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void{
    console.log(this.employee);
    this.employee.empName = "Jane";
  }
}
