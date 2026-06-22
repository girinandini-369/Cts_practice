SET SERVEROUTPUT ON;

BEGIN
    DECLARE
        v_balance NUMBER;
    BEGIN
        v_balance := 10000;

        IF v_balance >= 3000 THEN
            DBMS_OUTPUT.PUT_LINE('Transferred 3000 successfully');
        ELSE
            DBMS_OUTPUT.PUT_LINE('Insufficient balance');
        END IF;
    END;
END;
/