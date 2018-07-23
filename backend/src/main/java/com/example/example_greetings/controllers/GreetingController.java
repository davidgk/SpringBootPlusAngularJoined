package com.example.example_greetings.controllers;

import com.example.example_greetings.model.Persona;
import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/greeting")
    public Persona greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Persona(name, 1000);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.POST, value = "/persistPerson")
    public Persona persistPerson(@RequestBody Persona persona) {
        if (persona.isValid()) {
            return persona.save();
        }
        return persona;
    }
}