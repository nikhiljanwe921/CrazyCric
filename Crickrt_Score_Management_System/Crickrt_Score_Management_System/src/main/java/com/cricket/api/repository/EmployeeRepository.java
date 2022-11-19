package com.cricket.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.cricket.api.model.Employee;


public interface EmployeeRepository extends CrudRepository<Employee, Integer>{

}

