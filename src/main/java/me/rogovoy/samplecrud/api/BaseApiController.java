package me.rogovoy.samplecrud.api;

import me.rogovoy.samplecrud.services.BookQuerySort;
import me.rogovoy.samplecrud.services.BookQuerySortConverter;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api")
public abstract class BaseApiController {
    @InitBinder
    public void initBinder(final WebDataBinder webdataBinder) {
        webdataBinder.registerCustomEditor(BookQuerySort.class, new BookQuerySortConverter());
    }
}
