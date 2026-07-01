package com.library.service;
import com.library.repository.BookRepository;
public class BookService {
    // Dependency injected by Spring via setter injection
    private BookRepository bookRepository;
    // Setter method - Spring uses this to inject BookRepository
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    public String getBookDetails(String id) {
        return bookRepository.findBookById(id);
    }
}
