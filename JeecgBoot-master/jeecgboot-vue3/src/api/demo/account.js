import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["ACCOUNT_INFO"] = "/mock/account/getAccountInfo";
    Api["SESSION_TIMEOUT"] = "/mock/user/sessionTimeout";
    Api["TOKEN_EXPIRED"] = "/mock/user/tokenExpired";
})(Api || (Api = {}));
// Get personal center-basic settings
export const accountInfoApi = () => defHttp.get({ url: Api.ACCOUNT_INFO });
export const sessionTimeoutApi = () => defHttp.post({ url: Api.SESSION_TIMEOUT });
export const tokenExpiredApi = () => defHttp.post({ url: Api.TOKEN_EXPIRED });
//# sourceMappingURL=account.js.map