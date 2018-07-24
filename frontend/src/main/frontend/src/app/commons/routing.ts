import {AppComponent} from "../app.component";
import {Routes} from "@angular/router";

export const appRoutes: Routes = [
    { path: 'greetApp', component: AppComponent},
    { path: '', component: AppComponent}];