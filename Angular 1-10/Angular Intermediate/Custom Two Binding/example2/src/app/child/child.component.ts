import { Component, Input, Output, EventEmitter, model} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Input({required: true}) count !: number;
  // @Output() countChange = new EventEmitter<number>();

  // incrementCount(){
  //   this.count++;
  //   this.countChange.emit(this.count);
  // }

  // decrementCount(){
  //   this.count--;
  //   this.countChange.emit(this.count);
  // }

  count = model.required<number>();

  incrementCount(){
    this.count.update(()=> this.count() + 1);

  }

  decrementCount(){
    this.count.update(()=> this.count()-1);
  }
}
