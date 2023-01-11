import {Component, OnInit} from '@angular/core';
import {Education} from "../../../model/education.model";
import {EducationService} from "../../../service/education.service";
import {UiService} from "../../../service/ui.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit {

  // // @ts-ignore
  education: Education = null;

  constructor(private educationService: EducationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  // captures the id
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      next => {
        this.education = next;
      },
      error => {
        alert("update Failed");
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.update(id, this.education).subscribe(
      next => {
        this.router.navigate(['']).then(r => r);
      }, error => {
        alert("Update error.");
      }
    )
  }


}
