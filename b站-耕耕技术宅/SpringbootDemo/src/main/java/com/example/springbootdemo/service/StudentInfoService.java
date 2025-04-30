package com.example.springbootdemo.service;

import com.example.springbootdemo.entity.StudentInfo;
import com.example.springbootdemo.mapper.StudentInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Service 处理业务逻辑的
@Service
public class StudentInfoService {
    @Autowired
    private StudentInfoMapper studentInfoMapper;

    public List<StudentInfo> SearchAll(){
        return studentInfoMapper.findStudentById();
    }
}
