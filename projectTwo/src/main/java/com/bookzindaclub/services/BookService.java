package com.bookzindaclub.services;

import com.bookzindaclub.model.Book;

import java.util.List;

public interface BookService {
   Book getById(int id);
   Book getByTitle(String title);
   List<Book> getAll();
   List<Book> getAllByTitle(String title);
   List<Book> getAllByAuthor();
   int newBook(Book b);
}





