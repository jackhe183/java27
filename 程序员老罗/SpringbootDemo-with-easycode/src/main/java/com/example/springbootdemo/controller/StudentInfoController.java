package com.example.springbootdemo.controller;

import com.example.springbootdemo.entity.StudentInfo;
import com.example.springbootdemo.service.StudentInfoService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * (StudentInfo)表控制层
 *
 * @author makejava
 * @since 2024-12-21 20:26:29
 */
@RestController
@RequestMapping("studentInfo")
public class StudentInfoController {
    /**
     * 服务对象
     */
    @Resource
    private StudentInfoService studentInfoService;

    /**
     * 分页查询
     *
     * @param studentInfo 筛选条件
     * @param pageRequest      分页对象
     * @return 查询结果
     */
    @GetMapping
    public ResponseEntity<Page<StudentInfo>> queryByPage(StudentInfo studentInfo, PageRequest pageRequest) {
        return ResponseEntity.ok(this.studentInfoService.queryByPage(studentInfo, pageRequest));
    }

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("{id}")
    public ResponseEntity<StudentInfo> queryById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(this.studentInfoService.queryById(id));
    }

    /**
     * 新增数据
     *
     * @param studentInfo 实体
     * @return 新增结果
     */
    @PostMapping
    public ResponseEntity<StudentInfo> add(StudentInfo studentInfo) {
        return ResponseEntity.ok(this.studentInfoService.insert(studentInfo));
    }

    /**
     * 编辑数据
     *
     * @param studentInfo 实体
     * @return 编辑结果
     */
    @PutMapping
    public ResponseEntity<StudentInfo> edit(StudentInfo studentInfo) {
        return ResponseEntity.ok(this.studentInfoService.update(studentInfo));
    }

    /**
     * 删除数据
     *
     * @param id 主键
     * @return 删除是否成功
     */
    @DeleteMapping
    public ResponseEntity<Boolean> deleteById(Integer id) {
        return ResponseEntity.ok(this.studentInfoService.deleteById(id));
    }

}

