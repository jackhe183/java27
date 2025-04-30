package com.example.springbootdemo.service.impl;

import com.example.springbootdemo.entity.StudentInfo;
import com.example.springbootdemo.dao.StudentInfoDao;
import com.example.springbootdemo.service.StudentInfoService;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import javax.annotation.Resource;

/**
 * (StudentInfo)表服务实现类
 *
 * @author makejava
 * @since 2024-12-21 20:26:29
 */
@Service("studentInfoService")
public class StudentInfoServiceImpl implements StudentInfoService {
    @Resource
    private StudentInfoDao studentInfoDao;

    /**
     * 通过ID查询单条数据
     *
     * @param studentId 主键
     * @return 实例对象
     */
    @Override
    public StudentInfo queryById(Integer studentId) {
        return this.studentInfoDao.queryById(studentId);
    }

    /**
     * 分页查询
     *
     * @param studentInfo 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    @Override
    public Page<StudentInfo> queryByPage(StudentInfo studentInfo, PageRequest pageRequest) {
        long total = this.studentInfoDao.count(studentInfo);
        return new PageImpl<>(this.studentInfoDao.queryAllByLimit(studentInfo, pageRequest), pageRequest, total);
    }

    /**
     * 新增数据
     *
     * @param studentInfo 实例对象
     * @return 实例对象
     */
    @Override
    public StudentInfo insert(StudentInfo studentInfo) {
        this.studentInfoDao.insert(studentInfo);
        return studentInfo;
    }

    /**
     * 修改数据
     *
     * @param studentInfo 实例对象
     * @return 实例对象
     */
    @Override
    public StudentInfo update(StudentInfo studentInfo) {
        this.studentInfoDao.update(studentInfo);
        return this.queryById(studentInfo.getStudentId());
    }

    /**
     * 通过主键删除数据
     *
     * @param studentId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer studentId) {
        return this.studentInfoDao.deleteById(studentId) > 0;
    }
}
