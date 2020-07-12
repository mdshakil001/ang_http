import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'employee-list',
    template: `
        <h2>Employee-list</h2>
        <ul *ngFor="let employee of employees">
            <li>{{employee.name}}</li>
        </ul>
    `,
    styles: []
})

export class EmployeeListComponent implements OnInit{
    public employees = [
        {"id":1, "name": "Andrew", "age": 30},
        {"id":2, "name": "Brandon", "age": 20},
        {"id":3, "name": "John", "age": 40},
        {"id":4, "name": "David", "age": 35},
    ]

    constructor(){}
    ngOnInit(){}
}