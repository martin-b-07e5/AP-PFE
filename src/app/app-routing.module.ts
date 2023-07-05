import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ExperienceCreateComponent } from './components/experience/create/experience-create.component';
import { ExperienceUpdateComponent } from './components/experience/update/experience-update.component';
import { EducationCreateComponent } from './components/education/create/education-create.component';
import { EducationUpdateComponent } from './components/education/update/education-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'experience-create', component: ExperienceCreateComponent },
  { path: 'experience-update/:id', component: ExperienceUpdateComponent },
  { path: 'education-create', component: EducationCreateComponent },
  { path: 'education-update/:id', component: EducationUpdateComponent },
  { path: '**', component: NotFoundComponent }, // below other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
