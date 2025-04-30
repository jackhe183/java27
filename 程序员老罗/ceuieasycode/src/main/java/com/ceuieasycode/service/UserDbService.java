package com.ceuieasycode.service;

import com.ceuieasycode.entity.UserDb;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

/**
 * (UserDb)表服务接口
 *
 * @author makejava
 * @since 2024-12-21 19:15:55
 */
public interface UserDbService {

    /**
     * 通过ID查询单条数据
     *
     * @param userId 主键
     * @return 实例对象
     */
    UserDb queryById(Integer userId);

    /**
     * 分页查询
     *
     * @param userDb 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    Page<UserDb> queryByPage(UserDb userDb, PageRequest pageRequest);

    /**
     * 新增数据
     *
     * @param userDb 实例对象
     * @return 实例对象
     */
    UserDb insert(UserDb userDb);

    /**
     * 修改数据
     *
     * @param userDb 实例对象
     * @return 实例对象
     */
    UserDb update(UserDb userDb);

    /**
     * 通过主键删除数据
     *
     * @param userId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer userId);

}
