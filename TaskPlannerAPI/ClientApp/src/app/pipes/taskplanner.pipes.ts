import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusLabel'})
export class StatusLabelPipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value === 'string') {
      return value;
    }
    const label = value.filter(l => l.name.indexOf('status:') === 0);
    if (label.length) {
        return label[0].name.substring(8);
    }
  }
}

@Pipe({name: 'priorityLabel'})
export class PriorityLabelPipe implements PipeTransform {
  transform(value: any): string {
    const label = value.rowData.labels.filter(l => l.name.indexOf('severity:') === 0);
    if (label.length) {
        return label[0].name.substring(10);
    }
  }
}
