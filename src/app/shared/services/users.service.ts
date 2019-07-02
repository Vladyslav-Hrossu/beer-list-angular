import {Injectable} from "@angular/core";
import {HttpClient, Response} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class UsersService {

  constructor(private http: HttpClient){}

  public getUsers(): Observable<any> {
    return this.http.get('db.json')
      .map((response: Response) => {
        return response.json();
      });
  }

}
