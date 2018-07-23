import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GreetingService} from "./services/greeting.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,

  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      HttpClientModule,
  ],
  providers: [GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
