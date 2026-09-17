import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-pagination',
  styleUrl: './pagination.css',
  templateUrl: './pagination.html',
})
export class Pagination {
  currentPage: number = 5;
  pageSize: number = 10;
  totalPages = 10;

  ngOnInit(): void {
    console.log('Fetching api');
  }

  onPageChange(pageNumber: number) {
    console.log(pageNumber);
    this.currentPage = pageNumber;
  }

  get paginationItems(): (number | 'ellipsis')[] {
    if (this.totalPages <= 7) {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    if (this.currentPage <= 4) {
      return [1, 2, 3, 4, 5, 'ellipsis', this.totalPages];
    }

    if (this.currentPage >= this.totalPages - 3) {
      return [
        1,
        'ellipsis',
        this.totalPages - 4,
        this.totalPages - 3,
        this.totalPages - 2,
        this.totalPages - 1,
        this.totalPages,
      ];
    }

    return [
      1,
      'ellipsis',
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      'ellipsis',
      this.totalPages,
    ];
  }

  get resultPerPageOptionList(): number[] {
    return Array.from([10, 20, 30, 40, 50]);
  }
}
