package me.rogovoy.samplecrud.services;

import java.util.List;

public class ApiSearchResults<T> {
    private Long totalCount;
    private List<T> entries;

    public ApiSearchResults(Long totalCount, List<T> entries) {
        this.totalCount = totalCount;
        this.entries = entries;
    }

    public Long getTotalCount() {
        return totalCount;
    }

    public List<T> getEntries() {
        return entries;
    }
}
