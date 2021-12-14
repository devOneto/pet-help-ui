import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RankingPageComponent } from './pages/ranking-page/ranking-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'feed', component: FeedPageComponent },
  { path: 'ranking', component: RankingPageComponent },
  { path: 'profile', component: ProfilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
