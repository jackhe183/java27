package com.example.springbootvue3.entity;

import java.util.Date;
import java.io.Serializable;

/**
 * (UserDb)实体类
 *
 * @author makejava
 * @since 2024-12-21 15:54:01
 */
public class UserDb implements Serializable {
    private static final long serialVersionUID = 808076022180840950L;
    
    private Integer userId;
    
    private String userName;
    
    private String userPhoneNumber;
    
    private String userPassword;
    
    private Date userBirthday;
    
    private Integer userGender;
    
    private Integer userPosition;
    
    private String userRole;
    
    private Date userCreateTime;


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPhoneNumber() {
        return userPhoneNumber;
    }

    public void setUserPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Date getUserBirthday() {
        return userBirthday;
    }

    public void setUserBirthday(Date userBirthday) {
        this.userBirthday = userBirthday;
    }

    public Integer getUserGender() {
        return userGender;
    }

    public void setUserGender(Integer userGender) {
        this.userGender = userGender;
    }

    public Integer getUserPosition() {
        return userPosition;
    }

    public void setUserPosition(Integer userPosition) {
        this.userPosition = userPosition;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public Date getUserCreateTime() {
        return userCreateTime;
    }

    public void setUserCreateTime(Date userCreateTime) {
        this.userCreateTime = userCreateTime;
    }

}

