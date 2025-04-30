package com.example.fastservlet.auth.servlet;

import com.example.fastservlet.auth.dao.AuthUserDao;
import com.example.fastservlet.auth.model.AuthUser;
import com.example.fastservlet.auth.utils.PasswordUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "registerServlet", value = "/auth/register")
public class RegisterServlet extends HttpServlet {
    private AuthUserDao authUserDao;

    @Override
    public void init() throws ServletException {
        authUserDao = new AuthUserDao();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        request.getRequestDispatcher("/WEB-INF/views/auth/register.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String confirmPassword = request.getParameter("confirmPassword");
        String email = request.getParameter("email");
        String realName = request.getParameter("realName");
        String phone = request.getParameter("phone");
        String avatar = request.getParameter("avatar");

        // 验证密码
        if (!password.equals(confirmPassword)) {
            request.setAttribute("error", "两次输入的密码不一致");
            request.getRequestDispatcher("/WEB-INF/views/auth/register.jsp").forward(request, response);
            return;
        }

        try {
            // 检查用户名是否已存在
            if (authUserDao.findByUsername(username) != null) {
                request.setAttribute("error", "昵称已存在");
                request.getRequestDispatcher("/WEB-INF/views/auth/register.jsp").forward(request, response);
                return;
            }

            // 检查邮箱是否已存在
            if (authUserDao.isEmailExists(email)) {
                request.setAttribute("error", "该邮箱已被注册");
                request.getRequestDispatcher("/WEB-INF/views/auth/register.jsp").forward(request, response);
                return;
            }

            // 检查手机号是否已存在（如果提供了手机号）
            if (phone != null && !phone.trim().isEmpty() && authUserDao.isPhoneExists(phone)) {
                request.setAttribute("error", "该手机号已被注册");
                request.getRequestDispatcher("/WEB-INF/views/auth/register.jsp").forward(request, response);
                return;
            }

            // 创建新用户
            AuthUser user = new AuthUser();
            user.setUsername(username);
            user.setPassword(PasswordUtil.hashPassword(password));
            user.setEmail(email);
            user.setRealName(realName);
            user.setPhone(phone);
            user.setStatus(1);
            user.setRole("USER");
            user.setAvatar(avatar != null ? avatar : "default.png");

            authUserDao.register(user);
            
            request.getSession().setAttribute("message", "注册成功，请登录");
            response.sendRedirect(request.getContextPath() + "/auth/login");
        } catch (SQLException e) {
            throw new ServletException(e);
        }
    }
} 