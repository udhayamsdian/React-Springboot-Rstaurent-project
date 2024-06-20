package com.sample.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sample.entity.Product;
import com.sample.repository.ProductRepository;

@RestController
@RequestMapping("/product")
public class Productcontroller {
 @Autowired
 ProductRepository prodRepo;
 @PostMapping("/addProd")
 public ResponseEntity<?> product(@RequestBody Product products){
	 Product p = prodRepo.save(products);
			 return ResponseEntity.status(HttpStatus.OK)
						.body(p);
 }
 @GetMapping("/get")
	public List<Product> getAll()
	{
		List<Product> m = prodRepo.findAll();
		
		return m;
	}
 
 @PostMapping("/uploadImage")
 public ResponseEntity<?> uploadImage(@ModelAttribute Product products,@RequestParam("file") MultipartFile image) throws IOException{
	 
	 byte[] bytes = image.getBytes();
	 
	 
	 String imageName = image.getOriginalFilename();
	 
	 String fileLocation = "D:\\springboot\\Sample\\src\\main\\resources\\images\\" + imageName;
	 
	 Path path = Paths.get(fileLocation);
	 
	 Files.write(path, bytes);
	 
	 File file = new File(fileLocation);
	 System.out.println("IMGW++++++++++"+file.getName());
	 System.out.println("IMimageNameGW++++++++++"+imageName);
	 
	 
	 products.setProductImage(imageName);
	 Product p = prodRepo.save(products);
			 return ResponseEntity.status(HttpStatus.OK)
						.body(p);
 }

 
}
