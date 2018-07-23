import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Persona} from "../components/model/persona";

@Injectable()
export class GreetingService {

    public url = `${environment.apiUrl}`;

    constructor(private httpClient: HttpClient) {}

    getGreeting(persona?:Persona){
        const realUrl=(persona)?`${this.url}/greeting?name=${persona.name}`: `${this.url}/greeting`;
        return this.httpClient
            .get<any>(realUrl);
    }

    postGreeting(persona:Persona) {
        const withName=`${this.url}/persistPerson`
        return this.httpClient.post<any>(withName, persona);
    }
}
