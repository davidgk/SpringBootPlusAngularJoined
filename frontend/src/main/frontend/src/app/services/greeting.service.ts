import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GreetingService {

    public url = `${environment.apiUrl}/greeting`;

    constructor(private httpClient: HttpClient) {}

    makeGreeting(name:string): Observable<string> {
        const withName=`${this.url}?name=${name}`
        return this.httpClient.get<any>((name)?withName:this.url);
    }
}
