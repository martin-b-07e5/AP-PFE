import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  // inyectamos en el constructor, el servicio Router
  constructor(private router: Router) {
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

}
