import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RUNES } from 'src/stores/runes';

@Injectable({providedIn: 'root'})
export class RunesService {
  constructor() {
  }

  getData() {
    return of(RUNES);
  }
}
