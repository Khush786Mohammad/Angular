import { Component,input, ViewEncapsulation, inject, ElementRef, ContentChild, contentChild, afterRender, afterNextRender } from '@angular/core';

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

  // @ContentChild('titleInput') private titleInputInstance ?: ElementRef<HTMLInputElement>;
  // @ContentChild('textInput') private textInputInstance ?: ElementRef<HTMLTextAreaElement>;

  // contentChild signal

  private titleInputInstance = contentChild<ElementRef<HTMLInputElement>>('titleInput');
  private textInputInstance = contentChild<ElementRef<HTMLInputElement>>('textInput');

  constructor(){
    afterRender(()=>{
      console.log('afterRender');
    });
    afterNextRender(()=>{
      console.log('afterNextRender');
    });
  }
  onClick(){
    // console.log("clicked on host element");
    // console.log(this.el);
    console.log(this.titleInputInstance());
    console.log(this.textInputInstance());
  }
}
