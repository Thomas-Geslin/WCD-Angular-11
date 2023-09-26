import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface Cocktail {
  name: string,
  price: number,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) { }

  public getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }

}
