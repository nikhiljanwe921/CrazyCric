package com.cricket.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class User {

	@Id
	@GeneratedValue
	@Column(name = "userID")
	private int userID;
	
	@Column(name = "userName")
	private String userName;
	
	@Column(name = "userPassword")
	private String userPassword;
	
	@Column(name = "useremail")
	private String useremail;
	
	@Column(name = "userNumber")
	private String userNumber;
	
	@Column(name = "userAddress")
	private String userAddress;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int userID, String userName, String userPassword, String useremail, String userNumber,
			String userAddress) {
		super();
		this.userID = userID;
		this.userName = userName;
		this.userPassword = userPassword;
		this.useremail = useremail;
		this.userNumber = userNumber;
		this.userAddress = userAddress;
	}

	@Id
	@GeneratedValue
	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public String getUserNumber() {
		return userNumber;
	}

	public void setUserNumber(String userNumber) {
		this.userNumber = userNumber;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	
	
	
	
	
	
}
