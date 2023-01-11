import {Component, OnInit} from '@angular/core';
import {Education} from "../../../model/education.model";
import {EducationService} from "../../../service/education.service";
import {UiService} from "../../../service/ui.service";

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit {

  educations: Education[] = [];

  constructor(private educationService: EducationService, private uiService: UiService) {
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
    this.educationService.findAll().subscribe(
      next => {
        this.educations = next;
      });
  }

  delete(id?: number) {
    this.educationService.delete(id).subscribe(
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
