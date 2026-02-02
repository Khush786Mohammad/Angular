import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title = 'Demo';
  counter= 0;
  changeDetector = inject(ChangeDetectorRef);

  constructor(private destroyRef: DestroyRef){
    const subscription = setInterval(()=>{
      this.counter++;
      console.log(this.counter);
    },1000);
    this.destroyRef.onDestroy(()=>{
      clearInterval(subscription); 
    });

    const subscription2 = setInterval(()=>{
      this.changeDetector.markForCheck();
    },5000);
  }
}
