package com.bookzindaclub.web;

import com.bookzindaclub.model.Book;
import com.bookzindaclub.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.CascadeType;
import java.util.List;

@RestController
@RequestMapping(value = "/books")
//@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    private BookService bookService;
    @Autowired
    public void setBookService(BookService bookService){
        this.bookService=bookService;
    }
    
    @GetMapping("books")
    public List<Book> getBooks(){
        return bookService.getAll();
    }

    @GetMapping("book")
    public Book getOneByID(@RequestParam int id){
        return bookService.getById(id);
    }

    @PostMapping("/book")
    void addBook(@RequestBody Book book){
        bookService.newBook(book);
    }

    @PutMapping("update")
    public void updateBook(@RequestBody Book book){
        bookService.updateOne(book);
    }

    @DeleteMapping("/book")
    void deleteBook(@RequestBody Book book)
    {
        bookService.deleteBook(book);
    }
    @DeleteMapping(value = "/books")
    void deleteAllBooks(){
        bookService.deleteAll();
    }

}
