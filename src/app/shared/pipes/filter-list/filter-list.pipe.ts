import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], key: string, value: string): any[] {
    if (!items || !key || !value) return items;
    return items.filter(item => item[key].toString().toLowerCase().includes(value.toLowerCase()));
  }

}
