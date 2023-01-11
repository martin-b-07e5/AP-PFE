import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  isLogged: boolean = false;

  constructor() {
  }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
    this.isLogged = !this.isLogged;
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
