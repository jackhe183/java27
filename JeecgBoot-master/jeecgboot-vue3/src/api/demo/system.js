import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["AccountList"] = "/mock/system/getAccountList";
    Api["IsAccountExist"] = "/mock/system/accountExist";
    Api["DeptList"] = "/mock/system/getDeptList";
    Api["setRoleStatus"] = "/mock/system/setRoleStatus";
    Api["MenuList"] = "/mock/system/getMenuList";
    Api["RolePageList"] = "/mock/system/getRoleListByPage";
    Api["DemoTableList"] = "/mock/system/getDemoTableListByPage";
    Api["TestPageList"] = "/mock/system/getTestListByPage";
    Api["GetAllRoleList"] = "/mock/system/getAllRoleList";
})(Api || (Api = {}));
export const getAccountList = (params) => defHttp.get({ url: Api.AccountList, params });
export const getDeptList = (params) => defHttp.get({ url: Api.DeptList, params });
export const getMenuList = (params) => defHttp.get({ url: Api.MenuList, params });
export const getRoleListByPage = (params) => defHttp.get({ url: Api.RolePageList, params });
export const getAllRoleList = (params) => defHttp.get({ url: Api.GetAllRoleList, params });
export const setRoleStatus = (id, status) => defHttp.post({ url: Api.setRoleStatus, params: { id, status } });
export const getTestListByPage = (params) => defHttp.get({ url: Api.TestPageList, params });
export const getDemoTableListByPage = (params) => defHttp.get({ url: Api.DemoTableList, params });
export const isAccountExist = (account) => defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
//# sourceMappingURL=system.js.map