import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() btnClick = new EventEmitter();

  constructor() {
  }

  isLogged = false;

  onClick() {
    console.log("onclick() emit not working")
    this.btnClick.emit();
  }


}
