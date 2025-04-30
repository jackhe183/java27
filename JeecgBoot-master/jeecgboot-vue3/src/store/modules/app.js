import { defineStore } from 'pinia';
import { store } from '/@/store';
import { APP_DARK_MODE_KEY_, PROJ_CFG_KEY } from '/@/enums/cacheEnum';
import { Persistent } from '/@/utils/cache/persistent';
import { darkMode } from '/@/settings/designSetting';
import { resetRouter } from '/@/router';
import { deepMerge } from '/@/utils';
let timeId;
export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        darkMode: undefined,
        pageLoading: false,
        projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
        beforeMiniInfo: {},
        messageHrefParams: {},
        mainAppProps: {},
    }),
    getters: {
        getPageLoading() {
            return this.pageLoading;
        },
        getDarkMode() {
            return this.darkMode || localStorage.getItem(APP_DARK_MODE_KEY_) || darkMode;
        },
        getBeforeMiniInfo() {
            return this.beforeMiniInfo;
        },
        getProjectConfig() {
            return this.projectConfig || {};
        },
        getHeaderSetting() {
            return this.getProjectConfig.headerSetting;
        },
        getMenuSetting() {
            return this.getProjectConfig.menuSetting;
        },
        getTransitionSetting() {
            return this.getProjectConfig.transitionSetting;
        },
        getMultiTabsSetting() {
            return this.getProjectConfig.multiTabsSetting;
        },
        getMessageHrefParams() {
            return this.messageHrefParams;
        },
        getMainAppProps() {
            return this.mainAppProps;
        },
    },
    actions: {
        setPageLoading(loading) {
            this.pageLoading = loading;
        },
        setDarkMode(mode) {
            this.darkMode = mode;
            localStorage.setItem(APP_DARK_MODE_KEY_, mode);
        },
        setBeforeMiniInfo(state) {
            this.beforeMiniInfo = state;
        },
        setProjectConfig(config) {
            this.projectConfig = deepMerge(this.projectConfig || {}, config);
            // update-begin--author:liaozhiyang---date:20240408---for：【QQYUN-8922】设置导航栏模式没存本地，刷新就还原了
            Persistent.setLocal(PROJ_CFG_KEY, this.projectConfig, true);
            // update-end--author:liaozhiyang---date:20240408---for：【QQYUN-8922】设置导航栏模式没存本地，刷新就还原了
        },
        async resetAllState() {
            resetRouter();
            Persistent.clearAll();
        },
        async setPageLoadingAction(loading) {
            if (loading) {
                clearTimeout(timeId);
                // Prevent flicker
                timeId = setTimeout(() => {
                    this.setPageLoading(loading);
                }, 50);
            }
            else {
                this.setPageLoading(loading);
                clearTimeout(timeId);
            }
        },
        setMessageHrefParams(params) {
            this.messageHrefParams = params;
        },
        // 设置主应用参数
        setMainAppProps(args) {
            this.mainAppProps.hideHeader = args.hideHeader ?? false;
            this.mainAppProps.hideSider = args.hideSider ?? false;
            this.mainAppProps.hideMultiTabs = args.hideMultiTabs ?? false;
        },
    },
});
// Need to be used outside the setup
export function useAppStoreWithOut() {
    return useAppStore(store);
}
//# sourceMappingURL=app.js.map