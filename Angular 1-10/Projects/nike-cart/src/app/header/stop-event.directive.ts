import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appStopEvent], button[appStopEvent], input[appStopEvent]',
  standalone: true,
  host: {
    '(click)':'stopDefaultEvent($event)',
    '(keydown.enter)':'stopReloadEvent($event)'
  }
})
export class StopEventDirective {

  constructor() { }
  stopDefaultEvent(event: MouseEvent){
    event.preventDefault();
  }
  stopReloadEvent(event: KeyboardEvent){
    event.preventDefault();
  }

}
