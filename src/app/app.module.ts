import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {UserCheckService} from "./shared/services/user-check.service";
import {AuthGuard} from "./shared/services/auth.guard";
import {AuthModule} from "./auth/auth.module";
import {SystemModule} from "./system/system.module";
import {BeerDataService} from "./shared/services/beer-data.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SystemModule
  ],
  providers: [
    UsersService,
    AuthService,
    UserCheckService,
    BeerDataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
