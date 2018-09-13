import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BottleComponent } from './bottle/bottle.component';
import { HttpClientModule } from '@angular/common/http';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BottleComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
