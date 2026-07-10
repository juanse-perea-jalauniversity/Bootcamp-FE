import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly title = signal('My Recipe Box Signal');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly searchTerm = signal("")
  private readonly recipeService = inject(Recipe)
  protected readonly filteredRecipes = computed(() => this.recipeService.recipes.filter(rec => rec.name.toLowerCase().includes(this.searchTerm().toLowerCase())))

  // protected switchToCarbonara(): void {
  //   this.recipe.set(MOCK_RECIPES[0]);
  // }

  // protected switchToSalad(): void {
  //   this.recipe.set(MOCK_RECIPES[1]);
  // }

}
