import { Component, OnInit } from '@angular/core';
import {GreetingService} from "../../services/greeting.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Persona} from "../model/persona";


@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

    myGreeting: string;
    greetingForm: FormGroup;

    constructor(
        public greetingService: GreetingService,
        formBuilder: FormBuilder,
    ) {
        this.greetingForm = formBuilder.group({
            name: ['', [Validators.required]],
            age: ['', [Validators.required]],

        });
    }


    ngOnInit(): void {
    }

    sendGreeting() {
          this.action()
          .subscribe((value: any  )=> {
             const persona = Persona.createFromJson(value);
              this.myGreeting = persona.name + "-" + persona.age
              alert(persona.saidHi());
          }, (error:Error) => {
              alert(error.message);
        });
    }


    private action() {
        if(!this.greetingForm.value.name){
            return this.greetingService.getGreeting()
        }
        return this.greetingService.postGreeting(new Persona(this.greetingForm.value.name, this.greetingForm.value.age))
    }
}
