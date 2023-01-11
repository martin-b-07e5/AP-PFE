import {Component, OnInit} from '@angular/core';
import {Experience} from "../../model/experience.model";
import {ExperienceService} from "../../service/experience.service";
import {UiService} from "../../service/ui.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService, private uiService: UiService) {
    this.findAll();
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

  findAll(): void {
    this.experienceService.findAll().subscribe(
      next => {
        this.experiences = next;
      });
  }

  delete(id?: number) {
    this.experienceService.delete(id).subscribe(
      next => {
        alert(id + "no entra acá!!");
        this.findAll();
      },
      error => {
        console.log(id + ": deleted");
        this.findAll();
      })
  }

}
