import { ref } from 'vue';
import { ScreenSizeEnum } from '/@/enums/sizeEnum';
import { useWindowSizeFn } from '/@/hooks/event/useWindowSizeFn';
export function useAdapt(props) {
    //默认宽度
    const width = ref(props?.def || '600px');
    //获取宽度
    useWindowSizeFn(calcWidth, 100, { immediate: true });
    //计算宽度
    function calcWidth() {
        let windowWidth = document.documentElement.clientWidth;
        switch (true) {
            case windowWidth > ScreenSizeEnum.XL:
                width.value = props?.xl || '600px';
                break;
            case windowWidth > ScreenSizeEnum.LG:
                width.value = props?.lg || '600px';
                break;
            case windowWidth > ScreenSizeEnum.MD:
                width.value = props?.md || '600px';
                break;
            case windowWidth > ScreenSizeEnum.SM:
                width.value = props?.sm || '500px';
                break;
            case windowWidth > ScreenSizeEnum.XS:
                width.value = props?.xs || '400px';
                break;
            default:
                width.value = props?.mindef || '300px';
                break;
        }
    }
    return { width, calcWidth };
}
//# sourceMappingURL=useAutoAdapt.js.map