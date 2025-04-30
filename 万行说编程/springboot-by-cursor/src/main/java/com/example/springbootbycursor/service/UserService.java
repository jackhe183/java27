package com.example.springbootbycursor.service;

import com.example.springbootbycursor.dto.UserDTO;
import com.example.springbootbycursor.model.User;
import java.util.List;

public interface UserService {
    UserDTO register(User user);
    UserDTO login(String username, String password);
    UserDTO getUserById(Long id);
    List<UserDTO> getAllUsers();
    UserDTO updateUser(Long id, User user);
    void deleteUser(Long id);
    boolean existsByUsername(String username);
} 