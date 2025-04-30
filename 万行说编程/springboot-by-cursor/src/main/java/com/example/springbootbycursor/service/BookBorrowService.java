package com.example.springbootbycursor.service;

import com.example.springbootbycursor.model.BookBorrow;
import com.example.springbootbycursor.model.BorrowStatus;
import java.util.List;

public interface BookBorrowService {
    BookBorrow createBorrow(Long userId, Long bookId);
    BookBorrow approveBorrow(Long borrowId);
    BookBorrow rejectBorrow(Long borrowId);
    BookBorrow returnBook(Long borrowId);
    List<BookBorrow> getUserBorrows(Long userId);
    List<BookBorrow> getBorrowsByStatus(BorrowStatus status);
    BookBorrow getBorrowById(Long id);
    void checkOverdueBorrows();
} 