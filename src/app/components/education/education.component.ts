import {Component, OnInit} from '@angular/core';
import {Education} from "../../model/education.model";
import {EducationService} from "../../service/education.service";
import {UiService} from "../../service/ui.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];

  // constructor(private educationService: EducationService, private tokenService: TokenService) {
  constructor(private educationService: EducationService, private uiService: UiService) {
    this.findAllEducation();
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

  findAllEducation(): void {
    this.educationService.findAll().subscribe(
      next => {
        this.educations = next;
      });
  }

  // delete education
  delete(id?: number) {
    this.educationService.delete(id).subscribe(
      next => {
        alert(id + "no entra acá!!");
        this.findAllEducation();
      },
      error => {
        console.log("education " + id + ": deleted");
        this.findAllEducation();
      })
  }


}
