import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Experience} from "../../../model/experience.model";
import {ExperienceService} from "../../../service/experience.service";

@Component({
  selector: 'app-experience-create',
  templateUrl: './experience-create.component.html',
  styleUrls: ['./experience-create.component.css']
})
export class ExperienceCreateComponent implements OnInit {
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
        this.router.navigate(['']).then(r => r);
      }, error => {
        alert("add Experience Failed");
        // this.router.navigate(['']).then(r => r);
      }
    );

  }

}
