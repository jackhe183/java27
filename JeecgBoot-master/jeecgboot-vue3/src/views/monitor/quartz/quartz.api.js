import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
var Api;
(function (Api) {
    Api["list"] = "/sys/quartzJob/list";
    Api["save"] = "/sys/quartzJob/add";
    Api["edit"] = "/sys/quartzJob/edit";
    Api["get"] = "/sys/quartzJob/queryById";
    Api["pause"] = "/sys/quartzJob/pause";
    Api["resume"] = "/sys/quartzJob/resume";
    Api["delete"] = "/sys/quartzJob/delete";
    Api["exportXlsUrl"] = "/sys/quartzJob/exportXls";
    Api["importExcelUrl"] = "/sys/quartzJob/importExcel";
    Api["execute"] = "/sys/quartzJob/execute";
    Api["deleteBatch"] = "/sys/quartzJob/deleteBatch";
})(Api || (Api = {}));
/**
 * 导出api
 */
export const getExportUrl = Api.exportXlsUrl;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcelUrl;
/**
 * 查询任务列表
 * @param params
 */
export const getQuartzList = (params) => {
    return defHttp.get({ url: Api.list, params });
};
/**
 * 保存或者更新任务
 * @param params
 */
export const saveOrUpdateQuartz = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.save;
    return defHttp.post({ url: url, params });
};
/**
 * 查询任务详情
 * @param params
 */
export const getQuartzById = (params) => {
    return defHttp.get({ url: Api.get, params });
};
/**
 * 删除任务
 * @param params
 */
export const deleteQuartz = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.delete, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 启动
 * @param params
 */
export const resumeJob = (params, handleSuccess) => {
    return defHttp.get({ url: Api.resume, params }).then(() => {
        handleSuccess();
    });
};
/**
 * 暂停
 * @param params
 */
export const pauseJob = (params, handleSuccess) => {
    return defHttp.get({ url: Api.pause, params }).then(() => {
        handleSuccess();
    });
};
/**
 * 立即执行
 * @param params
 */
export const executeImmediately = (params, handleSuccess) => {
    return defHttp.get({ url: Api.execute, params }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除任务
 * @param params
 */
export const batchDeleteQuartz = (params, handleSuccess) => {
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
//# sourceMappingURL=quartz.api.js.map