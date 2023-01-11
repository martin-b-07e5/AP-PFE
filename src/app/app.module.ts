import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
// Components
import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {EducationComponent} from './components/education/education.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ProjectComponent} from './components/project/project.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {BannerComponent} from "./components/banner/banner.component";

import {SkillComponent} from './components/skill/skill.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';

import {ExperienceAddComponent} from './components/experience/create/experience-add.component';
import {ExperienceUpdateComponent} from './components/experience/update/experience-update.component';
//

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatBadgeModule} from "@angular/material/badge";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { SocialComponent } from './components/social/social.component';

//

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SkillComponent,
    NotFoundComponent,
    LoginComponent,
    ExperienceAddComponent,
    ExperienceUpdateComponent,
    SocialComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
