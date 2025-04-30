package com.example.springbootbycursor.dto;

import com.example.springbootbycursor.model.UserRole;
import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String username;
    private String name;
    private UserRole role;
    private String email;
    private String phone;
} 