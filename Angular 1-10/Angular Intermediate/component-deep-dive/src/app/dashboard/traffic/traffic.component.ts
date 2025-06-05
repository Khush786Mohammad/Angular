import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  @Input({required: true}) trafficData !: {id: string, value: number}[];
  maxTraffic = input<number>(0);

  get GetTrafficData() {
    return this.trafficData;
  }

  get MaxTraffic() {
    return this.maxTraffic();
  }
}
