import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  showAlertMessage(message: string) {
    alert(message);
  }
}
