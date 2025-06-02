import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  currentStatus = 'online';
  status : string[] = ['online','offline','unknown'];

  ngOnInit(): void {
    setInterval(()=>{
      const random = Math.floor(Math.random() * 3);
      this.currentStatus = this.status[random];
      console.log(this.currentStatus);
    },3000);
    console.log("Is this run everytime when compoenent goes under chage");
  }
}
