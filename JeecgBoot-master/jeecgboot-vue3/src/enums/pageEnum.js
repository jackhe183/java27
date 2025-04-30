export var PageEnum;
(function (PageEnum) {
    // basic login path
    PageEnum["BASE_LOGIN"] = "/login";
    // basic home path
    PageEnum["BASE_HOME"] = "/dashboard/analysis";
    // error page path
    PageEnum["ERROR_PAGE"] = "/exception";
    // error log page path
    PageEnum["ERROR_LOG_PAGE"] = "/error-log/list";
    // auth2登录路由路径
    PageEnum["OAUTH2_LOGIN_PAGE_PATH"] = "/oauth2-app/login";
    //文件路由
    PageEnum["SYS_FILES_PATH"] = "/file/share";
    // 邮件中的跳转地址
    PageEnum["TOKEN_LOGIN"] = "/tokenLogin";
})(PageEnum || (PageEnum = {}));
//# sourceMappingURL=pageEnum.js.map