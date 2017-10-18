package me.rogovoy.samplecrud.services;

import java.beans.PropertyEditorSupport;

public class BookQuerySortConverter extends PropertyEditorSupport {
    public void setAsText(final String text) throws IllegalArgumentException {
        setValue(BookQuerySort.fromValue(text));
    }
}