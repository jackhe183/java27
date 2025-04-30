import { buildProps } from '/@/utils/props';
export var ToolbarEnum;
(function (ToolbarEnum) {
    ToolbarEnum[ToolbarEnum["SELECT_ALL"] = 0] = "SELECT_ALL";
    ToolbarEnum[ToolbarEnum["UN_SELECT_ALL"] = 1] = "UN_SELECT_ALL";
    ToolbarEnum[ToolbarEnum["EXPAND_ALL"] = 2] = "EXPAND_ALL";
    ToolbarEnum[ToolbarEnum["UN_EXPAND_ALL"] = 3] = "UN_EXPAND_ALL";
    ToolbarEnum[ToolbarEnum["CHECK_STRICTLY"] = 4] = "CHECK_STRICTLY";
    ToolbarEnum[ToolbarEnum["CHECK_UN_STRICTLY"] = 5] = "CHECK_UN_STRICTLY";
})(ToolbarEnum || (ToolbarEnum = {}));
export const treeEmits = [
    'update:expandedKeys',
    'update:selectedKeys',
    'update:value',
    'change',
    'check',
    'search',
    'update:searchValue',
];
export const treeProps = buildProps({
    value: {
        type: [Object, Array],
    },
    renderIcon: {
        type: Function,
    },
    helpMessage: {
        type: [String, Array],
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    toolbar: Boolean,
    search: Boolean,
    searchValue: {
        type: String,
        default: '',
    },
    checkStrictly: Boolean,
    clickRowToExpand: {
        type: Boolean,
        default: false,
    },
    checkable: Boolean,
    defaultExpandLevel: {
        type: [String, Number],
        default: '',
    },
    defaultExpandAll: Boolean,
    fieldNames: {
        type: Object,
    },
    treeData: {
        type: Array,
    },
    actionList: {
        type: Array,
        default: () => [],
    },
    expandedKeys: {
        type: Array,
        default: () => [],
    },
    selectedKeys: {
        type: Array,
        default: () => [],
    },
    checkedKeys: {
        type: Array,
        default: () => [],
    },
    beforeRightClick: {
        type: Function,
        default: undefined,
    },
    rightMenuList: {
        type: Array,
    },
    // 自定义数据过滤判断方法(注: 不是整个过滤方法，而是内置过滤的判断方法，用于增强原本仅能通过title进行过滤的方式)
    filterFn: {
        type: Function,
        default: undefined,
    },
    // 高亮搜索值，仅高亮具体匹配值（通过title）值为true时使用默认色值，值为#xxx时使用此值替代且高亮开启
    highlight: {
        type: [Boolean, String],
        default: false,
    },
    // 搜索完成时自动展开结果
    expandOnSearch: Boolean,
    // 搜索完成自动选中所有结果,当且仅当 checkable===true 时生效
    checkOnSearch: Boolean,
    // 搜索完成自动select所有结果
    selectedOnSearch: Boolean,
    loading: {
        type: Boolean,
        default: false,
    },
});
//# sourceMappingURL=tree.js.map