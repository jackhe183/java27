package com.example.springbootbycursor.exception;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException {
    private final String message;
    private final int code;

    public BusinessException(String message) {
        this(message, 500);
    }

    public BusinessException(String message, int code) {
        super(message);
        this.message = message;
        this.code = code;
    }
} 