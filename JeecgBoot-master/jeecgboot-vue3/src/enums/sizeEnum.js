export var SizeEnum;
(function (SizeEnum) {
    SizeEnum["DEFAULT"] = "default";
    SizeEnum["SMALL"] = "small";
    SizeEnum["LARGE"] = "large";
})(SizeEnum || (SizeEnum = {}));
export var SizeNumberEnum;
(function (SizeNumberEnum) {
    SizeNumberEnum[SizeNumberEnum["DEFAULT"] = 48] = "DEFAULT";
    SizeNumberEnum[SizeNumberEnum["SMALL"] = 16] = "SMALL";
    SizeNumberEnum[SizeNumberEnum["LARGE"] = 64] = "LARGE";
})(SizeNumberEnum || (SizeNumberEnum = {}));
export var ScreenSizeEnum;
(function (ScreenSizeEnum) {
    ScreenSizeEnum[ScreenSizeEnum["XS"] = 480] = "XS";
    ScreenSizeEnum[ScreenSizeEnum["SM"] = 576] = "SM";
    ScreenSizeEnum[ScreenSizeEnum["MD"] = 768] = "MD";
    ScreenSizeEnum[ScreenSizeEnum["LG"] = 992] = "LG";
    ScreenSizeEnum[ScreenSizeEnum["XL"] = 1200] = "XL";
})(ScreenSizeEnum || (ScreenSizeEnum = {}));
export const sizeMap = (() => {
    const map = new Map();
    map.set(SizeEnum.DEFAULT, SizeNumberEnum.DEFAULT);
    map.set(SizeEnum.SMALL, SizeNumberEnum.SMALL);
    map.set(SizeEnum.LARGE, SizeNumberEnum.LARGE);
    return map;
})();
//# sourceMappingURL=sizeEnum.js.map