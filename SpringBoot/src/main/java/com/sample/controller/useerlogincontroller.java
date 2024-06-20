package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.entity.UserLogin;
import com.sample.repository.UserloginRepository;

@RestController
@RequestMapping("/mapping")
public class useerlogincontroller {
	
	@Autowired
	UserloginRepository userRepo;
	
	@PostMapping ("/create")
	public ResponseEntity<?> user(@RequestBody UserLogin user)
	{
		UserLogin u = userRepo.save(user);
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(u);
	}
	@PostMapping("/login")
	public String loginuser(@RequestBody UserLogin user)
	{
		UserLogin user1 = userRepo.findByemail(user.getEmail());
		
		if(user1 != null && user1.getPassword().equals(user.getPassword()))
		{
			
			return "Login successful" ;
		}
		else {
			return "Invaild email or password";
			
		}

	}
}
