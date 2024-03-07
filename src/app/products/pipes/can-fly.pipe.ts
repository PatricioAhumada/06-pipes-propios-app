import { Pipe, PipeTransform } from '@angular/core';

// patricio | toggleCase = 'PATRICIO'
// PATRICIO | toggleCase = 'patricio'

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value : boolean ): 'vuela' | 'no vuela'{

      return ( value ) ? 'vuela' : 'no vuela';
  }
}
