import {Component, EventEmitter, Output} from '@angular/core';

// import {EmployeeServiceService} from "../../service/employee-service.service";

@Component({
  selector: 'app-employee-characteristics',
  templateUrl: './employee-characteristics.component.html',
  styleUrls: ['./employee-characteristics.component.css']
})
export class EmployeeCharacteristicsComponent {
  /* https://angular.io/guide/inputs-outputs#configuring-the-child-component-1
   In the component class, decorate a property with @Output().
   The following example newEmployeeCharacteristicEvent @Output() has a type of EventEmitter,
    which means it's an event.
  */
  @Output() newEmployeeCharacteristicEvent = new EventEmitter<string>();

  // inject the service in the constructor
  /*constructor(private myService: EmployeeServiceService) {
  }*/

  /* The addNewItem() function uses the @Output(), newEmployeeCharacteristicEvent, to raise an
    event with the value the user types into the <input>. */
  addNewItem(value: string) {
    // this.myService.showAlertMessage("characteristic: " + value + ", added."); // inject service into component
    this.newEmployeeCharacteristicEvent.emit(value);
  }

}






