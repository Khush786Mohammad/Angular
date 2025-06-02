import { Component,input, ViewEncapsulation, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  label = input.required<string>();

  private el = inject(ElementRef);

  onClick(){
    console.log("clicked on host element");
    console.log(this.el);
  }
}
