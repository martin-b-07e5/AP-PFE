import {Component, OnInit} from '@angular/core';
import {Experience} from "../../../model/experience.model";
import {ExperienceService} from "../../../service/experience.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-experience-update',
  templateUrl: './experience-update.component.html',
  styleUrls: ['./experience-update.component.css']
})
export class ExperienceUpdateComponent implements OnInit {

  // @ts-ignore
  experience1: Experience = null;

  constructor(private experienceService: ExperienceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  // capturates the id
  ngOnInit(): void {
    const idExperience = this.activatedRoute.snapshot.params['idExperience'];
    this.experienceService.getById(idExperience).subscribe(
      next => {
        this.experience1 = next;
      }, error => {
        alert("Error updating experience");
        this.router.navigate(['']).then(r => r);
      }
    )
  }

  onUpdate(): void {
    const idExperience = this.activatedRoute.snapshot.params['idExperience'];
    this.experienceService.update(idExperience, this.experience1).subscribe(
      next => {
        this.router.navigate(['']).then(r => r);
      }, error => {
        alert("Error updating experience");
        this.router.navigate(['']).then(r => r);
      }
    )
  }

}
