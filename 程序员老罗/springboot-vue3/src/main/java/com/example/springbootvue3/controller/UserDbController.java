package com.example.springbootvue3.controller;

import com.example.springbootvue3.entity.UserDb;
import com.example.springbootvue3.service.UserDbService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * (UserDb)表控制层
 *
 * @author makejava
 * @since 2024-12-21 15:53:53
 */
@RestController
@RequestMapping("userDb")
public class UserDbController {
    /**
     * 服务对象
     */
    @Resource
    private UserDbService userDbService;

    /**
     * 分页查询
     *
     * @param userDb 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    @GetMapping
    public ResponseEntity<Page<UserDb>> queryByPage(UserDb userDb, PageRequest pageRequest) {
        return ResponseEntity.ok(this.userDbService.queryByPage(userDb, pageRequest));
    }

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("{id}")
    public ResponseEntity<UserDb> queryById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.userDbService.queryById(id));
    }

    /**
     * 新增数据
     *
     * @param userDb 实体
     * @return 新增结果
     */
    @PostMapping
    public ResponseEntity<UserDb> add(UserDb userDb) {
        return ResponseEntity.ok(this.userDbService.insert(userDb));
    }

    /**
     * 编辑数据
     *
     * @param userDb 实体
     * @return 编辑结果
     */
    @PutMapping
    public ResponseEntity<UserDb> edit(UserDb userDb) {
        return ResponseEntity.ok(this.userDbService.update(userDb));
    }

    /**
     * 删除数据
     *
     * @param id 主键
     * @return 删除是否成功
     */
    @DeleteMapping
    public ResponseEntity<Boolean> deleteById(Integer id) {
        return ResponseEntity.ok(this.userDbService.deleteById(id));
    }

}

