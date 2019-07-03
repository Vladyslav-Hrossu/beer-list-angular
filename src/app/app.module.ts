import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { SystemComponent } from './system/system.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {UserCheckService} from "./shared/services/user-check.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService, AuthService, UserCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
