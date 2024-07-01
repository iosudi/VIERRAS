import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/app/modules/main/interfaces/products';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: Products[], term: string): Products[] {
    return products
      .filter((item) => item.title.toLowerCase().includes(term.toLowerCase()))
      .slice(0, 8);
  }
}
