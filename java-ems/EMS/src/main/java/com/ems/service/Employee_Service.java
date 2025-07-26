package com.ems.service;

import java.util.List;
import com.ems.repo.Employee_Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.Employee_Dao;
import com.ems.dto.Employee;

@Service
public class Employee_Service {

    private final Employee_Repository employee_Repository;
	@Autowired
	private Employee_Dao emp_dao;

    Employee_Service(Employee_Repository employee_Repository) {
        this.employee_Repository = employee_Repository;
    }
	
	public void saveEmployee(Employee emp) {
		emp_dao.saveEmployee(emp);
	}
	
	public void updateEmployee(Integer id,Employee emp) {
		emp_dao.updateEmployee(id,emp);
	}
	
	public void deleteByEmployeeid(Integer id) {
		emp_dao.deleteByEmployeeid(id);
	}
	
	public List<Employee> getAllEmployees() {
	    return employee_Repository.findAll(); 
	}
	
	public Employee getEmployeeById(Integer id) {
	    return employee_Repository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
	}

}
