SET SERVEROUTPUT ON;

DECLARE
    TYPE num_list IS TABLE OF NUMBER INDEX BY PLS_INTEGER;

    customer_id num_list;
    age num_list;

BEGIN
    customer_id(1) := 1; age(1) := 65;
    customer_id(2) := 2; age(2) := 45;
    customer_id(3) := 3; age(3) := 70;

    FOR i IN 1..3 LOOP
        IF age(i) > 60 THEN
            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ' || customer_id(i));
        END IF;
    END LOOP;
END;
/

