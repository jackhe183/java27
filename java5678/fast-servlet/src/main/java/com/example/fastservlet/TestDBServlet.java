package com.example.fastservlet;

import com.example.fastservlet.utils.DBUtil;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;

@WebServlet(name = "testDBServlet", value = "/test-db")
public class TestDBServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        try (Connection conn = DBUtil.getConnection()) {
            response.getWriter().println("数据库连接成功！");
        } catch (Exception e) {
            response.getWriter().println("数据库连接失败：" + e.getMessage());
            e.printStackTrace();
        }
    }
} 