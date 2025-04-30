export const SIDE_BAR_MINI_WIDTH = 48;
export const SIDE_BAR_SHOW_TIT_MINI_WIDTH = 80;
// 标签页样式
export var TabsThemeEnum;
(function (TabsThemeEnum) {
    // 圆滑
    TabsThemeEnum["SMOOTH"] = "smooth";
    // 卡片
    TabsThemeEnum["CARD"] = "card";
    // 极简
    TabsThemeEnum["SIMPLE"] = "simple";
})(TabsThemeEnum || (TabsThemeEnum = {}));
export var ContentEnum;
(function (ContentEnum) {
    // auto width
    ContentEnum["FULL"] = "full";
    // fixed width
    ContentEnum["FIXED"] = "fixed";
})(ContentEnum || (ContentEnum = {}));
// menu theme enum
export var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["DARK"] = "dark";
    ThemeEnum["LIGHT"] = "light";
})(ThemeEnum || (ThemeEnum = {}));
export var SettingButtonPositionEnum;
(function (SettingButtonPositionEnum) {
    SettingButtonPositionEnum["AUTO"] = "auto";
    SettingButtonPositionEnum["HEADER"] = "header";
    SettingButtonPositionEnum["FIXED"] = "fixed";
})(SettingButtonPositionEnum || (SettingButtonPositionEnum = {}));
export var SessionTimeoutProcessingEnum;
(function (SessionTimeoutProcessingEnum) {
    SessionTimeoutProcessingEnum[SessionTimeoutProcessingEnum["ROUTE_JUMP"] = 0] = "ROUTE_JUMP";
    SessionTimeoutProcessingEnum[SessionTimeoutProcessingEnum["PAGE_COVERAGE"] = 1] = "PAGE_COVERAGE";
})(SessionTimeoutProcessingEnum || (SessionTimeoutProcessingEnum = {}));
/**
 * 权限模式
 */
export var PermissionModeEnum;
(function (PermissionModeEnum) {
    // role
    PermissionModeEnum["ROLE"] = "ROLE";
    // 后台
    PermissionModeEnum["BACK"] = "BACK";
    // route mapping
    PermissionModeEnum["ROUTE_MAPPING"] = "ROUTE_MAPPING";
})(PermissionModeEnum || (PermissionModeEnum = {}));
//  Route switching animation
export var RouterTransitionEnum;
(function (RouterTransitionEnum) {
    RouterTransitionEnum["ZOOM_FADE"] = "zoom-fade";
    RouterTransitionEnum["ZOOM_OUT"] = "zoom-out";
    RouterTransitionEnum["FADE_SIDE"] = "fade-slide";
    RouterTransitionEnum["FADE"] = "fade";
    RouterTransitionEnum["FADE_BOTTOM"] = "fade-bottom";
    RouterTransitionEnum["FADE_SCALE"] = "fade-scale";
})(RouterTransitionEnum || (RouterTransitionEnum = {}));
//# sourceMappingURL=appEnum.js.map