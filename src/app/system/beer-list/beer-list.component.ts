import { Component, OnInit } from '@angular/core';
import {BeerDataService} from "../../shared/services/beer-data.service";
import {Beer} from "../../shared/models/beer.model";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beerList: Beer[];

  constructor( private beerDataService: BeerDataService ) { }

  ngOnInit() {
    this.beerDataService.getBeerList(1)
      .subscribe((data) => {
        this.beerList = data;
      })
  }

}
