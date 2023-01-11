import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Education} from "../../../model/experience.model";
import {EducationService} from "../../../service/experience.service";

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {
  name: string = '';
  description: string = '';

  constructor(private experienceService: EducationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Education(this.name, this.description);

    // add WITH some validation
    this.experienceService.add(experience).subscribe(
      next => {
        this.router.navigate(['']).then(r => r);
      }, error => {
        alert("add Experience Failed");
        // this.router.navigate(['']).then(r => r);
      }
    );

  }

}
