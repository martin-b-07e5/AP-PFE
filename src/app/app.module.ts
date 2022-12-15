import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {EducationComponent} from './components/education/education.component';
import {ProjectComponent} from './components/project/project.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {EmployeeChildComponent} from "./components/employee-child/employee-child.component";
import {EmployeeCharacteristicsComponent} from "./components/employee-characteristics/employee-characteristics.component";
import {JumbotronComponent} from "./components/jumbotron/jumbotron.component";
import { UpdateComponentComponent } from './components/update-component/update-component.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeChildComponent,
    EmployeeCharacteristicsComponent,
    JumbotronComponent,
    UpdateComponentComponent
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
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
