public class FinancialForecast {

    // Recursive method
    public static double भविष्य(double presentValue, double rate, int years) {

        // Base case
        if (years == 0) {
            return presentValue;
        }

        // Recursive case
        return भविष्य(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {

        double presentValue = 1000;   // initial amount
        double rate = 0.10;           // 10% growth
        int years = 3;

        double futureValue = भविष्य(presentValue, rate, years);

        System.out.println("Future Value: " + futureValue);
    }
}