import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  // TODO: Add rerouting to home page when unknown path is entered
  { path: '', redirectTo: 'home-component', pathMatch: 'full'},
  { path: 'home-component', component: HomeComponent },
  { path: 'cv-component', component: ResumeComponent},
  { path: 'about-component', component: AboutPageComponent },
  { path: 'contact-component', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
