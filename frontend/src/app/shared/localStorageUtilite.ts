import { Place } from '../types/place';


const favoriteKey = 'favorites';

export function  saveToFavorite(placeName: string): void {
  let favoritePlaces: string[] =  readFromFavorite();

  favoritePlaces.push(placeName);
  localStorage.setItem(favoriteKey, JSON.stringify(favoritePlaces));

}

export function  readFromFavorite(): string[]    {

  const favorites = localStorage.getItem(favoriteKey);
  return favorites ? JSON.parse(favorites) : [] ;

}

export function  removeFromFavorite(placeName: string): void {
  const favorites = readFromFavorite();
  const newFavorite = favorites.filter((item)=> item !== placeName);
  localStorage.setItem(favoriteKey, JSON.stringify(newFavorite));
}
