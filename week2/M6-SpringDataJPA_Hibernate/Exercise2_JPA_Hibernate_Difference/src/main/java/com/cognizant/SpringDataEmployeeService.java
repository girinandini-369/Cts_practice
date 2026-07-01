package com.cognizant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// Spring Data JPA style - no boilerplate
@Service
public class SpringDataEmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        // One line replaces entire Hibernate try/catch/session/transaction block
        employeeRepository.save(employee);
    }
}
