import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
