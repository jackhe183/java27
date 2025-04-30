import { nextTick, onMounted, onActivated } from 'vue';
export function onMountedOrActivated(hook) {
    let mounted;
    onMounted(() => {
        hook({ type: 'mounted' });
        nextTick(() => {
            mounted = true;
        });
    });
    onActivated(() => {
        if (mounted) {
            hook({ type: 'activated' });
        }
    });
}
//# sourceMappingURL=onMountedOrActivated.js.map