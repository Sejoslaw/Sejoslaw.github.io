import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ReposComponent } from "./repos/repos.component";
import { RepositoryComponent } from "./repository/repository.component";

import { GitHubService } from "./services/github.service";
import { TopnavComponent } from "./topnav/topnav.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";

const appRoutes: Routes = [{ path: "repos", component: ReposComponent }];

@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    RepositoryComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
