import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {BeerDataService} from "../../../shared/services/beer-data.service";
import {Beer} from "../../../shared/models/beer.model";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private beerDataService: BeerDataService) {
  }

  id: number;
  beer: Beer;
  isLoaded: boolean = false;

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
      });
    this.beerDataService.getBeerById(this.id)
      .subscribe((data) => {
        this.beer = data[0];
        this.isLoaded = true;
      });
  }


}
