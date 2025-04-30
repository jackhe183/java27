import { unref } from 'vue';
import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';
const { createConfirm } = useMessage();
export var Api;
(function (Api) {
    Api["queryDepartTreeSync"] = "/sys/sysDepart/queryDepartTreeSync";
    Api["save"] = "/sys/sysDepart/add";
    Api["edit"] = "/sys/sysDepart/edit";
    Api["delete"] = "/sys/sysDepart/delete";
    Api["deleteBatch"] = "/sys/sysDepart/deleteBatch";
    Api["exportXlsUrl"] = "/sys/sysDepart/exportXls";
    Api["importExcelUrl"] = "/sys/sysDepart/importExcel";
    Api["roleQueryTreeList"] = "/sys/role/queryTreeList";
    Api["queryDepartPermission"] = "/sys/permission/queryDepartPermission";
    Api["saveDepartPermission"] = "/sys/permission/saveDepartPermission";
    Api["dataRule"] = "/sys/sysDepartPermission/datarule";
    Api["getCurrentUserDeparts"] = "/sys/user/getCurrentUserDeparts";
    Api["selectDepart"] = "/sys/selectDepart";
    Api["getUpdateDepartInfo"] = "/sys/user/getUpdateDepartInfo";
    Api["doUpdateDepartInfo"] = "/sys/user/doUpdateDepartInfo";
    Api["changeDepartChargePerson"] = "/sys/user/changeDepartChargePerson";
})(Api || (Api = {}));
/**
 * 获取部门树列表
 */
export const queryDepartTreeSync = (params) => defHttp.get({ url: Api.queryDepartTreeSync, params });
/**
 * 保存或者更新部门角色
 */
export const saveOrUpdateDepart = (params, isUpdate) => {
    if (isUpdate) {
        return defHttp.put({ url: Api.edit, params });
    }
    else {
        return defHttp.post({ url: Api.save, params });
    }
};
/**
 * 批量删除部门角色
 */
export const deleteBatchDepart = (params, confirm = false) => {
    return new Promise((resolve, reject) => {
        const doDelete = () => {
            resolve(defHttp.delete({ url: Api.deleteBatch, params }, { joinParamsToUrl: true }));
        };
        if (confirm) {
            createConfirm({
                iconType: 'warning',
                title: '删除',
                content: '确定要删除吗？',
                onOk: () => doDelete(),
                onCancel: () => reject(),
            });
        }
        else {
            doDelete();
        }
    });
};
/**
 * 获取权限树列表
 */
export const queryRoleTreeList = (params) => defHttp.get({ url: Api.roleQueryTreeList, params });
/**
 * 查询部门权限
 */
export const queryDepartPermission = (params) => defHttp.get({ url: Api.queryDepartPermission, params });
/**
 * 保存部门权限
 */
export const saveDepartPermission = (params) => defHttp.post({ url: Api.saveDepartPermission, params });
/**
 *  查询部门数据权限列表
 */
export const queryDepartDataRule = (functionId, departId, params) => {
    let url = `${Api.dataRule}/${unref(functionId)}/${unref(departId)}`;
    return defHttp.get({ url, params });
};
/**
 * 保存部门数据权限
 */
export const saveDepartDataRule = (params) => defHttp.post({ url: Api.dataRule, params });
/**
 * 获取登录用户部门信息
 */
export const getUserDeparts = (params) => defHttp.get({ url: Api.getCurrentUserDeparts, params });
/**
 * 切换选择部门
 */
export const selectDepart = (params) => defHttp.put({ url: Api.selectDepart, params });
/**
 * 编辑部门前获取部门相关信息
 * @param id
 */
export const getUpdateDepartInfo = (id) => defHttp.get({ url: Api.getUpdateDepartInfo, params: { id } });
/**
 * 编辑部门
 * @param params
 */
export const doUpdateDepartInfo = (params) => defHttp.put({ url: Api.doUpdateDepartInfo, params });
/**
 * 删除部门
 * @param id
 */
export const deleteDepart = (id) => defHttp.delete({ url: Api.delete, params: { id } }, { joinParamsToUrl: true });
/**
 * 设置负责人 取消负责人
 * @param params
 */
export const changeDepartChargePerson = (params) => defHttp.put({ url: Api.changeDepartChargePerson, params });
//# sourceMappingURL=depart.api.js.map