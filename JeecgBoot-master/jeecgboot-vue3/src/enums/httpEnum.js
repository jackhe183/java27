/**
 * @description: Request result set
 */
export var ResultEnum;
(function (ResultEnum) {
    ResultEnum[ResultEnum["SUCCESS"] = 0] = "SUCCESS";
    ResultEnum[ResultEnum["ERROR"] = 1] = "ERROR";
    ResultEnum[ResultEnum["TIMEOUT"] = 401] = "TIMEOUT";
    ResultEnum["TYPE"] = "success";
})(ResultEnum || (ResultEnum = {}));
/**
 * @description: request method
 */
export var RequestEnum;
(function (RequestEnum) {
    RequestEnum["GET"] = "GET";
    RequestEnum["POST"] = "POST";
    RequestEnum["PUT"] = "PUT";
    RequestEnum["DELETE"] = "DELETE";
})(RequestEnum || (RequestEnum = {}));
/**
 * @description:  contentTyp
 */
export var ContentTypeEnum;
(function (ContentTypeEnum) {
    // json
    ContentTypeEnum["JSON"] = "application/json;charset=UTF-8";
    // form-data qs
    ContentTypeEnum["FORM_URLENCODED"] = "application/x-www-form-urlencoded;charset=UTF-8";
    // form-data  upload
    ContentTypeEnum["FORM_DATA"] = "multipart/form-data;charset=UTF-8";
})(ContentTypeEnum || (ContentTypeEnum = {}));
/**
 * 请求header
 * @description:  contentTyp
 */
export var ConfigEnum;
(function (ConfigEnum) {
    // TOKEN
    ConfigEnum["TOKEN"] = "X-Access-Token";
    // TIMESTAMP
    ConfigEnum["TIMESTAMP"] = "X-TIMESTAMP";
    // Sign
    ConfigEnum["Sign"] = "X-Sign";
    // 租户id
    ConfigEnum["TENANT_ID"] = "X-Tenant-Id";
    // 版本
    ConfigEnum["VERSION"] = "X-Version";
    // 低代码应用ID
    ConfigEnum["X_LOW_APP_ID"] = "X-Low-App-ID";
})(ConfigEnum || (ConfigEnum = {}));
//# sourceMappingURL=httpEnum.js.map