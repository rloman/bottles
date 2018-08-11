import { Injectable } from '@angular/core';
import { Bottle } from './bottle';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<User[]>(this.url);
  }
}


//

// import { AuthenticationService } from './authentication.service';

