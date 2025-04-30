/** 组件类型 */
export var JVxeTypes;
(function (JVxeTypes) {
    // 行号列
    JVxeTypes["rowNumber"] = "row-number";
    // 选择列
    JVxeTypes["rowCheckbox"] = "row-checkbox";
    // 单选列
    JVxeTypes["rowRadio"] = "row-radio";
    // 展开列
    JVxeTypes["rowExpand"] = "row-expand";
    // 上下排序
    JVxeTypes["rowDragSort"] = "row-drag-sort";
    JVxeTypes["input"] = "input";
    JVxeTypes["inputNumber"] = "input-number";
    JVxeTypes["textarea"] = "textarea";
    JVxeTypes["select"] = "select";
    JVxeTypes["date"] = "date";
    JVxeTypes["datetime"] = "datetime";
    JVxeTypes["time"] = "time";
    JVxeTypes["checkbox"] = "checkbox";
    JVxeTypes["upload"] = "upload";
    // 下拉搜索
    JVxeTypes["selectSearch"] = "select-search";
    // 下拉多选
    JVxeTypes["selectMultiple"] = "select-multiple";
    // 进度条
    JVxeTypes["progress"] = "progress";
    //部门选择
    JVxeTypes["departSelect"] = "depart-select";
    //用户选择
    JVxeTypes["userSelect"] = "user-select";
    // 拖轮Tags（暂无用）
    JVxeTypes["tags"] = "tags";
    JVxeTypes["slot"] = "slot";
    JVxeTypes["normal"] = "normal";
    JVxeTypes["hidden"] = "hidden";
    // 以下为自定义组件
    JVxeTypes["popup"] = "popup";
    JVxeTypes["selectDictSearch"] = "selectDictSearch";
    JVxeTypes["radio"] = "radio";
    JVxeTypes["image"] = "image";
    JVxeTypes["file"] = "file";
    // 省市区
    JVxeTypes["pca"] = "pca";
})(JVxeTypes || (JVxeTypes = {}));
// 为了防止和 vxe 内置的类型冲突，所以加上一个前缀
// 前缀是自动加的，代码中直接用就行（JVxeTypes.input）
export const JVxeTypePrefix = 'j-';
/** VxeTable 渲染类型 */
export var JVxeRenderType;
(function (JVxeRenderType) {
    JVxeRenderType["editer"] = "editer";
    JVxeRenderType["spaner"] = "spaner";
    JVxeRenderType["default"] = "default";
})(JVxeRenderType || (JVxeRenderType = {}));
//# sourceMappingURL=JVxeTypes.js.map