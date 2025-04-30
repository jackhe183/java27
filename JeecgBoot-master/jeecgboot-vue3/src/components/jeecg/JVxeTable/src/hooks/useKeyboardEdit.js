import { computed } from 'vue';
/**
 * JVxeTable 键盘操作
 *
 * @param props
 */
export function useKeyboardEdit(props) {
    // 是否开启了键盘操作
    const enabledKeyboard = computed(() => props.keyboardEdit ?? false);
    // 重写 keyboardConfig
    const keyboardConfig = {
        editMethod({ row, column, $table }) {
            // 重写默认的覆盖式，改为追加式
            $table.setActiveCell(row, column);
            return true;
        },
    };
    // 键盘操作配置
    const keyboardEditConfig = computed(() => {
        return {
            mouseConfig: {
                selected: enabledKeyboard.value,
            },
            keyboardConfig,
        };
    });
    return {
        keyboardEditConfig,
    };
}
//# sourceMappingURL=useKeyboardEdit.js.map