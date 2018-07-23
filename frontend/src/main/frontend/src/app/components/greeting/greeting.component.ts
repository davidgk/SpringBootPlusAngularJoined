import { Component, OnInit } from '@angular/core';
import {GreetingService} from "../../services/greeting.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
            name: ['', [Validators.required]]
        });
    }


    ngOnInit(): void {
    }

    sendGreeting() {
      this.greetingService.makeGreeting(this.greetingForm.value.name)
          .subscribe(value => {
              alert(this.greetingForm.value.name);
          }, error => {
              alert(error)
        });
    }


}
