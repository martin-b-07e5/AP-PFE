import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee.model";
import {EmployeeServiceService} from "../../services/employee-service.service";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit{

  constructor(private myService: EmployeeServiceService, private myEmployeeService: EmployeeService) {
  }

  title = 'app-employees';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  // cuadroSalario: number = 0;
  cuadroSalario!: number;

  employeesArray: Employee[] = []; // dejamos un array vacío.

  agregarEmpleado() {
    let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    // this.myService.showAlertMessage("employee: " + myEmployee.name + ", added."); // inject service into component
    // movemos push tb a employee.service.ts
    // this.employees.push(myEmployee); // Agregar myEmployee al array employees
    this.myEmployeeService.agregarEmpleadoService(myEmployee); // service injected
  }

  submitForm() {
    document.getElementById(this.cuadroNombre = "");
    document.getElementById(this.cuadroApellido = "");
    document.getElementById(this.cuadroCargo = "");
    // document.getElementById(String(this.cuadroSalario = Number("")));
    document.getElementById(String((this.cuadroSalario = 0)));
  }

  ngOnInit(): void {
  }


}
