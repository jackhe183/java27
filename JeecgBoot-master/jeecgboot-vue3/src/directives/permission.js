import { usePermission } from '/@/hooks/web/usePermission';
function isAuth(el, binding) {
    // update-begin--author:liaozhiyang---date:20240529---for【TV360X-460】basicForm支持v-auth指令(权限控制显隐)
    const value = binding.value;
    if (!value)
        return;
    // update-end--author:liaozhiyang---date:20240529---for【TV360X-460】basicForm支持v-auth指令(权限控制显隐)
    const { hasPermission } = usePermission();
    if (!hasPermission(value)) {
        el.parentNode?.removeChild(el);
    }
}
const mounted = (el, binding) => {
    isAuth(el, binding);
};
const authDirective = {
    mounted,
};
export function setupPermissionDirective(app) {
    app.directive('auth', authDirective);
}
export default authDirective;
//# sourceMappingURL=permission.js.map