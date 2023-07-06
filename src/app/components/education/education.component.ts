import { Component, OnInit } from '@angular/core';
import { Education } from '../../model/education.model';
import { EducationService } from '../../service/education.service';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];

  // constructor(private educationService: EducationService, private tokenService: TokenService) {
  constructor(
    private educationService: EducationService,
    private uiService: UiService
  ) {
    this.findAll();
    uiService.toggleAddTask(); // working on this service
  }

  isLogged: boolean = false; // working

  ngOnInit(): void {
    // if (this.tokenService.getToken()) {
    //   this.isLogged = true;
    // } else {
    //   this.isLogged = false;
    // }
  }

  findAll(): void {
    this.educationService.findAll().subscribe((next) => {
      this.educations = next;
    });
  }

  // delete education
  delete(id?: number) {
    const confirmation = confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.educationService.delete(id).subscribe(
        (next) => {
          alert(id + ' is deleted.');
          this.findAll();
        },
        (error) => {
          console.log('Error deleting education ' + id + '.');
          this.findAll();
        }
      );
    }
  }
}
