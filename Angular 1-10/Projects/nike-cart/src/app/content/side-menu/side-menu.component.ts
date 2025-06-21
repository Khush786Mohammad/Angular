import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { StopEventDirective } from '../../header/stop-event.directive';
import { FormsModule } from '@angular/forms';
import { ShoeService } from '../../service/shoe.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [StopEventDirective, FormsModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent{
  searchValue :string = '';
  sizes : number[] = [];
  shoeType : string[] = [];
  constructor(private service: ShoeService){}
  @ViewChild('sortByValue') sortByValue!: ElementRef<HTMLSelectElement>;
  @ViewChildren('checkboxRef') checkboxes !: QueryList<ElementRef<HTMLInputElement>>;

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

  search(){
    this.service.searchShoes(this.searchValue);
  }

  removeAllFilters(){
    this.checkboxes.forEach((checkbox) => 
      checkbox.nativeElement.checked = false)
    this.searchValue = '';
    this.sortByValue.nativeElement.value = 'none';
    this.sizes = [];
    this.shoeType = [];
    this.service.filterShoe(this.sizes, this.shoeType);

    this.service.resetShoeData();
  }


}
