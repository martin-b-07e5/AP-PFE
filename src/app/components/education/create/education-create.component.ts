import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Education} from "../../../model/education.model";
import {EducationService} from "../../../service/education.service";

@Component({
  selector: 'app-education-create',
  templateUrl: './education-create.component.html',
  styleUrls: ['./education-create.component.css']
})
export class EducationCreateComponent implements OnInit {
  name: string = '';
  description: string = '';

  constructor(private educationService: EducationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const education = new Education(this.name, this.description);

    // add WITH some validation
    this.educationService.add(education).subscribe(
      next => {
        this.router.navigate(['']).then(r => r);
      }, error => {
        alert("add Education Failed");
        // this.router.navigate(['']).then(r => r);
      }
    );

  }

}
