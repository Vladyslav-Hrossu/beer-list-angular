import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class BeerDataService {
  private url: string = 'https://api.punkapi.com/v2/beers';

  private getUrl(url: string = ''): string {
    return this.url + url;
  }

  constructor(private http: HttpClient){}

  public getBeerList(page: number, beerPerPage: number = 60): Observable<any> {
    return this.http.get(this.getUrl(`?per_page=${beerPerPage}&page=${page}`));
  }

  public getBeerById(id: number): Observable<any> {
    return this.http.get(this.getUrl(`/${id}`));
  }
}

