import { defHttp } from '/@/utils/http/axios';
var Api;
(function (Api) {
    Api["list"] = "/sys/oss/file/list";
    Api["deleteFile"] = "/sys/oss/file/delete";
    Api["ossUpload"] = "/sys/oss/file/upload";
    Api["minioUpload"] = "/sys/upload/uploadMinio";
})(Api || (Api = {}));
/**
 * oss上传
 * @param params
 */
export const getOssUrl = Api.ossUpload;
/**
 * minio上传
 * @param params
 */
export const getMinioUrl = Api.minioUpload;
/**
 * 列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
/**
 * 删除用户
 */
export const deleteFile = (params, handleSuccess) => {
    return defHttp.delete({ url: Api.deleteFile, params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
    });
};
//# sourceMappingURL=ossfile.api.js.map