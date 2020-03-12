import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PartnersComponent } from './partners/partners.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationComponent } from './application/application.component';
import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { ProfileComponent } from './profile/profile.component';
import { LogbookComponent } from './logbook/logbook.component';






@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
    PartnersComponent,
    RegisterComponent,
    ApplicationComponent,
    LoginComponent,
    UserDashComponent,
    ProfileComponent,
    LogbookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
