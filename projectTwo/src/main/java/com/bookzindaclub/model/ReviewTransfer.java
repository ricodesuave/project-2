package com.bookzindaclub.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewTransfer {

	private String title;
	private String author;
	private String firstName;
	private String lastName;
	private String reviewDescription;
	private int rating;
	private String reviewDate;
}
