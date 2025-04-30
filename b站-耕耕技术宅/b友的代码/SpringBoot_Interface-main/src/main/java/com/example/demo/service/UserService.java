package com.example.demo.service;

import com.example.demo.mapper.UserMapper;
import com.example.demo.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author pxy
 * @date 2023/7/30 15:17:33
 * @description
 */
@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;
    public List<User> searchAll(){
        return userMapper.findAll();
    }
}
