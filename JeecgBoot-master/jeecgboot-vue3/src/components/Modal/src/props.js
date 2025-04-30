import { useI18n } from '/@/hooks/web/useI18n';
const { t } = useI18n();
export const modalProps = {
    visible: { type: Boolean },
    scrollTop: { type: Boolean, default: true },
    height: { type: Number },
    minHeight: { type: Number },
    // open drag
    draggable: { type: Boolean, default: true },
    centered: { type: Boolean },
    cancelText: { type: String, default: t('common.cancelText') },
    okText: { type: String, default: t('common.okText') },
    closeFunc: Function,
};
export const basicProps = Object.assign({}, modalProps, {
    defaultFullscreen: { type: Boolean },
    // Can it be full screen
    canFullscreen: { type: Boolean, default: true },
    // After enabling the wrapper, the bottom can be increased in height
    wrapperFooterOffset: { type: Number, default: 0 },
    // Warm reminder message
    helpMessage: [String, Array],
    // Whether to setting wrapper
    useWrapper: { type: Boolean, default: true },
    loading: { type: Boolean },
    loadingTip: { type: String },
    /**
     * @description: Show close button
     */
    showCancelBtn: { type: Boolean, default: true },
    /**
     * @description: Show confirmation button
     */
    showOkBtn: { type: Boolean, default: true },
    wrapperProps: Object,
    afterClose: Function,
    bodyStyle: Object,
    closable: { type: Boolean, default: true },
    closeIcon: Object,
    confirmLoading: { type: Boolean },
    destroyOnClose: { type: Boolean },
    footer: Object,
    getContainer: Function,
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    keyboard: { type: Boolean, default: true },
    maskStyle: Object,
    okType: { type: String, default: 'primary' },
    okButtonProps: Object,
    cancelButtonProps: Object,
    title: { type: String },
    visible: { type: Boolean },
    open: { type: Boolean },
    width: [String, Number],
    wrapClassName: { type: String },
    zIndex: { type: Number },
    maxHeight: { type: Number },
    // 是否开启评论区域
    enableComment: { type: Boolean, default: false },
});
//# sourceMappingURL=props.js.map