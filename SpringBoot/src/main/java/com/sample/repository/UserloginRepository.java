package com.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sample.entity.UserLogin;

public interface UserloginRepository extends JpaRepository<UserLogin, Integer> {


	@Query("select u from UserLogin u where u.email=?1")
	
	UserLogin findByemail(String email);

}
