import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placePrice',
})
export class PlacePricePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
