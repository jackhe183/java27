<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title>编辑用户</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }
        .form-group {
            margin: 15px 0;
        }
        .form-group label {
            display: inline-block;
            width: 100px;
        }
        .button {
            display: inline-block;
            padding: 8px 16px;
            margin: 5px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            border: none;
            cursor: pointer;
        }
        .button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <h1>编辑用户</h1>
    
    <c:if test="${not empty error}">
        <div style="color: red; margin-bottom: 10px;">${error}</div>
    </c:if>
    
    <form action="${pageContext.request.contextPath}/users" method="post">
        <input type="hidden" name="action" value="update">
        <input type="hidden" name="id" value="${user.id}">
        
        <div class="form-group">
            <label>用户名：</label>
            <input type="text" name="username" value="${user.username}" required>
        </div>
        
        <div class="form-group">
            <label>邮箱：</label>
            <input type="email" name="email" value="${user.email}" required>
        </div>
        
        <div class="form-group">
            <label>状态：</label>
            <select name="status">
                <option value="1" ${user.status == 1 ? 'selected' : ''}>活跃</option>
                <option value="0" ${user.status == 0 ? 'selected' : ''}>禁用</option>
            </select>
        </div>
        
        <div class="form-group">
            <button type="submit" class="button">保存</button>
            <a href="${pageContext.request.contextPath}/users" class="button">返回</a>
        </div>
    </form>
</body>
</html> 