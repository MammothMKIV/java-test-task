package me.rogovoy.samplecrud.services;

import me.rogovoy.samplecrud.entities.Book;

import java.util.Optional;

public interface BookService {
    public Iterable<Book> getBooks(BookQuery query);

    public Optional<Book> getBook(Long id);

    public Book createBook(Book book);

    public Book updateBook(Book book);

    public void deleteBook(Long id);

    public void deleteBook(Book book);
}
