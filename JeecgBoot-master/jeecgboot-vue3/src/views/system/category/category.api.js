import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
var Api;
(function (Api) {
    Api["list"] = "/sys/category/rootList";
    Api["save"] = "/sys/category/add";
    Api["edit"] = "/sys/category/edit";
    Api["deleteCategory"] = "/sys/category/delete";
    Api["deleteBatch"] = "/sys/category/deleteBatch";
    Api["importExcel"] = "/sys/category/importExcel";
    Api["exportXls"] = "/sys/category/exportXls";
    Api["loadTreeData"] = "/sys/category/loadTreeRoot";
    Api["getChildList"] = "/sys/category/childList";
    Api["getChildListBatch"] = "/sys/category/getChildListBatch";
})(Api || (Api = {}));
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 * @param params
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 删除
 */
export const deleteCategory = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.deleteCategory, params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除
 * @param params
 */
export const batchDeleteCategory = (params, handleSuccess) => {
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
 * 保存或者更新
 * @param params
 */
export const saveOrUpdateDict = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.save;
    return defHttp.post({ url: url, params });
};
/**
 * 查询全部树形节点数据
 * @param params
 */
export const loadTreeData = (params) => defHttp.get({ url: Api.loadTreeData, params });
/**
 * 查询子节点数据
 * @param params
 */
export const getChildList = (params) => defHttp.get({ url: Api.getChildList, params });
/**
 * 批量查询子节点数据
 * @param params
 */
export const getChildListBatch = (params) => defHttp.get({ url: Api.getChildListBatch, params }, { isTransformResponse: false });
//# sourceMappingURL=category.api.js.map