import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShopComponent } from './shop/shop.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { TwitchComponent } from './twitch/twitch.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactPageComponent,
    AboutPageComponent,
    HomeComponent,
    ResumeComponent,
    NotfoundComponent,
    ShopComponent,
    RecommendationsComponent,
    TwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
