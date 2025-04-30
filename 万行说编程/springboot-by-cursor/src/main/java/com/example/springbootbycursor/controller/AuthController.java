package com.example.springbootbycursor.controller;

import com.example.springbootbycursor.dto.ApiResponse;
import com.example.springbootbycursor.dto.AuthResponse;
import com.example.springbootbycursor.dto.LoginRequest;
import com.example.springbootbycursor.dto.UserDTO;
import com.example.springbootbycursor.dto.RegisterRequest;
import com.example.springbootbycursor.model.User;
import com.example.springbootbycursor.security.JwtUtils;
import com.example.springbootbycursor.security.LibraryUserDetails;
import com.example.springbootbycursor.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserService userService;

    @PostMapping("/login")
    public ApiResponse<AuthResponse> login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        LibraryUserDetails userDetails = (LibraryUserDetails) authentication.getPrincipal();
        String token = jwtUtils.generateToken(userDetails);
        UserDTO userDTO = userService.getUserById(userDetails.getUser().getId());

        return ApiResponse.success(new AuthResponse(token, userDTO));
    }

    @PostMapping("/register")
    public ApiResponse<UserDTO> register(@RequestBody @Valid RegisterRequest request) {
        User user = new User();
        BeanUtils.copyProperties(request, user);
        return ApiResponse.success(userService.register(user));
    }
} 