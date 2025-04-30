import { defineComponent, unref, computed, isVNode } from 'vue';
import { cloneDeep, pick } from 'lodash-es';
import { isFunction } from '/@/utils/is';
import { INDEX_COLUMN_FLAG } from '../const';
import { propTypes } from '/@/utils/propTypes';
import { useTableContext } from '../hooks/useTableContext';
import { TableSummary, TableSummaryRow, TableSummaryCell } from 'ant-design-vue';
const SUMMARY_ROW_KEY = '_row';
const SUMMARY_INDEX_KEY = '_index';
export default defineComponent({
    name: 'BasicTableSummary',
    components: { TableSummary, TableSummaryRow, TableSummaryCell },
    props: {
        summaryFunc: {
            type: Function,
        },
        summaryData: {
            type: Array,
        },
        rowKey: propTypes.string.def('key'),
        // 是否有展开列
        hasExpandedRow: propTypes.bool,
        data: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const table = useTableContext();
        const getDataSource = computed(() => {
            const { summaryFunc, summaryData, data: { pageData }, } = props;
            if (summaryData?.length) {
                summaryData.forEach((item, i) => (item[props.rowKey] = `${i}`));
                return summaryData;
            }
            if (!isFunction(summaryFunc)) {
                return [];
            }
            let dataSource = cloneDeep(unref(pageData));
            dataSource = summaryFunc(dataSource);
            dataSource.forEach((item, i) => {
                item[props.rowKey] = `${i}`;
            });
            return dataSource;
        });
        const getColumns = computed(() => {
            const dataSource = unref(getDataSource);
            let columns = cloneDeep(table.getColumns({ sort: true }));
            columns = columns.filter((item) => !item.defaultHidden);
            const index = columns.findIndex((item) => item.flag === INDEX_COLUMN_FLAG);
            const hasRowSummary = dataSource.some((item) => Reflect.has(item, SUMMARY_ROW_KEY));
            const hasIndexSummary = dataSource.some((item) => Reflect.has(item, SUMMARY_INDEX_KEY));
            // 是否有序号列
            let hasIndexCol = false;
            // 是否有选择列
            const hasSelection = table.getRowSelection() && hasRowSummary;
            if (index !== -1) {
                if (hasIndexSummary) {
                    hasIndexCol = true;
                    columns[index].customSummaryRender = ({ record }) => record[SUMMARY_INDEX_KEY];
                    columns[index].ellipsis = false;
                }
                else {
                    Reflect.deleteProperty(columns[index], 'customSummaryRender');
                }
            }
            if (hasSelection) {
                const isFixed = columns.some((col) => col.fixed === 'left' || col.fixed === true);
                columns.unshift({
                    width: 60,
                    title: 'selection',
                    key: 'selectionKey',
                    align: 'center',
                    ...(isFixed ? { fixed: 'left' } : {}),
                    customSummaryRender: ({ record }) => (hasIndexCol ? '' : record[SUMMARY_ROW_KEY]),
                });
            }
            if (props.hasExpandedRow) {
                const isFixed = columns.some((col) => col.fixed === 'left');
                columns.unshift({
                    width: 50,
                    title: 'expandedRow',
                    key: 'expandedRowKey',
                    align: 'center',
                    ...(isFixed ? { fixed: 'left' } : {}),
                    customSummaryRender: () => '',
                });
            }
            return columns;
        });
        function isRenderCell(data) {
            return data && typeof data === 'object' && !Array.isArray(data) && !isVNode(data);
        }
        const getValues = (row, col, index) => {
            const value = row[col.dataIndex];
            let childNode;
            childNode = value;
            if (col.customSummaryRender) {
                const renderData = col.customSummaryRender({
                    text: value,
                    value,
                    record: row,
                    index,
                    column: cloneDeep(col),
                });
                if (isRenderCell(renderData)) {
                    childNode = renderData.children;
                }
                else {
                    childNode = renderData;
                }
                if (typeof childNode === 'object' && !Array.isArray(childNode) && !isVNode(childNode)) {
                    childNode = null;
                }
                if (Array.isArray(childNode) && childNode.length === 1) {
                    childNode = childNode[0];
                }
                return childNode;
            }
            return childNode;
        };
        const getCellProps = (col) => {
            const cellProps = pick(col, ['colSpan', 'rowSpan', 'align']);
            return {
                ...cellProps,
            };
        };
        return () => {
            return (<TableSummary fixed>
          {(unref(getDataSource) || []).map((row) => {
                    return (<TableSummaryRow key={row[props.rowKey]}>
                {unref(getColumns).map((col, index) => {
                            return (<TableSummaryCell {...getCellProps(col)} index={index} key={`${row[props.rowKey]}_${col.dataIndex}_${index}`}>
                      {getValues(row, col, index)}
                    </TableSummaryCell>);
                        })}
              </TableSummaryRow>);
                })}
        </TableSummary>);
        };
    },
});
//# sourceMappingURL=TableSummary.jsx.map