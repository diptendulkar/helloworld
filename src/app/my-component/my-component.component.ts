import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],

  animations : [
    trigger('myAwesomeAnimation', [
      state('small',style({
        transform: 'scale(1)',
      })),
      state('large',style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large' , animate('300ms ease-in', keyframes([
        style({opacity:0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity:1, transform: 'translateY(35px)', offset: .5}),
        style({opacity:1, transform: 'translateY(0)', offset: 1}),
      ]))),
    ]),
  ]
})
export class MyComponentComponent implements OnInit {

   

  ngOnInit(): void {
    console.log(this.dataService.cars);
  }
  myobject = {
    gender: 'male',
    age: 33,
    location : 'Pune'

  }

  myArr = ['him','hers','yours'];
  obj = false
  angularLogo = "https://angular.io/resources/images/logos/angular2/angular.png"
  buttonStatus = false

  myEvent(event){
    console.log(event)
  }
//CSS
  titleClass = 'red-title'
  titleClasses ={
    'red-title' : true,
    'large-title' : true

  }
  titleStyle = true
  titleStyles = {
    'color': 'red',
    'font-size' : '2em'
  }


  //DataService
  someProperty:string = "";
  constructor(private dataService:DataService){
this.someProperty = this.dataService.myData();
  }

  //animation
  state: string = 'small'
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
