import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // met of zonder src/client?
import { BottleService } from 'src/app/bottle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this Angular6 demo app';

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient, private bottleService: BottleService) {
  }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((users) => {
        // console.log(users);
    });

    this.bottleService.get().subscribe(users => {
      console.log("this is from my service");
      console.log(users);
      console.table(users);

    });
  }
}
