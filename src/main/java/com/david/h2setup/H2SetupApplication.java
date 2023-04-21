package com.david.h2setup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
public class H2SetupApplication {

	public static void main(String[] args) {
		SpringApplication.run(H2SetupApplication.class, args);
	}

}
