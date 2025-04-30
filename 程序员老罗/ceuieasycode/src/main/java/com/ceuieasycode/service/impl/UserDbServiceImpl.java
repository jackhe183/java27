package com.ceuieasycode.service.impl;

import com.ceuieasycode.entity.UserDb;
import com.ceuieasycode.dao.UserDbDao;
import com.ceuieasycode.service.UserDbService;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import javax.annotation.Resource;

/**
 * (UserDb)表服务实现类
 *
 * @author makejava
 * @since 2024-12-21 19:15:55
 */
@Service("userDbService")
public class UserDbServiceImpl implements UserDbService {
    @Resource
    private UserDbDao userDbDao;

    /**
     * 通过ID查询单条数据
     *
     * @param userId 主键
     * @return 实例对象
     */
    @Override
    public UserDb queryById(Integer userId) {
        return this.userDbDao.queryById(userId);
    }

    /**
     * 分页查询
     *
     * @param userDb 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    @Override
    public Page<UserDb> queryByPage(UserDb userDb, PageRequest pageRequest) {
        long total = this.userDbDao.count(userDb);
        return new PageImpl<>(this.userDbDao.queryAllByLimit(userDb, pageRequest), pageRequest, total);
    }

    /**
     * 新增数据
     *
     * @param userDb 实例对象
     * @return 实例对象
     */
    @Override
    public UserDb insert(UserDb userDb) {
        this.userDbDao.insert(userDb);
        return userDb;
    }

    /**
     * 修改数据
     *
     * @param userDb 实例对象
     * @return 实例对象
     */
    @Override
    public UserDb update(UserDb userDb) {
        this.userDbDao.update(userDb);
        return this.queryById(userDb.getUserId());
    }

    /**
     * 通过主键删除数据
     *
     * @param userId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer userId) {
        return this.userDbDao.deleteById(userId) > 0;
    }
}
