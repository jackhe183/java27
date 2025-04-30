package com.example.fastservlet.counter;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "counterServlet", value = "/counter")
public class CounterServlet extends HttpServlet {
    private static final String GLOBAL_COUNT = "globalCount";
    private static final String SESSION_COUNT = "sessionCount";

    @Override
    public void init() throws ServletException {
        // 初始化全局计数器
        ServletContext context = getServletContext();
        context.setAttribute(GLOBAL_COUNT, 0);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        // 获取ServletContext和Session
        ServletContext context = getServletContext();
        HttpSession session = request.getSession();
        
        // 处理重置请求
        String action = request.getParameter("action");
        if ("reset".equals(action)) {
            session.setAttribute(SESSION_COUNT, 0);
            response.sendRedirect(request.getContextPath() + "/counter");
            return;
        }
        
        // 更新计数器
        int globalCount = (int) context.getAttribute(GLOBAL_COUNT);
        context.setAttribute(GLOBAL_COUNT, ++globalCount);
        
        Integer sessionCount = (Integer) session.getAttribute(SESSION_COUNT);
        if (sessionCount == null) {
            sessionCount = 1;
        } else {
            sessionCount++;
        }
        session.setAttribute(SESSION_COUNT, sessionCount);
        
        // 输出HTML
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>访问计数器</title>");
        out.println("<style>");
        out.println("body { font-family: Arial, sans-serif; margin: 40px; }");
        out.println(".counter { margin: 20px 0; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }");
        out.println(".button { display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; ");
        out.println("         text-decoration: none; border-radius: 5px; margin-right: 10px; }");
        out.println(".button:hover { background-color: #0056b3; }");
        out.println("</style>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>访问计数器演示</h1>");
        
        out.println("<div class='counter'>");
        out.println("<h2>计数统计</h2>");
        out.println("<p>全站总访问次数：" + globalCount + "</p>");
        out.println("<p>您的访问次数：" + sessionCount + "</p>");
        out.println("</div>");
        
        out.println("<div class='actions'>");
        out.println("<a href='counter?action=reset' class='button'>重置个人计数</a>");
        out.println("<a href='index.jsp' class='button'>返回首页</a>");
        out.println("</div>");
        
        out.println("</body>");
        out.println("</html>");
    }
} 