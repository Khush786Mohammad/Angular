import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heart-svg',
  imports: [],
  templateUrl: './heart-svg.component.html',
  styleUrl: './heart-svg.component.css'
})
export class HeartSvgComponent {
  @Input({required: true}) fillColor: string = '';
}
