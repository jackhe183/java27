import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["list"] = "/sys/dataLog/list";
    Api["queryDataVerList"] = "/sys/dataLog/queryDataVerList";
    Api["queryCompareList"] = "/sys/dataLog/queryCompareList";
})(Api || (Api = {}));
/**
 * 查询数据日志列表
 * @param params
 */
export const getDataLogList = (params) => {
    return defHttp.get({ url: Api.list, params });
};
/**
 * 查询数据日志列表
 * @param params
 */
export const queryDataVerList = (params) => {
    return defHttp.get({ url: Api.queryDataVerList, params });
};
/**
 * 查询对比数据
 * @param params
 */
export const queryCompareList = (params) => {
    return defHttp.get({ url: Api.queryCompareList, params });
};
//# sourceMappingURL=datalog.api.js.map