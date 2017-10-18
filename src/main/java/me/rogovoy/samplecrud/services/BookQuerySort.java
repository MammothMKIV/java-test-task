package me.rogovoy.samplecrud.services;

import java.util.Arrays;

public enum BookQuerySort {
    READ_ALREADY("readAlready"),
    PRINT_YEAR("printYear"),
    ID("id");

    private String fieldName;

    BookQuerySort(String fieldName) {
        this.fieldName = fieldName;
    }

    @Override
    public String toString() {
        return fieldName;
    }

    public static BookQuerySort fromValue(String value) {
        for (BookQuerySort sort : values()) {
            if (sort.fieldName.equalsIgnoreCase(value)) {
                return sort;
            }
        }
        throw new IllegalArgumentException(
                "Unknown enum type " + value + ", Allowed values are " + Arrays.toString(values()));
    }
}
