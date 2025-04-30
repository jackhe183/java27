import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["loginfo"] = "/sys/loginfo";
    Api["visitInfo"] = "/sys/visitInfo";
})(Api || (Api = {}));
/**
 * 日志统计信息
 * @param params
 */
export const getLoginfo = (params) => defHttp.get({ url: Api.loginfo, params }, { isTransformResponse: false });
/**
 * 访问量信息
 * @param params
 */
export const getVisitInfo = (params) => defHttp.get({ url: Api.visitInfo, params }, { isTransformResponse: false });
//# sourceMappingURL=api.js.map