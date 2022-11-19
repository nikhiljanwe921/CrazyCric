package com.cricket.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	//@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "employeeId")
	private int EmployeeID;
	
	@Column(name = "employeeName")
	private String FirstName;
	
	@Column(name = "employeeLastName")
	private String LastName;
	
	@Column(name = "username")
	private String UserName;
	
	@Column(name = "password")
	private String Password;
	
	@Column(name = "job")
	private String Job;

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Employee(int employeeID, String firstName, String lastName, String userName, String password, String job) {
		super();
		EmployeeID = employeeID;
		FirstName = firstName;
		LastName = lastName;
		UserName = userName;
		Password = password;
		Job = job;
	}

	
	public int getEmployeeID() {
		return EmployeeID;
	}

	public void setEmployeeID(int employeeID) {
		EmployeeID = employeeID;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getJob() {
		return Job;
	}

	public void setJob(String job) {
		Job = job;
	}

	@Override
	public String toString() {
		return "Employee [EmployeeID=" + EmployeeID + ", UserName=" + UserName + ", Password=" + Password
				+ ", FirstName=" + FirstName + ", LastName=" + LastName + ", Job=" + Job + "]";
	}

}
