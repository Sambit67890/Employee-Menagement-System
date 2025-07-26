package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.Employee;
import com.ems.service.Employee_Service;

@CrossOrigin(origins = "*")
@RequestMapping("/api/employees")
@RestController
public class Employee_Controller {
	@Autowired
	private Employee_Service emp_service;
	
	
	@PostMapping("/saveemp")
	public void saveEmployee(@RequestBody Employee emp) {
		emp_service.saveEmployee(emp);
		
	}
//
	@PutMapping("/updateemp/{id}")
	public void updateEmployee(@PathVariable Integer id,@RequestBody Employee emp) {
		emp_service.updateEmployee(id,emp);
	}
//
	@DeleteMapping("/deleteempbyid/{id}")
	public void deleteByEmployeeid(@PathVariable Integer id) {
		emp_service.deleteByEmployeeid(id);
	}
	@GetMapping("/hello")
	public String getMessage() {
		return "hello";
	}
	
	@GetMapping("/list")
	public List<Employee> getAllEmployees() {
	    return emp_service.getAllEmployees();  // This should return List<Employee>
	}
	
	@GetMapping("/list/{id}")
	public Employee getEmployeeById(@PathVariable Integer id) {
	    return emp_service.getEmployeeById(id);
	}

}
