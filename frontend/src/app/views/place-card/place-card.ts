import { Component, HostListener, input, InputSignal, OnInit, output, OutputEmitterRef, Renderer2, signal } from '@angular/core';
import { Place } from '../../types/place';
import { ModalPlaceCard } from '../modal-place-card/modal-place-card';
import { removeFromFavorite, saveToFavorite } from '../../shared/localStorageUtilite';

@Component({
  imports: [ModalPlaceCard],
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
})
export class PlaceCard implements OnInit {
  place:InputSignal<Place> = input.required<Place>();
  updatedFavorite: OutputEmitterRef<void> = output();

  isModalOpen = false;

  priceLevels: number[] = [];

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (this.place()) {
      for (let i = 0; i < this.place().priceLevel; i++) {
        this.priceLevels.push(i);
      }
    }
  }

  openModal(): void {
    this.isModalOpen = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');


  }
  closeModal(): void {
    this.isModalOpen = false;
    this.renderer.removeStyle(document.body, 'overflow');

  }

  @HostListener('window:keydown.escape') onEscape() {
    if (this.isModalOpen) this.closeModal();
  }

  updateFavorites(name: string): void {
    if (this.place().inFavorite) {
      removeFromFavorite(this.place().name);
      this.place().inFavorite = false;
    } else {
      saveToFavorite(this.place().name);
      this.place().inFavorite = true;
    }

    this.updatedFavorite.emit();

  }
}
