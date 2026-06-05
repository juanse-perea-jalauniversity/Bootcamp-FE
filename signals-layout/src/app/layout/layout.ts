import { KeyValuePipe, SlicePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [SlicePipe, KeyValuePipe],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  protected readonly isCollapsed = signal(false);
  protected readonly title = "Here goes the title, it should have max 50 char, after that you won't see the text"

  protected collapse = () => this.isCollapsed.update(state => !state)

  // --- pipes experiment ---
  // -- Slice pipe --
  // Usage 1: Limiting some text to fit on container
  // Usage 2: show more/less toggle
  protected isShowingMore = signal(true)
  protected toggleShowMore = () => this.isShowingMore.update(state => !state)
  // Usage 3: basic pagination
  protected paginationItems = signal([
    "item 1", "item 2", "item 3", "item 4", "item 5",
    "item 6", "item 7", "item 8", "item 9", "item 10",
    "item 11", "item 12", "item 13", "item 14", "item 15",
    "item 16", "item 17", "item 18", "item 19", "item 20",
    "item 21", "item 22", "item 23", "item 24", "item 25",

  ])
  protected currentPage = signal(0)
  protected sizePage = signal(5)
  // protected currentItems = computed((): string => (this.paginationItems())[this.currentPage()])
  protected nextPage = () => this.currentPage.update(state => Math.min(state + 5, this.paginationItems().length - 1)
  )
  protected previousPage = () => this.currentPage.update(state => Math.max(state - 5, 0))

  // keyvalue pipe
  // Usage 1: Rendering grouped categories
  protected products = {
    "Electronics": ["TV", "Laptop", "iPhone"],
    "Food": ["Potato chips", "Lettuce", "Hot dogs"],
    "Clothing": ["Jeans", "Shirt", "Dress"],
  }

  // Usage 2: render table of config
  protected config = {
    theme: "light",
    language: "es",
    notifications: true,
    twoFactorEnabled: true
  }

  // Usage 3: Dynamically render form error messages 

  // --- @for experiment ---
  // items = [12, 43, 1213, 534234]
  // itemsSignal = signal([12, 43, 1213, 534234])

  // log = (logInput: number) => {
  //   console.log(logInput)
  //   return
  // }
}
