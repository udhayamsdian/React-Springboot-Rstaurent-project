package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
