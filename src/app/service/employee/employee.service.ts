import {Injectable} from '@angular/core';
import {Employee} from "../../model/employee.model";
import {EmployeeServiceService} from "./employee-service.service";

/* acá iría implementado el código de consulta a la DB */
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employees: Employee[] = [
    new Employee("Juan", "Corea", "Presidente", 7500),
    new Employee("Martín", "Stella", "Empleado", 100),
    new Employee("José", "Gomez", "Administrativo", 500),
    new Employee("Raúl", "Bengoechea", "Empresario", 17600)
  ]

  // acá se produce la inyección
  constructor(private alertService: EmployeeServiceService) {
  }

  // Servicio encargado de insertar empleados en la lista.
  // Y de lanzar la ventana emergente
  agregarEmpleadoService(myEmployee: Employee) {
    this.alertService.showAlertMessage("Persona que se vá a agregar: \n"
      + "name: " + myEmployee.name + "\n"
      + "lastName: " + myEmployee.lastName + "\n"
      + "salary: " + myEmployee.salary
    );
    this.employees.push(myEmployee);
  }

}
