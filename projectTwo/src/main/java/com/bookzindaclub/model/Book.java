package com.bookzindaclub.model;


import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@ToString
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "BOOKS")
public class Book {
    public Book(String title, String author){
        this.title= title;
        this.author= author;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;

    private String title;
    private String author;

}
