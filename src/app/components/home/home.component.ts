import {Component} from '@angular/core';
import {Employee} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  employees: Employee[] = [];

  // inyectamos
  constructor(private myEmployeeService: EmployeeService) {
    this.employees = this.myEmployeeService.employees;
  }

}
