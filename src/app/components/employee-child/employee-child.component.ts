import {Component, Input} from '@angular/core';
import {Employee} from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css']
})
export class EmployeeChildComponent {
  // @Input es de padre a hijo

  // @ts-ignore
  @Input() employee_x: Employee;
  // @ts-ignore
  @Input() i_x: number;


  /* https://angular.io/guide/inputs-outputs#configuring-the-parent-component-1
  */
  // items = ['item1', 'item2', 'item3', 'item4'];
  items = [''];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
