import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id" : 1,"name" : "Satyaki Saha", "age": 22},
      { "id": 2,"name" : "Rima Kar", "age": 22 },
      { "id": 1, "name": "Arnab Banik", "age": 22 },            
    ]
  }
}
