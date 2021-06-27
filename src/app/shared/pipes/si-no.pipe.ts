import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siNo',
})
export class SiNoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'Si' : 'No';
  }
}
