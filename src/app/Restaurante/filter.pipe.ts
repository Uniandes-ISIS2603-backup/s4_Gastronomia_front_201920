import { Pipe, PipeTransform } from '@angular/core';
import{Plato} from './plato';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Plato[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.nombre.toLowerCase().includes(searchText);
    });
   }
}