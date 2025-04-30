// Interface data format used to return a unified format
export function resultSuccess(result, { message = 'ok' } = {}) {
    return {
        code: 0,
        result,
        message,
        type: 'success',
    };
}
export function resultPageSuccess(pageNo, pageSize, list, { message = 'ok' } = {}) {
    const pageData = pagination(pageNo, pageSize, list);
    return {
        ...resultSuccess({
            records: pageData,
            total: list.length,
        }),
        message,
    };
}
export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
    return {
        code,
        result,
        message,
        type: 'error',
    };
}
export function pagination(pageNo, pageSize, array) {
    const offset = (pageNo - 1) * Number(pageSize);
    const ret = offset + Number(pageSize) >= array.length
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + Number(pageSize));
    return ret;
}
/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }) {
    return headers?.authorization;
}
//TODO 接口父路径（写死不够灵活）
export const baseUrl = '/jeecgboot/mock';
//# sourceMappingURL=_util.js.map