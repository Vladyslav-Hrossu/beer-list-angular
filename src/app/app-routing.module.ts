import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SystemComponent} from "./system/system.component";
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'system', component: SystemComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
