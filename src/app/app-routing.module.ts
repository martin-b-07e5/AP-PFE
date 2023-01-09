import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EducationComponent} from "./components/education/education.component";
import {ProjectComponent} from './components/project/project.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {ExperienceComponent} from "./components/experience/experience.component";
import {SkillComponent} from "./components/skill/skill.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ExperienceAddComponent} from "./components/experience/create/experience-add.component";
import {ExperienceUpdateComponent} from "./components/experience/update/experience-update.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'skill', component: SkillComponent},
  {path: 'experience-add', component: ExperienceAddComponent},
  {path: 'experienceupdate/:id', component: ExperienceUpdateComponent},
  {path: '**', component: NotFoundComponent}  // below other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
