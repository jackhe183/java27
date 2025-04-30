package org.example.learnmybatis;

import org.example.learnmybatis.entity.User;
import org.example.learnmybatis.mapper.UserMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.List;

@SpringBootTest
public class UserMapperTest {
    @Resource
    private UserMapper userMapper;

    @Test
    public void test(){
        User user2 = new User();
        user2.setAge(18);
        user2.setEmail("test@test.com");
        user2.setName("test");

        userMapper.insert(user2);
        List<User> user = userMapper.selectList(null);

        User the2user = userMapper.selectById(2);
        System.out.println(the2user);

        user.forEach(System.out::println);
    }

    @Test
    public void test1(){
        User user = new User(null,"name",19,"163.com");
        UserMapper userMapper1 = userMapper;
        userMapper1.insert(user);

    }
}
