import { useDefaultEnhanced } from '../hooks/useJVxeComponent';
import { isFunction, isObject, isString } from '/@/utils/is';
import { componentMap } from '../componentMap';
// 已注册的组件增强
const enhancedMap = new Map();
/**
 * 获取某个组件的增强
 * @param type JVxeTypes
 */
export function getEnhanced(type) {
    let $type = type;
    if (!enhancedMap.has($type)) {
        let defaultEnhanced = useDefaultEnhanced();
        if (componentMap.has($type)) {
            let enhanced = componentMap.get($type)?.enhanced ?? {};
            if (isObject(enhanced)) {
                Object.keys(defaultEnhanced).forEach((key) => {
                    let def = defaultEnhanced[key];
                    if (enhanced.hasOwnProperty(key)) {
                        // 方法如果存在就不覆盖
                        if (!isFunction(def) && !isString(def)) {
                            enhanced[key] = Object.assign({}, def, enhanced[key]);
                        }
                    }
                    else {
                        enhanced[key] = def;
                    }
                });
                enhancedMap.set($type, enhanced);
                return enhanced;
            }
        }
        else {
            throw new Error(`[JVxeTable] ${$type} 组件尚未注册，获取增强失败`);
        }
        enhancedMap.set($type, defaultEnhanced);
    }
    return enhancedMap.get($type);
}
/** 辅助方法：替换${...}变量 */
export function replaceProps(col, value) {
    if (value && typeof value === 'string') {
        let text = value;
        text = text.replace(/\${title}/g, col.title);
        text = text.replace(/\${key}/g, col.key);
        text = text.replace(/\${defaultValue}/g, col.defaultValue);
        return text;
    }
    return value;
}
//# sourceMappingURL=enhancedUtils.js.map