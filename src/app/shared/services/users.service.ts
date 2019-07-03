import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class UsersService {
  private url: string = 'https://api.myjson.com/bins/7895j';

  private getUrl(): string {
    return this.url;
  }

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  }
  public getUsers(): Observable<any> {
    return this.http.get(this.getUrl());
  }

  public addUser(data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(), data, this.httpOptions);
  }
  
}

