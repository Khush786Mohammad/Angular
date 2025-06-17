import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { StopEventDirective } from '../../header/stop-event.directive';
import { FormsModule, NgModel } from '@angular/forms';
import { ShoeService } from '../../service/shoe.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [StopEventDirective, FormsModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements AfterViewInit{
  sizes : number[] = [];
  shoeType : string[] = [];
  constructor(private service: ShoeService){}
  @ViewChild('sortByValue') sortByValue!: ElementRef<HTMLSelectElement>;

  ngAfterViewInit(): void {
    
  }
  onSortChange(){
    if(this.sortByValue.nativeElement.value === 'low-to-high')
      this.service.sortByPrice('ASC')
    else
      this.service.sortByPrice('DESC');
  }

  onFilterChange(e: Event, size: number){
    const checkbox = e.target as HTMLInputElement;
    if(checkbox.checked){
      this.sizes.push(size);
    }
    else{
      this.sizes = this.sizes.filter((s) => s !== size);
    }

    this.service.filterShoe(this.sizes, this.shoeType);
  }

  onFilterShoeType(e: Event, shoeType: string){
    const checkbox = e.target as HTMLInputElement;
    if(checkbox.checked){
      this.shoeType.push(shoeType.toUpperCase());
    }
    else{
      this.shoeType = this.shoeType.filter((s) => s !== shoeType.toUpperCase());
    }

    this.service.filterShoe(this.sizes, this.shoeType);
  }
}
