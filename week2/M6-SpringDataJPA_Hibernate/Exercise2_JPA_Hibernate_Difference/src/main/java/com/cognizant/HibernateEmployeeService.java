package com.cognizant;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

// Hibernate style - lots of boilerplate
public class HibernateEmployeeService {

    private SessionFactory factory;

    public Integer addEmployee(Employee employee) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer employeeID = null;

        try {
            tx = session.beginTransaction();
            employeeID = (Integer) session.save(employee);
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employeeID;
    }
}
