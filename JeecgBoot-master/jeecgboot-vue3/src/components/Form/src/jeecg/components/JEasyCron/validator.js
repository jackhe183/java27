import CronParser from 'cron-parser';
const cronRule = {
    validator({}, value) {
        // 没填写就不校验
        if (!value) {
            return Promise.resolve();
        }
        const values = value.split(' ').filter((item) => !!item);
        if (values.length > 7) {
            return Promise.reject('Cron表达式最多7项！');
        }
        // 检查第7项
        let val = value;
        if (values.length === 7) {
            const year = values[6];
            if (year !== '*' && year !== '?') {
                let yearValues = [];
                if (year.indexOf('-') >= 0) {
                    yearValues = year.split('-');
                }
                else if (year.indexOf('/')) {
                    yearValues = year.split('/');
                }
                else {
                    yearValues = [year];
                }
                // 判断是否都是数字
                const checkYear = yearValues.some((item) => isNaN(Number(item)));
                if (checkYear) {
                    return Promise.reject('Cron表达式参数[年]错误：' + year);
                }
            }
            // 取其中的前六项
            val = values.slice(0, 6).join(' ');
        }
        // 6位 没有年
        // 5位没有秒、年
        try {
            const iter = CronParser.parseExpression(val);
            iter.next();
            return Promise.resolve();
        }
        catch (e) {
            return Promise.reject('Cron表达式错误：' + e);
        }
    },
};
export default cronRule.validator;
//# sourceMappingURL=validator.js.map