import { useRouter } from 'vue-router';
import { unref } from 'vue';
import { useMultipleTabStore } from '/@/store/modules/multipleTab';
import { useAppStore } from '/@/store/modules/app';
var TableActionEnum;
(function (TableActionEnum) {
    TableActionEnum[TableActionEnum["REFRESH"] = 0] = "REFRESH";
    TableActionEnum[TableActionEnum["CLOSE_ALL"] = 1] = "CLOSE_ALL";
    TableActionEnum[TableActionEnum["CLOSE_LEFT"] = 2] = "CLOSE_LEFT";
    TableActionEnum[TableActionEnum["CLOSE_RIGHT"] = 3] = "CLOSE_RIGHT";
    TableActionEnum[TableActionEnum["CLOSE_OTHER"] = 4] = "CLOSE_OTHER";
    TableActionEnum[TableActionEnum["CLOSE_CURRENT"] = 5] = "CLOSE_CURRENT";
    TableActionEnum[TableActionEnum["CLOSE"] = 6] = "CLOSE";
})(TableActionEnum || (TableActionEnum = {}));
export function useTabs(_router) {
    const appStore = useAppStore();
    function canIUseTabs() {
        const { show } = appStore.getMultiTabsSetting;
        if (!show) {
            throw new Error('The multi-tab page is currently not open, please open it in the settings！');
        }
        return !!show;
    }
    const tabStore = useMultipleTabStore();
    const router = _router || useRouter();
    const { currentRoute } = router;
    function getCurrentTab() {
        const route = unref(currentRoute);
        return tabStore.getTabList.find((item) => item.path === route.path);
    }
    async function updateTabTitle(title, tab) {
        const canIUse = canIUseTabs;
        if (!canIUse) {
            return;
        }
        const targetTab = tab || getCurrentTab();
        await tabStore.setTabTitle(title, targetTab);
    }
    async function updateTabPath(path, tab) {
        const canIUse = canIUseTabs;
        if (!canIUse) {
            return;
        }
        const targetTab = tab || getCurrentTab();
        await tabStore.updateTabPath(path, targetTab);
    }
    async function handleTabAction(action, tab) {
        const canIUse = canIUseTabs;
        if (!canIUse) {
            return;
        }
        const currentTab = getCurrentTab();
        switch (action) {
            case TableActionEnum.REFRESH:
                await tabStore.refreshPage(router);
                break;
            case TableActionEnum.CLOSE_ALL:
                await tabStore.closeAllTab(router);
                break;
            case TableActionEnum.CLOSE_LEFT:
                // update-begin--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
                await tabStore.closeLeftTabs(tab || currentTab, router);
                // update-end--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
                break;
            case TableActionEnum.CLOSE_RIGHT:
                // update-begin--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
                await tabStore.closeRightTabs(tab || currentTab, router);
                // update-end--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
                break;
            case TableActionEnum.CLOSE_OTHER:
                // update-begin--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
                await tabStore.closeOtherTabs(tab || currentTab, router);
                // update-end--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
                break;
            case TableActionEnum.CLOSE_CURRENT:
            case TableActionEnum.CLOSE:
                await tabStore.closeTab(tab || currentTab, router);
                break;
        }
    }
    /**
     * 关闭相同的路由
     * @param path
     */
    function closeSameRoute(path) {
        if (path.indexOf('?') > 0) {
            path = path.split('?')[0];
        }
        let tab = tabStore.getTabList.find((item) => item.path.indexOf(path) >= 0);
        if (tab) {
            tabStore.closeTab(tab, router);
        }
    }
    return {
        refreshPage: () => handleTabAction(TableActionEnum.REFRESH),
        // update-begin--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
        closeAll: (tab) => handleTabAction(TableActionEnum.CLOSE_ALL, tab),
        closeLeft: (tab) => handleTabAction(TableActionEnum.CLOSE_LEFT, tab),
        closeRight: (tab) => handleTabAction(TableActionEnum.CLOSE_RIGHT, tab),
        closeOther: (tab) => handleTabAction(TableActionEnum.CLOSE_OTHER, tab),
        // update-end--author:liaozhiyang---date:20240605---for：【TV360X-732】非当前页右键关闭左侧、关闭右侧、关闭其它功能正常使用
        closeCurrent: () => handleTabAction(TableActionEnum.CLOSE_CURRENT),
        close: (tab) => handleTabAction(TableActionEnum.CLOSE, tab),
        setTitle: (title, tab) => updateTabTitle(title, tab),
        updatePath: (fullPath, tab) => updateTabPath(fullPath, tab),
        closeSameRoute
    };
}
//# sourceMappingURL=useTabs.js.map