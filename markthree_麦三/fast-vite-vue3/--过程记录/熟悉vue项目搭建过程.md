# 第一

## npm init -y
    -y 是快速创建一个默认的包信息

## npm i vite -D
    装vite开发环境下的的依赖

## npm i vue
    安装vue，目前默认是最新的Vue3

## npm run build

## npm i @vitejs/plugin-vue -D
    装插件，浏览器不能运行.vue文件，需要插件才能运行

## 定义vite.config.js文件
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'

## 编写App.vue文件
    <template></template>    

## 编写main.js文件
    import { createApp } from "vue";
    import App from "./App.vue";
    const app = createApp(App);
    app.mount("#app");

## 在HTML引入挂载点id为app的div
    <div id="app"></div>
    浏览器就可以识别vue了

# 第二

## npm i vue-router -D
    安装vue-router路由插件

## 在main.js中引入vue-router
    import { createRouter, createWebHistory } from 'vue-router'
    import Home from './views/Home.vue'

## app.use(router)
    挂载路由,让路由识别home组件去渲染home组件，component: () => import('./pages/Home.vue')
    App.vue 改为<router-view />

## npm i pinia -D
    安装pinia状态管理插件

## 在main.js中引入pinia,编写counter js文件

## 在home.vue中引入counter.js文件,并写一个增减的按钮

# 第三

## npm i unplugin-vue-components -D
    按需自动引入组件
 
## 引入解析器AntDesignVueResolver等

## npm i element-plus -D
    预打包，但是比较慢

## npm i navie-ui -D
    无需重新配置ui库，直接用就好了
 
## npm i unplugin-auto-import -D
    按需自动引入api

# 第四

## vite-plugin-pages
    自动生成路由

# 第五

## vite-plugin-vue-layouts
    自动生成布局
