package com.david.h2setup;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class H2SetUpConfiguration {
    @Bean
    public ModelMapper modelMapper (){
        return new ModelMapper();
    }
}
