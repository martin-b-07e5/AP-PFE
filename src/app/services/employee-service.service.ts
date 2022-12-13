import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  showAlertMessage(message: string) {
    alert(message);
  }
}
// put this service in the other service.
