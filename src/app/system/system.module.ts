import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from "./system.component";
import {SystemRoutingModule} from "./system-routing.module";
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerListItemComponent } from './beer-list/beer-list-item/beer-list-item.component';
import { BeerDetailsComponent } from './beer-list/beer-details/beer-details.component';

@NgModule({
  declarations: [
    SystemComponent,
    BeerListComponent,
    BeerListItemComponent,
    BeerDetailsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule {}
