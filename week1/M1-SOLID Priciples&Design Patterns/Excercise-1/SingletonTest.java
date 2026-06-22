public class SingletonTest {

    public static void main(String[] args) {

        // Get Logger instance multiple times
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Use logger
        logger1.log("First message");
        logger2.log("Second message");

        // Verify both references point to same object
        if (logger1 == logger2) {
            System.out.println("Same instance (Singleton works)");
        } else {
            System.out.println("Different instances (Singleton failed)");
        }
    }
}