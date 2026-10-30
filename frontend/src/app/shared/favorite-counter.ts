import { Service, signal } from '@angular/core';

@Service()
export class FavoriteCounter {
  favoriteCount = signal(0);
}
