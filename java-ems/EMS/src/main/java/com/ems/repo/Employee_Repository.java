package com.ems.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ems.dto.Employee;



public interface Employee_Repository extends JpaRepository<Employee,Integer>{
//	@Query("select u from Employee e where e.first_name=?1 AND e.last_name=?2")
//	public Employee login(String first_name,String last_name);

}
