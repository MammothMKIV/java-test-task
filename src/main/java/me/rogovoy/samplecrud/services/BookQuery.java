package me.rogovoy.samplecrud.services;

public class BookQuery {
    private String keywords;
    private Long yearFrom;
    private Long yearTo;
    private Boolean readAlready;
    private Integer page;
    private Integer perPage;

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Long getYearFrom() {
        return yearFrom;
    }

    public void setYearFrom(Long yearFrom) {
        this.yearFrom = yearFrom;
    }

    public Long getYearTo() {
        return yearTo;
    }

    public void setYearTo(Long yearTo) {
        this.yearTo = yearTo;
    }

    public Boolean getReadAlready() {
        return readAlready;
    }

    public void setReadAlready(Boolean readAlready) {
        this.readAlready = readAlready;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPerPage() {
        return perPage;
    }

    public void setPerPage(Integer perPage) {
        this.perPage = perPage;
    }
}
