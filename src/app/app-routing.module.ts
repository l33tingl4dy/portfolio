import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ResumeComponent } from './resume/resume.component';

import { ShopComponent } from './shop/shop.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { TwitchComponent } from './twitch/twitch.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: ResumeComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'recommendations', component: RecommendationsComponent},
  { path: 'twitch', component: TwitchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
