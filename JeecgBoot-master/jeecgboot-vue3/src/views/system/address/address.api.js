import { defHttp } from '/@/utils/http/axios';
export var Api;
(function (Api) {
    Api["list"] = "/sys/user/queryByOrgCodeForAddressList";
    Api["positionList"] = "/sys/position/list";
    Api["queryDepartTreeSync"] = "/sys/sysDepart/queryDepartTreeSync";
})(Api || (Api = {}));
/**
 * 获取部门树列表
 */
export const queryDepartTreeSync = (params) => defHttp.get({ url: Api.queryDepartTreeSync, params });
/**
 * 部门用户信息
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 职务list
 */
export const positionList = (params) => defHttp.get({ url: Api.positionList, params });
//# sourceMappingURL=address.api.js.map