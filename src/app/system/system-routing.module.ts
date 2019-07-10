import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SystemComponent} from "./system.component";
import {BeerDetailsComponent} from "./beer-list/beer-details/beer-details.component";
import {BeerListComponent} from "./beer-list/beer-list.component";

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
      {path: 'list', component: BeerListComponent},
      {path: 'details/:id', component: BeerDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
