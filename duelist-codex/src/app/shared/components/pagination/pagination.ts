import { Component, input, output } from '@angular/core';

@Component({
  selector: 'pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  readonly currentPage = input.required<number>();
  readonly totalPages = input.required<number>();
  readonly pageChange = output<number>();

  previous(): void {
    if (this.currentPage() > 1) {
      this.pageChange.emit(this.currentPage() - 1);
    }
  }

  next(): void {
    if (this.currentPage() < this.totalPages()) {
      this.pageChange.emit(this.currentPage() + 1);
    }
  }
}
