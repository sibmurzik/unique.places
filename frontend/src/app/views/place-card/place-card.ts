import { Component, input, Input, OnInit, output } from '@angular/core';
import { Place } from '../../types/place';

@Component({
  imports: [],
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
})
export class PlaceCard implements OnInit {
  place = input.required<Place>();
  show_full_details = output<Place>({alias:'full_details'});




  showFullCard():void {
    this.show_full_details.emit(this.place())
  }

  priceLevels:number[] = [];


  ngOnInit():void {
    if (this.place()) {
      for (let i = 0; i < this.place().priceLevel; i++) {
        this.priceLevels.push(i);
      }
    }



  }


}
