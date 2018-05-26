import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ReposComponent } from "./repos/repos.component";
import { RepositoryComponent } from "./repository/repository.component";

import { GitHubService } from "./services/github.service";

const appRoutes: Routes = [{ path: "repos", component: ReposComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReposComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
