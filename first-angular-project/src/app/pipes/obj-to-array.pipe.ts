import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArray'
})
export class ObjToArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
