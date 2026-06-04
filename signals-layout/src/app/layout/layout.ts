import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  protected readonly isCollapsed = signal(false);

  protected collapse = () => this.isCollapsed.update(state => !state)

  // For experiment
  // items = [12, 43, 1213, 534234]
  // itemsSignal = signal([12, 43, 1213, 534234])

  // log = (logInput: number) => {
  //   console.log(logInput)
  //   return
  // }
}
