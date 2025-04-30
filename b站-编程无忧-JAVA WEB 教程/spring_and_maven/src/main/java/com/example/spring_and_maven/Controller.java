package com.example.spring_and_maven;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
public class Controller {
    @RequestMapping("/toin")
    public String toIndex(){
        return "index";
    }
}
