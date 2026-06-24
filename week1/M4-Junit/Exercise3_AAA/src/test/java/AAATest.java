import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    int a;
    int b;

    @Before
    public void setUp() {
        a = 10;
        b = 5;
        System.out.println("Setup done");
    }

    @After
    public void tearDown() {
        System.out.println("Test finished");
    }

    @Test
    public void testAddition() {

        // ARRANGE
        int expected = 15;

        // ACT
        int result = a + b;

        // ASSERT
        assertEquals(expected, result);
    }
}
