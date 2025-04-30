import { DEFAULT_FILTER_FN, DEFAULT_SORT_FN, FETCH_SETTING, DEFAULT_SIZE } from './const';
import { propTypes } from '/@/utils/propTypes';
export const basicProps = {
    clickToRowSelect: propTypes.bool.def(true),
    isTreeTable: propTypes.bool.def(false),
    tableSetting: propTypes.shape({}),
    inset: propTypes.bool,
    sortFn: {
        type: Function,
        default: DEFAULT_SORT_FN,
    },
    filterFn: {
        type: Function,
        default: DEFAULT_FILTER_FN,
    },
    showTableSetting: propTypes.bool,
    autoCreateKey: propTypes.bool.def(true),
    striped: propTypes.bool.def(false),
    showSummary: propTypes.bool,
    summaryFunc: {
        type: [Function, Array],
        default: null,
    },
    summaryData: {
        type: Array,
        default: null,
    },
    indentSize: propTypes.number.def(24),
    canColDrag: propTypes.bool.def(true),
    api: {
        type: Function,
        default: null,
    },
    beforeFetch: {
        type: Function,
        default: null,
    },
    afterFetch: {
        type: Function,
        default: null,
    },
    handleSearchInfoFn: {
        type: Function,
        default: null,
    },
    fetchSetting: {
        type: Object,
        default: () => {
            return FETCH_SETTING;
        },
    },
    // 立即请求接口
    immediate: propTypes.bool.def(true),
    emptyDataIsShowTable: propTypes.bool.def(true),
    // 额外的请求参数
    searchInfo: {
        type: Object,
        default: null,
    },
    // 默认的排序参数
    defSort: {
        type: Object,
        default: null,
    },
    // 使用搜索表单
    useSearchForm: propTypes.bool,
    // 表单配置
    formConfig: {
        type: Object,
        default: null,
    },
    columns: {
        type: [Array],
        default: () => [],
    },
    showIndexColumn: propTypes.bool.def(true),
    indexColumnProps: {
        type: Object,
        default: null,
    },
    showActionColumn: {
        type: Boolean,
        default: true,
    },
    actionColumn: {
        type: Object,
        default: null,
    },
    ellipsis: propTypes.bool.def(true),
    canResize: propTypes.bool.def(true),
    clearSelectOnPageChange: propTypes.bool,
    resizeHeightOffset: propTypes.number.def(0),
    rowSelection: {
        type: Object,
        default: null,
    },
    title: {
        type: [String, Function],
        default: null,
    },
    titleHelpMessage: {
        type: [String, Array],
    },
    minHeight: propTypes.number,
    maxHeight: propTypes.number,
    // update-begin--author:liaozhiyang---date:202401009---for：【TV360X-116】内嵌风格字段较多时表格错位
    expandColumnWidth: propTypes.number.def(48),
    // update-end--author:liaozhiyang---date:202401009---for：【TV360X-116】内嵌风格字段较多时表格错位
    // 统一设置列最大宽度
    maxColumnWidth: propTypes.number,
    dataSource: {
        type: Array,
        default: null,
    },
    rowKey: {
        type: [String, Function],
        default: '',
    },
    bordered: propTypes.bool,
    pagination: {
        type: [Object, Boolean],
        default: null,
    },
    loading: propTypes.bool,
    rowClassName: {
        type: Function,
    },
    scroll: {
        // update-begin--author:liaozhiyang---date:20240424---for：【issues/1188】BasicTable加上scrollToFirstRowOnChange类型定义
        type: Object,
        // update-end--author:liaozhiyang---date:20240424---for：【issues/1188】BasicTable加上scrollToFirstRowOnChange类型定义
        default: null,
    },
    beforeEditSubmit: {
        type: Function,
    },
    size: {
        type: String,
        default: DEFAULT_SIZE,
    },
    expandedRowKeys: {
        type: Array,
        default: null,
    },
};
//# sourceMappingURL=props.js.map