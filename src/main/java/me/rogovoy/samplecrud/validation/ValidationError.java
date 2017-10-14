package me.rogovoy.samplecrud.validation;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.*;

public class ValidationError {
    private final String errorMessage;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private Map<String, List<String>> errors = new LinkedHashMap<>();

    public ValidationError(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public void addValidationError(String field, String error) {
        errors.putIfAbsent(field, new ArrayList<>());
        errors.get(field).add(error);
    }

    public Map<String, List<String>> getErrors() {
        return this.errors;
    }

    public String getErrorMessage() {
        return this.errorMessage;
    }
}
