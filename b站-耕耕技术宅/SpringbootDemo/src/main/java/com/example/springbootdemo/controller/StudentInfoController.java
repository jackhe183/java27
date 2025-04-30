package com.example.springbootdemo.controller;

import com.example.springbootdemo.entity.StudentInfo;
import com.example.springbootdemo.service.StudentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//Controller就是与前端交互的
@RestController
public class StudentInfoController {

    @Autowired
    private StudentInfoService studentInfoService;

    @RequestMapping("/")
    public String returnOK(){
        return "OK";
    }

    @RequestMapping("/apple")
    public String returnAnApple(){
        return "Apple";
    }

    @RequestMapping("/abcd")
    public List<StudentInfo> getStudentId(){
        //return new StudentInfo(3,"hk","male","2024.1.1");
        return studentInfoService.SearchAll();
    }
    //将List去掉改为单个的对象进行创建，像Animal一样，在网页/abcd可正常获取json数据
    //初步判断是涉及findAll的环节出了问题
}
