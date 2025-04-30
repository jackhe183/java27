import { createPinia } from 'pinia';
let store = null;
export function setupStore(app) {
    if (store == null) {
        store = createPinia();
    }
    app.use(store);
}
// 销毁store
export function destroyStore() {
    store = null;
}
export { store };
//# sourceMappingURL=index.js.map