package me.rogovoy.samplecrud.services;

import me.rogovoy.samplecrud.entities.Book;
import me.rogovoy.samplecrud.repositories.BookRepository;
import me.rogovoy.samplecrud.repositories.BookSpecifications;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
    public Iterable<Book> getBooks(BookQuery query) {
        Sort.Direction direction = Sort.Direction.DESC;
        BookQuerySort field = BookQuerySort.ID;

        if (query.getOrder() != null) {
            try {
                direction = Sort.Direction.fromString(query.getOrder());
            } catch (IllegalArgumentException e) {

            }
        }

        if (query.getOrderBy() != null) {
            field = query.getOrderBy();
        }

        if (query.getPage() == null) {
            query.setPage(0);
        }

        if (query.getPerPage() == null) {
            query.setPerPage(10);
        }

        Sort sort = new Sort(new Sort.Order(direction, field.toString()));

        PageRequest pageRequest = new PageRequest(query.getPage(), query.getPerPage(), sort);

        return bookRepository.findAll(BookSpecifications.getSearchQuery(query), pageRequest).getContent();
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
