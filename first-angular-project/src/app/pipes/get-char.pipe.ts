import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value[0];
  }

}
