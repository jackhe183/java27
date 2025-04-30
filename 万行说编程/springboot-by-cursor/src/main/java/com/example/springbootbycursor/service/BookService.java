package com.example.springbootbycursor.service;

import com.example.springbootbycursor.dto.BookDTO;
import com.example.springbootbycursor.model.Book;
import java.util.List;

public interface BookService {
    BookDTO createBook(Book book);
    BookDTO getBookById(Long id);
    List<BookDTO> getAllBooks();
    List<BookDTO> searchBooks(String keyword);
    List<BookDTO> getBooksByCategory(Long categoryId);
    BookDTO updateBook(Long id, Book book);
    void deleteBook(Long id);
    boolean isBookAvailable(Long id);
} 