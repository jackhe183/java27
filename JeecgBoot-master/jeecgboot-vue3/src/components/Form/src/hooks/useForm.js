import { handleRangeValue } from '../utils/formUtils';
import { ref, onUnmounted, unref, nextTick, watch } from 'vue';
import { isProdMode } from '/@/utils/env';
import { error } from '/@/utils/log';
import { getDynamicProps, getValueTypeBySchema } from '/@/utils';
import { add } from "/@/components/Form/src/componentMap";
//集成online专用控件
import { OnlineSelectCascade, LinkTableCard, LinkTableSelect } from '@jeecg/online';
export function useForm(props) {
    const formRef = ref(null);
    const loadedRef = ref(false);
    //集成online专用控件
    add("OnlineSelectCascade", OnlineSelectCascade);
    add("LinkTableCard", LinkTableCard);
    add("LinkTableSelect", LinkTableSelect);
    async function getForm() {
        const form = unref(formRef);
        if (!form) {
            error('The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!');
        }
        await nextTick();
        return form;
    }
    function register(instance) {
        isProdMode() &&
            onUnmounted(() => {
                formRef.value = null;
                loadedRef.value = null;
            });
        if (unref(loadedRef) && isProdMode() && instance === unref(formRef))
            return;
        formRef.value = instance;
        loadedRef.value = true;
        watch(() => props, () => {
            props && instance.setProps(getDynamicProps(props));
        }, {
            immediate: true,
            deep: true,
        });
    }
    const methods = {
        scrollToField: async (name, options) => {
            const form = await getForm();
            form.scrollToField(name, options);
        },
        setProps: async (formProps) => {
            const form = await getForm();
            form.setProps(formProps);
        },
        updateSchema: async (data) => {
            const form = await getForm();
            form.updateSchema(data);
        },
        resetSchema: async (data) => {
            const form = await getForm();
            form.resetSchema(data);
        },
        clearValidate: async (name) => {
            const form = await getForm();
            form.clearValidate(name);
        },
        resetFields: async () => {
            getForm().then(async (form) => {
                await form.resetFields();
            });
        },
        removeSchemaByFiled: async (field) => {
            unref(formRef)?.removeSchemaByFiled(field);
        },
        // TODO promisify
        getFieldsValue: () => {
            //update-begin-author:taoyan date:2022-7-5 for: VUEN-1341【流程】编码方式 流程节点编辑表单时，填写数据报错 包括用户组件、部门组件、省市区
            let values = unref(formRef)?.getFieldsValue();
            if (values) {
                Object.keys(values).map(key => {
                    if (values[key] instanceof Array) {
                        // update-begin-author:sunjianlei date:20221205 for: 【issues/4330】判断如果是对象数组，则不拼接
                        let isObject = typeof (values[key][0] || '') === 'object';
                        if (!isObject) {
                            values[key] = values[key].join(',');
                        }
                        // update-end-author:sunjianlei date:20221205 for: 【issues/4330】判断如果是对象数组，则不拼接
                    }
                });
            }
            return values;
            //update-end-author:taoyan date:2022-7-5 for: VUEN-1341【流程】编码方式 流程节点编辑表单时，填写数据报错 包括用户组件、部门组件、省市区
        },
        setFieldsValue: async (values) => {
            const form = await getForm();
            form.setFieldsValue(values);
        },
        appendSchemaByField: async (schema, prefixField, first) => {
            const form = await getForm();
            form.appendSchemaByField(schema, prefixField, first);
        },
        submit: async () => {
            const form = await getForm();
            return form.submit();
        },
        /**
         * 表单验证并返回表单值
         * @update:添加表单值转换逻辑
         * @updateBy:zyf
         * @updateDate:2021-09-02
         */
        validate: async (nameList) => {
            const form = await getForm();
            let getProps = props || form.getProps;
            let values = form.validate(nameList).then((values) => {
                for (let key in values) {
                    if (values[key] instanceof Array) {
                        let valueType = getValueTypeBySchema(form.getSchemaByField(key));
                        if (valueType === 'string') {
                            values[key] = values[key].join(',');
                        }
                    }
                }
                //--@updateBy-begin----author:liusq---date:20210916------for:处理区域事件字典信息------
                return handleRangeValue(getProps, values);
                //--@updateBy-end----author:liusq---date:20210916------for:处理区域事件字典信息------
            });
            return values;
        },
        validateFields: async (nameList, options) => {
            const form = await getForm();
            return form.validateFields(nameList, options);
        },
    };
    return [register, methods];
}
//# sourceMappingURL=useForm.js.map