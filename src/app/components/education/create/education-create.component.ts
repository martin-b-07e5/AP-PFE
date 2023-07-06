import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../../../model/education.model';
import { EducationService } from '../../../service/education.service';

@Component({
  selector: 'app-education-create',
  templateUrl: './education-create.component.html',
  styleUrls: ['./education-create.component.css'],
})
export class EducationCreateComponent implements OnInit {
  name: string = '';
  description: string = '';
  startedAt: Date = null;
  finishedAt: Date = null;
  education: Education = new Education('', '', null);

  constructor(
    private educationService: EducationService,
    private router: Router
  ) {
    // this.education.startedAt = new Date(); // Asignar la fecha actual como valor inicial
    // this.education.startedAt = null; // null si no se carga nada
  }

  ngOnInit(): void {}

  onCreate(): void {
    const education = new Education(
      this.name,
      this.description,
      this.education.startedAt,
      this.education.finishedAt
    );

    // add WITH some validation
    this.educationService.add(education).subscribe(
      (next) => {
        this.router.navigate(['']).then((r) => r); // Redirects to home page.
      },
      (error) => {
        alert('add Education Failed');
        // this.router.navigate(['']).then((r) => r);
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['']).then((r) => r); // Redirects to home page.
  }
}
