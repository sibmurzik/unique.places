import { Component, inject } from '@angular/core';
import { FavoriteCounter } from '../favorite-counter';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly favoriteService = inject(FavoriteCounter);

  get counter() {
    return this.favoriteService.favoriteCount();
  }

}
