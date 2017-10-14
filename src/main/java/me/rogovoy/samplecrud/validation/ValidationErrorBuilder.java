package me.rogovoy.samplecrud.validation;

import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

public class ValidationErrorBuilder {
    public static ValidationError mapErrors(Errors errors) {
        ValidationError error = new ValidationError("Please, correct following errors.");

        for (FieldError fieldError : errors.getFieldErrors()) {
            error.addValidationError(fieldError.getField(), fieldError.getDefaultMessage());
        }

        return error;
    }
}
