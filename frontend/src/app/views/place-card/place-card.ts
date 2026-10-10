import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../types/place';

@Component({
  imports: [],
  selector: 'app-place-card',
  styleUrl: './place-card.scss',
  templateUrl: './place-card.html',
})
export class PlaceCard implements OnInit {
  @Input() place: Place | undefined;

  isFullDescription: boolean = false;

  toggleDescription():void {
    this.isFullDescription = !this.isFullDescription;
  }

  priceLevels:number[] = [];


  ngOnInit():void {
    if (this.place) {
      for (let i = 0; i < this.place.priceLevel; i++) {
        this.priceLevels.push(i);
      }
    }



  }


}
