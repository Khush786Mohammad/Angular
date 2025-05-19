import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'hinv-root',
  imports: [RouterOutlet, RoomsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, ContainerComponent, EmployeeComponent],
  // template: `<h1>hellow World!</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'hotelApplication';
  role = 'Admin';

  ngOnInit(): void {
    this.name.nativeElement.innerText = "Brampton Hotel";
  }
  // ngAfterViewInit(): void {
    
  // }
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.totalRooms=50;
  }
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef;
}
