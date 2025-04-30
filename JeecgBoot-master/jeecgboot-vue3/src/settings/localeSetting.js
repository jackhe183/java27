export const LOCALE = {
    ZH_CN: 'zh_CN',
    EN_US: 'en',
};
export const localeSetting = {
    // 是否显示语言选择器
    showPicker: true,
    // 当前语言
    locale: LOCALE.ZH_CN,
    // 默认语言
    fallback: LOCALE.ZH_CN,
    // 允许的语言
    availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US],
};
// 语言列表
export const localeList = [
    {
        text: '简体中文',
        event: LOCALE.ZH_CN,
    },
    {
        text: 'English',
        event: LOCALE.EN_US,
    },
];
//# sourceMappingURL=localeSetting.js.map