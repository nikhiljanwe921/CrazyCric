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

import com.cricket.api.model.Employee;
import com.cricket.api.service.EmployeeService;

@RestController
@CrossOrigin("*")
public class EmployeeController {

	@Autowired
	EmployeeService es;
	
	@GetMapping("/employees")
	public List<Employee> getEmployee(){
		
		return es.getEmployee();
	}
	
	@GetMapping("/employee/{empID}")
	public Optional<Employee> getEmployee(@PathVariable int empID) {
		
		return es.getEmployee(empID);
	}
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee) {
		
		return es.addEmployee(employee);
	}
	
	@PutMapping("/employees/{empID}")
	public void updateEmployee(@RequestBody Employee employee ,@PathVariable int empID) {
		es.updateEmployee(employee, empID);
	}
	
	@DeleteMapping("/employees/{empID}")
	String deleteEmployee(@PathVariable int empID) {
		es.deleteEmployee(empID);
		return "Employee "+empID+"deleted successfully.";
	}
	
	
}
