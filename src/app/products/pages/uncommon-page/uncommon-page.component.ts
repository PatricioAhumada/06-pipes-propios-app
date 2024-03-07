import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Patricio';
  public gender: 'male' | 'female' = 'male';
  public invitationMap ={
    male:'invitarlo',
    female:'invitarla',
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender='female';
  }

  //i18n Plural

  public clients : string[] = [ 'Sandra' , 'Nina' , 'Sofi' ,'Patricio' , 'Feña', 'Eduardo', 'Renato'];
  public clientsMap={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos  # clientes esperando',
  }
  deleteClients(): void{
    this.clients.shift();
  }

  //keyValue
  public person = {
    name:'Patricio' ,
    age: 46,
    address:'La Fomerena, Chile'

  }

  //async pipe
  public myObservableTimer: Observable<Number> = interval(2000).pipe(
      tap( value => console.log('tap : ' , value))
    );

  public promiseValue: Promise<string> = new Promise((resolve , reject) =>{
    setTimeout(()=>{
      resolve('tenemos promesa...')
    },3500);
  })

}
