import { Component, Input, OnInit } from '@angular/core';
import { RunesService } from '../services/runes.service';

@Component({
  selector: 'd-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss']
})
export class CardRecipeComponent implements OnInit {

  @Input() recipe: any = {};
  @Input() showStatus: boolean = false;
  listRunes: Array<any> = [];
  arms: string = '';
  constructor(
    private _runesService: RunesService
  ) { }

  ngOnInit(): void {
    this.listRunes = this.recipe.runes.map((item: any) => {
      return {
        ...item,
        img: this._runesService.buildNameImage(item.name)
      }
    });
    this.arms = this.recipe.arm.join(', ');
  }

}
