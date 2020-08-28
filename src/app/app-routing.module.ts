import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  // { path: 'cv-component', component: CvComponent},
  { path: 'about-component', component: AboutPageComponent },
  { path: 'contact-component', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
