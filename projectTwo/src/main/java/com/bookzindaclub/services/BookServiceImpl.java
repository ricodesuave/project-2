package com.bookzindaclub.services;

import com.bookzindaclub.data.BookRepo;
import com.bookzindaclub.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{

    BookRepo bookRepo;

    @Autowired
    public void setBookRepo(BookRepo bookRepo){
        this.bookRepo = bookRepo;
    }

    @Override
    @Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED)
    public Book getById(int id) {
        Book b =this.bookRepo.findById(id).orElse(null);
        return b;
    }

    @Override
    public Book getByTitle(String name) {
        return this.bookRepo.findByTitleEquals(name);
    }

    @Override
    public List<Book> getAll() {
        return this.bookRepo.findAll();
    }

    @Override
    public List<Book> getAllByTitle(String title) {
        return this.bookRepo.findAllByTitleLikeOrderByTitleAsc("%"+title+"%");
    }

    @Override
    public List<Book> getAllByAuthor() {
        return this.bookRepo.findAllByTitleLikeOrderByAuthorAsc("%" + "%");
    }

    @Override
    public int newBook(Book b) {
        Book book= this.bookRepo.save(b);
        return book.getBookId();
    }
}
