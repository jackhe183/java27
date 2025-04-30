import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["queryDiskInfo"] = "/sys/actuator/redis/queryDiskInfo";
})(Api || (Api = {}));
/**
 * 详细信息
 */
export const queryDiskInfo = () => {
    return defHttp.get({ url: Api.queryDiskInfo }, { successMessageMode: 'none' });
};
//# sourceMappingURL=disk.api.js.map