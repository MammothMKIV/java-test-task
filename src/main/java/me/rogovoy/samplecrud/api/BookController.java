package me.rogovoy.samplecrud.api;

import me.rogovoy.samplecrud.dto.CreateBookDto;
import me.rogovoy.samplecrud.dto.UpdateBookDto;
import me.rogovoy.samplecrud.entities.Book;
import me.rogovoy.samplecrud.services.BookQuery;
import me.rogovoy.samplecrud.services.BookService;
import me.rogovoy.samplecrud.validation.ValidationErrorBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
public class BookController extends BaseApiController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public ResponseEntity index(@Valid BookQuery query, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ValidationErrorBuilder.mapErrors(errors));
        }

        return ResponseEntity.ok().body(bookService.getBooks(query));
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.GET)
    public ResponseEntity get(@PathVariable("id") Long id) {
        Optional<Book> book = bookService.getBook(id);

        if (!book.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(book.get());
    }

    @RequestMapping(value = "/books", method = RequestMethod.POST)
    public ResponseEntity createBook(@RequestBody @Valid CreateBookDto createBookDto, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ValidationErrorBuilder.mapErrors(errors));
        }

        Book newBook = bookService.createBook(new Book(
            createBookDto.getTitle(),
            createBookDto.getDescription(),
            createBookDto.getAuthor(),
            createBookDto.getIsbn(),
            createBookDto.getPrintYear()
        ));

        return ResponseEntity.ok().body(newBook);
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.POST)
    public ResponseEntity updateBook(
            @PathVariable("id") Long id,
            @RequestBody @Valid UpdateBookDto updateBookDto,
            Errors errors
    ) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(ValidationErrorBuilder.mapErrors(errors));
        }

        Optional<Book> bookOptional = bookService.getBook(id);

        if (!bookOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("NOT_FOUND", "No book found with the provided ID"));
        }

        Book book = bookOptional.get();

        book.setTitle(updateBookDto.getTitle());
        book.setDescription(updateBookDto.getDescription());
        book.setIsbn(updateBookDto.getIsbn());
        book.setPrintYear(updateBookDto.getPrintYear());
        book.setReadAlready(false);

        bookService.updateBook(book);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/books/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteBook(@PathVariable("id") Long id) {
        Optional<Book> bookOptional = bookService.getBook(id);

        if (!bookOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("NOT_FOUND", "No book found with the ID specified"));
        }

        bookService.deleteBook(id);

        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/books/{id}/toggleRead", method = RequestMethod.POST)
    public ResponseEntity toggleBookRead(@PathVariable("id") Long id) {
        Optional<Book> bookOptional = bookService.getBook(id);

        if (!bookOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("NOT_FOUND", "No book found with the ID specified"));
        }

        bookOptional.get().setReadAlready(!bookOptional.get().isReadAlready());

        bookService.updateBook(bookOptional.get());

        return ResponseEntity.noContent().build();
    }
}
