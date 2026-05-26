import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly title = signal('My Recipe Box Signal');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(1);

  protected readonly adjustedIngredients = computed(() => {
    return this.recipe().ingredients.map(ing => ({
      ...ing,
      quantity: ing.quantity * this.servings()
    }));
  });

  protected switchToCarbonara(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected switchToSalad(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected incrementServings(): void {
    this.servings.update(s => s + 1);
  }

  protected decrementServings(): void {
    this.servings.update(s => Math.max(1, s - 1));
  }
}
