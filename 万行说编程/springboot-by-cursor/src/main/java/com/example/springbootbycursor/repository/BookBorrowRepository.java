package com.example.springbootbycursor.repository;

import com.example.springbootbycursor.model.BookBorrow;
import com.example.springbootbycursor.model.BorrowStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookBorrowRepository extends JpaRepository<BookBorrow, Long> {
    List<BookBorrow> findByUserId(Long userId);
    List<BookBorrow> findByStatus(BorrowStatus status);
    List<BookBorrow> findByUserIdAndStatus(Long userId, BorrowStatus status);
} 