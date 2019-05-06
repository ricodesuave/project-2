package com.bookzindaclub.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int progressId;

    private String progressType;
}
