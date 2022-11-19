package com.cricket.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cricket.api.model.User;
import com.cricket.api.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository ur;

	public List<User> getUsers() {
		List<User> user = (List<User>)ur.findAll();
		return user;
	}

	public Optional<User> getUser(int uID) {
		Optional<User> u=null;
		u=ur.findById(uID);
		return u;
		
	}

	public User addUser(User user) {
		User u = ur.save(user);
		return u;
	}

	List<User> users;
	
	public void updateUser(User user, int uID) {
		user.setUserID(uID);
		ur.save(user);
	}
	
	public void deleteUser(int uID) {
		ur.deleteById(uID);
	}

}
