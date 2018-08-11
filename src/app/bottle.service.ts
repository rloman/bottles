import { Injectable } from '@angular/core';
import { Bottle } from './bottle';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  private url: String = "http://jsonplaceholder.typicode.com/users";

  constructor() { }

  
}


//

// import { AuthenticationService } from './authentication.service';

