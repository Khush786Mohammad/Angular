import { Component, Input, Output, EventEmitter, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  // @Input({required: true}) size!: { width: string; height: string};
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string}>();

  size = model.required< {width: string; height: string}>();
  onReset() {
    // this.size.emit({ width: '100', height: '100' });
    this.size.update(()=>{
      return {width: '100', height: '100'}
    })
  }
}
