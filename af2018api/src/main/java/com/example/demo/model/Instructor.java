package com.example.demo.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Instructor {
	
	@Id
	String Id;
	
	@NotNull
	String code;
	
	@NotNull
	String name;
	
	@NotNull
	String username;
	
	@NotNull
	String password;

	public Instructor(@NotNull String code, @NotNull String name, @NotNull String username, @NotNull String password) {
		super();
		this.code = code;
		this.name = name;
		this.username = username;
		this.password = password;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}	

	@Override
	public String toString() {
		return "Instructor [username=" + username + ", password=" + password + "]";
	}

	public String getInfo() {
		return "Instructor [code=" + code + ", name=" + name + "]";
	}
	
}
