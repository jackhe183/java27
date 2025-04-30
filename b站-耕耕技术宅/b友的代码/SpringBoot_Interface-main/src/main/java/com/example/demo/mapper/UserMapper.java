package com.example.demo.mapper;

import com.example.demo.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author pxy
 * @date 2023/7/30 15:09:11
 * @description
 */
@Mapper
public interface UserMapper {
    List<User> findAll();
}
