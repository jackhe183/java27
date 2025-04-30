import { createContext, useContext } from '/@/hooks/core/useContext';
const key = Symbol();
export function createBasicRootMenuContext(context) {
    return createContext(context, key, { readonly: false, native: true });
}
export function useBasicRootMenuContext() {
    return useContext(key);
}
//# sourceMappingURL=useBasicMenuContext.js.map