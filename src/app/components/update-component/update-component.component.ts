import {Component} from '@angular/core';
import {Employee} from "../../model/employee.model";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent {

  title = 'app-employees';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  // cuadroSalario: number = 0;
  cuadroSalario!: number;

  employees: Employee[] = [];

  constructor(private myEmployeeService: EmployeeService, private router: Router) {
    this.employees = this.myEmployeeService.employees;
  }

  volverHome() {
    // this.router.navigate(['']);
    this.router.navigate(['']).then(() => this.removeSpinner());
  }

  // this.router.navigateByUrl('/login').then(_ => { removeSpinner(); });
  removeSpinner() {
    console.log("promesa cumplida");
  }

  agregarEmpleado() {
    let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido,
      this.cuadroCargo, this.cuadroSalario);
    this.myEmployeeService.agregarEmpleadoService(myEmployee); // service injected
  }

  submitForm() {
    document.getElementById(this.cuadroNombre = "");
    document.getElementById(this.cuadroApellido = "");
    document.getElementById(this.cuadroCargo = "");
    document.getElementById(String((this.cuadroSalario = 0)));
  }


}
