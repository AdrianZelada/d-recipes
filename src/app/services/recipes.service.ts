import { Injectable } from '@angular/core';
import { uniq } from 'lodash-es';
import { BehaviorSubject, Observable } from 'rxjs';
import { RECIPES } from 'src/stores/recipes';
import { Catalogs, FilterRecipes, ViewRecipes } from './interfaces';

@Injectable({providedIn: 'root'})
export class RecipesService {
  public recipes: ViewRecipes = {main: RECIPES, suggestions: []};
  private _recipesSubject: BehaviorSubject<ViewRecipes> = new BehaviorSubject(this.recipes);
  public recipesSubject: Observable<ViewRecipes> = this._recipesSubject.asObservable();
  constructor() {
  }

  getCatalogs(): Catalogs {
    const catalogs: Catalogs = RECIPES.reduce((result: Catalogs, item: any) => {
      return {
        arm: [...result.arm, ...item.arm],
        holes: [...result.holes, item.holes]
      }
    }, {arm:[], holes: []});

    return {
      arm: uniq(catalogs.arm),
      holes: uniq(catalogs.holes)
    };
  }

  filterRecipes(filter: FilterRecipes) {
    if(filter.runes?.length == 0 && filter.arm == '' && filter.holes == null) {
      this._recipesSubject.next(this.recipes);
    } else {
      const recipes: ViewRecipes =  {
        main: [],
        suggestions: []
      }
      RECIPES.forEach((recipe: any) => {
        const runeFilter = this.filterRune(filter.runes || [], recipe.runes);
        const armFilter = this.filterArm(filter.arm || '', recipe.arm);
        const holeFilter = this.filterHoles(filter.holes || 0, recipe.holes);
        if(runeFilter.isMain && armFilter.isMain && holeFilter.isMain) {
          recipes.main.push(
            {
              ...recipe,
              runes: [
                ...runeFilter.runes
              ]
            }
          )
        } else {
          // if(runeFilter.count >= 1 && ( armFilter.isMain || holeFilter.isMain)) {
          if(runeFilter.count >= 1 && armFilter.isMain ) {
            recipes.suggestions.push(
              {
                ...recipe,
                runes: [
                  ...runeFilter.runes
                ]
              }
            )
          }
        }
      });
      this._recipesSubject.next(recipes);
    }
  }


  filterRune(runes: Array<string>, runeRecipe: Array<any>) {
    let count: number = 0;
    const statusRunes = runeRecipe.map((rune: any) => {
      const status = runes.length == 0 ? true : runes.indexOf(rune.name) != -1;
      count = count + (status? 1: 0);
      return {
        ...rune,
        status: runes.indexOf(rune.name) != -1
      }
    });
    return {
      runes: [
        ...statusRunes
      ],
      isMain: runeRecipe.length == count,
      count
    }
  }

  filterArm(arm: string, armRecipe: Array<string>) {
    const status = arm == '' ? true : armRecipe.indexOf(arm) != -1;
    return {
      isMain: status
    }
  }

  filterHoles(n: number, holesRecipe: number) {
    return {
      isMain: n == 0 ? true : holesRecipe == n
    }
  }

}
