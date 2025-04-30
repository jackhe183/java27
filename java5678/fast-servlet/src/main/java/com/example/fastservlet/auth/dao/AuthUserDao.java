package com.example.fastservlet.auth.dao;

import com.example.fastservlet.auth.model.AuthUser;
import com.example.fastservlet.utils.DBUtil;

import java.sql.*;

public class AuthUserDao {
    
    public boolean isEmailExists(String email) throws SQLException {
        String sql = "SELECT COUNT(*) FROM auth_users WHERE email = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, email);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next() && rs.getInt(1) > 0;
            }
        }
    }
    
    public boolean isPhoneExists(String phone) throws SQLException {
        String sql = "SELECT COUNT(*) FROM auth_users WHERE phone = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, phone);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next() && rs.getInt(1) > 0;
            }
        }
    }
    
    public boolean isRealNameExists(String realName) throws SQLException {
        String sql = "SELECT COUNT(*) FROM auth_users WHERE real_name = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, realName);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next() && rs.getInt(1) > 0;
            }
        }
    }
    
    public void register(AuthUser user) throws SQLException {
        String sql = "INSERT INTO auth_users (username, password, email, real_name, phone, role, avatar) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, user.getUsername());
            stmt.setString(2, user.getPassword());
            stmt.setString(3, user.getEmail());
            stmt.setString(4, user.getRealName());
            stmt.setString(5, user.getPhone());
            stmt.setString(6, user.getRole() != null ? user.getRole() : "USER");
            stmt.setString(7, user.getAvatar());
            stmt.executeUpdate();
        }
    }
    
    public AuthUser findByUsername(String username) throws SQLException {
        String sql = "SELECT * FROM auth_users WHERE username = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, username);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    AuthUser user = new AuthUser();
                    user.setId(rs.getInt("id"));
                    user.setUsername(rs.getString("username"));
                    user.setPassword(rs.getString("password"));
                    user.setEmail(rs.getString("email"));
                    user.setRealName(rs.getString("real_name"));
                    user.setPhone(rs.getString("phone"));
                    user.setCreateTime(rs.getTimestamp("create_time"));
                    user.setLastLogin(rs.getTimestamp("last_login"));
                    user.setStatus(rs.getInt("status"));
                    user.setRole(rs.getString("role"));
                    user.setAvatar(rs.getString("avatar"));
                    return user;
                }
            }
        }
        return null;
    }
    
    public void updateLastLogin(int userId) throws SQLException {
        String sql = "UPDATE auth_users SET last_login = CURRENT_TIMESTAMP WHERE id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, userId);
            stmt.executeUpdate();
        }
    }
} 