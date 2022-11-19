package com.cricket.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cricket.api.model.Employee;
import com.cricket.api.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository ep;

	public List<Employee> getEmployee() {
		List<Employee> emp = (List<Employee>) ep.findAll();
		return emp;
	}

	public Optional<Employee> getEmployee(int empID) {
		Optional<Employee> emp = null;
		emp = ep.findById(empID);
		return emp;
	}

	public Employee addEmployee(Employee employee) {
		Employee emp = ep.save(employee);
		return emp;
	}

	List<Employee> employees;

	public void updateEmployee(Employee emp, int empID) {
		emp.setEmployeeID(empID);
		ep.save(emp);
	}

	public void deleteEmployee(int empID) {
		ep.deleteById(empID);
	}
}
