import { defineStore } from 'pinia';
import { store } from '/@/store';
import { LOCALE_KEY } from '/@/enums/cacheEnum';
import { createLocalStorage } from '/@/utils/cache';
import { localeSetting } from '/@/settings/localeSetting';
const ls = createLocalStorage();
const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting);
export const useLocaleStore = defineStore({
    id: 'app-locale',
    state: () => ({
        localInfo: lsLocaleSetting,
        pathTitleMap: {},
        appIndexTheme: '',
        appMainPth: ''
    }),
    getters: {
        getShowPicker() {
            return !!this.localInfo?.showPicker;
        },
        getLocale() {
            return this.localInfo?.locale ?? 'zh_CN';
        },
        //update-begin-author:taoyan date:2022-6-1 for: VUEN-1144 online 配置成菜单后，打开菜单，显示名称未展示为菜单名称
        getPathTitle: (state) => {
            return (path) => state.pathTitleMap[path];
        },
        //update-end-author:taoyan date:2022-6-1 for: VUEN-1144 online 配置成菜单后，打开菜单，显示名称未展示为菜单名称
        getAppIndexTheme() {
            return this.appIndexTheme;
        },
        getAppMainPth() {
            return this.appMainPth;
        },
    },
    actions: {
        /**
         * Set up multilingual information and cache
         * @param info multilingual info
         */
        setLocaleInfo(info) {
            this.localInfo = { ...this.localInfo, ...info };
            ls.set(LOCALE_KEY, this.localInfo);
        },
        /**
         * Initialize multilingual information and load the existing configuration from the local cache
         */
        initLocale() {
            this.setLocaleInfo({
                ...localeSetting,
                ...this.localInfo,
            });
        },
        //update-begin-author:taoyan date:2022-6-1 for: VUEN-1144 online 配置成菜单后，打开菜单，显示名称未展示为菜单名称
        setPathTitle(path, title) {
            this.pathTitleMap[path] = title;
        },
        //update-end-author:taoyan date:2022-6-1 for: VUEN-1144 online 配置成菜单后，打开菜单，显示名称未展示为菜单名称
        setAppIndexTheme(theme) {
            this.appIndexTheme = theme;
        },
        setAppMainPth(path) {
            this.appMainPth = path;
        },
    },
});
// Need to be used outside the setup
export function useLocaleStoreWithOut() {
    return useLocaleStore(store);
}
//# sourceMappingURL=locale.js.map