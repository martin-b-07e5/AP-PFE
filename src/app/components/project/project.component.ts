import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  constructor(private router: Router) {
  }

  volverHome() {
    this.router.navigate(['']);
  }

}
