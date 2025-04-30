export const columns = [
    {
        title: '名称',
        dataIndex: 'testName',
        width: 200,
    },
    {
        title: '值',
        dataIndex: 'testValue',
        width: 180,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        width: 180,
    },
];
export const searchFormSchema = [
    {
        field: 'testName',
        label: '名称',
        component: 'Input',
        colProps: { span: 8 },
    },
];
export const formSchema = [
    {
        field: 'testName',
        label: '名称',
        required: true,
        component: 'Input',
    },
    {
        field: 'testValue',
        label: '值',
        required: true,
        component: 'Input',
    },
    {
        label: ' ',
        field: 'menu',
        slot: 'menu',
        component: 'Input',
    },
];
//# sourceMappingURL=test.data.js.map