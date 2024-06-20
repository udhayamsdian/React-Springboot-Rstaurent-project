package com.sample.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//User.java

//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;

@Entity
@Table(name="userfinal")
public class User {
 
 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private int id;
 private String username;
 private String password;
 private Integer phNumber;

public Integer getPhNumber() {
	return phNumber;
}
public void setPhNumber(Integer phNumber) {
	this.phNumber = phNumber;
}

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUsername1() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getUsername() {
	// TODO Auto-generated method stub
	return null;
}


 // Getters and setters
}
