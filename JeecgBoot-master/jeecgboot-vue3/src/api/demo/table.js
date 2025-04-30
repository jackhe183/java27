import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["DEMO_LIST"] = "/mock/table/getDemoList";
})(Api || (Api = {}));
/**
 * @description: Get sample list value
 */
export const demoListApi = (params) => defHttp.get({
    url: Api.DEMO_LIST,
    params,
    headers: {
        ignoreCancelToken: true,
    },
});
//# sourceMappingURL=table.js.map