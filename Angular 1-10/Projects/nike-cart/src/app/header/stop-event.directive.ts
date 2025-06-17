import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appStopEvent], button[appStopEvent]',
  standalone: true,
  host: {
    '(click)':'stopDefaultEvent($event)'
  }
})
export class StopEventDirective {

  constructor() { }
  stopDefaultEvent(event: MouseEvent){
    event.preventDefault();
  }

}
