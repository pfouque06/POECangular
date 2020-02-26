import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCharAt'
})
export class GetCharAtPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] && args[0] < value.length)
      return value[args[0]];
    return value[0];
    /*     if (args[0] && args[0].length < value)
          return args[value];
         return args[0]; */
  }

}
