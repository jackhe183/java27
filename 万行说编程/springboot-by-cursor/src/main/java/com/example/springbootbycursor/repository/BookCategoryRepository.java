package com.example.springbootbycursor.repository;

import com.example.springbootbycursor.model.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {
    boolean existsByName(String name);
} 