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

}
