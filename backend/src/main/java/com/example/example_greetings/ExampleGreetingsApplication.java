package com.example.example_greetings;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * extending SpringBootServletInitializer as it needed for deploying in
 * Jboss 7
 */
@SpringBootApplication
public class ExampleGreetingsApplication extends SpringBootServletInitializer {

	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ExampleGreetingsApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ExampleGreetingsApplication.class, args);
	}
}
