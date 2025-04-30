package com.egzosn.pay.demo.service.handler;

import java.util.Map;

import com.egzosn.pay.common.bean.PayMessage;
import com.egzosn.pay.common.bean.PayOutMessage;
import com.egzosn.pay.common.exception.PayErrorException;
import com.egzosn.pay.paypal.api.PayPalPayService;

/**
 * PayPal支付回调处理器
 * Created by ZaoSheng on 2016/6/1.
 */

public class PayPalPayMessageHandler extends BasePayMessageHandler<PayMessage, PayPalPayService> {


    public PayPalPayMessageHandler(Integer payId) {
        super(payId);
    }

    @Override
    public PayOutMessage handle(PayMessage payMessage, Map<String, Object> context, PayPalPayService payService) throws PayErrorException {


        return payService.getPayOutMessage("fail", "失败");
    }
}
