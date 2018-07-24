import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GreetingService} from "./services/greeting.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {appRoutes} from "./commons/routing";
import {RouterModule} from "@angular/router";


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
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      ),
  ],
  providers: [GreetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
