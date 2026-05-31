import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from "../recipe-detail/recipe-detail";

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly title = signal('My Recipe Box Signal');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected switchToCarbonara(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected switchToSalad(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

}
