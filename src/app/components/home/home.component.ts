import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee.model";
import {EmployeeServiceService} from "../../services/employee-service.service";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'app-employees';

  // Acá guardamos la información del formulario
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  // cuadroSalario: number = 0;
  cuadroSalario: number;

  /* movimos el array al servicio employee.service.ts
  employees: Employee[] = [
    // array of employees of type 'Employee'
    new Employee("Juan", "Corea", "Presidente", 7500),
    new Employee("Martín", "Stella", "Empleado", 100),
    new Employee("José", "Gomez", "Administrativo", 500),
    new Employee("Raúl", "Bengoechea", "Empresario", 17600),
  ]*/
  employeesArray: Employee[] = []; // dejamos un array vacío.
  hidden = false;

  /*inyectamos el servicio, en el constructor del componente principal
  como parámetros
   el servicio myService de tipo EmployeeServiceService y
   el servicio myEmployeeService de tipo EmployeeService
   */

  constructor(private myService: EmployeeServiceService, private myEmployeeService: EmployeeService) {
    // this.cuadroSalario = 0;
    this.cuadroSalario = Number("");
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  agregarEmpleado() {
    let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    // this.myService.showAlertMessage("employee: " + myEmployee.name + ", added."); // inject service into component
    // movemos push tb a employee.service.ts
    // this.employees.push(myEmployee); // Agregar myEmployee al array employees
    this.myEmployeeService.agregarEmpleadoService(myEmployee); // service injected

  }

  // empty elements after submitForm
  submitForm() {
    document.getElementById(this.cuadroNombre = "");
    document.getElementById(this.cuadroApellido = "");
    document.getElementById(this.cuadroCargo = "");
    // document.getElementById(String(this.cuadroSalario = Number("")));
    document.getElementById(String((this.cuadroSalario = 0)));
  }

  ngOnInit(): void {
    this.employeesArray = this.myEmployeeService.employees;
  }

}
