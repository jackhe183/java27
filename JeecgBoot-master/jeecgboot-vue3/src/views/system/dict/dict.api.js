import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
var Api;
(function (Api) {
    Api["list"] = "/sys/dict/list";
    Api["save"] = "/sys/dict/add";
    Api["edit"] = "/sys/dict/edit";
    Api["duplicateCheck"] = "/sys/duplicate/check";
    Api["deleteDict"] = "/sys/dict/delete";
    Api["deleteBatch"] = "/sys/dict/deleteBatch";
    Api["importExcel"] = "/sys/dict/importExcel";
    Api["exportXls"] = "/sys/dict/exportXls";
    Api["recycleBinList"] = "/sys/dict/deleteList";
    Api["putRecycleBin"] = "/sys/dict/back";
    Api["batchPutRecycleBin"] = "/sys/dict/putRecycleBin";
    Api["batchDeleteRecycleBin"] = "/sys/dict/deleteRecycleBin";
    Api["deleteRecycleBin"] = "/sys/dict/deletePhysic";
    Api["itemList"] = "/sys/dictItem/list";
    Api["deleteItem"] = "/sys/dictItem/delete";
    Api["itemSave"] = "/sys/dictItem/add";
    Api["itemEdit"] = "/sys/dictItem/edit";
    Api["dictItemCheck"] = "/sys/dictItem/dictItemCheck";
    Api["refreshCache"] = "/sys/dict/refleshCache";
    Api["queryAllDictItems"] = "/sys/dict/queryAllDictItems";
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
 * 字典列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 删除字典
 */
export const deleteDict = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.deleteDict, params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除字典
 * @param params
 */
export const batchDeleteDict = (params, handleSuccess) => {
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
 * 保存或者更新字典
 * @param params
 */
export const saveOrUpdateDict = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.save;
    return defHttp.post({ url: url, params });
};
/**
 * 唯一校验
 * @param params
 */
export const duplicateCheck = (params) => defHttp.get({ url: Api.duplicateCheck, params }, { isTransformResponse: false });
/**
 * 字典回收站列表
 * @param params
 */
export const getRecycleBinList = (params) => defHttp.get({ url: Api.recycleBinList, params });
/**
 * 回收站批量还原
 * @param params
 */
export const batchPutRecycleBin = (params, handleSuccess) => {
    return defHttp.put({ url: Api.batchPutRecycleBin, params }).then(() => {
        handleSuccess();
    });
};
/**
 * 回收站还原
 * @param params
 */
export const putRecycleBin = (id, handleSuccess) => {
    return defHttp.put({ url: Api.putRecycleBin + `/${id}` }).then(() => {
        handleSuccess();
    });
};
/**
 * 回收站批量删除
 * @param params
 */
export const batchDeleteRecycleBin = (params, handleSuccess) => {
    return defHttp.delete({ url: `${Api.batchDeleteRecycleBin}?ids=${params.ids}` }).then(() => {
        handleSuccess();
    });
};
/**
 * 回收站删除
 * @param params
 */
export const deleteRecycleBin = (id, handleSuccess) => {
    return defHttp.delete({ url: Api.deleteRecycleBin + `/${id}` }).then(() => {
        handleSuccess();
    });
};
/**
 * 字典配置列表
 * @param params
 */
export const itemList = (params) => defHttp.get({ url: Api.itemList, params });
/**
 * 字典配置删除
 * @param params
 */
export const deleteItem = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.deleteItem, params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 保存或者更新字典配置
 * @param params
 */
export const saveOrUpdateDictItem = (params, isUpdate) => {
    let url = isUpdate ? Api.itemEdit : Api.itemSave;
    return defHttp.post({ url: url, params });
};
/**
 * 校验字典数据值
 * @param params
 */
export const dictItemCheck = (params) => defHttp.get({ url: Api.dictItemCheck, params }, { isTransformResponse: false });
/**
 * 刷新字典
 * @param params
 */
export const refreshCache = () => defHttp.get({ url: Api.refreshCache }, { isTransformResponse: false });
/**
 * 获取所有字典项
 * @param params
 */
export const queryAllDictItems = () => defHttp.get({ url: Api.queryAllDictItems }, { isTransformResponse: false });
//# sourceMappingURL=dict.api.js.map