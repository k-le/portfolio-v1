import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularScrollAnimationsModule } from 'angular-scroll-animations';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { AppComponent } from './app.component';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { TitleButtonComponent } from './title-button/title-button.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalContentComponent,
    ContactButtonComponent,
    ContactModalComponent,
    TitleButtonComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    AsideMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularScrollAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgsRevealModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
