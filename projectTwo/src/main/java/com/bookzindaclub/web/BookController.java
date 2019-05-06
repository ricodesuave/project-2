package com.bookzindaclub.web;

import com.bookzindaclub.data.BookRepo;
import com.bookzindaclub.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    private BookRepo bookRepo;


    @GetMapping("/books")
    public List<Book> getBooks(){
        return bookRepo.findAll();
    }

    @PostMapping("/books")
    void addBook(@RequestBody Book book){
        bookRepo.save(book);
    }

}
