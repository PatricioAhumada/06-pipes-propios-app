import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public orderBy?:keyof Hero ;

  public heroes : Hero[] = [{
    name:'Superman',
    canFly:true,
    color: Color.blue
  },{
    name:'Batman',
    canFly:false,
    color: Color.black
  },{
    name:'Green Lantern',
    canFly:true,
    color: Color.green
  },{
    name:'Daredevil',
    canFly:false,
    color: Color.red
  },];

  toogleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value : keyof Hero){
    this.orderBy = value;

  }
}
