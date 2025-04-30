package com.example.fastservlet.auth.servlet;

import com.example.fastservlet.auth.dao.AuthUserDao;
import com.example.fastservlet.auth.model.AuthUser;
import com.example.fastservlet.auth.utils.PasswordUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "loginServlet", value = "/auth/login")
public class LoginServlet extends HttpServlet {
    private AuthUserDao authUserDao;

    @Override
    public void init() throws ServletException {
        authUserDao = new AuthUserDao();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        // 显示登录页面
        request.getRequestDispatcher("/WEB-INF/views/auth/login.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String remember = request.getParameter("remember");
        
        try {
            AuthUser user = authUserDao.findByUsername(username);
            if (user != null && PasswordUtil.checkPassword(password, user.getPassword())) {
                // 登录成功
                if (user.getStatus() != 1) {
                    request.setAttribute("error", "账号已被禁用");
                    request.getRequestDispatcher("/WEB-INF/views/auth/login.jsp").forward(request, response);
                    return;
                }
                
                // 更新最后登录时间
                authUserDao.updateLastLogin(user.getId());
                
                // 创建会话
                HttpSession session = request.getSession();
                session.setAttribute("user", user);
                
                // 如果选择了记住我，设置session超时时间为7天
                if ("on".equals(remember)) {
                    session.setMaxInactiveInterval(7 * 24 * 60 * 60);
                }
                
                response.sendRedirect(request.getContextPath() + "/index.jsp");
            } else {
                request.setAttribute("error", "用户名或密码错误");
                request.getRequestDispatcher("/WEB-INF/views/auth/login.jsp").forward(request, response);
            }
        } catch (SQLException e) {
            throw new ServletException(e);
        }
    }
} 