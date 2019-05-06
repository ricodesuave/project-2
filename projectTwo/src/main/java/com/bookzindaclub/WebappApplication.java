package com.bookzindaclub;

import com.bookzindaclub.data.BookRepo;
import com.bookzindaclub.model.Book;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.stream.Stream;

@EnableJpaRepositories
@EnableTransactionManagement
@SpringBootApplication
public class WebappApplication {


    public static void main(String[] args) {
        SpringApplication.run(WebappApplication.class, args);
    }


//    @Autowired
//    public void setBookRepo(BookRepo bookRepo){
//        this.bookRepo= bookRepo;
//    }

    @Bean
    CommandLineRunner initial(BookRepo bookRepo){
        System.out.println("hello");
        return args-> {
            Stream.of("Harry Potter", "War and Peace", "To Kill a Mockingbird", "Tom Sawyer")
                    .forEach(title -> {
                        Book book = new Book(title, "author");
                        bookRepo.save(book);
                    });
            bookRepo.findAll().forEach(System.out::println);
        };
    }

}
