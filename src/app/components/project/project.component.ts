import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Employee} from "../../models/employee.model";
import {EmployeeServiceService} from "../../services/employee-service.service";
import {EmployeeService} from "../../services/employee.service";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  title = 'app-employees';
  cuadroNombre!: string;
  // cuadroNombre: string = '';
  cuadroApellido!: string;
  // cuadroApellido: string = '';
  cuadroCargo!: string;
  // cuadroCargo: string = '';
  cuadroSalario: number = 0;

  // inyectamos en el constructor, el servicio Router
  // parameters from constructor home.component.ts
  employeesArray: Employee[] = []; // dejamos un array vacío.

  constructor(private router: Router, private myService: EmployeeServiceService, private myEmployeeService: EmployeeService) {
  }

  volverHome() {
    // usamos el enrutamiento hacia el home
    // this.router.navigate(['']);
    this.router.navigate(['']).then(() => this.removeSpinner());
  }

  // this.router.navigateByUrl('/login').then(_ => { removeSpinner(); });

  removeSpinner() {
    console.log("promesa cumplida");
  }

  agregarEmpleado() {
    let myEmployee = new Employee(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    // this.myService.showAlertMessage("employee:  " + myEmployee.name + ", added."); // inject service into component
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

  // sin esto funcionaba bien (creo)
  ngOnInit(): void {
    this.employeesArray = this.myEmployeeService.employees;
  }

}
