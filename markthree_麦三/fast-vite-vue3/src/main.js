import App from "./App.vue";
import { createApp } from "vue";
import pinia from "./modules/pinia";
import router from "./modules/router";

const app = createApp(App);

app.use(router); // 挂载路由
app.use(pinia); // 挂载pinia
app.mount("#app"); 