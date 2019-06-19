package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.InstructorService;
import com.example.demo.model.Instructor;

@RestController
public class InstructorController {

	@Autowired
	private InstructorService instructorService;
	
	@RequestMapping("/instructor/getAll")
	public List<Instructor> getAll() {
		return instructorService.readAll();
	}
	
	@RequestMapping("/instructor/getByName")
	public List<Instructor> getByName(@RequestParam String name) {
		return instructorService.readByName(name);
	}
	
	@RequestMapping("/instructor/getByCode")
	public Instructor getByCode(@RequestParam String code) {
		return instructorService.readByCode(code);
	}
		
	@RequestMapping("/instructor/post")
	public String post(@RequestParam String code, @RequestParam String name, @RequestParam String username, @RequestParam String password) {
		Instructor i = instructorService.create(code, name, username, password);
		return i.toString();
	}
	
	@RequestMapping("/instructor/put")
	public String put(@RequestParam String code, @RequestParam String name, @RequestParam String username, @RequestParam String password) {
		Instructor i = instructorService.create(code, name, username, password);
		return i.toString();
	}
	
	@RequestMapping("/instructor/delete")
	public String delete(@RequestParam String code) {
		instructorService.delete(code);
		return "deleted" + code;
	}
}
