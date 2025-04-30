package com.example.springbootdemo.mapper;

import com.example.springbootdemo.entity.StudentInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

//Mapper就是跟数据库匹配，比如INSERT、SELECT
@Mapper
public interface StudentInfoMapper {
    List<StudentInfo> findStudentById();
}
