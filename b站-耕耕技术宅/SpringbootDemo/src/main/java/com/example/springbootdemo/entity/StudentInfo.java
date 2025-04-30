package com.example.springbootdemo.entity;

//entity就是做数据库映射，和数据库保持一致
public class StudentInfo {
    private String studentId;
    private String studentName;
    private String studentGender;
    private String studentBirthday;

    public StudentInfo(String studentId, String studentName, String studentGender, String studentBirthday) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentGender = studentGender;
        this.studentBirthday = studentBirthday;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
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
