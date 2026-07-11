import { Component } from '@angular/core';
import { CardGrid } from "../card-grid/card-grid";

@Component({
  selector: 'layout',
  imports: [CardGrid],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
