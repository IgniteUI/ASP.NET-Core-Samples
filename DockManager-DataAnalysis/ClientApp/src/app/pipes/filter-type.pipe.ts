import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
