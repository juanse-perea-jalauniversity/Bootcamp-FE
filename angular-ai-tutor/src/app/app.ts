import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { basicSalad, pastaCarbonara } from './mock-recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Recipe Box Signal');
  protected readonly recipe = signal<RecipeModel>(basicSalad);
  protected switchToCarbonara(): void {
    console.log("Viewing carbonara...")
    this.recipe.set(pastaCarbonara)
  }
  protected switchToSalad(): void {
    console.log("Viewing salad...")
    this.recipe.set(basicSalad)
  }
}
