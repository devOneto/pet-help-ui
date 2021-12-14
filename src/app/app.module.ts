import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
//components
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingPageComponent,
    ProfilePageComponent,
    FeedPageComponent,
    HomePageComponent,
    BottomNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
