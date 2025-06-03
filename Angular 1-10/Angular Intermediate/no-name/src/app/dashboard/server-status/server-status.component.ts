import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [NgClass],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnChanges, OnDestroy{

  currentStatus = 'online';
  status : string[] = ['online','offline','unknown'];
  private destroyRef = inject(DestroyRef);

  // private interval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    const interval = setInterval(()=>{
      const random = Math.floor(Math.random() * 3);
      this.currentStatus = this.status[random];
      console.log(this.currentStatus);
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
