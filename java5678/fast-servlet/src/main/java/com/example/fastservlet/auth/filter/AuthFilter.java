package com.example.fastservlet.auth.filter;

import com.example.fastservlet.auth.model.AuthUser;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@WebFilter("/*")
public class AuthFilter implements Filter {
    private Set<String> whiteList;
    private Set<String> blackList;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 白名单：不需要登录就能访问的路径
        whiteList = new HashSet<>(Arrays.asList(
            "/auth/login",
            "/auth/register",
            "/auth/forgot-password",
            "/index.jsp",
            "/css/",
            "/js/",
            "/images/"
        ));

        // 黑名单：禁止访问的IP
        blackList = new HashSet<>(Arrays.asList(
            "192.168.1.100",
            "10.0.0.50"
        ));
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        
        // 检查IP黑名单
        String clientIP = request.getRemoteAddr();
        if (blackList.contains(clientIP)) {
            httpResponse.sendError(HttpServletResponse.SC_FORBIDDEN, "Access denied for this IP");
            return;
        }

        String path = httpRequest.getServletPath();
        
        // 检查白名单
        boolean isWhitelisted = whiteList.stream()
                .anyMatch(prefix -> path.startsWith(prefix));
        
        if (isWhitelisted) {
            chain.doFilter(request, response);
            return;
        }

        // 检查用户是否已登录
        HttpSession session = httpRequest.getSession(false);
        AuthUser user = session != null ? (AuthUser) session.getAttribute("user") : null;
        
        if (user == null) {
            // 未登录，重定向到登录页面
            httpResponse.sendRedirect(httpRequest.getContextPath() + "/auth/login");
            return;
        }

        // 检查用户状态
        if (user.getStatus() != 1) {
            session.invalidate();
            httpResponse.sendRedirect(httpRequest.getContextPath() + "/auth/login");
            return;
        }

        // 用户已登录且状态正常，继续请求
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        // 清理资源
        whiteList.clear();
        blackList.clear();
    }
} 