import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placePrice',
})
export class PlacePricePipe implements PipeTransform {
  transform(value: number): number[] {
    if (!Number.isFinite(value) || value <=0) {
      return [];
    }
    const count = Math.floor(value);
    return   Array.from({length: count}, (_, i) => i + 1);

  }
}
