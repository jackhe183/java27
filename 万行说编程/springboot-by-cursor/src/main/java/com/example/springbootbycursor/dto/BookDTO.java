package com.example.springbootbycursor.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class BookDTO {
    private Long id;

    @NotBlank(message = "书名不能为空")
    private String title;

    @NotBlank(message = "作者不能为空")
    private String author;

    @NotBlank(message = "ISBN不能为空")
    private String isbn;

    private String description;

    @NotNull(message = "分类ID不能为空")
    private Long categoryId;

    private String categoryName;

    @Min(value = 0, message = "总数量不能小于0")
    private Integer totalCopies;

    @Min(value = 0, message = "可用数量不能小于0")
    private Integer availableCopies;
} 