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

  private bottle: Bottle = {id: 3,name: "To be updated Heineken"}; // or some {{ }} from the page ... later or now ???

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
    let bottle: Bottle =  {name: "Loman"}; // or some {{ }} from the page ... later or now ???
    this.bottleService.create(bottle).subscribe(result => {
        console.table(result);
    });
  }

  show() {
    let id:Number = 3;
    this.bottleService.show(id).subscribe(result => {
        console.table(result);
    });
  }

  update() {
    // update bottle from component ...
    this.bottle.name=" Updated R. Loman"; // using component html ... 
    this.bottleService.update(this.bottle).subscribe(result => {
        console.table(result);
    });
  }
}
