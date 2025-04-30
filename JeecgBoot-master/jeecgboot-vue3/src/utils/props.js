// copy from element-plus
import { warn } from 'vue';
import { isObject } from '@vue/shared';
import { fromPairs } from 'lodash-es';
const wrapperKey = Symbol();
export const propKey = Symbol();
/**
 * @description Build prop. It can better optimize prop types
 * @description 生成 prop，能更好地优化类型
 * @example
  // limited options
  // the type will be PropType<'light' | 'dark'>
  buildProp({
    type: String,
    values: ['light', 'dark'],
  } as const)
  * @example
  // limited options and other types
  // the type will be PropType<'small' | 'medium' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'medium'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/element-plus/element-plus/pull/3341
 */
export function buildProp(option, key) {
    // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
    if (!isObject(option) || !!option[propKey])
        return option;
    const { values, required, default: defaultValue, type, validator } = option;
    const _validator = values || validator
        ? (val) => {
            let valid = false;
            let allowedValues = [];
            if (values) {
                allowedValues = [...values, defaultValue];
                valid ||= allowedValues.includes(val);
            }
            if (validator)
                valid ||= validator(val);
            if (!valid && allowedValues.length > 0) {
                const allowValuesText = [...new Set(allowedValues)]
                    .map((value) => JSON.stringify(value))
                    .join(', ');
                warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
            }
            return valid;
        }
        : undefined;
    return {
        type: typeof type === 'object' && Object.getOwnPropertySymbols(type).includes(wrapperKey)
            ? type[wrapperKey]
            : type,
        required: !!required,
        default: defaultValue,
        validator: _validator,
        [propKey]: true,
    };
}
export const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
export const definePropType = (val) => ({ [wrapperKey]: val });
export const keyOf = (arr) => Object.keys(arr);
export const mutable = (val) => val;
export const componentSize = ['large', 'medium', 'small', 'mini'];
//# sourceMappingURL=props.js.map