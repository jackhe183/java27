import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
var Api;
(function (Api) {
    Api["list"] = "/sys/role/list";
    Api["listByTenant"] = "/sys/role/listByTenant";
    Api["save"] = "/sys/role/add";
    Api["edit"] = "/sys/role/edit";
    Api["deleteRole"] = "/sys/role/delete";
    Api["deleteBatch"] = "/sys/role/deleteBatch";
    Api["exportXls"] = "/sys/role/exportXls";
    Api["importExcel"] = "/sys/role/importExcel";
    Api["isRoleExist"] = "/sys/role/checkRoleCode";
    Api["queryTreeListForRole"] = "/sys/role/queryTreeList";
    Api["queryRolePermission"] = "/sys/permission/queryRolePermission";
    Api["saveRolePermission"] = "/sys/permission/saveRolePermission";
    Api["queryDataRule"] = "/sys/role/datarule";
    Api["getParentDesignList"] = "/act/process/extActDesignFlowData/getDesFormFlows";
    Api["getRoleDegisnList"] = "/joa/designform/designFormCommuse/getRoleDegisnList";
    Api["saveRoleDesign"] = "/joa/designform/designFormCommuse/sysRoleDesignAdd";
    Api["userList"] = "/sys/user/userRoleList";
    Api["deleteUserRole"] = "/sys/user/deleteUserRole";
    Api["batchDeleteUserRole"] = "/sys/user/deleteUserRoleBatch";
    Api["addUserRole"] = "/sys/user/addSysUserRole";
    Api["saveRoleIndex"] = "/sys/sysRoleIndex/add";
    Api["editRoleIndex"] = "/sys/sysRoleIndex/edit";
    Api["queryIndexByCode"] = "/sys/sysRoleIndex/queryByCode";
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
 * 系统角色列表
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 租户角色列表
 * @param params
 */
export const listByTenant = (params) => defHttp.get({ url: Api.listByTenant, params });
/**
 * 删除角色
 */
export const deleteRole = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.deleteRole, params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除角色
 * @param params
 */
export const batchDeleteRole = (params, handleSuccess) => {
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
 * 保存或者更新角色
 * @param params
 */
export const saveOrUpdateRole = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.save;
    return defHttp.post({ url: url, params });
};
/**
 * 编码校验
 * @param params
 */
// update-begin--author:liaozhiyang---date:20231215---for：【QQYUN-7415】表单调用接口进行校验的添加防抖
let timer;
export const isRoleExist = (params) => {
    return new Promise((resolve, rejected) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            defHttp
                .get({ url: Api.isRoleExist, params }, { isTransformResponse: false })
                .then((res) => {
                resolve(res);
            })
                .catch((error) => {
                rejected(error);
            });
        }, 500);
    });
};
// update-end--author:liaozhiyang---date:20231215---for：【QQYUN-7415】表单调用接口进行校验的添加防抖
/**
 * 根据角色查询树信息
 */
export const queryTreeListForRole = () => defHttp.get({ url: Api.queryTreeListForRole });
/**
 * 查询角色权限
 */
export const queryRolePermission = (params) => defHttp.get({ url: Api.queryRolePermission, params });
/**
 * 保存角色权限
 */
export const saveRolePermission = (params) => defHttp.post({ url: Api.saveRolePermission, params });
/**
 * 查询角色数据规则
 */
export const queryDataRule = (params) => defHttp.get({ url: `${Api.queryDataRule}/${params.functionId}/${params.roleId}` }, { isTransformResponse: false });
/**
 * 保存角色数据规则
 */
export const saveDataRule = (params) => defHttp.post({ url: Api.queryDataRule, params });
/**
 * 获取表单数据
 * @return List<Map>
 */
export const getParentDesignList = () => defHttp.get({ url: Api.getParentDesignList });
/**
 * 获取角色表单数据
 * @return List<Map>
 */
export const getRoleDegisnList = (params) => defHttp.get({ url: Api.getRoleDegisnList, params });
/**
 * 提交角色工单信息
 */
export const saveRoleDesign = (params) => defHttp.post({ url: Api.saveRoleDesign, params });
/**
 * 角色列表接口
 * @param params
 */
export const userList = (params) => defHttp.get({ url: Api.userList, params });
/**
 * 删除角色用户
 */
export const deleteUserRole = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.deleteUserRole, params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
/**
 * 批量删除角色用户
 * @param params
 */
export const batchDeleteUserRole = (params, handleSuccess) => {
    Modal.confirm({
        title: '确认删除',
        content: '是否删除选中数据',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
            return defHttp.delete({ url: Api.batchDeleteUserRole, params }, { joinParamsToUrl: true }).then(() => {
                handleSuccess();
            });
        },
    });
};
/**
 * 添加已有用户
 */
export const addUserRole = (params, handleSuccess) => {
    return defHttp.post({ url: Api.addUserRole, params }).then(() => {
        handleSuccess();
    });
};
/**
 * 保存或者更新
 * @param params
 * @param isUpdate 是否是更新数据
 */
export const saveOrUpdateRoleIndex = (params, isUpdate) => {
    let url = isUpdate ? Api.editRoleIndex : Api.saveRoleIndex;
    return defHttp.post({ url: url, params });
};
/**
 * 根据code查询首页配置
 * @param params
 */
export const queryIndexByCode = (params) => defHttp.get({ url: Api.queryIndexByCode, params }, { isTransformResponse: false });
//# sourceMappingURL=role.api.js.map