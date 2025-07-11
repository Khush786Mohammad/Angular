import { Component, effect, NgZone, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit{

  private zone = inject(NgZone);
  count = signal(0);

  ngOnInit(): void{
    setTimeout(()=>{
      this.count.set(0);
    }, 4000);

    this.zone.runOutsideAngular(()=>{
      setTimeout(()=>{
        console.log("Time Out");
      },5000);
    })
  }

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
