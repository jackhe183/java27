import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["listCementByUser"] = "/sys/annountCement/listByUser";
    Api["getUnreadMessageCount"] = "/sys/annountCement/getUnreadMessageCount";
    Api["editCementSend"] = "/sys/sysAnnouncementSend/editByAnntIdAndUserId";
    Api["clearAllUnReadMessage"] = "/sys/annountCement/clearAllUnReadMessage";
})(Api || (Api = {}));
/**
 * 获取系统通知消息列表
 * @param params
 */
export const listCementByUser = (params) => defHttp.get({ url: Api.listCementByUser, params });
/**
 * 获取用户近两个月未读消息数量
 * @param params
 */
export const getUnreadMessageCount = (params) => defHttp.get({ url: Api.getUnreadMessageCount, params });
export const editCementSend = (anntId, params) => defHttp.put({ url: Api.editCementSend, params: { anntId, ...params } });
/**
 * 清空全部未读消息
 */
export const clearAllUnReadMessage = () => defHttp.post({ url: Api.clearAllUnReadMessage }, { isTransformResponse: false });
//# sourceMappingURL=notify.api.js.map