import { reactive, readonly, computed, getCurrentInstance, watchEffect, unref, nextTick, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
import { isEqual } from 'lodash-es';
export function useRuleFormItem(props, key = 'value', changeEvent = 'change', emitData) {
    const instance = getCurrentInstance();
    const emit = instance?.emit;
    const formItemContext = Form.useInjectFormItemContext();
    const innerState = reactive({
        value: props[key],
    });
    const defaultState = readonly(innerState);
    const setState = (val) => {
        innerState.value = val;
    };
    watchEffect(() => {
        innerState.value = props[key];
    });
    const state = computed({
        get() {
            //修复多选时空值显示问题（兼容值为0的情况）
            return innerState.value == null || innerState.value === '' ? [] : innerState.value;
        },
        set(value) {
            if (isEqual(value, defaultState.value))
                return;
            innerState.value = value;
            nextTick(() => {
                emit?.(changeEvent, value, ...(toRaw(unref(emitData)) || []));
                // https://antdv.com/docs/vue/migration-v3-cn
                // antDv3升级后需要调用这个方法更新校验的值
                nextTick(() => formItemContext.onFieldChange());
            });
        },
    });
    return [state, setState, defaultState, formItemContext];
}
//# sourceMappingURL=useFormItem.js.map