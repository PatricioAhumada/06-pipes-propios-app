import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLower : string = 'patricio';
  public nameUpper : string = 'PATRICIO';
  public fullName : string = 'PAtrIcIo ahUmADa';

  public customDate : Date = new Date();
}
