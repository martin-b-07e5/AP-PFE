import { Component, OnInit } from '@angular/core';
import { Experience } from '../../model/experience.model';
import { ExperienceService } from '../../service/experience.service';
import { UiService } from '../../service/ui.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
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
    this.experienceService.findAll().subscribe((next) => {
      this.experiences = next;
    });
  }

  // delete experience
  delete(id?: number) {
    const confirmation = confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.experienceService.delete(id).subscribe(
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
