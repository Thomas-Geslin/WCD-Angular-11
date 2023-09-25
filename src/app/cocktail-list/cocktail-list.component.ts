import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.service'

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {

  constructor(public cocktailService: CocktailService) { }

  cocktails: Array<Cocktail> = [];

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
