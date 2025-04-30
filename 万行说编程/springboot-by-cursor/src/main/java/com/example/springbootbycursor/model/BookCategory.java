package com.example.springbootbycursor.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "book_categories")
public class BookCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private String description;
} 