import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterRecipes, ViewRecipes } from './services/interfaces';
import { RecipesService } from './services/recipes.service';
import { RunesService } from './services/runes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd-recipes';
  runes: Array<any>= [];
  form: FormGroup;
  mapRunes: any = {};
  recipes: ViewRecipes = {
    main: [],
    suggestions: []
  };
  showStatus: boolean = false;
  constructor(
    private _recipesService: RecipesService,
    private _runesService: RunesService,
    private fb :FormBuilder
  ) {
    this.form =  this.fb.group({
      runes: new FormControl()
    })
    this._runesService.getData().subscribe((runes) => {
      this.runes = runes;
    });
    const catalogs = this._recipesService.getCatalogs();

    this._recipesService.recipesSubject.subscribe((recipes: ViewRecipes) => {
      this.recipes = {
        ...recipes
      }
    });
  }

  filter() {
    const filter: FilterRecipes = {
      runes: ["Tal", "Ral", "Eld", "Nef", "Ith", "El", "Tir", "Eth"],
      arm: ""
    }

    this._recipesService.filterRecipes(filter);
  }

  selectRune(rune: any) {
    if(this.mapRunes[rune.name]) {
      delete this.mapRunes[rune.name];
    } else {
      this.mapRunes[rune.name] = true;
    }
    const runes = Object.keys(this.mapRunes);
    const filter: FilterRecipes = {
      runes: runes,
      arm: ""
    }

    this.showStatus = runes.length > 0;
    this._recipesService.filterRecipes(filter);
  }



}
