import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["actuatorList"] = "/actuator/jeecghttptrace/";
})(Api || (Api = {}));
/**
 * 追踪信息
 */
export const getActuatorList = (query, order) => {
    return defHttp.get({ url: Api.actuatorList + query + '/' + order }, { isTransformResponse: false });
};
//# sourceMappingURL=trace.api.js.map