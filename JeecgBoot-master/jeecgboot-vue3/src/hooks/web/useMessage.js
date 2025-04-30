import { Modal, message as Message, notification } from 'ant-design-vue';
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue';
import { useI18n } from './useI18n';
import { isString } from '/@/utils/is';
import { h } from 'vue';
function getIcon(iconType) {
    try {
        if (iconType === 'warning') {
            return h(InfoCircleFilled, { "class": "modal-icon-warning" });
        }
        else if (iconType === 'success') {
            return h(CheckCircleFilled, { "class": "modal-icon-success" });
        }
        else if (iconType === 'info') {
            return h(InfoCircleFilled, { "class": "modal-icon-info" });
        }
        else {
            return h(CloseCircleFilled, { "class": "modal-icon-error" });
        }
    }
    catch (e) {
        console.log(e);
    }
}
function renderContent({ content }) {
    try {
        if (isString(content)) {
            return h('div', h('div', { 'innerHTML': content }));
        }
        else {
            return content;
        }
    }
    catch (e) {
        console.log(e);
        return content;
    }
}
/**
 * @description: Create confirmation box
 */
function createConfirm(options) {
    const iconType = options.iconType || 'warning';
    Reflect.deleteProperty(options, 'iconType');
    const opt = {
        centered: true,
        icon: getIcon(iconType),
        ...options,
        content: renderContent(options),
    };
    return Modal.confirm(opt);
}
const getBaseOptions = () => {
    const { t } = useI18n();
    return {
        okText: t('common.okText'),
        centered: true,
    };
};
function createModalOptions(options, icon) {
    //update-begin-author:taoyan date:2023-1-10 for: 可以自定义图标 
    let titleIcon = '';
    if (options.icon) {
        titleIcon = options.icon;
    }
    else {
        titleIcon = getIcon(icon);
    }
    //update-end-author:taoyan date:2023-1-10 for: 可以自定义图标 
    return {
        ...getBaseOptions(),
        ...options,
        content: renderContent(options),
        icon: titleIcon
    };
}
function createSuccessModal(options) {
    return Modal.success(createModalOptions(options, 'success'));
}
function createErrorModal(options) {
    return Modal.error(createModalOptions(options, 'close'));
}
function createInfoModal(options) {
    return Modal.info(createModalOptions(options, 'info'));
}
function createWarningModal(options) {
    return Modal.warning(createModalOptions(options, 'warning'));
}
// 提示框，无需传入iconType，默认为warning
function createConfirmSync(options) {
    return new Promise((resolve) => {
        createConfirm({
            iconType: 'warning',
            ...options,
            onOk: () => resolve(true),
            onCancel: () => resolve(false),
        });
    });
}
notification.config({
    placement: 'topRight',
    duration: 3,
});
/**
 * @description: message
 */
export function useMessage() {
    return {
        createMessage: Message,
        notification: notification,
        createConfirm: createConfirm,
        createConfirmSync,
        createSuccessModal,
        createErrorModal,
        createInfoModal,
        createWarningModal,
    };
}
//# sourceMappingURL=useMessage.js.map