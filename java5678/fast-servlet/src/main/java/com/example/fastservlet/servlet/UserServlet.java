package com.example.fastservlet.servlet;

import com.example.fastservlet.dao.UserDao;
import com.example.fastservlet.model.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet(name = "userServlet", value = "/users/*")
public class UserServlet extends HttpServlet {
    private UserDao userDao;

    @Override
    public void init() throws ServletException {
        userDao = new UserDao();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        
        try {
            if (pathInfo == null || "/".equals(pathInfo)) {
                // 显示用户列表
                List<User> users = userDao.getAllUsers();
                request.setAttribute("users", users);
                request.getRequestDispatcher("/WEB-INF/views/user/list.jsp").forward(request, response);
            } else if (pathInfo.matches("/edit/\\d+")) {
                // 编辑用户
                int id = Integer.parseInt(pathInfo.split("/")[2]);
                User user = userDao.getUserById(id);
                request.setAttribute("user", user);
                request.getRequestDispatcher("/WEB-INF/views/user/edit.jsp").forward(request, response);
            }
        } catch (SQLException e) {
            throw new ServletException(e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String action = request.getParameter("action");
        String errorMessage = null;
        
        try {
            if ("add".equals(action)) {
                // 添加用户
                User user = new User();
                user.setUsername(request.getParameter("username"));
                user.setEmail(request.getParameter("email"));
                user.setStatus(1);
                try {
                    userDao.addUser(user);
                } catch (SQLException e) {
                    if (e.getMessage().contains("用户名已存在")) {
                        errorMessage = "用户名已存在，请使用其他用户名";
                    } else if (e.getMessage().contains("该邮箱已被使用")) {
                        errorMessage = "该邮箱已被使用，请使用其他邮箱";
                    } else {
                        throw e;
                    }
                }
            } else if ("update".equals(action)) {
                // 更新用户
                User user = new User();
                user.setId(Integer.parseInt(request.getParameter("id")));
                user.setUsername(request.getParameter("username"));
                user.setEmail(request.getParameter("email"));
                user.setStatus(Integer.parseInt(request.getParameter("status")));
                try {
                    userDao.updateUser(user);
                } catch (SQLException e) {
                    if (e.getMessage().contains("用户名已存在")) {
                        errorMessage = "用户名已存在，请使用其他用户名";
                    } else {
                        throw e;
                    }
                }
            } else if ("delete".equals(action)) {
                String idParam = request.getParameter("id");
                if (idParam == null || idParam.equals("undefined")) {
                    throw new NumberFormatException("无效的用户ID");
                }
                int id = Integer.parseInt(idParam);
                userDao.deleteUser(id);
            } else if ("batchDelete".equals(action)) {
                // 批量删除
                String[] ids = request.getParameter("ids").split(",");
                for (String id : ids) {
                    userDao.deleteUser(Integer.parseInt(id));
                }
            }
            
            if (errorMessage != null) {
                // 如果有错误消息，重新获取用户列表并转发
                request.setAttribute("error", errorMessage);
                if ("add".equals(action)) {
                    List<User> users = userDao.getAllUsers();  // 重新获取用户列表
                    request.setAttribute("users", users);
                    request.getRequestDispatcher("/WEB-INF/views/user/list.jsp").forward(request, response);
                } else {
                    // 编辑页面的错误处理保持不变
                    request.getRequestDispatcher("/WEB-INF/views/user/edit.jsp").forward(request, response);
                }
            } else {
                response.sendRedirect(request.getContextPath() + "/users");
            }
        } catch (NumberFormatException e) {
            // 处理无效的ID
            throw new ServletException("无效的用户ID", e);
        } catch (SQLException e) {
            throw new ServletException(e);
        }
    }
} 