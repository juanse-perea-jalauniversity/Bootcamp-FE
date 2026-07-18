import { Component, input, output } from '@angular/core';

@Component({
  selector: 'tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  readonly labels = input.required<string[]>();
  readonly active = input.required<string>();
  readonly activeChange = output<string>();
}
