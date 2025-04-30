package com.example.fastservlet.lifecycle;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@WebServlet(name = "lifecycleServlet", value = "/lifecycle", loadOnStartup = 1)
public class LifecycleServlet extends HttpServlet {
    private String initTime;
    private int accessCount;

    @Override
    public void init() throws ServletException {
        // 初始化时执行，只执行一次
        initTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        accessCount = 0;
        System.out.println("LifecycleServlet 已初始化，时间：" + initTime);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        accessCount++;
        
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Servlet生命周期演示</title>");
        out.println("<style>");
        out.println("body { font-family: Arial, sans-serif; margin: 40px; }");
        out.println(".info { margin: 20px 0; }");
        out.println("</style>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Servlet生命周期演示</h1>");
        out.println("<div class='info'>");
        out.println("<p>Servlet初始化时间: " + initTime + "</p>");
        out.println("<p>当前访问次数: " + accessCount + "</p>");
        out.println("<p>当前时间: " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")) + "</p>");
        out.println("</div>");
        out.println("<a href='index.jsp'>返回首页</a>");
        out.println("</body>");
        out.println("</html>");
    }

    @Override
    public void destroy() {
        // Servlet被销毁时执行，只执行一次
        System.out.println("LifecycleServlet 已销毁，最后访问次数：" + accessCount);
    }
} 