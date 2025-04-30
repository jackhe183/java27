import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
var Api;
(function (Api) {
    Api["list"] = "/sys/position/list";
    Api["save"] = "/sys/position/add";
    Api["edit"] = "/sys/position/edit";
    Api["get"] = "/sys/position/queryById";
    Api["delete"] = "/sys/position/delete";
    Api["importExcel"] = "/sys/position/importExcel";
    Api["exportXls"] = "/sys/position/exportXls";
    Api["deleteBatch"] = "/sys/position/deleteBatch";
})(Api || (Api = {}));
/**
 * 导出api
 */
export const getExportUrl = Api.exportXls;
export const getImportUrl = Api.importExcel;
/**
 * 查询列表
 * @param params
 */
export const getPositionList = (params) => {
    return defHttp.get({ url: Api.list, params });
};
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdatePosition = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.save;
    return defHttp.post({ url: url, params });
};
/**
 * 查询详情
 * @param params
 */
export const getPositionById = (params) => {
    return defHttp.get({ url: Api.get, params });
};
/**
 * 单条删除
 * @param params
 */
export const deletePosition = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除
 * @param params
 */
export const batchDeletePosition = (params, handleSuccess) => {
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
 * 自定义上传
 * @param customUpload
 */
export const customUpload = (params) => {
    defHttp.uploadFile({ url: Api.importExcel }, params);
};
//# sourceMappingURL=position.api.js.map