import { Injectable } from '@angular/core';

export interface Cocktail {
  name: string,
  price: number,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktailsList: Array<Cocktail> = [
    {name: 'Mojito', price: 8, image: 'https://img.cuisineaz.com/660x660/2013/12/20/i65347-photo-de-morito.jpeg'},
    {name: 'Pina colada', price: 12, image: 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fae446b77-3ff0-49b7-9cbc-1273393439ce.2Ejpeg/750x562/quality/80/crop-from/center/cr/wqkgVGhpbmtzdG9jayAvIEZlbW1lIEFjdHVlbGxl/pina-colada.jpeg'},
    {name: 'Cosmo', price: 6, image: 'https://titiranol-cocktail.fr/wp-content/uploads/2016/08/original_cosmopolitan-cocktail-gift-pack.jpg'},
    {name: 'Tequila Sunrise', price: 5.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vNmlfnDw64xPMf9FMYMniRXPDUXEBzPjxA&usqp=CAU'}
  ]

  constructor() { }

  public getCocktails(): Array<Cocktail> {
    return this.cocktailsList;
  }

}
