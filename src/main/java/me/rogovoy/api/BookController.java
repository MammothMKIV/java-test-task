package me.rogovoy.api;

import me.rogovoy.entities.Book;
import me.rogovoy.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicInteger;

@RestController
public class BookController extends BaseApiController {
    private AtomicInteger integer = new AtomicInteger();

    private BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @RequestMapping(value = "/books", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Book> index() {
        return bookRepository.findAll();
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.GET)
    @ResponseBody
    public String get(@PathVariable("id") Long id) {
        return "Book fetched. ID: " + id;
    }

    @RequestMapping(value = "/books", method = RequestMethod.POST)
    @ResponseBody
    public String createBook() {
        return "Book created. ID: " + integer.incrementAndGet();
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.PATCH)
    @ResponseBody
    public Object updateBook(@PathVariable("id") Long id) {
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
