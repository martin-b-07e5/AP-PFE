import {Component} from '@angular/core';
import {Employee} from "../../model/employee.model";
import {EmployeeService} from "../../service/employee/employee.service";

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
