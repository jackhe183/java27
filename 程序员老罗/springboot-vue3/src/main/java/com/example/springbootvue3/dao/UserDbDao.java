package com.example.springbootvue3.dao;

import com.example.springbootvue3.entity.UserDb;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Pageable;
import java.util.List;

/**
 * (UserDb)表数据库访问层
 *
 * @author makejava
 * @since 2024-12-21 15:53:59
 */
public interface UserDbDao {

    /**
     * 通过ID查询单条数据
     *
     * @param userId 主键
     * @return 实例对象
     */
    UserDb queryById(Integer userId);

    /**
     * 查询指定行数据
     *
     * @param userDb 查询条件
     * @param pageable         分页对象
     * @return 对象列表
     */
    List<UserDb> queryAllByLimit(UserDb userDb, @Param("pageable") Pageable pageable);

    /**
     * 统计总行数
     *
     * @param userDb 查询条件
     * @return 总行数
     */
    long count(UserDb userDb);

    /**
     * 新增数据
     *
     * @param userDb 实例对象
     * @return 影响行数
     */
    int insert(UserDb userDb);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<UserDb> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<UserDb> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<UserDb> 实例对象列表
     * @return 影响行数
     * @throws org.springframework.jdbc.BadSqlGrammarException 入参是空List的时候会抛SQL语句错误的异常，请自行校验入参
     */
    int insertOrUpdateBatch(@Param("entities") List<UserDb> entities);

    /**
     * 修改数据
     *
     * @param userDb 实例对象
     * @return 影响行数
     */
    int update(UserDb userDb);

    /**
     * 通过主键删除数据
     *
     * @param userId 主键
     * @return 影响行数
     */
    int deleteById(Integer userId);

}

