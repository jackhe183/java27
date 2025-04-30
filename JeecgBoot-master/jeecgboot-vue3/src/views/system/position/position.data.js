export const columns = [
    // {
    //   title: '职务编码',
    //   dataIndex: 'code',
    //   width: 200,
    //   align: 'left',
    // },
    {
        title: '职务名称',
        dataIndex: 'name',
        align: 'left'
        // width: 200,
    },
    // {
    //   title: '职务等级',
    //   dataIndex: 'postRank_dictText',
    //   width: 100,
    // },
];
export const searchFormSchema = [
    {
        field: 'name',
        label: '职务名称',
        component: 'Input',
        colProps: { span: 8 },
    },
];
export const formSchema = [
    {
        label: '主键',
        field: 'id',
        component: 'Input',
        show: false,
    },
    // {
    //   label: '职级',
    //   field: 'postRank',
    //   component: 'JDictSelectTag',
    //   required: true,
    //   componentProps: {
    //     dictCode: 'position_rank',
    //     dropdownStyle: {
    //       maxHeight: '100vh',
    //     },
    //     getPopupContainer: () => document.body,
    //   },
    // },
    {
        field: 'name',
        label: '职务名称',
        component: 'Input',
        required: true,
    },
    // {
    //   field: 'code',
    //   label: '职务编码',
    //   component: 'Input',
    //   required: true,
    //   dynamicDisabled: ({ values }) => {
    //     return !!values.id;
    //   },
    //   dynamicRules: ({ model, schema }) => {
    //     return rules.duplicateCheckRule('sys_position', 'code', model, schema, true);
    //   },
    // },
];
//# sourceMappingURL=position.data.js.map