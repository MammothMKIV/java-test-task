package me.rogovoy.samplecrud.services;

import me.rogovoy.samplecrud.entities.Book;
import me.rogovoy.samplecrud.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DbBookService implements BookService {
    private BookRepository bookRepository;

    @Autowired
    public DbBookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Iterable<Book> getBooks(Integer page, Integer perPage) {
        return bookRepository.findAll(new PageRequest(page, perPage)).getContent();
    }

    @Override
    public Optional<Book> getBook(Long id) {
        return Optional.ofNullable(bookRepository.findOne(id));
    }

    @Override
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.delete(id);
    }

    @Override
    public void deleteBook(Book book) {
        bookRepository.delete(book);
    }
}
