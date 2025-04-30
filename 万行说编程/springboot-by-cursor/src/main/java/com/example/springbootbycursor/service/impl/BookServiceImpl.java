package com.example.springbootbycursor.service.impl;

import com.example.springbootbycursor.dto.BookDTO;
import com.example.springbootbycursor.model.Book;
import com.example.springbootbycursor.repository.BookRepository;
import com.example.springbootbycursor.service.BookService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;

    @Override
    @Transactional
    public BookDTO createBook(Book book) {
        Book savedBook = bookRepository.save(book);
        return convertToDTO(savedBook);
    }

    @Override
    public BookDTO getBookById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("图书不存在"));
        return convertToDTO(book);
    }

    @Override
    public List<BookDTO> getAllBooks() {
        return bookRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookDTO> searchBooks(String keyword) {
        return bookRepository.findByTitleContainingOrAuthorContaining(keyword, keyword)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookDTO> getBooksByCategory(Long categoryId) {
        return bookRepository.findByCategoryId(categoryId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public BookDTO updateBook(Long id, Book book) {
        Book existingBook = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("图书不存在"));
        
        BeanUtils.copyProperties(book, existingBook, "id");
        return convertToDTO(bookRepository.save(existingBook));
    }

    @Override
    @Transactional
    public void deleteBook(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new RuntimeException("图书不存在");
        }
        bookRepository.deleteById(id);
    }

    @Override
    public boolean isBookAvailable(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("图书不存在"));
        return book.getAvailableCopies() > 0;
    }

    private BookDTO convertToDTO(Book book) {
        BookDTO dto = new BookDTO();
        BeanUtils.copyProperties(book, dto);
        if (book.getCategory() != null) {
            dto.setCategoryId(book.getCategory().getId());
            dto.setCategoryName(book.getCategory().getName());
        }
        return dto;
    }
} 