import {Component, OnInit} from '@angular/core';
import {Education} from "../../model/experience.model";
import {EducationService} from "../../service/experience.service";
import {UiService} from "../../service/ui.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Education[] = [];

  constructor(private experienceService: EducationService, private uiService: UiService) {
    this.findAllExperience();
    uiService.toggleAddTask();  // working on this service
  }

  isLogged: boolean = false;  // working

  ngOnInit(): void {
    // if (this.tokenService.getToken()) {
    //   this.isLogged = true;
    // } else {
    //   this.isLogged = false;
    // }
  }

  findAllExperience(): void {
    this.experienceService.findAll().subscribe(
      next => {
        this.experiences = next;
      });
  }

  // delete experience
  delete(id?: number) {
    this.experienceService.delete(id).subscribe(
      next => {
        alert(id + "no entra acá!!");
        this.findAllExperience();
      },
      error => {
        console.log("experience " + id + ": deleted");
        this.findAllExperience();
      })
  }

}
