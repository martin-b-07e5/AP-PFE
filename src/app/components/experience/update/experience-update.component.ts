import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../../../model/experience.model';
import { ExperienceService } from '../../../service/experience.service';

@Component({
  selector: 'app-experience-update',
  templateUrl: './experience-update.component.html',
  styleUrls: ['./experience-update.component.css'],
})
export class ExperienceUpdateComponent implements OnInit {
  // // @ts-ignore
  experience: Experience = null;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  // captures the id
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      (next) => {
        this.experience = next;
      },
      (error) => {
        alert('update Failed');
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe(
      (next) => {
        this.router.navigate(['']).then((r) => r); // Redirects to home page.
      },
      (error) => {
        alert('Update error.');
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['']).then((r) => r); // Redirects to home page.
  }
}
