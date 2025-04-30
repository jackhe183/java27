<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title>注册</title>
    <style>
        /* 复用login.jsp的样式 */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .register-container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #333;
        }
        .form-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            transition: all 0.2s ease;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .error-message {
            color: #dc3545;
            margin-bottom: 15px;
        }
        .links {
            margin-top: 15px;
            text-align: center;
        }
        .links a {
            color: #007bff;
            text-decoration: none;
        }
        .links a:hover {
            text-decoration: underline;
        }
        .avatar-selection {
            margin-top: 10px;
        }
        .avatar-options {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .avatar-option {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.2s ease;
        }
        .avatar-option:hover {
            transform: scale(1.1);
        }
        .avatar-option.selected {
            border-color: #007bff;
        }
    </style>
</head>
<body>
    <div class="register-container">
        <h2 style="text-align: center; margin-bottom: 30px;">用户注册</h2>
        
        <c:if test="${not empty error}">
            <div class="error-message">${error}</div>
        </c:if>
        
        <form action="${pageContext.request.contextPath}/auth/register" method="post">
            <div class="form-group">
                <label for="username">昵称</label>
                <input type="text" id="username" name="username" required>
            </div>
            
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <div class="form-group">
                <label for="confirmPassword">确认密码</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required>
            </div>
            
            <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="realName">真实姓名</label>
                <input type="text" id="realName" name="realName" required>
            </div>
            
            <div class="form-group">
                <label for="phone">手机号码</label>
                <input type="tel" id="phone" name="phone">
            </div>
            
            <div class="form-group">
                <label>选择头像</label>
                <div class="avatar-selection">
                    <input type="hidden" name="avatar" id="selectedAvatar" value="default.png">
                    <div class="avatar-options">
                        <img src="${pageContext.request.contextPath}/images/avatars/default.png" 
                             data-avatar="default.png" class="avatar-option selected" alt="默认头像">
                        <img src="${pageContext.request.contextPath}/images/avatars/avatar1.png" 
                             data-avatar="avatar1.png" class="avatar-option" alt="头像1">
                        <img src="${pageContext.request.contextPath}/images/avatars/avatar2.png" 
                             data-avatar="avatar2.png" class="avatar-option" alt="头像2">
                        <img src="${pageContext.request.contextPath}/images/avatars/avatar3.png" 
                             data-avatar="avatar3.png" class="avatar-option" alt="头像3">
                        <img src="${pageContext.request.contextPath}/images/avatars/avatar4.png" 
                             data-avatar="avatar4.png" class="avatar-option" alt="头像4">
                    </div>
                </div>
            </div>
            
            <button type="submit" class="button">注册</button>
        </form>
        
        <div class="links">
            <a href="${pageContext.request.contextPath}/auth/login">已有账号？立即登录</a>
        </div>
    </div>
    
    <script>
        document.querySelectorAll('.avatar-option').forEach(img => {
            img.addEventListener('click', function() {
                // 移除其他头像的选中状态
                document.querySelectorAll('.avatar-option').forEach(i => 
                    i.classList.remove('selected'));
                // 添加当前头像的选中状态
                this.classList.add('selected');
                // 更新隐藏输入框的值
                document.getElementById('selectedAvatar').value = this.dataset.avatar;
            });
        });
    </script>
</body>
</html> 