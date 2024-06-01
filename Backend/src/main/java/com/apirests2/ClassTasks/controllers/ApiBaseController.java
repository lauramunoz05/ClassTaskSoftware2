package com.apirests2.ClassTasks.controllers;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@ControllerAdvice
@OpenAPIDefinition(
    info = @Info(
        title = "Api Class Tasks",
        description = "Api para gestionar tareas academicas organizadas por materias",
        version = "1.0"
    ),
    tags = {
        @Tag(
            name = "Base Controller",
            description = "Controlador base para la api, este controlador se extendera a todos los endpoints del api"
        )
    }
)
public class ApiBaseController {
    
}
