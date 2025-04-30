import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["TREE_OPTIONS_LIST"] = "/mock/tree/getDemoOptions";
})(Api || (Api = {}));
/**
 * @description: Get sample options value
 */
export const treeOptionsListApi = (params) => defHttp.get({ url: Api.TREE_OPTIONS_LIST, params });
//# sourceMappingURL=tree.js.map