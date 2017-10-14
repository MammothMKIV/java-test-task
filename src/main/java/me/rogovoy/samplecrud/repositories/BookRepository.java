package me.rogovoy.samplecrud.repositories;

import me.rogovoy.samplecrud.entities.Book;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface BookRepository extends PagingAndSortingRepository<Book, Long> {
}
