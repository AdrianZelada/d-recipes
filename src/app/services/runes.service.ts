import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { RUNES } from 'src/stores/runes';

@Injectable({providedIn: 'root'})
export class RunesService {
  constructor() {
  }

  getData() {
    return of(RUNES).pipe(
      map((runes) => {
        return runes.map((rune) => {
          return {
            ...rune,
            img: this.buildNameImage(rune.name)
          }
        });
      })
    );
  }

  buildNameImage(name: string){
    return `./assets/img/rune${name}.jpg`
  }
}
