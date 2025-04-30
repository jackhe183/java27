package com.example.springbootdemo.service;

import com.example.springbootdemo.entity.StudentInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

/**
 * (StudentInfo)表服务接口
 *
 * @author makejava
 * @since 2024-12-21 20:26:29
 */
public interface StudentInfoService {

    /**
     * 通过ID查询单条数据
     *
     * @param studentId 主键
     * @return 实例对象
     */
    StudentInfo queryById(Integer studentId);

    /**
     * 分页查询
     *
     * @param studentInfo 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    Page<StudentInfo> queryByPage(StudentInfo studentInfo, PageRequest pageRequest);

    /**
     * 新增数据
     *
     * @param studentInfo 实例对象
     * @return 实例对象
     */
    StudentInfo insert(StudentInfo studentInfo);

    /**
     * 修改数据
     *
     * @param studentInfo 实例对象
     * @return 实例对象
     */
    StudentInfo update(StudentInfo studentInfo);

    /**
     * 通过主键删除数据
     *
     * @param studentId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer studentId);

}
