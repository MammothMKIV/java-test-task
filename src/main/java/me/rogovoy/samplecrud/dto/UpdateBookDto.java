package me.rogovoy.samplecrud.dto;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class UpdateBookDto {
    @NotNull(message = "Book title must not be blank")
    @Length(min = 1, max = 100, message = "Book title must be at least 1 character long and not longer than 100 characters")
    private String title;

    @Length(max = 255, message = "Book description length must not exceed 255 characters")
    private String description;

    @NotNull(message = "Book ISBN can not be blank")
    @Length(min = 1, max = 20, message = "Book title must be at least 1 character long and not longer than 20 characters")
    private String isbn;

    @NotNull(message = "Book print year must not be blank")
    @Min(value = 0L, message = "Book print year can not be negative")
    private Integer printYear;

    public UpdateBookDto() {
    }

    public UpdateBookDto(String title, String description, String isbn, int printYear) {
        this.title = title;
        this.description = description;
        this.isbn = isbn;
        this.printYear = printYear;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Integer getPrintYear() {
        return printYear;
    }

    public void setPrintYear(Integer printYear) {
        this.printYear = printYear;
    }
}
