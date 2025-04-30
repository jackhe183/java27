import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["save"] = "/test/jeecgOrderMain/add";
    Api["edit"] = "/test/jeecgOrderMain/edit";
    Api["orderCustomerList"] = "/test/jeecgOrderMain/queryOrderCustomerListByMainId";
    Api["orderTicketList"] = "/test/jeecgOrderMain/queryOrderTicketListByMainId";
})(Api || (Api = {}));
export const orderCustomerList = Api.orderCustomerList;
export const orderTicketList = Api.orderTicketList;
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
    let url = isUpdate ? Api.edit : Api.save;
    return defHttp.post({ url: url, params });
};
//# sourceMappingURL=jvxetable.api.js.map