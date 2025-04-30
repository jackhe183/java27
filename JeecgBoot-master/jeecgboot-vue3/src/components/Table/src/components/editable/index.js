import { h, toRaw } from 'vue';
import EditableCell from './EditableCell.vue';
import { isArray } from '/@/utils/is';
export function renderEditCell(column) {
    return ({ text: value, record, index }) => {
        toRaw(record).onValid = async () => {
            if (isArray(record?.validCbs)) {
                // update-begin--author:liaozhiyang---date:20240424---for：【issues/1165】解决canResize为true时第一行校验不过
                const validFns = (record?.validCbs || []).map((item) => {
                    const [fn] = Object.values(item);
                    // @ts-ignore
                    return fn();
                });
                // update-end--author:liaozhiyang---date:20240424---for：【issues/1165】解决canResize为true时第一行校验不过
                const res = await Promise.all(validFns);
                return res.every((item) => !!item);
            }
            else {
                return false;
            }
        };
        toRaw(record).onEdit = async (edit, submit = false) => {
            if (!submit) {
                record.editable = edit;
            }
            if (!edit && submit) {
                if (!(await record.onValid()))
                    return false;
                const res = await record.onSubmitEdit?.();
                if (res) {
                    record.editable = false;
                    return true;
                }
                return false;
            }
            // cancel
            if (!edit && !submit) {
                record.onCancelEdit?.();
            }
            return true;
        };
        return h(EditableCell, {
            value,
            record,
            column,
            index,
        });
    };
}
//# sourceMappingURL=index.js.map