import { defineStore } from 'pinia';
import { LOCK_INFO_KEY } from '/@/enums/cacheEnum';
import { Persistent } from '/@/utils/cache/persistent';
export const useLockStore = defineStore({
    id: 'app-lock',
    state: () => ({
        lockInfo: Persistent.getLocal(LOCK_INFO_KEY),
    }),
    getters: {
        getLockInfo() {
            return this.lockInfo;
        },
    },
    actions: {
        setLockInfo(info) {
            this.lockInfo = Object.assign({}, this.lockInfo, info);
            Persistent.setLocal(LOCK_INFO_KEY, this.lockInfo, true);
        },
        resetLockInfo() {
            Persistent.removeLocal(LOCK_INFO_KEY, true);
            this.lockInfo = null;
        },
        // Unlock
        async unLock(password) {
            if (this.lockInfo?.pwd === password) {
                this.resetLockInfo();
                return true;
            }
        },
    },
});
//# sourceMappingURL=lock.js.map