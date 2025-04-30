import { nextTick, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
export function useDataSource(props, data, methods, refs) {
    watch(() => props.dataSource, async () => {
        data.disabledRowIds = [];
        data.vxeDataSource.value = cloneDeep(props.dataSource);
        data.vxeDataSource.value.forEach((row, rowIndex) => {
            // 判断是否是禁用行
            if (methods.isDisabledRow(row, rowIndex)) {
                data.disabledRowIds.push(row.id);
            }
            // 处理联动回显数据
            methods.handleLinkageBackData(row);
        });
        await waitRef(refs.gridRef);
        methods.recalcSortNumber();
    }, { immediate: true });
}
function waitRef($ref) {
    return new Promise((resolve) => {
        (function next() {
            if ($ref.value) {
                resolve($ref);
            }
            else {
                nextTick(() => next());
            }
        })();
    });
}
//# sourceMappingURL=useDataSource.js.map