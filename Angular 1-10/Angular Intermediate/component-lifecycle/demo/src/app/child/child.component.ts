import { Component, Input, OnInit, SimpleChanges, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck{
  @Input({required: true}) text !: {name: string};
  previousName !: {name: string};

  constructor(){
    console.log("Inside constructor: " + this.text?.name);
  }
  
  ngOnInit(): void {
    console.log("Inside OnInit: " +this.text?.name);
    console.log("previous name : "+ this.previousName?.name);
    this.previousName = {...this.text};

  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
  }

  ngDoCheck(): void{
    if(this.text.name !== this.previousName?.name){
      console.log("Change Detected Inside do check");
      console.log(this.previousName?.name);
      console.log(this.text.name);
    }
    else {
    console.log("Something is wrong");
    console.log(this.previousName?.name);
    console.log(this.text.name);
    }
  }
}
