import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ResumeComponent } from './resume/resume.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { KnittingComponent } from './knitting/knitting.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: ResumeComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  {path: 'knitting', component: KnittingComponent}
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
