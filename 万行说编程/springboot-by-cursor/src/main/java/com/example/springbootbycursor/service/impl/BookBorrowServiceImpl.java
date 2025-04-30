package com.example.springbootbycursor.service.impl;

import com.example.springbootbycursor.exception.BusinessException;
import com.example.springbootbycursor.model.Book;
import com.example.springbootbycursor.model.BookBorrow;
import com.example.springbootbycursor.model.BorrowStatus;
import com.example.springbootbycursor.model.User;
import com.example.springbootbycursor.repository.BookBorrowRepository;
import com.example.springbootbycursor.repository.BookRepository;
import com.example.springbootbycursor.repository.UserRepository;
import com.example.springbootbycursor.service.BookBorrowService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookBorrowServiceImpl implements BookBorrowService {
    private final BookBorrowRepository borrowRepository;
    private final BookRepository bookRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public BookBorrow createBorrow(Long userId, Long bookId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new BusinessException("用户不存在"));
        
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new BusinessException("图书不存在"));

        if (book.getAvailableCopies() <= 0) {
            throw new BusinessException("图书库存不足");
        }

        BookBorrow borrow = new BookBorrow();
        borrow.setUser(user);
        borrow.setBook(book);
        borrow.setStatus(BorrowStatus.PENDING);
        borrow.setBorrowDate(LocalDateTime.now());
        borrow.setDueDate(LocalDateTime.now().plusDays(30)); // 默认借阅30天

        return borrowRepository.save(borrow);
    }

    @Override
    @Transactional
    public BookBorrow approveBorrow(Long borrowId) {
        BookBorrow borrow = getBorrowById(borrowId);
        if (borrow.getStatus() != BorrowStatus.PENDING) {
            throw new BusinessException("借阅状态不正确");
        }

        Book book = borrow.getBook();
        if (book.getAvailableCopies() <= 0) {
            throw new BusinessException("图书库存不足");
        }

        book.setAvailableCopies(book.getAvailableCopies() - 1);
        bookRepository.save(book);

        borrow.setStatus(BorrowStatus.BORROWED);
        return borrowRepository.save(borrow);
    }

    @Override
    @Transactional
    public BookBorrow rejectBorrow(Long borrowId) {
        BookBorrow borrow = getBorrowById(borrowId);
        if (borrow.getStatus() != BorrowStatus.PENDING) {
            throw new BusinessException("借阅状态不正确");
        }

        borrow.setStatus(BorrowStatus.REJECTED);
        return borrowRepository.save(borrow);
    }

    @Override
    @Transactional
    public BookBorrow returnBook(Long borrowId) {
        BookBorrow borrow = getBorrowById(borrowId);
        if (borrow.getStatus() != BorrowStatus.BORROWED 
            && borrow.getStatus() != BorrowStatus.OVERDUE) {
            throw new BusinessException("借阅状态不正确");
        }

        Book book = borrow.getBook();
        book.setAvailableCopies(book.getAvailableCopies() + 1);
        bookRepository.save(book);

        borrow.setStatus(BorrowStatus.RETURNED);
        borrow.setReturnDate(LocalDateTime.now());
        return borrowRepository.save(borrow);
    }

    @Override
    public List<BookBorrow> getUserBorrows(Long userId) {
        return borrowRepository.findByUserId(userId);
    }

    @Override
    public List<BookBorrow> getBorrowsByStatus(BorrowStatus status) {
        return borrowRepository.findByStatus(status);
    }

    @Override
    public BookBorrow getBorrowById(Long id) {
        return borrowRepository.findById(id)
                .orElseThrow(() -> new BusinessException("借阅记录不存在"));
    }

    @Override
    @Transactional
    public void checkOverdueBorrows() {
        List<BookBorrow> activeBorrows = borrowRepository.findByStatus(BorrowStatus.BORROWED);
        LocalDateTime now = LocalDateTime.now();
        
        for (BookBorrow borrow : activeBorrows) {
            if (now.isAfter(borrow.getDueDate())) {
                borrow.setStatus(BorrowStatus.OVERDUE);
                borrowRepository.save(borrow);
            }
        }
    }
} 