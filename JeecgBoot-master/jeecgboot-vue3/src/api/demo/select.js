import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["OPTIONS_LIST"] = "/mock/select/getDemoOptions";
})(Api || (Api = {}));
/**
 * @description: Get sample options value
 */
export const optionsListApi = (params) => defHttp.get({ url: Api.OPTIONS_LIST, params });
//# sourceMappingURL=select.js.map