import { createLocalStorage, createSessionStorage } from '/@/utils/cache';
import { Memory } from './memory';
import { TOKEN_KEY, USER_INFO_KEY, ROLES_KEY, LOCK_INFO_KEY, PROJ_CFG_KEY, APP_LOCAL_CACHE_KEY, APP_SESSION_CACHE_KEY, MULTIPLE_TABS_KEY, DB_DICT_DATA_KEY, TENANT_ID, LOGIN_INFO_KEY, OAUTH2_THIRD_LOGIN_TENANT_ID, } from '/@/enums/cacheEnum';
import { DEFAULT_CACHE_TIME } from '/@/settings/encryptionSetting';
import { toRaw } from 'vue';
import { pick, omit } from 'lodash-es';
import { PageEnum } from '/@/enums/pageEnum';
import { router } from '/@/router';
const ls = createLocalStorage();
const ss = createSessionStorage();
const localMemory = new Memory(DEFAULT_CACHE_TIME);
const sessionMemory = new Memory(DEFAULT_CACHE_TIME);
function initPersistentMemory() {
    const localCache = ls.get(APP_LOCAL_CACHE_KEY);
    const sessionCache = ss.get(APP_SESSION_CACHE_KEY);
    localCache && localMemory.resetCache(localCache);
    sessionCache && sessionMemory.resetCache(sessionCache);
}
export class Persistent {
    static getLocal(key) {
        //update-begin---author:scott ---date:2022-10-27  for：token过期退出重新登录，online菜单还是提示token过期----------
        const globalCache = ls.get(APP_LOCAL_CACHE_KEY);
        // update-begin--author:liaozhiyang---date:20240920---for：【issues/7250】自动锁屏无法解锁
        if (globalCache && router?.currentRoute?.value.path !== PageEnum.BASE_LOGIN) {
            localMemory.setCache(globalCache);
        }
        // update-end--author:liaozhiyang---date:20240920---for：【issues/7250】自动锁屏无法解锁
        //update-end---author:scott ---date::2022-10-27  for：token过期退出重新登录，online菜单还是提示token过期----------
        return localMemory.get(key)?.value;
    }
    static setLocal(key, value, immediate = false) {
        localMemory.set(key, toRaw(value));
        immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
    }
    static removeLocal(key, immediate = false) {
        localMemory.remove(key);
        immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
    }
    static clearLocal(immediate = false) {
        localMemory.clear();
        immediate && ls.clear();
    }
    static getSession(key) {
        return sessionMemory.get(key)?.value;
    }
    static setSession(key, value, immediate = false) {
        sessionMemory.set(key, toRaw(value));
        immediate && ss.set(APP_SESSION_CACHE_KEY, sessionMemory.getCache);
    }
    static removeSession(key, immediate = false) {
        sessionMemory.remove(key);
        immediate && ss.set(APP_SESSION_CACHE_KEY, sessionMemory.getCache);
    }
    static clearSession(immediate = false) {
        sessionMemory.clear();
        immediate && ss.clear();
    }
    static clearAll(immediate = false) {
        sessionMemory.clear();
        localMemory.clear();
        if (immediate) {
            ls.clear();
            ss.clear();
        }
    }
}
window.addEventListener('beforeunload', function () {
    // TOKEN_KEY 在登录或注销时已经写入到storage了，此处为了解决同时打开多个窗口时token不同步的问题
    // LOCK_INFO_KEY 在锁屏和解锁时写入，此处也不应修改
    ls.set(APP_LOCAL_CACHE_KEY, {
        ...omit(localMemory.getCache, LOCK_INFO_KEY),
        ...pick(ls.get(APP_LOCAL_CACHE_KEY), [TOKEN_KEY, USER_INFO_KEY, LOCK_INFO_KEY]),
    });
    ss.set(APP_SESSION_CACHE_KEY, {
        ...omit(sessionMemory.getCache, LOCK_INFO_KEY),
        ...pick(ss.get(APP_SESSION_CACHE_KEY), [TOKEN_KEY, USER_INFO_KEY, LOCK_INFO_KEY]),
    });
});
function storageChange(e) {
    const { key, newValue, oldValue } = e;
    if (!key) {
        Persistent.clearAll();
        return;
    }
    if (!!newValue && !!oldValue) {
        if (APP_LOCAL_CACHE_KEY === key) {
            Persistent.clearLocal();
        }
        if (APP_SESSION_CACHE_KEY === key) {
            Persistent.clearSession();
        }
    }
}
window.addEventListener('storage', storageChange);
initPersistentMemory();
//# sourceMappingURL=persistent.js.map