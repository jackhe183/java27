import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["list"] = "/sys/log/list";
})(Api || (Api = {}));
/**
 * 查询日志列表
 * @param params
 */
export const getLogList = (params) => {
    return defHttp.get({ url: Api.list, params });
};
//# sourceMappingURL=log.api.js.map