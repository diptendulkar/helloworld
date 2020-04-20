import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars =[
    'Ford','maruti', 'Hundai', 'Honda'
  ];

  myData() {
    return 'This is my data, from DataService';
  }
}

