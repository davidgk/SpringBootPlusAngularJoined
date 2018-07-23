package com.example.example_greetings.hello;

import com.example.example_greetings.model.Persona;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

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