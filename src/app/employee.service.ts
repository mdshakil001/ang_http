import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1, "name": "Andrew", "age": 30},
      {"id":2, "name": "Brandon", "age": 20},
      {"id":3, "name": "John", "age": 40},
      {"id":4, "name": "David", "age": 35},
    ]
  }
}
