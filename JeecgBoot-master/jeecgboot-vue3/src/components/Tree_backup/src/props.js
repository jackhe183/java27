import { propTypes } from '/@/utils/propTypes';
export const basicProps = {
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
    title: propTypes.string,
    toolbar: propTypes.bool,
    search: propTypes.bool,
    searchValue: propTypes.string,
    checkStrictly: propTypes.bool,
    clickRowToExpand: propTypes.bool.def(true),
    checkable: propTypes.bool.def(false),
    defaultExpandLevel: {
        type: [String, Number],
        default: '',
    },
    // 高亮搜索值，仅高亮具体匹配值（通过title）值为true时使用默认色值，值为#xxx时使用此值替代且高亮开启
    highlight: {
        type: [Boolean, String],
        default: false,
    },
    defaultExpandAll: propTypes.bool.def(false),
    replaceFields: {
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
        default: null,
    },
    rightMenuList: {
        type: Array,
    },
    // 自定义数据过滤判断方法(注: 不是整个过滤方法，而是内置过滤的判断方法，用于增强原本仅能通过title进行过滤的方式)
    filterFn: {
        type: Function,
        default: null,
    },
    // 搜索完成时自动展开结果
    expandOnSearch: propTypes.bool.def(false),
    // 搜索完成自动选中所有结果,当且仅当 checkable===true 时生效
    checkOnSearch: propTypes.bool.def(false),
    // 搜索完成自动select所有结果
    selectedOnSearch: propTypes.bool.def(false),
};
export const treeNodeProps = {
    actionList: {
        type: Array,
        default: () => [],
    },
    replaceFields: {
        type: Object,
    },
    treeData: {
        type: Array,
        default: () => [],
    },
};
//# sourceMappingURL=props.js.map