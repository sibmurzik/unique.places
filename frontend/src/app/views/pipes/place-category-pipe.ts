import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeCategory',
})
export class PlaceCategoryPipe implements PipeTransform {
  transform(value: string, isFilter: boolean): string {
    switch (value) {
      case 'hotel':
        return 'Отель';

        default:  return value;
    }
  }
}
