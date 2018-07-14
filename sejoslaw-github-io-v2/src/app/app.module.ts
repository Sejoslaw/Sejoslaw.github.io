import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularMaterialWrapperModule } from './shared/modules/angular-material-wrapper/angular-material-wrapper.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainSiteComponent } from './components/main-site/main-site.component';

import { ServicesModule } from './shared/modules/services/services.module';
import { MyReposComponent } from './components/repos/my-repos/my-repos.component';
import { StarredReposComponent } from './components/repos/starred-repos/starred-repos.component';
import { ReposComponent } from './components/repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MainSiteComponent,
    ReposComponent,
    MyReposComponent,
    StarredReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialWrapperModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
