package com.example.demo.Service;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Instructor;
import com.example.demo.repository.InstructorRepo;


@Service
public class InstructorService {

	@Autowired
	private InstructorRepo instructorRepo;
	
	//retrieve
	public List<Instructor> readAll(){
		return instructorRepo.findAll();
	}
	
	public List<Instructor> readByName(String name){
		return instructorRepo.findByName(name);
	}
	
	public Instructor readByCode(String code){
		return instructorRepo.findByCode(code);
	}
	
	//create
	public Instructor create(String code, String name, String username, String password) {
		return instructorRepo.save(new Instructor(code, name, username, password));
	}
	
	//update
	public Instructor update(String code, String name, String username, String password) {
		Instructor i = instructorRepo.findByCode(code);
		i.setName(name);
		i.setUsername(username);
		i.setPassword(password);
		return instructorRepo.save(i);
	}
	
	//delete
	public void deleteAll() {
		instructorRepo.deleteAll();
	}
	
	public void delete(String code) {
		Instructor i = instructorRepo.findByCode(code);
		instructorRepo.delete(i);
	}
}
