package com.example.springbootbycursor.service.impl;

import com.example.springbootbycursor.dto.UserDTO;
import com.example.springbootbycursor.exception.BusinessException;
import com.example.springbootbycursor.model.User;
import com.example.springbootbycursor.model.UserRole;
import com.example.springbootbycursor.repository.UserRepository;
import com.example.springbootbycursor.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserDTO register(User user) {
        // 验证用户名是否已存在
        if (existsByUsername(user.getUsername())) {
            throw new BusinessException("用户名已存在");
        }

        // 设置默认角色为READER
        if (user.getRole() == null) {
            user.setRole(UserRole.READER);
        }

        // 密码加密
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser = userRepository.save(user);
        return convertToDTO(savedUser);
    }

    @Override
    public UserDTO login(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new BusinessException("用户不存在"));
                
        // 验证密码
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BusinessException("密码错误");
        }
        return convertToDTO(user);
    }

    @Override
    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new BusinessException("用户不存在"));
        return convertToDTO(user);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public UserDTO updateUser(Long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new BusinessException("用户不存在"));
        
        // 检查用户名是否已被其他用户使用
        if (!existingUser.getUsername().equals(user.getUsername()) 
            && existsByUsername(user.getUsername())) {
            throw new BusinessException("用户名已存在");
        }

        // 如果提供了新密码，则加密
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        // 复制属性，忽略id和null值
        BeanUtils.copyProperties(user, existingUser, "id");
        
        return convertToDTO(userRepository.save(existingUser));
    }

    @Override
    @Transactional
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new BusinessException("用户不存在");
        }
        userRepository.deleteById(id);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    private UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        BeanUtils.copyProperties(user, dto, "password");
        return dto;
    }
} 