import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // met of zonder src/client?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this Angular6 demo app';

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((users) => {
        console.log(users);
    });
  }
}
