import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["list"] = "/sys/online/list";
    Api["forceLogout"] = "/sys/online/forceLogout";
})(Api || (Api = {}));
/**
 * 列表
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 批量删除角色
 * @param params
 */
export const forceLogout = (params) => {
    return defHttp.post({ url: Api.forceLogout, params }, { isTransformResponse: false });
};
//# sourceMappingURL=OnlineUser.api.js.map