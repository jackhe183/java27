import { unref, toRaw } from 'vue';
import { isArray, isFunction, isObject, isString } from '/@/utils/is';
import { deepMerge, getValueType } from '/@/utils';
import { dateItemType, handleInputNumberValue, handleInputStringValue } from '../helper';
import { dateUtil } from '/@/utils/dateUtil';
import { cloneDeep, uniqBy } from 'lodash-es';
import { error } from '/@/utils/log';
export function useFormEvents({ emit, getProps, formModel, getSchema, defaultValueRef, formElRef, schemaRef, handleFormValues, }) {
    async function resetFields() {
        const { resetFunc, submitOnReset } = unref(getProps);
        resetFunc && isFunction(resetFunc) && (await resetFunc());
        const formEl = unref(formElRef);
        if (!formEl)
            return;
        Object.keys(formModel).forEach((key) => {
            formModel[key] = defaultValueRef.value[key];
        });
        clearValidate();
        emit('reset', toRaw(formModel));
        submitOnReset && handleSubmit();
    }
    /**
     * @description: Set form value
     */
    async function setFieldsValue(values) {
        const fields = unref(getSchema)
            .map((item) => item.field)
            .filter(Boolean);
        const validKeys = [];
        Object.keys(values).forEach((key) => {
            const schema = unref(getSchema).find((item) => item.field === key);
            let value = values[key];
            //antd3升级后，online表单时间控件选中值报js错 TypeError: Reflect.has called on non-object
            if (!(values instanceof Object)) {
                return;
            }
            const hasKey = Reflect.has(values, key);
            value = handleInputNumberValue(schema?.component, value);
            // update-begin--author:liaozhiyang---date:20231226---for：【QQYUN-7535】popup回填字段inputNumber组件验证错误
            value = handleInputStringValue(schema?.component, value);
            // update-end--author:liaozhiyang---date:20231226---for：【QQYUN-7535】popup回填字段inputNumber组件验证错误
            // 0| '' is allow
            if (hasKey && fields.includes(key)) {
                // time type
                if (itemIsDateType(key)) {
                    if (Array.isArray(value)) {
                        const arr = [];
                        for (const ele of value) {
                            arr.push(ele ? dateUtil(ele) : null);
                        }
                        formModel[key] = arr;
                    }
                    else {
                        const { componentProps } = schema || {};
                        let _props = componentProps;
                        if (typeof componentProps === 'function') {
                            _props = _props({ formModel });
                        }
                        formModel[key] = value ? (_props?.valueFormat ? value : dateUtil(value)) : null;
                    }
                }
                else {
                    formModel[key] = value;
                }
                validKeys.push(key);
            }
        });
        validateFields(validKeys).catch((_) => { });
    }
    /**
     *  根据字段名获取schema
     * @param field
     */
    function getSchemaByField(field) {
        if (!isString(field)) {
            return null;
        }
        const schemaList = unref(getSchema);
        const index = schemaList.findIndex((schema) => schema.field === field);
        if (index !== -1) {
            return cloneDeep(schemaList[index]);
        }
        return null;
    }
    /**
     * @description: Delete based on field name
     */
    async function removeSchemaByFiled(fields) {
        const schemaList = cloneDeep(unref(getSchema));
        if (!fields) {
            return;
        }
        let fieldList = isString(fields) ? [fields] : fields;
        if (isString(fields)) {
            fieldList = [fields];
        }
        for (const field of fieldList) {
            _removeSchemaByFiled(field, schemaList);
        }
        schemaRef.value = schemaList;
    }
    /**
     * @description: Delete based on field name
     */
    function _removeSchemaByFiled(field, schemaList) {
        if (isString(field)) {
            const index = schemaList.findIndex((schema) => schema.field === field);
            if (index !== -1) {
                delete formModel[field];
                schemaList.splice(index, 1);
            }
        }
    }
    /**
     * @description: Insert after a certain field, if not insert the last
     */
    async function appendSchemaByField(schema, prefixField, first = false) {
        const schemaList = cloneDeep(unref(getSchema));
        const index = schemaList.findIndex((schema) => schema.field === prefixField);
        const hasInList = schemaList.some((item) => item.field === prefixField || schema.field);
        if (!hasInList)
            return;
        if (!prefixField || index === -1 || first) {
            first ? schemaList.unshift(schema) : schemaList.push(schema);
            schemaRef.value = schemaList;
            return;
        }
        if (index !== -1) {
            schemaList.splice(index + 1, 0, schema);
        }
        schemaRef.value = schemaList;
    }
    async function resetSchema(data) {
        let updateData = [];
        if (isObject(data)) {
            updateData.push(data);
        }
        if (isArray(data)) {
            updateData = [...data];
        }
        const hasField = updateData.every((item) => item.component === 'Divider' || (Reflect.has(item, 'field') && item.field));
        if (!hasField) {
            error('All children of the form Schema array that need to be updated must contain the `field` field');
            return;
        }
        schemaRef.value = updateData;
    }
    async function updateSchema(data) {
        let updateData = [];
        if (isObject(data)) {
            updateData.push(data);
        }
        if (isArray(data)) {
            updateData = [...data];
        }
        const hasField = updateData.every((item) => item.component === 'Divider' || (Reflect.has(item, 'field') && item.field));
        if (!hasField) {
            error('All children of the form Schema array that need to be updated must contain the `field` field');
            return;
        }
        const schema = [];
        updateData.forEach((item) => {
            unref(getSchema).forEach((val) => {
                if (val.field === item.field) {
                    const newSchema = deepMerge(val, item);
                    schema.push(newSchema);
                }
                else {
                    schema.push(val);
                }
            });
        });
        schemaRef.value = uniqBy(schema, 'field');
    }
    function getFieldsValue() {
        const formEl = unref(formElRef);
        if (!formEl)
            return {};
        return handleFormValues(toRaw(unref(formModel)));
    }
    /**
     * @description: Is it time
     */
    function itemIsDateType(key) {
        return unref(getSchema).some((item) => {
            return item.field === key ? dateItemType.includes(item.component) : false;
        });
    }
    async function validateFields(nameList, options) {
        return unref(formElRef)?.validateFields(nameList, options);
    }
    async function validate(nameList) {
        return await unref(formElRef)?.validate(nameList);
    }
    async function clearValidate(name) {
        await unref(formElRef)?.clearValidate(name);
    }
    async function scrollToField(name, options) {
        await unref(formElRef)?.scrollToField(name, options);
    }
    /**
     * @description: Form submission
     */
    async function handleSubmit(e) {
        e && e.preventDefault();
        const { submitFunc } = unref(getProps);
        if (submitFunc && isFunction(submitFunc)) {
            await submitFunc();
            return;
        }
        const formEl = unref(formElRef);
        if (!formEl)
            return;
        try {
            const values = await validate();
            //update-begin---author:zhangdaihao   Date:20140212  for：[bug号]树机构调整------------
            //--updateBy-begin----author:zyf---date:20211206------for:对查询表单提交的数组处理成字符串------
            for (let key in values) {
                if (values[key] instanceof Array) {
                    let valueType = getValueType(getProps, key);
                    if (valueType === 'string') {
                        values[key] = values[key].join(',');
                    }
                }
            }
            //--updateBy-end----author:zyf---date:20211206------for:对查询表单提交的数组处理成字符串------
            const res = handleFormValues(values);
            emit('submit', res);
        }
        catch (error) {
            //update-begin-author:taoyan date:2022-11-4 for: 列表查询表单会触发校验错误导致重置失败，原因不明
            emit('submit', {});
            console.error('query form validate error, please ignore!', error);
            //throw new Error(error);
            //update-end-author:taoyan date:2022-11-4 for: 列表查询表单会触发校验错误导致重置失败，原因不明
        }
    }
    return {
        handleSubmit,
        clearValidate,
        validate,
        validateFields,
        getFieldsValue,
        updateSchema,
        resetSchema,
        getSchemaByField,
        appendSchemaByField,
        removeSchemaByFiled,
        resetFields,
        setFieldsValue,
        scrollToField,
    };
}
//# sourceMappingURL=useFormEvents.js.map