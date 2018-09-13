import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // met of zonder src/client?
import { BottleService } from 'src/app/bottle.service';
import { Bottle } from 'src/app/bottle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this Angular6 demo app';

  private url: string = "http://jsonplaceholder.typicode.com/users";

  private bottle: Bottle = {name: "Loman"};

  constructor(private httpClient: HttpClient, private bottleService: BottleService) {
  }

  ngOnInit() {

    // OK for now but using this in a business service is better, just like Spring Boot
    this.httpClient.get(this.url).subscribe((users) => {
        console.log(users);
    });

    // So this is better, fancy in a business service
    this.bottleService.get().subscribe(users => {
      console.table(users); // table prints a table based on the data, sometimes handy
    });
  }

  create() {
    this.bottleService.create(this.bottle).subscribe(result => {
        console.table(result);
    });
  }
}
