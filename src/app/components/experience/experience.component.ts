import {Component} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  private _years1: number = 3;
  private _years2: number = 5;
  private _years3: number = 3;

  constructor() {
  }

  get years1(): number {
    return this._years1;
  }

  set years1(value: number) {
    this._years1 = value;
  }

  get years2(): number {
    return this._years2;
  }

  set years2(value: number) {
    this._years2 = value;
  }

  get years3(): number {
    return this._years3;
  }

  set years3(value: number) {
    this._years3 = value;
  }


}
