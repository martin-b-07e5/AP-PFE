import {Component, OnInit} from '@angular/core';
import {ExperienceService} from "../../service/experience.service";
import {Experience} from "../../model/experience.model";

// import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  // constructor(private experienceService: ExperienceService, private tokenService: TokenService) {
  constructor(private experienceService: ExperienceService) {
  }

  // isLogged = false;

  ngOnInit(): void {
    this.findAllExperience();
    // if (this.tokenService.getToken()) {
    //   this.isLogged = true;
    // } else {
    //   this.isLogged = false;
    // }
  }

  findAllExperience(): void {
    this.experienceService.findAll().subscribe(data => {
      this.experiences = data;
    })
  }

  delete(idExperience?: number) {
    if (idExperience != undefined) {
      this.experienceService.delete(idExperience).subscribe(
        data => {
          this.findAllExperience();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }


}
