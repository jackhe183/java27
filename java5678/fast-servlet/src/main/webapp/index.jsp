<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Servlet学习项目</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }
        .menu {
            margin: 20px 0;
        }
        .menu a {
            margin-right: 15px;
            text-decoration: none;
            color: #007bff;
            transition: color 0.3s;
        }
        .menu a:hover {
            text-decoration: underline;
            color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Servlet学习项目</h1>
    <div class="menu">
        <a href="hello-servlet">Hello Servlet测试</a>
        <a href="test-db">数据库连接测试</a>
        <a href="lifecycle">Servlet生命周期测试</a>
        <a href="counter">访问计数器</a>
        <a href="users">用户管理</a>
        <c:choose>
            <c:when test="${empty user}">
                <a href="auth/login">登录</a>
            </c:when>
            <c:otherwise>
                <span>欢迎, ${user.username}</span>
                <a href="auth/logout">退出</a>
            </c:otherwise>
        </c:choose>
    </div>
    
    <div style="margin-top: 20px;">
        <h2>学习进度</h2>
        <ul>
            <li>✅ 基础环境搭建</li>
            <li>✅ Servlet生命周期</li>
            <li>✅ 计数器实现</li>
            <li>✅ 数据库操作</li>
            <li>✅ 登录注册系统</li>
            <li>✅ 作用域测试</li>
            <li>✅ 过滤器实现</li>
            <li>✅ 监听器应用</li>
            <li>✅ 用户管理功能（添加、编辑、删除用户）</li>
        </ul>
    </div>

    <h3>基础的基于cursor的servlet管理系统项目已经完结</h3>
    <p>项目思路来源：b站5678up主 
        <a href="https://www.bilibili.com/video/BV1bC4y147gv/?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click&vd_source=a7d55287c1e62070fd5bb05ee2b90993" target="_blank" class="menu">
            点击这里观看视频
        </a>
    </p>
</body>
</html>