package com.example.jvm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;

@SpringBootApplication
public class DemoLearnJvmApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoLearnJvmApplication.class, args);
        // simulateMemoryOverflow(); // 调用内存溢出模拟方法（已注释掉以避免错误）
        demonstrateGarbageCollection(); // 调用垃圾收集演示方法
        monitorMemoryUsage(); // 调用内存监控方法
    }

    // 第一章-自动内存管理
    // 新增方法：模拟内存溢出异常
    private static void simulateMemoryOverflow() {
        try {
            // 创建大量对象以消耗内存
            // int[] largeArray = new int[Integer.MAX_VALUE]; // 尝试分配一个非常大的数组（已注释掉以避免错误）
        } catch (OutOfMemoryError e) {
            System.err.println("内存溢出异常: " + e.getMessage());
        }
    }

    // 新增方法：演示垃圾收集
    private static void demonstrateGarbageCollection() {
        // 创建一些对象
        for (int i = 0; i < 10000; i++) {
            String temp = new String("垃圾收集演示 " + i);
            // temp 变量超出作用域，可能会被垃圾收集器回收
        }
        // 提示用户进行垃圾收集
        System.gc(); // 显式请求垃圾收集
        System.out.println("已请求垃圾收集。");
    }

    // 新增方法：监控内存使用情况
    private static void monitorMemoryUsage() {
        MemoryMXBean memoryMXBean = ManagementFactory.getMemoryMXBean();
        MemoryUsage heapMemoryUsage = memoryMXBean.getHeapMemoryUsage();
        MemoryUsage nonHeapMemoryUsage = memoryMXBean.getNonHeapMemoryUsage();

        System.out.println("堆内存使用情况: " + heapMemoryUsage);
        System.out.println("非堆内存使用情况: " + nonHeapMemoryUsage);
    }
}
