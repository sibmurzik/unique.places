import { Component, input, OnInit, output } from '@angular/core';
import { Place } from '../../types/place';

@Component({
  imports: [],
  selector: 'app-modal-place-card',
  styleUrl: './modal-place-card.scss',
  templateUrl: './modal-place-card.html',
})
export class ModalPlaceCard implements OnInit {
  detailed_place = input.required<Place>();

  close_modal_card = output<boolean>();

  priceLevels: number[] = [];

  ngOnInit(): void {
    if (this.detailed_place()) {
      for (let i = 0; i < this.detailed_place().priceLevel; i++) {
        this.priceLevels.push(i);
      }
    }
  }

  closeModalCard (): void {
    this.close_modal_card.emit(true);
  }
}
