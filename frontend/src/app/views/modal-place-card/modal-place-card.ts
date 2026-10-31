import { Component, input, OnInit, output, OutputEmitterRef } from '@angular/core';
import { Place } from '../../types/place';
import { PlaceCategoryPipe } from '../pipes/place-category-pipe';
import { PlacePricePipe } from '../pipes/place-price-pipe';
import { Tooltip } from '../../shared/ui/tooltip';
import { removeFromFavorite, saveToFavorite } from '../../shared/localStorageUtilite';

@Component({
  imports: [PlaceCategoryPipe, PlacePricePipe, Tooltip],
  selector: 'app-modal-place-card',
  styleUrl: './modal-place-card.scss',
  templateUrl: './modal-place-card.html',
})
export class ModalPlaceCard implements OnInit {
  detailed_place = input.required<Place>();

  close_modal_card = output<boolean>({ alias: 'show_modal' });
  updatedFavorite: OutputEmitterRef<void> = output();

  ngOnInit(): void {}

  closeModalCard(): void {
    this.close_modal_card.emit(false);
  }

  updateFavorites(name: string): void {
    if (this.detailed_place().inFavorite) {
      removeFromFavorite(this.detailed_place().name);
      this.detailed_place().inFavorite = false;
    } else {
      saveToFavorite(this.detailed_place().name);
      this.detailed_place().inFavorite = true;
    }

    this.updatedFavorite.emit();
  }


}
