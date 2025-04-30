package com.example.springbootvue3;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication(scanBasePackages = "com.example.springbootvue3")
@MapperScan("com.example.springbootvue3.mapper")
@EnableTransactionManagement
public class SpringbootVue3Application {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootVue3Application.class, args);
    }

}
