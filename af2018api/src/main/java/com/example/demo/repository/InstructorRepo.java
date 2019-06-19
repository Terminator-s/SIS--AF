package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Instructor;

@Repository
public interface InstructorRepo extends MongoRepository<Instructor, String>{
	
	public List<Instructor> findByName(String name);
	public Instructor findByCode(String code);
}
