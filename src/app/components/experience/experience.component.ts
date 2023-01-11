import {Component, OnInit} from '@angular/core';
import {ExperienceService} from "../../service/experience.service";
import {Experience} from "../../model/experience.model";
// import { TokenService } from 'src/app/service/token.service';
import {UiService} from "../../service/ui.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  // constructor(private experienceService: ExperienceService, private tokenService: TokenService) {
  constructor(private experienceService: ExperienceService, private uiService: UiService) {
    this.findAllExperience();
    uiService.toggleAddTask();
  }

  isLogged: boolean = false;


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
    if (id != undefined) {
      this.experienceService.delete(id).subscribe(
        next => {
          this.findAllExperience();
        }, error => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }


}
