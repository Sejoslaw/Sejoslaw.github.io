import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { MyReposComponent } from './components/repos/my-repos/my-repos.component';
import { StarredReposComponent } from './components/repos/starred-repos/starred-repos.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'myRepos', component: MyReposComponent },
  { path: 'starredRepos', component: StarredReposComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: MainSiteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
