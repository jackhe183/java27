import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
var Api;
(function (Api) {
    Api["list"] = "/test/jeecgDemo/list";
    Api["save"] = "/test/jeecgDemo/add";
    Api["edit"] = "/test/jeecgDemo/edit";
    Api["get"] = "/test/jeecgDemo/queryById";
    Api["delete"] = "/test/jeecgDemo/delete";
    Api["deleteBatch"] = "/test/jeecgDemo/deleteBatch";
    Api["exportXls"] = "/test/jeecgDemo/exportXls";
    Api["importExcel"] = "/test/jeecgDemo/importExcel";
})(Api || (Api = {}));
/**
 * 导出api
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 查询示例列表
 * @param params
 */
export const getDemoList = (params) => {
    return defHttp.get({ url: Api.list, params });
};
/**
 * 保存或者更新示例
 * @param params
 */
export const saveOrUpdateDemo = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.save;
    return defHttp.post({ url: url, params });
};
/**
 * 查询示例详情
 * @param params
 */
export const getDemoById = (params) => {
    return defHttp.get({ url: Api.get, params });
};
/**
 * 删除示例
 * @param params
 */
export const deleteDemo = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除示例
 * @param params
 */
export const batchDeleteDemo = (params, handleSuccess) => {
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
//# sourceMappingURL=demo.api.js.map