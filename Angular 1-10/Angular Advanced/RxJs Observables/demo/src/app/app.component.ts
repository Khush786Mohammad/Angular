import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map, Observable } from 'rxjs'
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})

// custom observable

export class AppComponent implements OnInit{
  intervalSignal = signal(0);

  private destroyRef = inject(DestroyRef);

  customInterval$ = new Observable((subscriber)=>{
    let timesExecuted = 0;
    const interval = setInterval(()=>{
      if(timesExecuted > 3){
        clearInterval(interval);
        subscriber.complete();
      }
      subscriber.next({message: `Time Executed ${timesExecuted}`});
      timesExecuted++;
    },2000);
  });
  constructor(){}

  ngOnInit(): void{
    const subscription = this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("Observable Completed")
    })

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }

  onClick(){}
}

//converting observable to signal
/*
export class AppComponent implements OnInit{
  intervals$ = interval(1000);
  intervalSignal = toSignal(this.intervals$,{initialValue: 0});

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void{
    const subscription = this.intervals$.subscribe({
      next: () => console.log(`Current Value is: ${this.intervalSignal()}`)
    })

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }
  onClick(){}
}

*/


//converting signal to observable

/*
export class AppComponent implements OnInit{
  clickCount = signal<number>(0);
  clickCount$ = toObservable(this.clickCount);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void{
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked Button: ${this.clickCount()} times`),
      error: () => console.log("Some error has occured")
    })

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }

  onClick(){
    this.clickCount.update(prevCount => prevCount + 1);
  }
}

*/

//rxjs and observable example


/*
export class AppComponent implements OnInit{
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void{
    const subscription = interval(1000).pipe().subscribe({
      next: (val) => console.log(val),
      error: ()=> console.log("Some error has occured")
    })

    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }
}
*/

/*

//using signal insteads of Observables
// export class AppComponent implements OnInit{
//   clickCount = signal<number>(0);
//   private destroyRef = inject(DestroyRef);

//   constructor(){
//     effect(()=>{
//       console.log('Clicked Button:', this.clickCount())
//     });
//   }

//   onClick(){
//     this.clickCount.update((prevCount)=>prevCount+1);
//   }
// }

*/
