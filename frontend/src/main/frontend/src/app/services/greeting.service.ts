import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GreetingService {

    public url = `${environment.apiUrl}/greeting`;

    constructor(private httpClient: HttpClient) {}

    makeGreeting(name:string): Observable<string> {
        if (name){
            return this.httpClient.post<any>(this.url, {name: name});
        } else {
            return this.httpClient.get<any>(this.url);
        }
    }
}
