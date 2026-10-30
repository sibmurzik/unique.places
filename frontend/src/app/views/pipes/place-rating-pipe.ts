import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeRating',
})
export class PlaceRatingPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
