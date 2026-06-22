SET SERVEROUTPUT ON;

BEGIN
    FOR emp IN (
        SELECT 101 id, 'IT' dept, 50000 salary FROM dual UNION ALL
        SELECT 102, 'HR', 40000 FROM dual UNION ALL
        SELECT 103, 'IT', 60000 FROM dual
    ) LOOP

        IF emp.dept = 'IT' THEN
            DBMS_OUTPUT.PUT_LINE(
                'Employee ' || emp.id ||
                ' Bonus Salary = ' || (emp.salary * 1.10)
            );
        END IF;

    END LOOP;
END;
/