<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title>用户管理</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }
        .user-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .user-table th, .user-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        .user-table th {
            background-color: #f5f5f5;
        }
        .button {
            display: inline-block;
            padding: 8px 16px;
            margin: 5px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border: none;
            cursor: pointer;
        }
        .button.delete {
            background-color: #dc3545;
        }
        .button:hover {
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transform: translateY(-1px);
            filter: brightness(110%);
        }
        .button:active {
            transform: translateY(0);
            filter: brightness(90%);
            transition: all 0.1s ease;
        }
    </style>
</head>
<body>
    <h1>用户管理</h1>
    
    <div>
        <a href="index.jsp" class="button">返回首页</a>
        <a href="#" class="button" onclick="showAddForm()">添加用户</a>
    </div>

    <table class="user-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="user" items="${users}">
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.status == 1 ? '活跃' : '禁用'}</td>
                    <td>
                        <a href="users/edit/${user.id}" class="button">编辑</a>
                        <a href="#" onclick="showDeleteConfirm(this, ${user.id})" class="button delete">删除</a>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>

    <script>
        function showDeleteConfirm(button, id) {
            // 移除所有现有的确认框
            document.querySelectorAll('.delete-confirm').forEach(box => box.remove());
            
            // 创建新的确认框
            const confirmBox = document.createElement('div');
            confirmBox.className = 'delete-confirm';
            confirmBox.innerHTML = `
                <p style="margin:0 0 10px 0">确定要删除用户 ID: ${id} 吗？</p>
                <button class="button" onclick="deleteUser(${id})">确定</button>
                <button class="button" onclick="this.parentElement.remove()">取消</button>
            `;
            
            // 定位确认框
            const rect = button.getBoundingClientRect();
            confirmBox.style.left = rect.left + 'px';
            confirmBox.style.top = (rect.bottom + window.scrollY + 5) + 'px';
            
            document.body.appendChild(confirmBox);
        }

        function deleteUser(id) {
            const form = document.createElement('form');
            form.method = 'post';
            form.action = 'users';
            
            const actionInput = document.createElement('input');
            actionInput.type = 'hidden';
            actionInput.name = 'action';
            actionInput.value = 'delete';
            
            const idInput = document.createElement('input');
            idInput.type = 'hidden';
            idInput.name = 'id';
            idInput.value = id; // 确保这里的id是有效的
            
            form.appendChild(actionInput);
            form.appendChild(idInput);
            document.body.appendChild(form);
            form.submit();
        }
    </script>
</body>
</html> 