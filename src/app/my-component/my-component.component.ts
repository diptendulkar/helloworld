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
}
