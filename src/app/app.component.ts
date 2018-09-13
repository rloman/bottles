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
  
  private bottle: Bottle = {id: 3,name: "To be updated Heineken"}; // or some {{ }} from the page ... later or now ???

  constructor(private bottleService: BottleService) {
  }

  // rloman URGENT refactor this to also user Bottle(s) or Users Below
  ngOnInit() {
    // So this is better, fancy in a business service
    this.bottleService.get().subscribe(users => {
      console.table(users); // table prints a table based on the data, sometimes handy
    });
  }

  create() {
    let bottle: Bottle =  {name: "Loman"}; // or some {{ }} from the page ... later or now ???
    this.bottleService.create(bottle).subscribe(newBottle => {
        console.table(newBottle);
        this.bottle = newBottle;
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
