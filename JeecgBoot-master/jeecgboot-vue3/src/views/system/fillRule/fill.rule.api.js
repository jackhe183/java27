import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
var Api;
(function (Api) {
    Api["list"] = "/sys/fillRule/list";
    Api["test"] = "/sys/fillRule/testFillRule";
    Api["save"] = "/sys/fillRule/add";
    Api["edit"] = "/sys/fillRule/edit";
    Api["delete"] = "/sys/fillRule/delete";
    Api["deleteBatch"] = "/sys/fillRule/deleteBatch";
    Api["exportXls"] = "/sys/fillRule/exportXls";
    Api["importExcel"] = "/sys/fillRule/importExcel";
})(Api || (Api = {}));
/**
 * 导出地址
 */
export const exportUrl = Api.exportXls;
/**
 * 导入地址
 */
export const importUrl = Api.importExcel;
/**
 * 列表查询
 * @param params
 */
export const getFillRuleList = (params) => {
    return defHttp.get({ url: Api.list, params });
};
/**
 * 删除
 * @param params
 * @param handleSuccess
 */
export const deleteFillRule = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除
 * @param params
 */
export const batchDeleteFillRule = (params, handleSuccess) => {
    Modal.confirm({
        title: '确认删除',
        content: '是否删除选中数据',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            return defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true }).then(() => {
                handleSuccess();
            });
        },
    });
};
/**
 * 规则功能测试
 * @param params
 */
export const handleTest = (params) => {
    return defHttp.get({ url: Api.test, params }, { isTransformResponse: false });
};
/**
 * 保存
 * @param params
 */
export const saveFillRule = (params) => {
    return defHttp.post({ url: Api.save, params });
};
/**
 * 更新
 * @param params
 */
export const updateFillRule = (params) => {
    return defHttp.put({ url: Api.edit, params });
};
//# sourceMappingURL=fill.rule.api.js.map