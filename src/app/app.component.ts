import { Component } from '@angular/core';
import { FilterRecipes, ViewRecipes } from './services/interfaces';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd-recipes';
  constructor(
    private _recipesService: RecipesService
  ) {

    const catalogs = this._recipesService.getCatalogs();
    console.log(catalogs);

    this._recipesService.recipesSubject.subscribe((recipes: ViewRecipes) => {
      console.log("recipes");
      console.log(recipes);
    });

  }

  filter() {
    const filter: FilterRecipes = {
      runes: ["Thul", "Io", "Nef"],
      arm: ""
    }

    this._recipesService.filterRecipes(filter);
  }




}
