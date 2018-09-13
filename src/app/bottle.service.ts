import { Injectable } from '@angular/core';
import { Bottle } from './bottle';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  private url: string = "http://jsonplaceholder.typicode.com";

  private endpoint: string = "users";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`);
  }

  public create(bottle: Bottle): Observable<Bottle> {
    return this.httpClient
      .post<Bottle>(`${this.url}/${this.endpoint}`, bottle);
  }

  public update(bottle: Bottle): Observable<Bottle> {
    return this.httpClient.put<Bottle>(`${this.url}/${this.endpoint}/${bottle.id}`, bottle);
  }
}


//

// import { AuthenticationService } from './authentication.service';

