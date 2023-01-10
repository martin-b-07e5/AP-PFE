import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Experience} from "../../../model/experience.model";
import {ExperienceService} from "../../../service/experience.service";

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {
  name: string = '';
  description: string = '';

  constructor(private experienceService: ExperienceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experience = new Experience(this.name, this.description);

    // add WITH some validation
    this.experienceService.add(experience).subscribe(
      next => {
        // alert("Experience added");
        this.router.navigate(['']);
      }, error => {
        alert("add Experience Failed");
        this.router.navigate(['']);
      }
    );

    // addOld WITHOUT validation
    /*this.experienceService.addOld(EXPERIENCE).subscribe(
      next => {
        alert("Experience added");
        this.router.navigate(['']).then(r => r);
      }, error => {
        alert("addOld Experience Fail");
        this.router.navigate(['']).then(r => r);
      }
    );*/

  }

}
