import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import {AboutComponent } from './about/about.component';
import {ProjectsComponent } from './projects/projects.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PartnersComponent} from './partners/partners.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';
import {UserDashComponent } from './user-dash/user-dash.component';
import {ProfileComponent } from  './profile/profile.component';

const routes: Routes = [
  {path:'landing', component: LandingComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component: ServicesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'partners',component:PartnersComponent},
  {path: 'userDash',component:UserDashComponent},
  {path:'register', component: RegisterComponent },
  {path:'login', component: LoginComponent },
  {path: 'profile',component:ProfileComponent },
  {path:'application', component: ApplicationComponent },
  {path:'',redirectTo:'landing', pathMatch:'full'}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

