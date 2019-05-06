package com.bookzindaclub.data;

import com.bookzindaclub.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;


@Repository
public interface BookRepo extends JpaRepository <Book, Integer> {
    Book findByTitleEquals(String title);
    List<Book> findAllByTitleLikeOrderByTitleAsc(String title);
    List<Book> findAllByTitleLikeOrderByAuthorAsc(String author);
}
