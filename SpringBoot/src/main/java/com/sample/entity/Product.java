package com.sample.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long prodId;
  private String productName;
  public Long getProdId() {
	return prodId;
}
public void setProdId(Long prodId) {
	this.prodId = prodId;
}
public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
public String getProductDiscript() {
	return productDiscript;
}
public void setProductDiscript(String productDiscript) {
	this.productDiscript = productDiscript;
}
public Float getProductPrice() {
	return productPrice;
}
public void setProductPrice(Float productPrice) {
	this.productPrice = productPrice;
}
public String getProductImage() {
	return productImage;
}
public void setProductImage(String productImage) {
	this.productImage = productImage;
}
public Date getCreateDate() {
	return createDate;
}
public void setCreateDate(Date createDate) {
	this.createDate = createDate;
}
private String productDiscript;
  private Float productPrice;
  private String productImage;
  private Date createDate;
}
