package com.cricket.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cricket.api.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
