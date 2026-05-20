import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Recipe Box Signal');
  protected viewRecipe(): void {
    console.log("Viewing Italian Recipes...")
  }
  protected viewIngredients(): void {
    console.log("Tomatoes, garlic, onion...")
  }
}
