package com.ems.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.ems.dto.Employee;
import com.ems.repo.Employee_Repository;

@Component
public class Employee_Dao {
	@Autowired
	private Employee_Repository emp_rep;
	public void saveEmployee(Employee emp) {
		emp_rep.save(emp);
	}
	
	public void updateEmployee(Integer id,Employee emp) {
		emp.setId(id);
		emp_rep.save(emp);
	}
	
	public void deleteByEmployeeid(int id) {
		emp_rep.deleteById(id);
	}
}
