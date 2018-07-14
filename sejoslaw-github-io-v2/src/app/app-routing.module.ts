import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSiteComponent } from './components/main-site/main-site.component';
import { MyReposComponent } from './components/repos/my-repos/my-repos.component';
import { StarredReposComponent } from './components/repos/starred-repos/starred-repos.component';

const routes: Routes = [
  { path: 'myRepos', component: MyReposComponent },
  { path: 'starredRepos', component: StarredReposComponent },
  { path: '', component: MainSiteComponent },
  { path: '**', component: MainSiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
