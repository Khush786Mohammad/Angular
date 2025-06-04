import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnChanges, OnDestroy, signal,effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [NgClass],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnChanges, OnDestroy{

  currentStatus = signal('online');
  status : string[] = ['online','offline','unknown'];
  private destroyRef = inject(DestroyRef);

  // private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(()=>{
      console.log(this.currentStatus());
    });
  }
  ngOnInit(): void {
    const interval = setInterval(()=>{
      const random = Math.floor(Math.random() * 3);
      this.currentStatus.set(this.status[random]) ;
      console.log(this.currentStatus());
    },3000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }
  get serverStatus() {
    return this.currentStatus;
  }

  ngOnChanges(): void {
    console.log("Message from OnChange hook");
  }

  ngOnDestroy(): void{
    // clearInterval(this.interval);
  }
}
