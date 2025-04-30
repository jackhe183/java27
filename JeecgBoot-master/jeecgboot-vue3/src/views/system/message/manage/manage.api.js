import { unref } from 'vue';
import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';
const { createConfirm } = useMessage();
export var Api;
(function (Api) {
    Api["list"] = "/sys/message/sysMessage/list";
    Api["delete"] = "/sys/message/sysMessage/delete";
    Api["deleteBatch"] = "/sys/message/sysMessage/deleteBatch";
    Api["exportXls"] = "sys/message/sysMessage/exportXls";
    Api["importXls"] = "sys/message/sysMessage/importExcel";
    Api["save"] = "/sys/message/sysMessage/add";
    Api["edit"] = "/sys/message/sysMessage/edit";
})(Api || (Api = {}));
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 批量删除
 * @param params
 * @param confirm
 */
export const deleteBatch = (params, confirm = false) => {
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
 * 保存或者更改消息模板
 */
export const saveOrUpdate = (params, isUpdate) => {
    if (unref(isUpdate)) {
        return defHttp.put({ url: Api.edit, params });
    }
    else {
        return defHttp.post({ url: Api.save, params });
    }
};
//# sourceMappingURL=manage.api.js.map