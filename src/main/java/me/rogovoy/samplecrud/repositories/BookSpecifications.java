package me.rogovoy.samplecrud.repositories;

import me.rogovoy.samplecrud.entities.Book;
import me.rogovoy.samplecrud.services.BookQuery;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

public final class BookSpecifications {
    private BookSpecifications() {}

    public static Specification<Book> getSearchQuery(BookQuery query) {
        return (root, q, criteriaBuilder) -> {
            List<Predicate> conditions = new ArrayList<>();

            if (query.getKeywords() != null) {
                String containsLikePattern = getContainsLikePattern(query.getKeywords());

                conditions.add(criteriaBuilder.or(
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("title")), containsLikePattern),
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("description")), containsLikePattern),
                        criteriaBuilder.like(criteriaBuilder.lower(root.get("author")), containsLikePattern)
                ));
            }

            if (query.getReadAlready() != null) {
                conditions.add(criteriaBuilder.equal(root.get("readAlready"), query.getReadAlready()));
            }

            if (query.getYearFrom() != null) {
                conditions.add(criteriaBuilder.greaterThanOrEqualTo(root.get("printYear"), query.getYearFrom()));
            }

            if (query.getYearTo() != null) {
                conditions.add(criteriaBuilder.lessThanOrEqualTo(root.get("printYear"), query.getYearTo()));
            }

            return criteriaBuilder.and(conditions.toArray(new Predicate[0]));
        };
    }

    public static Specification<Book> titleOrDescriptionContainsIgnoreCase(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String containsLikePattern = getContainsLikePattern(keyword);

            return criteriaBuilder.or(
                criteriaBuilder.like(criteriaBuilder.lower(root.get("title")), containsLikePattern),
                criteriaBuilder.like(criteriaBuilder.lower(root.get("description")), containsLikePattern)
            );
        };
    }

    private static String getContainsLikePattern(String keyword) {
        if (keyword == null || keyword.isEmpty()) {
            return "%";
        } else {
            return "%" + keyword + "%";
        }
    }
}
