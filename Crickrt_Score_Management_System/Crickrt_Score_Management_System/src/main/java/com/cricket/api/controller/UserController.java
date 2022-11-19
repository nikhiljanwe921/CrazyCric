package com.cricket.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cricket.api.model.User;
import com.cricket.api.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	UserService us;
	
	@GetMapping("/users")
	public List<User> getUser(){
		
		return us.getUsers();
	}
	
	@GetMapping("/user/{uID}")
	public Optional<User> getUser(@PathVariable int uID) {
		
		return us.getUser(uID);
	}
	
	@PostMapping("/users")
	public User addUser(@RequestBody User user) {
		
		return us.addUser(user);
	}
	
	@PutMapping("/user/{uID}")
	public void updateUser(@RequestBody User user,@PathVariable int uID) {
		us.updateUser(user, uID);
	}
	
	@DeleteMapping("/user/{uID}")
	String deleteUser(@PathVariable int uID) {
		us.deleteUser(uID);
		return "User "+uID+"deleted successfully.";
	}
	
}
