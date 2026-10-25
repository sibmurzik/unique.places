import { Place } from '../types/place';

export function  saveToFavorite(place:Place): void {
  let favoritePlaces: Place[] =  readFromFavorite();

  favoritePlaces.push(place);
  localStorage.setItem("favorite", JSON.stringify(favoritePlaces));

}

export function  readFromFavorite(): Place[]    {

  const favorite = localStorage.getItem("favorite");
  if (favorite) {
    try {
      const parsed = JSON.parse(favorite);
      const favoritePlaces  =  Array.isArray(parsed) ? parsed : [];
      return favoritePlaces as Place[] ;
    }
    catch (error) {
      console.log("Невалидные данные в  local storage", error);
      return []
    }
  }
  return [];
}

export function  removeFromFavorite(place: Place): void {
  const favorite = readFromFavorite();
  const newFavorite = favorite.filter((item)=> item.id !== place.id);
  localStorage.setItem("favorite", JSON.stringify(newFavorite));
}
