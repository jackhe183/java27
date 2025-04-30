<template>
    <div class="login-container">
      <div class="login-form-wrapper">
        <h2 class="login-title">登录</h2>
        <el-form :model="loginForm" :rules="rules" ref="loginFormRef" class="login-form">
          <el-form-item prop="username" label="用户名" label-width="80px">
            <el-input v-model="loginForm.username" autocomplete="off" class="input-full-width"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码" label-width="80px">
            <el-input type="password" v-model="loginForm.password" autocomplete="off" class="input-full-width"></el-input>
          </el-form-item>
          <div class="login-buttons">
            <el-button type="primary" class="login-button" @click="handleLogin">登录</el-button>
            <el-button class="reset-button" @click="handleReset">重置</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  
  const loginForm = ref({
    username: '',
    password: '',
  });
  
  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ],
  };
  
  const loginFormRef = ref(null);
  
  const handleLogin = () => {
    loginFormRef.value.validate((valid) => {
      if (valid) {
        // 假设登录成功
        ElMessage.success('登录成功！');
        // 在这里添加实际的登录逻辑
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  };
  
  const handleReset = () => {
    loginForm.value = {
      username: '',
      password: '',
    };
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f7fa;
  }
  
  .login-form-wrapper {
    background-color: #ffffff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }
  
  .login-title {
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .el-form-item {
    margin-bottom: 16px;
  }
  
  .input-full-width {
    width: 100%;
  }
  
  .login-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .login-button {
    flex: 1;
    margin-right: 8px; /* Optional: add some space between buttons */
  }
  
  .reset-button {
    flex: 1;
  }
  
  /* Optional: add some responsive styles */
  @media (max-width: 360px) {
    .login-buttons {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .login-button, .reset-button {
      width: 100%;
      margin-right: 0;
      margin-bottom: 8px;
    }
  }
  </style>