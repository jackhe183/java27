package com.example.springbootdemo.entity;

import java.io.Serializable;

/**
 * (StudentInfo)实体类
 *
 * @author makejava
 * @since 2024-12-21 20:26:29
 */
public class StudentInfo implements Serializable {
    private static final long serialVersionUID = 549191606008916322L;
    /**
     * 学生的学号
     */
    private Integer studentId;
    /**
     * 学生的姓名
     */
    private String studentName;
    /**
     * 学生的性别
     */
    private String studentGender;
    /**
     * 学生的出生日期
     */
    private String studentBirthday;


    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentGender() {
        return studentGender;
    }

    public void setStudentGender(String studentGender) {
        this.studentGender = studentGender;
    }

    public String getStudentBirthday() {
        return studentBirthday;
    }

    public void setStudentBirthday(String studentBirthday) {
        this.studentBirthday = studentBirthday;
    }

}

