DECLARE
    TYPE num_list IS TABLE OF NUMBER INDEX BY PLS_INTEGER;

    customer_id num_list;
    balance num_list;

BEGIN
    customer_id(1) := 1; balance(1) := 15000;
    customer_id(2) := 2; balance(2) := 8000;
    customer_id(3) := 3; balance(3) := 20000;

    FOR i IN 1..3 LOOP
        IF balance(i) > 10000 THEN
            DBMS_OUTPUT.PUT_LINE('Customer ' || customer_id(i) || ' is VIP');
        END IF;
    END LOOP;
END;
/

