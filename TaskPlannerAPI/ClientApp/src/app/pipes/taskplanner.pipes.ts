import { Pipe, PipeTransform } from '@angular/core';
/*
*/
@Pipe({name: 'statusLabel'})
export class StatusLabelPipe implements PipeTransform {
  transform(value: any): string {
    const label = value.filter(l => l.name.indexOf('status:') === 0);
    if (label.length) {
        return value.filter(l => l.name.indexOf('status:') === 0)[0].name.substring(8);
    } else {
        return 'new';
    }
  }
}
