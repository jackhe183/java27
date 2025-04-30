import { createRouter as createVueRouter, createWebHistory } from 'vue-router';
export let router = null;
export function setRouter(r) {
    router = r;
}
let webHistory = null;
/**
 * 创建路由
 * @param options 参数
 */
export function createRouter(options) {
    webHistory = createWebHistory(import.meta.env.VITE_PUBLIC_PATH);
    // app router
    let router = createVueRouter({
        history: webHistory,
        routes: [],
        ...options,
    });
    setRouter(router);
    return router;
}
// 销毁路由
export function destroyRouter() {
    setRouter(null);
    if (webHistory) {
        webHistory.destroy();
    }
    webHistory = null;
}
//# sourceMappingURL=router.js.map