package com.example.demo.controller;

import com.example.demo.pojo.Animal;
import com.example.demo.pojo.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author pxy
 * @date 2023/7/30 14:15:51
 * @description
 */
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("/abc")
    public Animal getName(){
        return new Animal("dog", 2);
    }

    @RequestMapping("/abcd")
    public List<User> getAllUsers(){
        return userService.searchAll();
    }
}
