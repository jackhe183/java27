package com.example.springbootdemo.dao;

import com.example.springbootdemo.entity.StudentInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Pageable;
import java.util.List;

/**
 * (StudentInfo)表数据库访问层
 *
 * @author makejava
 * @since 2024-12-21 20:26:29
 */
public interface StudentInfoDao {

    /**
     * 通过ID查询单条数据
     *
     * @param studentId 主键
     * @return 实例对象
     */
    StudentInfo queryById(Integer studentId);

    /**
     * 查询指定行数据
     *
     * @param studentInfo 查询条件
     * @param pageable         分页对象
     * @return 对象列表
     */
    List<StudentInfo> queryAllByLimit(StudentInfo studentInfo, @Param("pageable") Pageable pageable);

    /**
     * 统计总行数
     *
     * @param studentInfo 查询条件
     * @return 总行数
     */
    long count(StudentInfo studentInfo);

    /**
     * 新增数据
     *
     * @param studentInfo 实例对象
     * @return 影响行数
     */
    int insert(StudentInfo studentInfo);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<StudentInfo> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<StudentInfo> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<StudentInfo> 实例对象列表
     * @return 影响行数
     * @throws org.springframework.jdbc.BadSqlGrammarException 入参是空List的时候会抛SQL语句错误的异常，请自行校验入参
     */
    int insertOrUpdateBatch(@Param("entities") List<StudentInfo> entities);

    /**
     * 修改数据
     *
     * @param studentInfo 实例对象
     * @return 影响行数
     */
    int update(StudentInfo studentInfo);

    /**
     * 通过主键删除数据
     *
     * @param studentId 主键
     * @return 影响行数
     */
    int deleteById(Integer studentId);

}

