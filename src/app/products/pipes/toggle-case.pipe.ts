import { Pipe, PipeTransform } from '@angular/core';

// patricio | toggleCase = 'PATRICIO'
// PATRICIO | toggleCase = 'patricio'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string , toUpper : boolean = false): string {

      return ( toUpper ) ? value.toUpperCase() : value.toLowerCase();
  }
}
