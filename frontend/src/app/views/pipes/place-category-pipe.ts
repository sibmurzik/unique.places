import { Pipe, PipeTransform } from '@angular/core';
import { category_conversion } from '../../types/category_conversion';

@Pipe({
  name: 'placeCategory',
})
export class PlaceCategoryPipe implements PipeTransform {
  transform(value: string, isFilter: boolean = false): string {
    const viewValue = category_conversion
      .find(item => item.original === value);
    if (viewValue) {
      return isFilter ? viewValue.viewPlural : viewValue.view;
    } else {
      return value;
    }

  }
}
