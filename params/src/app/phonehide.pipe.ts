import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonehide'
})
export class PhonehidePipe implements PipeTransform {

  transform(value: any): any {
    var output=value.substring(0,3)+'********';
    return output;
  }

}
