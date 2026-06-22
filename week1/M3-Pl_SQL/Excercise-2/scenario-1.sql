SET SERVEROUTPUT ON;

BEGIN
    FOR acc IN (
        SELECT 1 id, 10000 balance FROM dual UNION ALL
        SELECT 2, 20000 FROM dual UNION ALL
        SELECT 3, 15000 FROM dual
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Account ' || acc.id ||
            ' New Balance = ' || (acc.balance + acc.balance * 0.01)
        );

    END LOOP;
END;
/